import type { AnalysisMode } from "@/lib/analyzer/types";
import type { FaqItem } from "@/lib/site";

export type GuideLink = {
  label: string;
  href: string;
  description: string;
};

export type GuideSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type GuideImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type GuidePage = {
  slug: string;
  path: string;
  title: string;
  metadataTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  publishedAt?: string;
  updatedAt?: string;
  eyebrow: string;
  intro: string;
  summary: string[];
  image?: GuideImage;
  sections: GuideSection[];
  cta: {
    label: string;
    href: string;
    mode?: AnalysisMode;
  };
  relatedLinks: GuideLink[];
  faq: FaqItem[];
};

export const guidesIndex = {
  path: "/guides",
  title: "Resume & CV Guides",
  metadataTitle: "Resume & CV Guides | ApplyReadyCV",
  metaDescription:
    "Read practical resume and CV guides for resume summaries, skills sections, no-experience CVs, ATS readiness, keywords, remote jobs, freelance profiles, and better applications.",
  seoKeywords: [
    "resume guides",
    "CV guides",
    "resume score checker guide",
    "free resume score checker",
    "CV score checker",
    "ATS resume guide",
    "ATS resume formatting tips",
    "resume keyword guide",
    "resume summary examples",
    "resume skills section",
    "no experience CV",
    "remote resume keywords",
    "freelance CV vs resume",
    "CV case study",
    "Philippines CV guide",
    "local job CV Philippines",
    "ATS vs human resume review",
    "freelance CV checklist",
    "common CV mistakes",
    "remote job CV guide",
    "job application guide",
  ],
};

export const guidePages = [
  {
    slug: "ats-resume-checker-guide",
    path: "/guides/ats-resume-checker-guide",
    title: "ATS Resume Checker: Readability Basics Before You Apply",
    metadataTitle: "ATS Resume Checker Guide | ApplyReadyCV",
    metaDescription:
      "Learn how ATS resume checkers work, what they evaluate, and how to improve formatting, keywords, and readability before applying.",
    seoKeywords: [
      "ATS resume checker",
      "resume ATS checker",
      "ATS friendly resume",
      "resume checker ATS",
      "ATS resume score",
      "applicant tracking system resume",
    ],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-25",
    eyebrow: "ATS readiness",
    intro:
      "An ATS resume checker helps you find common issues before your resume reaches an employer's screening software. The goal is not to trick the system. It is to make your real experience easier for software and recruiters to read.",
    summary: [
      "ATS tools look for readable structure, relevant keywords, and extractable text.",
      "Simple formatting is usually safer than layouts built around graphics, tables, or complex columns.",
      "A checker score is guidance, not proof that any employer will approve your resume.",
    ],
    sections: [
      {
        title: "What an ATS resume checker does",
        body: [
          "Applicant tracking systems help employers collect, parse, search, and rank applications. A resume checker reviews similar risk areas before you apply: whether the text can be extracted, whether key sections are easy to find, and whether the resume language matches the role.",
          "ApplyReadyCV checks practical signals such as contact details, sections, skills, action verbs, measurable achievements, keyword overlap, and possible formatting extraction issues.",
        ],
        bullets: [
          "Readable contact information",
          "Clear Experience, Skills, and Education sections",
          "Relevant job-description keywords",
          "Action verbs and measurable achievements",
          "Warnings for very short or oddly extracted text",
        ],
      },
      {
        title: "How to use ApplyReadyCV's ATS checker",
        body: [
          "Start by pasting your resume text or uploading a supported file. If you have a target role, paste the job description too. The job description gives the checker a better basis for keyword matching.",
          "After the report appears, review the top fixes first. A missing keyword list is useful, but only add terms that truthfully reflect your experience, tools, projects, education, or certifications.",
        ],
        bullets: [
          "Open the ATS Resume Checker.",
          "Paste or upload your resume.",
          "Paste the job description when available.",
          "Review missing keywords, warnings, and top fixes.",
          "Edit your resume, then run another check.",
        ],
      },
      {
        title: "Formatting rules that reduce parsing problems",
        body: [
          "ATS-friendly formatting is mostly about making text easy to extract. Use standard section labels, simple bullets, and consistent spacing. Avoid hiding important content inside images, text boxes, headers that may not extract, or complex design elements.",
          "This does not mean every resume must look plain. It means the important information should still make sense if copied into a text editor.",
        ],
        bullets: [
          "Use common headings such as Experience, Skills, Education, Projects, and Certifications.",
          "Keep job titles, employer names, dates, and locations easy to scan.",
          "Use bullets that show actions and outcomes, not only tasks.",
          "Save a clean version for roles that require ATS submission.",
        ],
      },
      {
        title: "What to do after the checker finds issues",
        body: [
          "Do not chase a perfect score. Use the result to fix the most important gaps: missing core skills, unclear sections, weak achievements, or formatting that appears difficult to extract.",
          "A strong resume still needs to work for a human reader. Keep the document concise, truthful, and tailored to the role.",
        ],
      },
    ],
    cta: {
      label: "Check ATS readiness",
      href: "/ats-resume-checker",
    },
    relatedLinks: [
      {
        label: "ATS Resume Checker",
        href: "/ats-resume-checker",
        description: "Run the free ATS readiness check on your resume.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your resume language against a job description.",
      },
      {
        label: "Free Resume Score Checker Guide",
        href: "/guides/resume-score-checker-guide",
        description: "Understand score categories and what to fix first.",
      },
    ],
    faq: [
      {
        question: "Can an ATS checker guarantee my resume will pass?",
        answer:
          "No. Different employers use different systems and settings. A checker can help find common risks, but it cannot guarantee ATS approval, interviews, or job offers.",
      },
      {
        question: "Should I add every missing keyword?",
        answer:
          "No. Add only keywords that accurately describe your real skills, tools, experience, education, or projects.",
      },
      {
        question: "Is simple formatting always better?",
        answer:
          "Simple, readable formatting is usually safer for online applications. You can still keep a polished design as long as the important text remains easy to extract and scan.",
      },
    ],
  },
  {
    slug: "resume-score-checker-guide",
    path: "/guides/resume-score-checker-guide",
    title: "Free Resume Score Checker: What Your Score Means",
    metadataTitle: "Free Resume Score Checker Guide | ApplyReadyCV",
    metaDescription:
      "Learn what a resume score checker reviews, how ATS, keywords, clarity, completeness, and job-fit scores work, and what to fix first before applying.",
    seoKeywords: [
      "free resume score checker",
      "resume score checker",
      "CV score checker",
      "CV score checker online",
      "resume checker score",
      "ATS resume score",
      "resume review score",
      "CV readiness score",
    ],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-25",
    eyebrow: "Resume score guidance",
    intro:
      "A resume score is useful when it turns into clear editing priorities. The number should help you decide what to fix first: missing sections, weak keywords, unclear achievements, formatting risks, or role-fit gaps.",
    summary: [
      "A resume score is editing guidance, not a promise of ATS approval or interviews.",
      "The strongest improvements usually come from fixing clarity, evidence, keywords, and application fit together.",
      "ApplyReadyCV explains the score so you can improve the resume instead of chasing a perfect number.",
    ],
    sections: [
      {
        title: "What a resume score checker reviews",
        body: [
          "A useful resume score checker looks at practical signals that affect how easy the document is to review. ApplyReadyCV checks whether important sections are present, whether the text is readable, whether achievements are specific, and whether the resume matches the type of application you are sending.",
          "If you paste a job description, the checker also compares meaningful role keywords against your resume text. That makes the score more useful because it is connected to a real posting, not only a generic template.",
        ],
        bullets: [
          "Contact, experience, education, skills, and resume length",
          "ATS readability and possible text extraction issues",
          "Role keywords from the job description",
          "Action verbs, measurable achievements, and clarity",
          "Remote, freelance, or local job application fit",
        ],
      },
      {
        title: "How to read the score without overreacting",
        body: [
          "A low score usually means the resume has avoidable friction. It may be missing important sections, using vague bullets, or failing to show enough role-specific evidence. A higher score means the resume is easier to review, but it still does not guarantee an employer response.",
          "Use the score as a triage tool. Fix the biggest issue first, then run another check. One strong edit to missing keywords or achievements can be more valuable than small cosmetic changes.",
        ],
        bullets: [
          "Fix missing contact, skills, experience, or education sections first.",
          "Add job-description keywords only when they are truthful.",
          "Turn generic duties into specific outcomes or scope.",
          "Review formatting if pasted text looks broken or too short.",
        ],
      },
      {
        title: "What to fix first for better results",
        body: [
          "Start with completeness and readability because those issues affect every application. Then compare the resume to the job description and add relevant hard skills, tools, certifications, methods, or responsibilities where they match your background.",
          "After that, improve the bullets. Strong bullets show action, context, and result. Even when you cannot use exact numbers, you can add useful context such as tools used, team size, project type, frequency, customer volume, or turnaround time.",
        ],
        bullets: [
          "Clear target role or summary",
          "Relevant skills and tools near the top",
          "Experience bullets with action and evidence",
          "Clean section headings and scannable dates",
          "Mode-specific proof for remote, freelance, or local jobs",
        ],
      },
      {
        title: "Why a perfect score is not the goal",
        body: [
          "A perfect-looking score can still hide a weak application if the resume is generic, inflated, or not aligned with the real role. Employers care about truth, relevance, proof, and timing. Applicant tracking systems also vary by employer and configuration.",
          "The best use of ApplyReadyCV is to make your real experience easier to find and understand. The final resume should still sound like you and be something you can support in an interview.",
        ],
        bullets: [
          "Do not add skills you cannot explain.",
          "Do not repeat keywords just to raise a number.",
          "Keep the resume useful for human readers.",
          "Use the checker again after meaningful edits.",
        ],
      },
    ],
    cta: {
      label: "Check your resume score",
      href: "/#checker",
    },
    relatedLinks: [
      {
        label: "ATS Resume Checker",
        href: "/ats-resume-checker",
        description: "Review ATS readability, structure, and formatting risks.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your resume with a target job description.",
      },
      {
        label: "ATS vs Human Resume Review",
        href: "/guides/ats-vs-human-resume-review",
        description: "Understand what software and recruiters judge differently.",
      },
    ],
    faq: [
      {
        question: "What is a good resume score?",
        answer:
          "A good score is one that shows the resume is complete, readable, relevant, and supported by evidence. The exact number is less important than fixing the highest-priority gaps before applying.",
      },
      {
        question: "Can a resume score guarantee ATS approval?",
        answer:
          "No. A score can help you find common ATS, keyword, clarity, and completeness issues, but it cannot guarantee ATS approval, interviews, rankings, or job offers.",
      },
      {
        question: "How can I improve my resume score quickly?",
        answer:
          "Paste the job description, fix missing sections, add truthful role keywords, improve weak bullets with evidence, and make sure the text is easy to scan.",
      },
    ],
  },
  {
    slug: "resume-keywords-guide",
    path: "/guides/resume-keywords-guide",
    title: "Resume Keywords: How to Find and Use Them Without Stuffing",
    metadataTitle: "Resume Keywords Guide | ApplyReadyCV",
    metaDescription:
      "Learn how to find resume keywords from job descriptions, place them naturally, and avoid keyword stuffing while improving ATS readability.",
    seoKeywords: [
      "resume keywords",
      "CV keywords",
      "ATS keywords",
      "resume keyword checker",
      "job description keywords",
      "missing resume keywords",
    ],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-25",
    eyebrow: "Keyword matching",
    intro:
      "Resume keywords are the role-specific skills, tools, qualifications, and responsibilities that connect your experience to a job posting. Used well, they help both ATS software and recruiters understand your fit faster.",
    summary: [
      "The best keywords come from the job description and your real experience.",
      "Hard skills, tools, certifications, and role-specific processes are usually high-value terms.",
      "Keyword stuffing can make a resume weaker, even when the terms are relevant.",
    ],
    sections: [
      {
        title: "What counts as a resume keyword",
        body: [
          "A keyword is any important term a recruiter or screening system may use to identify qualified candidates. This includes job titles, technical skills, software, certifications, methods, industries, and responsibilities.",
          "Soft skills can matter too, but they are stronger when connected to evidence. For example, communication is stronger when your bullets mention documentation, client updates, training, reports, or stakeholder coordination.",
        ],
        bullets: [
          "Tools: Excel, Salesforce, Figma, GitHub, Jira",
          "Skills: data analysis, bookkeeping, copywriting, customer support",
          "Certifications: CPA, NC II, PMP, Google Analytics",
          "Processes: onboarding, invoicing, QA testing, inventory control",
        ],
      },
      {
        title: "How to find keywords from a job description",
        body: [
          "Read the job description twice. First, identify repeated skills and tools. Second, identify responsibilities that match work you have actually done. The strongest keywords are usually specific rather than generic.",
          "If several postings for the same role repeat the same terms, those terms probably belong in your resume when they match your background.",
        ],
        bullets: [
          "Highlight required skills and tools.",
          "Separate must-have terms from nice-to-have terms.",
          "Look for certifications, software, industries, and methods.",
          "Compare the posting against your resume with a keyword checker.",
        ],
      },
      {
        title: "Where to put keywords naturally",
        body: [
          "Do not create a random keyword dump. Place terms where they help explain your work: summary, skills, experience bullets, projects, certifications, and education.",
          "A keyword becomes stronger when it appears with context. Instead of listing customer support only in a skills section, add a bullet showing support volume, channels, response time, quality score, or customer outcome when true.",
        ],
        bullets: [
          "Summary: mention the role focus and strongest relevant skills.",
          "Skills: list tools and capabilities you can defend.",
          "Experience: use keywords inside achievement bullets.",
          "Projects: add tools, methods, and outcomes.",
        ],
      },
      {
        title: "How to avoid keyword stuffing",
        body: [
          "Keyword stuffing happens when a resume repeats terms without evidence. It can make the document harder to read and can damage trust when a recruiter reviews it.",
          "Use the job description as a guide, not a script. Your resume should sound like your experience, written in language the employer recognizes.",
        ],
      },
    ],
    cta: {
      label: "Check resume keywords",
      href: "/resume-keyword-checker",
    },
    relatedLinks: [
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Find matched and missing terms from a job description.",
      },
      {
        label: "ATS Resume Checker",
        href: "/ats-resume-checker",
        description: "Check how keywords fit into overall ATS readiness.",
      },
      {
        label: "Resume Skills Section Guide",
        href: "/guides/resume-skills-section-guide",
        description: "Turn job-description terms into a focused skills section.",
      },
      {
        label: "Remote CV Checker",
        href: "/remote-cv-checker",
        description: "Review remote-specific keyword and collaboration signals.",
      },
    ],
    faq: [
      {
        question: "How many keywords should I add to my resume?",
        answer:
          "There is no fixed number. Focus on the important terms from the job description that truthfully match your skills, work history, education, or projects.",
      },
      {
        question: "Are soft skills good resume keywords?",
        answer:
          "They can be useful, but they are stronger when paired with examples. Show communication, leadership, or organization through specific work, scope, and outcomes.",
      },
      {
        question: "Can I use the same keywords for every application?",
        answer:
          "You can keep core skills consistent, but each application should be reviewed against the specific job description.",
      },
    ],
  },
  {
    slug: "resume-summary-examples",
    path: "/guides/resume-summary-examples",
    title: "Resume Summary Examples: Write a Strong Opening",
    metadataTitle: "Resume Summary Examples | ApplyReadyCV",
    metaDescription:
      "Learn how to write a resume summary with practical examples for entry-level, remote, freelance, local, and career-shift applications.",
    seoKeywords: [
      "resume summary examples",
      "CV summary examples",
      "resume profile examples",
      "professional summary for resume",
      "entry level resume summary",
      "remote resume summary",
      "freelance CV summary",
    ],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    eyebrow: "Resume summary writing",
    intro:
      "A resume summary is not a place for empty personality claims. It should help a recruiter understand what role you fit, what evidence supports that fit, and why the rest of the CV is worth reading.",
    summary: [
      "A strong summary names the target role or work direction quickly.",
      "The best summaries connect keywords to proof, not buzzwords.",
      "Short, specific summaries are usually stronger than broad claims.",
    ],
    image: {
      src: "/guide-images/resume-summary-examples.svg",
      alt: "Diagram showing a weak resume summary rewritten into a targeted summary with role, proof, and keywords.",
      caption:
        "A resume summary should turn role direction, proof, and truthful keywords into a quick first impression.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "What a resume summary should do",
        body: [
          "The first lines of a CV should reduce confusion. A reviewer should not have to guess whether you are applying for admin work, customer support, remote operations, freelance design, or entry-level IT support.",
          "A useful summary combines role direction, relevant strengths, and evidence. It does not need to explain your whole career. Two or three focused lines are enough for most applications.",
        ],
        bullets: [
          "Name the role direction or field.",
          "Mention tools, experience, training, or project proof.",
          "Use words from the job post only when they are true.",
          "Avoid vague claims such as hardworking, passionate, or flexible unless evidence follows.",
        ],
      },
      {
        title: "Before and after examples",
        body: [
          "Weak: 'Hardworking person looking for a challenging position where I can grow.' Stronger: 'Entry-level admin applicant with Excel report preparation, customer service experience, and school project coordination background.'",
          "Weak: 'Experienced freelancer who can do many tasks.' Stronger: 'Freelance virtual assistant focused on inbox cleanup, calendar coordination, research, and weekly client reporting for small teams.'",
        ],
        bullets: [
          "Entry-level: connect education, projects, and tools.",
          "Remote: mention async communication, documentation, and collaboration tools when true.",
          "Freelance: lead with service, client type, deliverables, and proof.",
          "Local jobs: show contact readiness, role fit, and practical skills.",
        ],
      },
      {
        title: "How to tailor a summary to a job post",
        body: [
          "Read the job description and identify the most important skills, tools, and responsibilities. Then choose two or three that you can support elsewhere in the CV.",
          "Do not write a summary that says everything. A summary for customer support should not look the same as a summary for bookkeeping, social media, or IT support. The closer the opening is to the job, the easier the rest of the CV is to review.",
        ],
        bullets: [
          "Pull role terms from the posting.",
          "Choose only terms backed by your experience or training.",
          "Keep the sentence readable for humans.",
          "Check that the same proof appears later in the CV.",
        ],
      },
      {
        title: "Check the summary before applying",
        body: [
          "After writing your summary, paste your resume and the job description into ApplyReadyCV. If the checker flags missing keywords or unclear fit, review whether the summary is too broad.",
          "The summary is not the only section that matters, but it can make the rest of the application easier to understand.",
        ],
        bullets: [
          "Does the opening name the target role?",
          "Does it include proof instead of generic claims?",
          "Does it match the job without copying it?",
          "Would you be comfortable explaining every claim in an interview?",
        ],
      },
    ],
    cta: {
      label: "Check your resume summary",
      href: "/#checker",
    },
    relatedLinks: [
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your summary and CV against a job description.",
      },
      {
        label: "Common CV Mistakes",
        href: "/guides/common-cv-mistakes",
        description: "Avoid vague openings, weak proof, and unclear role signals.",
      },
      {
        label: "No-Experience CV Guide",
        href: "/guides/no-experience-cv-guide",
        description: "Use school, projects, and training as honest evidence.",
      },
    ],
    faq: [
      {
        question: "How long should a resume summary be?",
        answer:
          "For most applications, two or three focused lines are enough. The summary should help the reviewer understand your role fit quickly.",
      },
      {
        question: "Should fresh graduates use a resume summary?",
        answer:
          "Yes, when it adds clarity. A fresh graduate summary can mention target role, education, tools, internships, projects, or training that support the application.",
      },
      {
        question: "Should I use the same summary for every job?",
        answer:
          "No. Keep your core background honest, but adjust the summary so it matches the role, tools, and responsibilities in the job description.",
      },
    ],
  },
  {
    slug: "resume-skills-section-guide",
    path: "/guides/resume-skills-section-guide",
    title: "Resume Skills Section: What to Include and What to Remove",
    metadataTitle: "Resume Skills Section Guide | ApplyReadyCV",
    metaDescription:
      "Build a stronger resume skills section with hard skills, tools, soft skills, job description keywords, and proof-backed examples.",
    seoKeywords: [
      "resume skills section",
      "CV skills section",
      "skills to put on resume",
      "hard skills for resume",
      "soft skills on resume",
      "resume skills examples",
      "ATS resume skills",
    ],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    eyebrow: "Skills section strategy",
    intro:
      "A skills section should make your strongest role-fit signals easy to scan. It should not become a long list of words that are never proven anywhere else in the resume.",
    summary: [
      "Group skills so recruiters can scan tools, hard skills, and soft skills quickly.",
      "Use job description keywords only when they match your real background.",
      "Every important skill should be supported by experience, projects, training, or certifications.",
    ],
    image: {
      src: "/guide-images/resume-skills-section.svg",
      alt: "Diagram showing hard skills, tools, soft skills, and proof in a resume skills section.",
      caption:
        "A strong skills section is organized for scanning and supported by proof in the rest of the CV.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "Separate skills by type",
        body: [
          "A mixed list can become hard to read. Grouping makes the section more useful, especially when a job description contains many tools and responsibilities.",
          "For example, an admin applicant might separate office tools, reporting, customer support, and communication. A developer might separate languages, frameworks, databases, testing, and collaboration tools.",
        ],
        bullets: [
          "Hard skills: bookkeeping, data entry, QA testing, copywriting.",
          "Tools: Excel, Google Workspace, Salesforce, Figma, GitHub.",
          "Soft skills: communication, organization, follow-up, documentation.",
          "Certifications or methods: NC II, Scrum, Google Analytics, basic first aid.",
        ],
      },
      {
        title: "Use the job post as a filter",
        body: [
          "The best skills section is not the longest one. It is the one that helps the reader connect your background to the job. Start with the posting, then select skills you can honestly support.",
          "If a job asks for Excel, reports, customer service, scheduling, and email communication, those terms should be visible when they match your experience. Skills unrelated to the role can be removed or moved lower.",
        ],
        bullets: [
          "Highlight required tools and hard skills.",
          "Remove outdated or irrelevant skills.",
          "Keep only soft skills that can be shown through examples.",
          "Avoid adding skills you cannot discuss confidently.",
        ],
      },
      {
        title: "Support skills with proof",
        body: [
          "A skill listed only once is weaker than a skill connected to an achievement. If Excel is important, show where you used Excel. If communication matters, show reports, client updates, ticket comments, training notes, or documentation.",
          "This is also safer for ATS and human review. Keywords help matching, but proof helps trust.",
        ],
        bullets: [
          "Skills section: Excel, reports, customer support.",
          "Experience bullet: Prepared weekly Excel sales summaries for a branch supervisor.",
          "Project bullet: Created a Google Sheets tracker for volunteer event signups.",
          "Training line: Completed customer service or tool-specific certification.",
        ],
      },
      {
        title: "Check for overload before applying",
        body: [
          "A bloated skills section can look less credible. If a resume lists 40 skills but only proves five of them, the reviewer may distrust the list.",
          "Before sending, use ApplyReadyCV with the job description. Review missing keywords, then add only the ones that are both relevant and true.",
        ],
        bullets: [
          "Can each skill be backed by a bullet, project, or training?",
          "Are the strongest job-specific skills near the top?",
          "Are old or unrelated tools removed?",
          "Does the skills section match the target role?",
        ],
      },
    ],
    cta: {
      label: "Check resume skills",
      href: "/resume-keyword-checker",
    },
    relatedLinks: [
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Find and use job description terms without stuffing.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare skills and role terms against a job description.",
      },
      {
        label: "ATS Resume Formatting Tips",
        href: "/guides/ats-resume-formatting-tips",
        description: "Keep skills, sections, and bullets readable for online applications.",
      },
    ],
    faq: [
      {
        question: "How many skills should I list on a resume?",
        answer:
          "There is no fixed number. A focused list of relevant, provable skills is stronger than a long list of unsupported terms.",
      },
      {
        question: "Should soft skills be in the skills section?",
        answer:
          "Yes, but only the ones that matter for the role and are supported by examples elsewhere in the CV.",
      },
      {
        question: "Are tools more important than soft skills?",
        answer:
          "It depends on the job. Tools and hard skills are often easier to match, but soft skills become valuable when your bullets show evidence.",
      },
    ],
  },
  {
    slug: "no-experience-cv-guide",
    path: "/guides/no-experience-cv-guide",
    title: "No-Experience CV Guide: What to Put on Your Resume",
    metadataTitle: "No-Experience CV Guide | ApplyReadyCV",
    metaDescription:
      "Learn what to put on a CV with no work experience, including school projects, internships, volunteer work, certifications, skills, and entry-level examples.",
    seoKeywords: [
      "no experience CV",
      "resume with no experience",
      "entry level CV",
      "fresh graduate resume",
      "first job resume",
      "student CV examples",
      "CV for fresh graduate Philippines",
    ],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    eyebrow: "Entry-level applications",
    intro:
      "No experience does not mean no evidence. If you are applying for your first job, your CV should organize school work, training, projects, volunteer experience, part-time work, and practical skills so a reviewer can see role fit quickly.",
    summary: [
      "Entry-level CVs should lead with role direction and practical proof.",
      "School projects, internships, volunteer work, and certifications can show real evidence.",
      "A no-experience CV still needs keywords, clear sections, and honest examples.",
    ],
    image: {
      src: "/guide-images/no-experience-cv.svg",
      alt: "Diagram showing school projects, internships, volunteer work, certifications, and part-time work as proof for a no-experience CV.",
      caption:
        "A first-job CV should make honest proof easy to find, even without formal work history.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "Start with a clear target role",
        body: [
          "A no-experience CV becomes stronger when it has direction. If you are applying for admin assistant roles, customer service roles, IT support, retail, BPO, or design internships, make that direction obvious.",
          "Your summary can mention your course, strongest tools, relevant projects, and the type of role you want. Keep it practical and avoid pretending to have experience you do not have.",
        ],
        bullets: [
          "Target role or field.",
          "Education or training that supports the role.",
          "Relevant tools such as Excel, Google Workspace, Canva, POS, or basic coding tools.",
          "One or two projects, internships, or volunteer examples.",
        ],
      },
      {
        title: "Use projects as evidence",
        body: [
          "Projects can prove skills when work history is limited. A school report, capstone, event plan, small website, design sample, data tracker, or volunteer process can become useful CV evidence.",
          "Write project bullets like work bullets: what was the goal, what did you do, what tools did you use, and what was produced?",
        ],
        bullets: [
          "Built a Google Sheets tracker for class inventory records.",
          "Designed social media posts for a student organization event.",
          "Prepared research summaries and presented findings to a group.",
          "Created a basic website or portfolio sample for coursework.",
        ],
      },
      {
        title: "Include training, certifications, and volunteer work",
        body: [
          "Training and volunteer work help when they are relevant. Include certifications, online courses, licenses, workshops, student organization roles, community work, and part-time responsibilities that show useful skills.",
          "Be specific. Instead of writing 'volunteer,' explain what you handled: registration, inventory, customer questions, event setup, reports, or coordination.",
        ],
        bullets: [
          "Certification name, provider, and completion date when available.",
          "Volunteer role, event, and responsibility.",
          "Part-time work with customer, cash handling, admin, or support duties.",
          "Student leadership with planning, documentation, or team coordination.",
        ],
      },
      {
        title: "Check the CV before sending",
        body: [
          "Entry-level applicants often lose points because the CV is too vague. Before applying, paste the job description and CV into ApplyReadyCV. Look for missing keywords, unclear sections, weak bullets, and practical hiring details.",
          "The goal is not to sound senior. The goal is to make honest entry-level proof easy to understand.",
        ],
        bullets: [
          "Does the CV show the target role?",
          "Are education, projects, and skills easy to find?",
          "Are job-posting keywords used truthfully?",
          "Can each claim be explained in an interview?",
        ],
      },
    ],
    cta: {
      label: "Check entry-level CV",
      href: "/local-job-cv-checker",
    },
    relatedLinks: [
      {
        label: "Local Job CV Checker",
        href: "/local-job-cv-checker",
        description: "Review practical details for local and entry-level applications.",
      },
      {
        label: "Resume Summary Examples",
        href: "/guides/resume-summary-examples",
        description: "Write a focused summary for a first job or entry-level role.",
      },
      {
        label: "Local Job CV Guide for Philippine Applicants",
        href: "/guides/local-job-cv-philippines",
        description: "Improve contact, availability, qualifications, and local role fit.",
      },
    ],
    faq: [
      {
        question: "What should I put on a CV if I have no work experience?",
        answer:
          "Use education, projects, internships, volunteer work, certifications, tools, part-time responsibilities, and skills that match the job.",
      },
      {
        question: "Should I hide that I am entry-level?",
        answer:
          "No. Be honest, but make your evidence clear. Employers hiring entry-level applicants still want proof of effort, learning, tools, and responsibility.",
      },
      {
        question: "Can school projects count as experience?",
        answer:
          "They can count as evidence when they are relevant. Describe the project goal, your responsibility, tools used, and what was produced.",
      },
    ],
  },
  {
    slug: "remote-job-cv-guide",
    path: "/guides/remote-job-cv-guide",
    title: "Remote Job CV: Tailor Your CV for Remote Work and Key Skills",
    metadataTitle: "Remote Job CV Guide | ApplyReadyCV",
    metaDescription:
      "Learn how to tailor a CV for remote jobs, show remote readiness, highlight collaboration tools, and check your CV before applying.",
    seoKeywords: [
      "remote job CV",
      "remote CV checker",
      "remote resume",
      "work from home CV",
      "remote work skills resume",
      "distributed team CV",
    ],
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-25",
    eyebrow: "Remote applications",
    intro:
      "Remote roles often receive a large number of applications. A remote job CV should make it easy to see that you can communicate clearly, manage work independently, and collaborate across tools and time zones.",
    summary: [
      "Remote CVs need evidence of communication, ownership, and reliable follow-through.",
      "Tools such as Slack, Zoom, Teams, Notion, Jira, Trello, GitHub, and Google Workspace can help show how you work remotely.",
      "The best remote keywords are tied to real examples, not pasted as buzzwords.",
    ],
    sections: [
      {
        title: "What makes a remote CV different",
        body: [
          "A remote CV still needs the basics: contact details, skills, experience, education, and achievements. The difference is that remote hiring teams also look for signs of trust, clarity, and self-management.",
          "If you have remote or hybrid experience, make it visible. If you do not, highlight relevant habits such as written updates, documentation, customer communication, independent project work, or online collaboration.",
        ],
        bullets: [
          "Clear written communication",
          "Async updates and documentation",
          "Ownership of tasks or projects",
          "Experience with distributed tools",
          "Comfort working across time zones or schedules",
        ],
      },
      {
        title: "Remote keywords to include when they are true",
        body: [
          "Remote keywords help reviewers see relevant experience quickly. Use them only where they fit your real work. A tool name is strongest when paired with what you used it for.",
          "For example, do not just list Slack. Mention coordinating daily updates in Slack, documenting handoffs in Notion, managing Jira tickets, or presenting progress through Zoom when those examples are accurate.",
        ],
        bullets: [
          "remote work, hybrid work, distributed team",
          "async communication, documentation, handoffs",
          "Slack, Zoom, Teams, Notion, Jira, Trello",
          "self-management, ownership, time zone coordination",
        ],
      },
      {
        title: "Remote CV structure that is easy to scan",
        body: [
          "Start with a focused summary. Keep it short and include your role focus, years or type of experience, strongest relevant tools, and remote-ready strengths.",
          "Then use experience bullets that show results. Remote employers need to understand what you owned, how you communicated, and what changed because of your work.",
        ],
        bullets: [
          "Header with professional contact details and location or time zone when relevant.",
          "Summary focused on role fit and remote strengths.",
          "Skills grouped by tools, role skills, and communication strengths.",
          "Experience bullets with actions, tools, and outcomes.",
        ],
      },
      {
        title: "Check your remote CV before applying",
        body: [
          "Before sending your application, run a remote-specific review. Look for missing remote signals, unclear tools, weak achievements, or keywords that appear in the job description but not in your CV.",
          "A checker will not guarantee interviews, but it can help you spot practical issues before you apply.",
        ],
      },
    ],
    cta: {
      label: "Check remote CV readiness",
      href: "/remote-cv-checker",
      mode: "remote",
    },
    relatedLinks: [
      {
        label: "Remote CV Checker",
        href: "/remote-cv-checker",
        description: "Review remote readiness, collaboration tools, and CV gaps.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your CV against a remote job description.",
      },
      {
        label: "Remote Resume Keywords",
        href: "/guides/remote-resume-keywords",
        description: "Use remote job terms naturally with real proof.",
      },
    ],
    faq: [
      {
        question: "Can I apply for remote jobs without remote experience?",
        answer:
          "Yes, but your CV should show transferable remote-ready skills such as written communication, independent work, documentation, and online collaboration.",
      },
      {
        question: "Should I list every remote tool I have used?",
        answer:
          "No. List tools that matter for the role and that you can explain with real work examples.",
      },
      {
        question: "Should I include my time zone?",
        answer:
          "It can help when the job mentions schedule overlap, global teams, or region-specific availability. Use city, country, or time zone only when it supports the application.",
      },
    ],
  },
  {
    slug: "remote-resume-keywords",
    path: "/guides/remote-resume-keywords",
    title: "Remote Resume Keywords: What to Add and Where to Use Them",
    metadataTitle: "Remote Resume Keywords Guide | ApplyReadyCV",
    metaDescription:
      "Find practical remote resume keywords for work-from-home jobs and learn where to place tools, async communication, ownership, and collaboration terms naturally.",
    seoKeywords: [
      "remote resume keywords",
      "remote job resume keywords",
      "work from home resume keywords",
      "remote work skills resume",
      "remote job CV keywords",
      "async communication resume",
      "distributed team resume",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-17",
    eyebrow: "Remote keyword strategy",
    intro:
      "Remote keywords help hiring teams recognize the way you work when they scan your resume quickly. The point is not to paste every remote-work phrase into your CV. The point is to connect the job posting's language to real proof from your work, projects, tools, and communication habits.",
    summary: [
      "Remote keywords are strongest when they sit inside evidence, not in a loose list.",
      "Tools matter, but the context around how you used them matters more.",
      "A good remote CV balances ATS-friendly terms with human-readable proof.",
    ],
    image: {
      src: "/guide-images/remote-resume-keywords.svg",
      alt: "Remote job keywords mapped to truthful resume evidence and ApplyReadyCV review steps.",
      caption:
        "Use remote keywords as a bridge between the job description and real examples from your resume.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "Start with the job post, not a generic keyword list",
        body: [
          "Remote roles can use very different language. A customer support role may mention chat support, CRM, response time, escalation, and documentation. A software role may mention GitHub, pull requests, async reviews, Jira, ownership, and distributed team collaboration.",
          "Read the job post and separate terms into three groups: tools you have used, responsibilities you have done, and remote work habits you can honestly support. That keeps the resume focused and avoids the weak feeling of a copied keyword list.",
        ],
        bullets: [
          "Highlight repeated tools and systems.",
          "Mark responsibilities that match your real work.",
          "Look for schedule, time zone, or async communication language.",
          "Ignore terms you cannot explain in an interview.",
        ],
      },
      {
        title: "Remote keywords that usually need evidence",
        body: [
          "Terms such as async communication, documentation, self-management, remote collaboration, and ownership can be useful. They are also easy to overuse. Add them only where the resume can show what they meant in practice.",
          "For example, async communication is stronger when paired with weekly status updates, written handoffs, help center notes, ticket comments, SOPs, client reports, or project documentation.",
        ],
        bullets: [
          "Async communication: status updates, written handoffs, documentation.",
          "Collaboration: Slack, Teams, Zoom, Notion, Jira, Trello, GitHub.",
          "Ownership: managed tickets, shipped deliverables, followed up without daily supervision.",
          "Time zone readiness: schedule overlap, global clients, distributed team routines.",
        ],
      },
      {
        title: "Where to place remote keywords naturally",
        body: [
          "Use a short summary for your strongest remote-ready claim, then back it up in skills and experience. The skills section can list tools, but the experience section should prove how those tools were used.",
          "A weak bullet says, 'Used Slack and Jira.' A stronger bullet says, 'Tracked support bugs in Jira and posted daily Slack updates so the remote product team could prioritize fixes.' The second version gives context, tools, and value.",
        ],
        bullets: [
          "Summary: one sentence about role fit and remote-ready strengths.",
          "Skills: tools and methods you can actually use.",
          "Experience: bullets that connect tools to outcomes.",
          "Projects: remote collaboration proof from freelance, school, or volunteer work.",
        ],
      },
      {
        title: "Check for keyword stuffing before you send",
        body: [
          "Keyword stuffing is a risk for both software and human readers. If a term appears many times without new evidence, remove or rewrite it. A clear resume should show fit without sounding like a search engine page.",
          "Before applying, paste the job description and your resume into ApplyReadyCV. Review missing terms, but add only the ones that are accurate and useful. The goal is a better application, not a bigger keyword count.",
        ],
        bullets: [
          "Do repeated keywords add new proof?",
          "Can you explain each tool or remote-work claim?",
          "Do bullets still read naturally?",
          "Does the resume match the exact remote role you want?",
        ],
      },
    ],
    cta: {
      label: "Check remote keyword fit",
      href: "/remote-cv-checker",
      mode: "remote",
    },
    relatedLinks: [
      {
        label: "Remote CV Checker",
        href: "/remote-cv-checker",
        description: "Review remote signals, tools, keywords, and readiness gaps.",
      },
      {
        label: "Remote Job CV Guide",
        href: "/guides/remote-job-cv-guide",
        description: "Build the full structure for a remote job CV.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your resume against a target job description.",
      },
    ],
    faq: [
      {
        question: "What are the best remote resume keywords?",
        answer:
          "The best remote keywords are the ones in the job post that you can support with real work examples. Common terms include async communication, documentation, distributed team, Slack, Zoom, Notion, Jira, ownership, and self-management.",
      },
      {
        question: "Should I add remote keywords if I have never worked remotely?",
        answer:
          "Only add remote-ready skills you can prove through school, freelance, volunteer, hybrid, or project work. Written updates, online collaboration, documentation, and independent project ownership can still be relevant.",
      },
      {
        question: "Can remote keywords help with ATS checks?",
        answer:
          "They can help when they match the job description and appear naturally in your resume. They should not replace clear achievements, truthful skills, or readable formatting.",
      },
    ],
  },
  {
    slug: "ats-resume-formatting-tips",
    path: "/guides/ats-resume-formatting-tips",
    title: "ATS Resume Formatting Tips: Make Your Resume Easier to Parse",
    metadataTitle: "ATS Resume Formatting Tips | ApplyReadyCV",
    metaDescription:
      "Learn practical ATS resume formatting tips for clear sections, readable bullets, simple layouts, file checks, and recruiter-friendly applications.",
    seoKeywords: [
      "ATS resume formatting tips",
      "ATS friendly resume format",
      "resume formatting for ATS",
      "ATS resume layout",
      "resume parser friendly format",
      "ATS resume sections",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-25",
    eyebrow: "ATS formatting",
    intro:
      "ATS-friendly formatting is not about making a resume look empty. It is about making sure the most important information can be extracted, searched, and understood by software and by the recruiter who reads it next.",
    summary: [
      "Use standard headings, simple bullets, and text that still makes sense when copied out of the file.",
      "Avoid hiding key details inside images, decorative text boxes, or overly complex columns.",
      "Formatting supports your content, but it cannot replace relevant experience, truthful keywords, and clear achievements.",
    ],
    sections: [
      {
        title: "Use standard section headings",
        body: [
          "Applicant tracking systems and recruiters both benefit from predictable structure. Use common headings such as Experience, Skills, Education, Projects, Certifications, and Contact.",
          "Creative labels can look interesting, but they can also make important information harder to identify. If you want personality, put it in the wording of your achievements rather than in unusual section names.",
        ],
        bullets: [
          "Experience",
          "Skills",
          "Education",
          "Projects",
          "Certifications",
          "Contact",
        ],
      },
      {
        title: "Keep the layout simple where it matters",
        body: [
          "A clean layout is easier to review than a crowded one. Use readable spacing, clear date placement, and consistent job title and employer formatting.",
          "Tables, sidebars, icons, and multi-column designs can work in some files, but they carry more parsing risk. If you apply through an online form, keep a simple version ready.",
        ],
        bullets: [
          "Keep job titles, employers, dates, and locations easy to scan.",
          "Use plain bullet points for responsibilities and achievements.",
          "Avoid placing core resume text only inside images.",
          "Check that copied text appears in a logical order.",
        ],
      },
      {
        title: "Make bullets readable for humans",
        body: [
          "ATS formatting still has to serve human readers. A recruiter should be able to understand what you did, what tools you used, and what changed because of your work.",
          "Lead bullets with action verbs and include numbers when they are honest and useful. Clear evidence is stronger than long keyword lists.",
        ],
        bullets: [
          "Start with action verbs.",
          "Mention relevant tools in context.",
          "Use metrics, scope, or volume when true.",
          "Keep each bullet focused on one main idea.",
        ],
      },
      {
        title: "Run a quick formatting check before applying",
        body: [
          "Before submitting, paste your resume text into a checker or plain text editor. If names, dates, section labels, or bullets look scrambled, the file may be harder for software to parse.",
          "You do not need a perfect score. Prioritize fixes that improve readability, extractable text, and honest relevance to the job description.",
        ],
      },
    ],
    cta: {
      label: "Check ATS formatting",
      href: "/ats-resume-checker",
    },
    relatedLinks: [
      {
        label: "ATS Resume Checker",
        href: "/ats-resume-checker",
        description: "Check structure, formatting warnings, keywords, and completeness.",
      },
      {
        label: "ATS Resume Checker Guide",
        href: "/guides/ats-resume-checker-guide",
        description: "Learn how ATS checkers work and what they can and cannot prove.",
      },
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Use role-specific terms without stuffing your resume.",
      },
    ],
    faq: [
      {
        question: "What is the safest ATS resume format?",
        answer:
          "A simple, text-based resume with standard headings, clear dates, readable bullets, and extractable contact details is usually safest for online applications.",
      },
      {
        question: "Are columns bad for ATS?",
        answer:
          "Not always, but complex columns can increase parsing risk. If you apply through an online system, keep a clean single-column version available.",
      },
      {
        question: "Should I remove all design from my resume?",
        answer:
          "No. Keep the resume professional and readable. The key is making sure important text is not hidden inside images, shapes, or confusing layout elements.",
      },
    ],
  },
  {
    slug: "freelance-cv-checklist",
    path: "/guides/freelance-cv-checklist",
    title: "Freelance CV Checklist: Build a Client-Ready Profile",
    metadataTitle: "Freelance CV Checklist | ApplyReadyCV",
    metaDescription:
      "Use this freelance CV checklist to improve service positioning, portfolio proof, project outcomes, client keywords, and proposal-ready profile copy.",
    seoKeywords: [
      "freelance CV checklist",
      "freelance resume checklist",
      "freelancer profile checklist",
      "client-ready CV",
      "freelance portfolio CV",
      "gig application resume",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-25",
    eyebrow: "Freelance applications",
    intro:
      "A freelance CV or profile has to answer a client question quickly: can this person understand my problem and deliver the result I need? The best freelance applications make services, proof, process, and outcomes easy to see.",
    summary: [
      "Lead with a clear service focus so clients understand what you do.",
      "Use selected projects, outcomes, tools, and portfolio links as proof.",
      "Tailor your profile to the client brief without copying claims you cannot support.",
    ],
    sections: [
      {
        title: "Clarify your service focus",
        body: [
          "A freelance profile that says you can do everything can feel hard to trust. Start with the work you most want to sell and the type of client or problem you understand best.",
          "Your headline or summary should make the service obvious. Mention the role, deliverables, industry, tools, or outcome when they are relevant.",
        ],
        bullets: [
          "What service do you provide?",
          "Who is it for?",
          "What problem does it solve?",
          "What tools or methods support the work?",
        ],
      },
      {
        title: "Show project proof",
        body: [
          "Freelance clients often need evidence before they contact you. Add selected projects, portfolio links, case studies, testimonials, or examples that match the kind of work you want.",
          "If you cannot name a client, describe the project type, deliverable, scope, tools, and result without exposing private details.",
        ],
        bullets: [
          "Selected project summaries",
          "Portfolio or case study links",
          "Tools and deliverables",
          "Client results or measurable scope",
        ],
      },
      {
        title: "Write bullets around outcomes",
        body: [
          "A task list is less persuasive than a result-focused bullet. Explain the client problem, your action, and the outcome or deliverable.",
          "Not every result needs a large number. Turnaround time, assets shipped, support volume, pages edited, reports created, or process improvements can all help when true.",
        ],
        bullets: [
          "Designed 12 landing page sections for a SaaS launch.",
          "Edited weekly product copy for a remote team across two time zones.",
          "Built reporting templates that reduced manual tracking.",
          "Handled client support replies with documented handoffs.",
        ],
      },
      {
        title: "Match the client brief honestly",
        body: [
          "Before sending a proposal, compare the client brief with your CV or profile. Add relevant tools, industries, deliverables, and project details where they are already true.",
          "Avoid stuffing unrelated keywords. Clients are more likely to trust specific evidence than a long list of unsupported skills.",
        ],
      },
    ],
    cta: {
      label: "Check freelance readiness",
      href: "/freelance-cv-checker",
      mode: "freelance",
    },
    relatedLinks: [
      {
        label: "Freelance CV Checker",
        href: "/freelance-cv-checker",
        description: "Review portfolio, project, outcome, and client-ready signals.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Compare your profile against a freelance project brief.",
      },
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Learn how to use role and project keywords naturally.",
      },
      {
        label: "Freelance CV vs Traditional Resume",
        href: "/guides/freelance-cv-vs-traditional-resume",
        description: "Reshape an employment resume into a client-ready profile.",
      },
    ],
    faq: [
      {
        question: "Can I use a freelance CV if I already have a portfolio?",
        answer:
          "Yes. The CV or profile should point clients to the right portfolio proof and summarize the services, tools, projects, and outcomes that matter.",
      },
      {
        question: "Should a freelance CV include rates?",
        answer:
          "Only include rates when the platform, client brief, or your own sales process calls for it. Many freelancers keep pricing separate from the profile.",
      },
      {
        question: "What if I am new to freelancing?",
        answer:
          "Use relevant projects, coursework, volunteer work, personal builds, or employment examples that prove the service you want to offer.",
      },
    ],
  },
  {
    slug: "freelance-cv-vs-traditional-resume",
    path: "/guides/freelance-cv-vs-traditional-resume",
    title: "Freelance CV vs Traditional Resume: What to Change",
    metadataTitle: "Freelance CV vs Traditional Resume | ApplyReadyCV",
    metaDescription:
      "Learn how a freelance CV differs from a traditional resume, including service positioning, project proof, portfolio links, client outcomes, and proposal-ready examples.",
    seoKeywords: [
      "freelance CV vs resume",
      "freelance CV",
      "freelance resume",
      "freelancer profile resume",
      "client-ready CV",
      "freelance portfolio CV",
      "gig resume tips",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-17",
    eyebrow: "Freelance positioning",
    intro:
      "A traditional resume is built around employers, job titles, and career history. A freelance CV or profile has to do something different: it must help a client trust that you understand the problem, can deliver the work, and can communicate clearly before and during the project.",
    summary: [
      "A freelance CV should lead with services, outcomes, and proof, not only job history.",
      "Clients often care more about relevant examples than complete employment timelines.",
      "The best freelance profile still stays honest, specific, and easy to verify.",
    ],
    image: {
      src: "/guide-images/freelance-cv-vs-resume.svg",
      alt: "Side-by-side diagram comparing a traditional resume with a freelance CV.",
      caption:
        "A freelance CV shifts the reader from employment history to client confidence and deliverable proof.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "Lead with the service a client wants to buy",
        body: [
          "A traditional resume often starts with a broad professional summary. A freelance CV should be sharper. The first section should tell a client what you do, who you help, and what kind of result or deliverable you can support.",
          "For example, 'Virtual assistant with admin experience' is weaker than 'Virtual assistant for coaches and small teams, focused on inbox cleanup, calendar management, research, and weekly client reports.' The second version gives a client something concrete to evaluate.",
        ],
        bullets: [
          "Name the service clearly.",
          "Mention the type of client or project when useful.",
          "Include tools only when they support the service.",
          "Avoid claiming every service at once.",
        ],
      },
      {
        title: "Replace task lists with project proof",
        body: [
          "A job resume can rely on employer context. A freelance profile usually needs more visible proof. Selected projects, short case summaries, portfolio links, sample deliverables, and process notes can make a client feel safer about contacting you.",
          "If you cannot share client names, use non-private details: industry, deliverable type, tools, timeline, scope, and outcome. A careful anonymous example is better than a vague claim.",
        ],
        bullets: [
          "Landing page copy for a coaching offer.",
          "Weekly admin reports for a remote founder.",
          "Data cleanup for 1,200 CRM records.",
          "Product images edited for a marketplace launch.",
        ],
      },
      {
        title: "Keep the timeline, but do not make it the whole story",
        body: [
          "Work history still matters. It can show reliability, domain experience, and transferable skills. But freelance clients usually do not need every internal responsibility from every old job.",
          "Keep relevant roles, then rewrite bullets around client value. Instead of 'responsible for reports,' write what the reports helped someone do, how often you made them, what tools you used, and what changed because of the work.",
        ],
        bullets: [
          "Keep roles that support your freelance service.",
          "Trim details that do not help the client decide.",
          "Connect old employment examples to current deliverables.",
          "Use dates honestly, but do not let dates bury proof.",
        ],
      },
      {
        title: "Add a proposal-ready review step",
        body: [
          "Before sending a freelance application, compare your CV or profile against the client brief. Do the first 10 seconds answer the client's problem? Are the best examples visible? Are the keywords from the brief present only where they are true?",
          "ApplyReadyCV's freelance mode can help with this check by reviewing service focus, portfolio signals, client-ready wording, project proof, and missing terms from the brief.",
        ],
        bullets: [
          "Does the profile name a clear service?",
          "Can the client see proof without searching?",
          "Are outcomes more visible than generic claims?",
          "Does the profile match this brief without copying it?",
        ],
      },
    ],
    cta: {
      label: "Check freelance CV",
      href: "/freelance-cv-checker",
      mode: "freelance",
    },
    relatedLinks: [
      {
        label: "Freelance CV Checker",
        href: "/freelance-cv-checker",
        description: "Review client-ready positioning, portfolio proof, and project signals.",
      },
      {
        label: "Freelance CV Checklist",
        href: "/guides/freelance-cv-checklist",
        description: "Use a checklist to improve your freelance profile before applying.",
      },
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Use role and project keywords naturally without stuffing.",
      },
    ],
    faq: [
      {
        question: "Can I use my normal resume for freelance applications?",
        answer:
          "You can start from it, but you should adapt it. A freelance CV needs clearer services, selected projects, portfolio proof, and client outcomes than a standard employment resume.",
      },
      {
        question: "Should a freelance CV include every past job?",
        answer:
          "No. Include past work that supports the service you are selling. Trim details that do not help the client understand your fit.",
      },
      {
        question: "What if I do not have paid freelance projects yet?",
        answer:
          "Use relevant employment work, school projects, volunteer work, personal projects, sample work, or portfolio pieces. Be clear about what each example is and avoid pretending it was a paid client project.",
      },
    ],
  },
  {
    slug: "common-cv-mistakes",
    path: "/guides/common-cv-mistakes",
    title: "Common CV Mistakes That Make Applications Harder to Review",
    metadataTitle: "Common CV Mistakes | ApplyReadyCV",
    metaDescription:
      "Find common CV mistakes before applying, including unclear summaries, missing achievements, weak keywords, formatting risks, and incomplete contact details.",
    seoKeywords: [
      "common CV mistakes",
      "resume mistakes",
      "CV mistakes to avoid",
      "resume application mistakes",
      "CV checklist",
      "resume review tips",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-25",
    eyebrow: "CV review",
    intro:
      "Many CV problems are fixable before you apply. The goal is not to make the document perfect. The goal is to remove avoidable friction so recruiters can quickly understand your fit.",
    summary: [
      "Missing contact details, unclear sections, and weak achievements slow down review.",
      "Generic wording makes it harder to see your role fit, even when you have relevant experience.",
      "A quick check can catch practical issues before you submit another application.",
    ],
    sections: [
      {
        title: "Mistake 1: unclear contact and role signals",
        body: [
          "A reviewer should immediately know who you are, how to contact you, and what type of role you are applying for. Missing or buried contact details create avoidable friction.",
          "Your summary should also be specific enough to match the application. A generic summary can make a strong CV feel unfocused.",
        ],
        bullets: [
          "Use a reliable email and phone number when appropriate.",
          "Add a professional link only when it supports your application.",
          "Mention your target role or core skill area clearly.",
          "Keep the opening section short and useful.",
        ],
      },
      {
        title: "Mistake 2: responsibilities without evidence",
        body: [
          "Many CVs list tasks but do not show what changed because of the work. Recruiters need evidence of scope, quality, volume, speed, revenue, savings, customer impact, or delivery.",
          "If you cannot use exact numbers, add context. Team size, frequency, project type, tools used, or business function can still make a bullet stronger.",
        ],
        bullets: [
          "Handled 40+ customer tickets per day.",
          "Prepared weekly reports for three department leads.",
          "Improved onboarding notes for new support hires.",
          "Managed inventory updates across two branch locations.",
        ],
      },
      {
        title: "Mistake 3: keywords without context",
        body: [
          "Relevant keywords matter, especially when applying online. But keywords work best when they appear inside honest examples, not as a disconnected list.",
          "Review the job description, identify the important skills and tools, then add the terms only where they reflect real experience, education, certifications, or projects.",
        ],
        bullets: [
          "Use exact tool names when you have used them.",
          "Place role keywords in experience bullets when possible.",
          "Support soft skills with examples.",
          "Avoid repeating the same term without adding proof.",
        ],
      },
      {
        title: "Mistake 4: formatting that fights readability",
        body: [
          "A CV can look polished and still be hard to review. Dense paragraphs, tiny text, inconsistent spacing, and overly complex layouts make important information harder to find.",
          "Before applying, check whether your CV still makes sense as plain text. This can reveal parsing and readability issues that are easy to miss visually.",
        ],
      },
    ],
    cta: {
      label: "Check your CV",
      href: "/#checker",
    },
    relatedLinks: [
      {
        label: "ATS Resume Formatting Tips",
        href: "/guides/ats-resume-formatting-tips",
        description: "Reduce parsing and layout risks before applying online.",
      },
      {
        label: "Resume Keyword Checker",
        href: "/resume-keyword-checker",
        description: "Find missing role terms and avoid keyword stuffing.",
      },
      {
        label: "Resume Summary Examples",
        href: "/guides/resume-summary-examples",
        description: "Write a clearer opening section before listing experience.",
      },
      {
        label: "Local Job CV Checker",
        href: "/local-job-cv-checker",
        description: "Review practical hiring details for local applications.",
      },
      {
        label: "CV Case Study",
        href: "/guides/cv-case-study-fix-weak-resume",
        description: "See sample before-and-after CV improvements.",
      },
    ],
    faq: [
      {
        question: "What is the biggest CV mistake?",
        answer:
          "The biggest practical mistake is making relevant experience hard to see. Clear sections, specific bullets, and truthful role keywords usually fix a lot of that problem.",
      },
      {
        question: "Should my CV be one page?",
        answer:
          "It depends on your experience and market. A concise one-page CV can work well for many applicants, but clarity and relevance matter more than a strict page count.",
      },
      {
        question: "Can a checker fix my CV automatically?",
        answer:
          "No. A checker can identify issues and suggest what to review. You still decide what is accurate, relevant, and appropriate for the job.",
      },
    ],
  },
  {
    slug: "local-job-cv-philippines",
    path: "/guides/local-job-cv-philippines",
    title: "Local Job CV Essentials for Philippine Applicants",
    metadataTitle: "Local Job CV Guide for Philippine Applicants | ApplyReadyCV",
    metaDescription:
      "Build a practical CV for Philippine local job applications with clearer contact details, role keywords, availability, qualifications, and recruiter-friendly work history.",
    seoKeywords: [
      "local job CV Philippines",
      "Philippines CV guide",
      "resume checker Philippines",
      "Philippine job application CV",
      "local job resume Philippines",
      "BPO CV Philippines",
      "fresh graduate CV Philippines",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-25",
    eyebrow: "Philippine local jobs",
    intro:
      "A local job CV in the Philippines should make the practical hiring details easy to see: what role you want, how to contact you, where you are based, when you can start, and what proof supports the job posting.",
    summary: [
      "Recruiters need quick contact, location, availability, and role-fit signals.",
      "BPO, admin, retail, healthcare, IT support, and service roles benefit from specific job-posting keywords.",
      "Fresh graduates and career shifters should use internships, school projects, certifications, and volunteer work as evidence.",
    ],
    sections: [
      {
        title: "Start with practical hiring details",
        body: [
          "For local applications, the top section should reduce basic recruiter questions. Include a reliable email, phone number when appropriate, city or province when it helps the role, and a professional link only if it supports the application.",
          "Avoid adding private details that the job posting does not need. The goal is clarity, not oversharing.",
        ],
        bullets: [
          "Name and reliable contact details",
          "City, province, or preferred work location when relevant",
          "Availability or notice period when requested",
          "Target role or short professional summary",
        ],
      },
      {
        title: "Match the job posting without copying it",
        body: [
          "Many Philippine local job posts use direct language: customer service, data entry, cashiering, inventory, bookkeeping, scheduling, helpdesk, chat support, email support, or patient support. Use those terms only when they truthfully match your experience.",
          "A keyword is stronger when it appears inside a bullet that shows what you did, what tools you used, and what result or workload you handled.",
        ],
        bullets: [
          "Handled customer inquiries by phone, chat, or email.",
          "Prepared reports, records, invoices, schedules, or inventory updates.",
          "Used tools such as Excel, Google Workspace, CRM, POS, or ticketing systems.",
          "Supported customers, patients, students, branch teams, or internal staff.",
        ],
      },
      {
        title: "Make fresh graduate experience easier to evaluate",
        body: [
          "If you are a fresh graduate, your CV still needs evidence. Use internships, thesis work, capstone projects, student organization roles, volunteer work, part-time jobs, certifications, and tools you can actually use.",
          "Do not apologize for limited experience. Show relevant proof in a clean structure so the reviewer can understand your fit quickly.",
        ],
        bullets: [
          "Course projects related to the target role",
          "Internship responsibilities and tools used",
          "Certifications, trainings, and licenses",
          "Volunteer, student, or part-time work with clear responsibilities",
        ],
      },
      {
        title: "Review local fit before sending",
        body: [
          "Before applying, check whether the CV answers the employer's practical questions: Can they contact you? Is your location or work setup clear? Do your bullets prove the role requirements? Are your skills backed by examples?",
          "ApplyReadyCV's local mode is designed for this kind of review. It checks local application signals, completeness, keywords, and readability without promising recruiter approval.",
        ],
        bullets: [
          "Contact details are easy to find.",
          "Role keywords are supported by truthful examples.",
          "Work history, education, and certifications are scannable.",
          "The CV still reads clearly when pasted as plain text.",
        ],
      },
    ],
    cta: {
      label: "Check local job CV",
      href: "/?mode=local#checker",
      mode: "local",
    },
    relatedLinks: [
      {
        label: "Local Job CV Checker",
        href: "/local-job-cv-checker",
        description: "Review location, availability, contact, and role-fit signals.",
      },
      {
        label: "Common CV Mistakes",
        href: "/guides/common-cv-mistakes",
        description: "Fix unclear details, weak achievements, and formatting friction.",
      },
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Use job-posting keywords naturally and truthfully.",
      },
      {
        label: "No-Experience CV Guide",
        href: "/guides/no-experience-cv-guide",
        description: "Show school, volunteer, project, and entry-level proof.",
      },
    ],
    faq: [
      {
        question: "Should I include my full address on a Philippine CV?",
        answer:
          "Usually city, province, or preferred work location is enough unless the employer specifically asks for a full address. Avoid sharing unnecessary private details.",
      },
      {
        question: "Can fresh graduates use ApplyReadyCV?",
        answer:
          "Yes. Fresh graduates can use internships, projects, trainings, student leadership, volunteer work, and part-time jobs as truthful evidence for role fit.",
      },
      {
        question: "Should I use English or Filipino in my CV?",
        answer:
          "Use the language expected by the job posting and employer. For many formal applications, English is common, but clarity and truthfulness matter most.",
      },
    ],
  },
  {
    slug: "cv-case-study-fix-weak-resume",
    path: "/guides/cv-case-study-fix-weak-resume",
    title: "CV Case Study: How to Fix a Weak Resume Before Applying",
    metadataTitle: "CV Case Study: Fix a Weak Resume | ApplyReadyCV",
    metaDescription:
      "See a practical before-and-after CV case study with sample resume problems, rewritten bullets, keyword fixes, and an ApplyReadyCV review checklist.",
    seoKeywords: [
      "CV case study",
      "resume case study",
      "fix weak resume",
      "CV before and after",
      "resume improvement example",
      "resume checker example",
      "CV review example",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-17",
    eyebrow: "Before and after CV review",
    intro:
      "This guide uses a fictional sample CV to show how a weak application can be improved before sending it. The point is not to copy the wording. The point is to learn the editing decisions: what to keep, what to remove, what to make clearer, and how to turn a checker report into practical fixes.",
    summary: [
      "Weak CVs often fail because relevant proof is hidden, vague, or unsupported.",
      "Before-and-after editing works best when each change solves a specific review problem.",
      "A checker score is useful only when it helps you decide what to fix next.",
    ],
    image: {
      src: "/guide-images/cv-case-study-fix.svg",
      alt: "Before-and-after CV case study diagram showing weak resume issues becoming clearer edits.",
      caption:
        "A useful CV review turns vague wording into clearer evidence, not just a higher score.",
      width: 1200,
      height: 630,
    },
    sections: [
      {
        title: "The fictional starting CV",
        body: [
          "Imagine an applicant named Mira applying for an entry-level admin assistant role. Her CV has the right background: school projects, a part-time cashier role, Excel use, customer communication, and volunteer event support. The problem is that the first draft hides most of that value.",
          "The opening summary says, 'Hardworking and flexible person seeking a challenging role.' The experience bullets say, 'Handled customers,' 'Did reports,' and 'Helped with events.' Nothing is false, but the reader has to guess what the work involved.",
        ],
        bullets: [
          "The summary does not name the target role.",
          "Useful tools such as Excel are buried.",
          "Bullets describe tasks without scale or context.",
          "The job posting keywords are not visible.",
        ],
      },
      {
        title: "Fix 1: rewrite the summary around the target role",
        body: [
          "A generic summary is a missed chance. Mira is not applying for every job. She is applying for admin work, so the summary should quickly show admin fit, customer communication, and basic reporting.",
          "A better version: 'Entry-level admin assistant applicant with part-time customer service experience, Excel report preparation, event coordination support, and clear written communication.' This is still modest, but it gives the recruiter useful signals in one sentence.",
        ],
        bullets: [
          "Name the role direction.",
          "Mention two or three relevant strengths.",
          "Use plain language instead of vague personality claims.",
          "Avoid adding skills that are not supported later in the CV.",
        ],
      },
      {
        title: "Fix 2: turn task bullets into evidence",
        body: [
          "The old bullet 'Did reports' does not help much. A stronger version could be: 'Prepared weekly Excel sales summaries for the store supervisor using daily transaction records.' If true, that gives a tool, frequency, audience, and business context.",
          "The old bullet 'Handled customers' could become: 'Assisted 40 to 60 walk-in customers per shift, answered product questions, and escalated refund issues to the supervisor.' Exact numbers should only be used when honest. If the applicant does not know the number, she can still add useful context such as channel, tool, or responsibility.",
        ],
        bullets: [
          "Add tools: Excel, POS, Google Sheets, CRM, email, ticketing system.",
          "Add scope: weekly, daily, branch, team, customers, files, reports.",
          "Add result: faster handoff, clearer tracking, fewer missed details.",
          "Keep each bullet truthful and easy to defend.",
        ],
      },
      {
        title: "Fix 3: use keywords from the actual job post",
        body: [
          "The admin job post asks for scheduling, records management, customer service, Excel, email communication, and attention to detail. Mira should not copy the job post, but she should make matching experience visible.",
          "If she has used Excel, email, records, and customer service in real tasks, those words belong in the summary, skills section, and experience bullets. If she has never handled scheduling, she should not claim it. She can mention related event coordination only if it is accurate.",
        ],
        bullets: [
          "Add only terms supported by real examples.",
          "Put important tools in the skills section and in relevant bullets.",
          "Use synonyms naturally when they match the work.",
          "Do not repeat a keyword just to increase density.",
        ],
      },
      {
        title: "What the final review should check",
        body: [
          "After editing, Mira should run a final review. The important question is not whether the CV sounds impressive. The question is whether the reader can quickly understand her fit for this specific role.",
          "ApplyReadyCV can help by checking completeness, keywords, action verbs, measurable details, readability, and application mode. The final decision still belongs to the applicant. A tool can point to issues, but it cannot verify every detail or promise a result.",
        ],
        bullets: [
          "Is the target role clear in the first screen?",
          "Are the strongest examples near the top?",
          "Do keywords appear with evidence?",
          "Can the applicant explain every claim in an interview?",
        ],
      },
    ],
    cta: {
      label: "Run your own CV review",
      href: "/#checker",
    },
    relatedLinks: [
      {
        label: "Free Resume Score Checker Guide",
        href: "/guides/resume-score-checker-guide",
        description: "Understand score categories and what to fix first.",
      },
      {
        label: "Common CV Mistakes",
        href: "/guides/common-cv-mistakes",
        description: "Find common issues that make applications harder to review.",
      },
      {
        label: "Local Job CV Guide",
        href: "/guides/local-job-cv-philippines",
        description: "Improve practical local job application details.",
      },
    ],
    faq: [
      {
        question: "Can I copy the before-and-after examples?",
        answer:
          "Use them as structure, not as copy. Your CV should describe your real work, tools, scope, and outcomes. Copying examples that are not true can hurt trust.",
      },
      {
        question: "Is this based on a real applicant?",
        answer:
          "No. The case study uses a fictional sample so the editing method is clear without exposing anyone's private resume details.",
      },
      {
        question: "Should every CV bullet include a number?",
        answer:
          "No. Numbers help when they are honest and useful, but context such as tools, frequency, audience, or responsibility can also make a bullet stronger.",
      },
    ],
  },
  {
    slug: "ats-vs-human-resume-review",
    path: "/guides/ats-vs-human-resume-review",
    title: "ATS vs Human Resume Review: What Each One Looks For",
    metadataTitle: "ATS vs Human Resume Review | ApplyReadyCV",
    metaDescription:
      "Understand the difference between ATS resume checks and human recruiter review, including keywords, formatting, achievements, clarity, and realistic checker limitations.",
    seoKeywords: [
      "ATS vs human resume review",
      "ATS resume review",
      "human resume review",
      "resume checker limitations",
      "ATS resume checker",
      "resume review tips",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-25",
    eyebrow: "Resume review strategy",
    intro:
      "A strong resume has to survive two different reviews. Software needs readable text and relevant terms. Humans need fast evidence that your background fits the role.",
    summary: [
      "ATS checks are mostly about readable structure, extractable text, and searchable keywords.",
      "Human reviewers care about relevance, proof, clarity, and whether the story makes sense.",
      "A checker can help you edit, but it cannot guarantee interviews, rankings, or employer decisions.",
    ],
    sections: [
      {
        title: "What ATS-style checks can catch",
        body: [
          "Applicant tracking systems parse resumes into searchable records. A checker can flag common risks before you apply: missing sections, weak keyword overlap, text extraction problems, and formatting that may make important details harder to read.",
          "These signals are useful because they are fixable. They are not a complete hiring decision.",
        ],
        bullets: [
          "Missing role keywords from the job description",
          "Unclear section headings",
          "Very short or poorly extracted text",
          "Formatting that may hide important details",
        ],
      },
      {
        title: "What human reviewers still decide",
        body: [
          "Recruiters and hiring managers look for evidence. They want to know what you did, how recently you did it, the tools or environment involved, and whether your work matches the employer's actual needs.",
          "A resume can be ATS-readable and still weak for a human if it is generic, vague, or overloaded with unsupported keywords.",
        ],
        bullets: [
          "Role relevance and career direction",
          "Achievements, scope, and measurable results",
          "Clear work history and honest qualifications",
          "Readable writing and practical judgment",
        ],
      },
      {
        title: "How to satisfy both reviews",
        body: [
          "Use the job description as a map. Add relevant terms where they truthfully fit, then support those terms with bullets that show actions and outcomes. Keep the layout clean enough that the resume still works as plain text.",
          "The best edits usually improve both software readability and human understanding at the same time.",
        ],
        bullets: [
          "Use standard headings such as Experience, Skills, Education, and Projects.",
          "Put important skills in both a skills section and relevant experience bullets.",
          "Turn responsibilities into evidence with volume, tools, quality, speed, or business context.",
          "Remove keywords you cannot support in an interview.",
        ],
      },
      {
        title: "Use checker scores as editing guidance",
        body: [
          "A resume score is not a promise. Different employers configure systems differently, and human judgment always adds context that a simple checker cannot know.",
          "Use ApplyReadyCV to find editing priorities: missing keywords, weak sections, unclear achievements, and mode-specific gaps. Then make the final decision based on the actual job and your truthful experience.",
        ],
        bullets: [
          "Fix obvious completeness and readability gaps first.",
          "Add missing keywords only when accurate.",
          "Review the CV as a recruiter would: quickly and skeptically.",
          "Run another check after editing.",
        ],
      },
    ],
    cta: {
      label: "Run an ATS check",
      href: "/ats-resume-checker",
    },
    relatedLinks: [
      {
        label: "ATS Resume Checker",
        href: "/ats-resume-checker",
        description: "Check formatting, structure, and keyword risks.",
      },
      {
        label: "ATS Resume Formatting Tips",
        href: "/guides/ats-resume-formatting-tips",
        description: "Reduce parsing problems before online applications.",
      },
      {
        label: "Resume Keywords Guide",
        href: "/guides/resume-keywords-guide",
        description: "Use role keywords with evidence, not stuffing.",
      },
      {
        label: "Free Resume Score Checker Guide",
        href: "/guides/resume-score-checker-guide",
        description: "Use score feedback as an editing priority list.",
      },
    ],
    faq: [
      {
        question: "Is an ATS score the same as a recruiter score?",
        answer:
          "No. An ATS-style score can help with readability and keyword risks, but recruiters still judge relevance, proof, clarity, and fit.",
      },
      {
        question: "Should I optimize only for ATS software?",
        answer:
          "No. A resume should be easy for software to parse and easy for humans to understand. Keyword stuffing can hurt the human review.",
      },
      {
        question: "Can a resume checker guarantee interviews?",
        answer:
          "No. A checker can provide editing guidance, but interviews depend on the role, competition, employer needs, timing, and many other factors.",
      },
    ],
  },
] satisfies GuidePage[];

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}
