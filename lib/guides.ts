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

export type GuidePage = {
  slug: string;
  path: string;
  title: string;
  metadataTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  eyebrow: string;
  intro: string;
  summary: string[];
  sections: GuideSection[];
  cta: {
    label: string;
    href: string;
  };
  relatedLinks: GuideLink[];
  faq: FaqItem[];
};

export const guidesIndex = {
  path: "/guides",
  title: "Resume & CV Guides",
  metadataTitle: "Resume & CV Guides | ApplyReadyCV",
  metaDescription:
    "Read practical resume and CV guides for ATS readiness, resume keywords, remote job applications, and better job application preparation.",
  seoKeywords: [
    "resume guides",
    "CV guides",
    "ATS resume guide",
    "resume keyword guide",
    "remote job CV guide",
    "job application guide",
  ],
};

export const guidePages = [
  {
    slug: "ats-resume-checker-guide",
    path: "/guides/ats-resume-checker-guide",
    title: "ATS Resume Checker: How to Ensure Your Resume Gets Seen",
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
        label: "Privacy",
        href: "/privacy",
        description: "Read how the current checker handles resume text.",
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
    slug: "resume-keywords-guide",
    path: "/guides/resume-keywords-guide",
    title: "Resume Keywords That Get You Noticed: How to Find and Use Them",
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
        label: "Privacy",
        href: "/privacy",
        description: "Review the current privacy-first checker notes.",
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
] satisfies GuidePage[];

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}
