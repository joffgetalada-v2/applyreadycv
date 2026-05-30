export type ExtractionResult = {
  text: string;
  fileType: "txt" | "pdf" | "docx" | "unsupported";
  error?: string;
};

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

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
      return {
        text: "",
        fileType: "pdf",
        error:
          "We could not extract text from this PDF in the MVP. Please paste your resume text instead.",
      };
    }

    if (
      extension === "docx" ||
      file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return {
        text: "",
        fileType: "docx",
        error:
          "We could not extract text from this DOCX in the MVP. Please paste your resume text instead.",
      };
    }

    return {
      text: "",
      fileType: "unsupported",
      error: "Unsupported file type. Please upload a .txt file or paste your resume text.",
    };
  } catch {
    return {
      text: "",
      fileType: "unsupported",
      error: "We could not read this file. Please paste your resume text instead.",
    };
  }
}
