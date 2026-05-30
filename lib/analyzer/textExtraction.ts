export type ExtractionResult = {
  text: string;
  fileType: "txt" | "pdf" | "docx" | "doc" | "unsupported";
  error?: string;
};

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const MIN_EXTRACTED_TEXT_LENGTH = 40;

function getFileExtension(fileName: string) {
  const lastSegment = fileName.toLowerCase().split(".").pop();
  return lastSegment ?? "";
}

export async function extractResumeText(file: File): Promise<ExtractionResult> {
  try {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return {
        text: "",
        fileType: "unsupported",
        error: "This file is larger than 5 MB. Please paste your resume text instead.",
      };
    }

    const extension = getFileExtension(file.name);

    if (extension === "txt" || file.type === "text/plain") {
      const text = await file.text();

      return {
        text,
        fileType: "txt",
        error: text.trim()
          ? undefined
          : "This text file appears to be empty. Please paste your resume text instead.",
      };
    }

    if (extension === "pdf" || file.type === "application/pdf") {
      const text = await extractPdfText(file);

      return {
        text,
        fileType: "pdf",
        error: text.trim().length >= MIN_EXTRACTED_TEXT_LENGTH
          ? undefined
          : "We could not extract enough readable text from this PDF. It may be scanned or image-based. Please paste your resume text instead.",
      };
    }

    if (
      extension === "docx" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const text = await extractDocxText(file);

      return {
        text,
        fileType: "docx",
        error: text.trim().length >= MIN_EXTRACTED_TEXT_LENGTH
          ? undefined
          : "We could not extract enough readable text from this DOCX. Please paste your resume text instead.",
      };
    }

    if (extension === "doc" || file.type === "application/msword") {
      return {
        text: "",
        fileType: "doc",
        error:
          "Older .doc files are not supported for local parsing. Please export or save the file as .docx, .pdf, or .txt.",
      };
    }

    return {
      text: "",
      fileType: "unsupported",
      error:
        "Unsupported file type. Please upload .txt, .pdf, or .docx, or paste your resume text. For Google Docs, download as .docx, .pdf, or .txt first.",
    };
  } catch (error) {
    console.error("Resume text extraction failed", error);

    return {
      text: "",
      fileType: "unsupported",
      error: "We could not read this file. Please paste your resume text instead.",
    };
  }
}

async function extractPdfText(file: File) {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();

  const data = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({ data });
  const pdf = await loadingTask.promise;
  const pageTexts: string[] = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    if (pageText) {
      pageTexts.push(pageText);
    }
  }

  return pageTexts.join("\n\n");
}

async function extractDocxText(file: File) {
  const mammoth = await import("mammoth");
  const result = await mammoth.extractRawText({
    arrayBuffer: await file.arrayBuffer(),
  });

  return result.value.trim();
}
