import type { LucideIcon } from "lucide-react";
import type { AnalysisMode } from "@/lib/analyzer/types";

export const SITE_NAME = "ApplyReadyCV";
export const SITE_HOST = "applyreadycv.com";
export const SITE_URL = `https://${SITE_HOST}`;
export const SITE_TAGLINE =
  "Free CV feedback for remote, freelance, and local applications.";
export const SITE_CONTACT_EMAIL = "hello@applyreadycv.com";
export const SUPPORT_WALLET_ADDRESS =
  "0x07DFCF64faB9C793Ea7d3Dd939A82cF6708d4F8E";

export const baseSeoKeywords = [
  "free resume checker",
  "free CV checker",
  "ATS resume checker",
  "ATS resume scanner",
  "resume keyword checker",
  "resume score checker",
  "free resume score checker",
  "CV score checker online",
  "resume checker score",
  "ATS resume score checker",
  "CV checker online",
  "CV readiness checker",
  "job application resume review",
  "job description keyword match",
  "remote CV checker",
  "remote job resume checker",
  "freelance CV checker",
  "local job CV checker",
  "resume checker Philippines",
  "private resume feedback",
];

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentCard = {
  title: string;
  body: string;
};

export type ContentPage = {
  path: string;
  title: string;
  metadataTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  analysisMode?: AnalysisMode;
  eyebrow: string;
  intro: string;
  summary: string[];
  checklistTitle: string;
  checklist: ContentCard[];
  mistakesTitle: string;
  mistakes: ContentCard[];
  evaluationTitle: string;
  evaluation: ContentCard[];
  faq: FaqItem[];
};

export type LinkCard = NavItem & {
  icon?: LucideIcon;
};

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  breadcrumbName: string;
};

export const primaryNav: NavItem[] = [
  { href: "/#checker", label: "Checker" },
  { href: "/remote-cv-checker", label: "Remote" },
  { href: "/freelance-cv-checker", label: "Freelance" },
  { href: "/local-job-cv-checker", label: "Local" },
  { href: "/ats-resume-checker", label: "ATS" },
  { href: "/guides", label: "Guides" },
  { href: "/support", label: "Support" },
  { href: "/privacy", label: "Privacy" },
];

export const footerNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/remote-cv-checker", label: "Remote CV Checker" },
  { href: "/freelance-cv-checker", label: "Freelance CV Checker" },
  { href: "/local-job-cv-checker", label: "Local Job CV Checker" },
  { href: "/ats-resume-checker", label: "ATS Resume Checker" },
  { href: "/resume-keyword-checker", label: "Resume Keyword Checker" },
  { href: "/guides", label: "Resume & CV Guides" },
  { href: "/support", label: "Support ApplyReadyCV" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const sitemapRoutes = footerNav.map((item) => item.href);

export const homepageSeo: SeoPage = {
  path: "/",
  title: "Free ATS Resume & CV Checker | ApplyReadyCV",
  description:
    "Use a free resume and CV checker with a practical score for ATS readability, resume keywords, remote jobs, freelance gigs, and local applications.",
  keywords: baseSeoKeywords,
  breadcrumbName: "Home",
};

export function checkerHrefForMode(mode?: AnalysisMode) {
  return mode ? `/?mode=${mode}#checker` : "/#checker";
}

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const contentPages = {
  remote: {
    path: "/remote-cv-checker",
    title: "Remote CV Checker",
    metadataTitle: "Remote CV Checker | ApplyReadyCV",
    metaDescription:
      "Check whether your CV is ready for remote job applications. Review remote work signals, async communication, tools, keywords, and practical application fit.",
    seoKeywords: [
      "remote CV checker",
      "remote resume checker",
      "remote job CV",
      "remote job resume",
      "work from home resume",
      "remote work skills",
      "async communication resume",
      "distributed team CV",
      "remote job application",
    ],
    analysisMode: "remote",
    eyebrow: "Remote job applications",
    intro:
      "Remote hiring teams need to understand more than your job titles. Your CV should make it easy to see how you communicate, collaborate, document work, manage ownership, and use distributed team tools.",
    summary: [
      "Remote readiness is about clarity, trust, and evidence of independent follow-through.",
      "A strong remote CV shows how you work with people who are not in the same room or timezone.",
      "ApplyReadyCV checks for remote signals without claiming to predict hiring results.",
    ],
    checklistTitle: "Remote CV readiness checklist",
    checklist: [
      {
        title: "Show async communication",
        body: "Mention written updates, documentation, status reporting, handoffs, or ticket comments when they are part of your real work.",
      },
      {
        title: "Name collaboration tools",
        body: "Tools such as Slack, Zoom, Teams, Notion, Jira, Trello, Asana, GitHub, GitLab, or Google Workspace can help remote reviewers understand your workflow.",
      },
      {
        title: "Make ownership visible",
        body: "Use bullet points that show what you owned, how you managed priorities, and what changed because of your work.",
      },
      {
        title: "Include measurable outcomes",
        body: "Numbers, response times, project volume, customer outcomes, or delivery timelines make remote experience easier to evaluate.",
      },
    ],
    mistakesTitle: "Common remote CV mistakes",
    mistakes: [
      {
        title: "Only saying remote-friendly",
        body: "A phrase alone is weak. Add evidence such as distributed team projects, async documentation, or remote support routines.",
      },
      {
        title: "Listing tools without context",
        body: "Tool names help, but they work best when paired with how you used them to coordinate work or produce results.",
      },
      {
        title: "Hiding communication strengths",
        body: "Remote roles often depend on clear writing. If you create guides, reports, tickets, proposals, or handoff notes, say so.",
      },
    ],
    evaluationTitle: "How ApplyReadyCV checks remote fit",
    evaluation: [
      {
        title: "Mode-specific signals",
        body: "The checker looks for remote work, async communication, documentation, distributed team, collaboration tool, timezone, ownership, and self-management signals.",
      },
      {
        title: "Keyword comparison",
        body: "When you paste a job description, the tool compares meaningful role keywords against your resume text and shows matched and missing terms.",
      },
      {
        title: "Readable structure",
        body: "The score also considers contact details, skills, experience, education, action verbs, and measurable achievements.",
      },
    ],
    faq: [
      {
        question: "Can this prove I am ready for a remote job?",
        answer:
          "No. It can help surface common gaps and remote work signals, but it cannot guarantee interviews or hiring outcomes.",
      },
      {
        question: "Should I add remote tools if I only used them briefly?",
        answer:
          "Only add tools you can honestly discuss. Strong CVs connect tools to real workflows, responsibilities, or outcomes.",
      },
      {
        question: "Can I use this for hybrid roles?",
        answer:
          "Yes. The remote mode can still help when a hybrid job values async communication, documentation, and distributed collaboration.",
      },
    ],
  },
  freelance: {
    path: "/freelance-cv-checker",
    title: "Freelance CV Checker",
    metadataTitle: "Freelance CV Checker | ApplyReadyCV",
    metaDescription:
      "Check whether your CV or freelance profile is ready for gig applications. Review portfolio proof, project outcomes, client-ready positioning, and missing keywords.",
    seoKeywords: [
      "freelance CV checker",
      "freelance resume checker",
      "freelancer profile review",
      "gig application CV",
      "freelance portfolio CV",
      "client-ready resume",
      "freelance job application",
      "freelance profile checker",
    ],
    analysisMode: "freelance",
    eyebrow: "Freelance and gig applications",
    intro:
      "Freelance applications need proof that you can understand a client problem, deliver a clear result, and communicate scope. A profile-style CV should show selected projects, outcomes, tools, and service focus.",
    summary: [
      "Freelance readiness depends on clear positioning and project evidence.",
      "A strong freelance CV connects deliverables to client outcomes, not only tasks.",
      "ApplyReadyCV checks for portfolio and project signals while keeping feedback practical.",
    ],
    checklistTitle: "Freelance CV and profile checklist",
    checklist: [
      {
        title: "Lead with a clear service focus",
        body: "Make your niche, service, or target client obvious near the top so a buyer quickly understands what you do.",
      },
      {
        title: "Add selected projects",
        body: "Use project bullets that explain the client problem, your deliverable, the tools used, and the result.",
      },
      {
        title: "Show portfolio paths",
        body: "Include a portfolio, LinkedIn, marketplace profile, case study, or relevant project link when it supports the application.",
      },
      {
        title: "Use outcome language",
        body: "Mention turnaround time, conversions, shipped assets, support volume, process improvements, or other truthful results.",
      },
    ],
    mistakesTitle: "Common freelance CV mistakes",
    mistakes: [
      {
        title: "Sounding like an employee resume only",
        body: "Freelance clients often want project proof. Add selected projects, services, outcomes, or deliverables where relevant.",
      },
      {
        title: "No portfolio or examples",
        body: "If your field depends on work samples, make the path to examples visible and easy to inspect.",
      },
      {
        title: "Vague client results",
        body: "Generic claims like reliable or creative are weaker than specific deliverables, client context, or measurable changes.",
      },
    ],
    evaluationTitle: "How ApplyReadyCV checks freelance fit",
    evaluation: [
      {
        title: "Project and portfolio signals",
        body: "The checker looks for portfolio, selected projects, case studies, deliverables, testimonials, proposals, client results, and freelance marketplace signals.",
      },
      {
        title: "Outcome clarity",
        body: "It reviews action verbs, measurable achievements, and generic phrasing so your work sounds concrete rather than vague.",
      },
      {
        title: "Role keyword match",
        body: "If a gig post is pasted, the tool highlights missing and matched terms so you can tailor honestly without keyword stuffing.",
      },
    ],
    faq: [
      {
        question: "Is this only for traditional resumes?",
        answer:
          "No. Freelancers can paste CV text, profile copy, project summaries, or proposal-ready background notes.",
      },
      {
        question: "Should I list every client?",
        answer:
          "Usually no. Selected projects with clear outcomes are often stronger than a long list with no context.",
      },
      {
        question: "Does the tool judge portfolio quality?",
        answer:
          "No. It checks whether portfolio and project signals are present in the text. It does not review external portfolio content.",
      },
    ],
  },
  local: {
    path: "/local-job-cv-checker",
    title: "Local Job CV Checker",
    metadataTitle: "Local Job CV Checker | ApplyReadyCV",
    metaDescription:
      "Check whether your CV is ready for local job applications. Review contact details, location, availability, education, work history, and local role keywords.",
    seoKeywords: [
      "local job CV checker",
      "local job resume checker",
      "entry level CV checker",
      "job application CV",
      "resume checker for local jobs",
      "customer service resume",
      "admin resume",
      "retail CV",
      "local job application",
    ],
    analysisMode: "local",
    eyebrow: "Local job applications",
    intro:
      "Local job applications often need straightforward hiring details: how to contact you, where you are based, when you are available, your qualifications, and whether your work history is easy to scan.",
    summary: [
      "Local readiness is about clarity, completeness, and role-specific proof.",
      "A strong local CV makes contact, availability, education, certifications, and employment history easy to find.",
      "ApplyReadyCV checks common local application gaps without making employment promises.",
    ],
    checklistTitle: "Local job CV readiness checklist",
    checklist: [
      {
        title: "Make contact details visible",
        body: "Include a reliable email, phone number, and relevant professional links. Add location when it supports the application.",
      },
      {
        title: "Clarify availability",
        body: "If relevant, mention shift preference, immediate availability, full-time or part-time preference, or on-site readiness.",
      },
      {
        title: "Keep work history scannable",
        body: "Use clear job titles, employers, dates, and concise bullets that show responsibilities and outcomes.",
      },
      {
        title: "Highlight qualifications",
        body: "Place education, certifications, licenses, or training where hiring teams can find them quickly.",
      },
    ],
    mistakesTitle: "Common local CV mistakes",
    mistakes: [
      {
        title: "Missing practical hiring details",
        body: "For many local roles, missing phone, location, availability, or work authorization details can slow down review.",
      },
      {
        title: "Unclear employment history",
        body: "Avoid blocks of text that make it hard to understand dates, employers, roles, or responsibilities.",
      },
      {
        title: "Ignoring local industry language",
        body: "Customer support, admin, retail, healthcare, BPO, and IT support applications often benefit from role-specific keywords from the posting.",
      },
    ],
    evaluationTitle: "How ApplyReadyCV checks local fit",
    evaluation: [
      {
        title: "Completeness signals",
        body: "The checker reviews contact details, experience, skills, education, certifications, and resume length for basic local application readiness.",
      },
      {
        title: "Local role fit",
        body: "It looks for location, availability, shift, certification, work authorization, admin, retail, healthcare, support, BPO, and IT support signals.",
      },
      {
        title: "Readable evidence",
        body: "It flags missing measurable achievements, generic phrasing, and possible formatting extraction issues.",
      },
    ],
    faq: [
      {
        question: "Should I include my full address?",
        answer:
          "Usually a city or general location is enough unless the employer specifically asks for a full address.",
      },
      {
        question: "Can this help with entry-level applications?",
        answer:
          "Yes. It checks structure, contact details, education, certifications, skills, and role keywords that matter even when work history is limited.",
      },
      {
        question: "Does this replace a career adviser?",
        answer:
          "No. It gives informational feedback on common CV issues. You remain responsible for final application decisions.",
      },
    ],
  },
  ats: {
    path: "/ats-resume-checker",
    title: "ATS Resume Checker",
    metadataTitle: "ATS Resume Checker | ApplyReadyCV",
    metaDescription:
      "Learn ATS resume readability basics and check common formatting, structure, keyword, and completeness issues without false ATS approval guarantees.",
    seoKeywords: [
      "ATS resume checker",
      "ATS CV checker",
      "ATS friendly resume",
      "resume readability checker",
      "resume formatting checker",
      "applicant tracking system resume",
      "ATS resume keywords",
      "resume parser readability",
    ],
    eyebrow: "ATS readability education",
    intro:
      "Applicant tracking systems can parse resumes differently depending on file format, layout, and employer configuration. A checker score can be useful guidance, but it is not a promise that any specific system will approve your resume.",
    summary: [
      "ATS readability starts with clean structure and extractable text.",
      "Keyword matching helps, but stuffing keywords can make a resume weaker for human readers.",
      "ApplyReadyCV gives a practical score for common issues, not a guaranteed ATS outcome.",
    ],
    checklistTitle: "ATS readability basics",
    checklist: [
      {
        title: "Use clear section labels",
        body: "Labels like Experience, Skills, Education, Projects, and Certifications help both systems and people understand the document.",
      },
      {
        title: "Keep formatting simple",
        body: "Avoid layouts that depend on images, text boxes, unusual columns, or complex graphics when you need reliable parsing.",
      },
      {
        title: "Mirror truthful role language",
        body: "Use wording from the job description when it accurately reflects your experience, tools, or responsibilities.",
      },
      {
        title: "Balance systems and humans",
        body: "A resume still needs to persuade a person. Keep bullets concise, specific, and outcome-focused.",
      },
    ],
    mistakesTitle: "Common ATS readability mistakes",
    mistakes: [
      {
        title: "Treating any score as final proof",
        body: "Different systems parse resumes differently. A score can point to issues, but it cannot guarantee approval.",
      },
      {
        title: "Keyword stuffing",
        body: "Repeating terms without evidence can reduce clarity. Add keywords where they fit real skills, tools, or achievements.",
      },
      {
        title: "Weak extraction text",
        body: "If copied text appears scrambled or missing, a system may also struggle with the file. Paste text review can reveal formatting problems.",
      },
    ],
    evaluationTitle: "How ApplyReadyCV checks ATS readability",
    evaluation: [
      {
        title: "Basic structure",
        body: "The checker looks for contact details, work experience, education, skills, and enough resume text to review.",
      },
      {
        title: "Achievement signals",
        body: "It checks for action verbs and measurable achievements that help applications read like evidence rather than task lists.",
      },
      {
        title: "Formatting warnings",
        body: "It flags possible extraction issues such as unusual characters, very long lines, or very short extracted text.",
      },
    ],
    faq: [
      {
        question: "Can ApplyReadyCV guarantee ATS approval?",
        answer:
          "No. No simple checker can guarantee ATS approval. The tool reviews common readability and relevance issues only.",
      },
      {
        question: "Is a plain resume always best?",
        answer:
          "Not always, but clean section labels and extractable text are useful when a resume must pass through automated parsing.",
      },
      {
        question: "Should I remove all design?",
        answer:
          "Not necessarily. Focus on readable text, clear hierarchy, and formats that do not hide important information.",
      },
    ],
  },
  keywords: {
    path: "/resume-keyword-checker",
    title: "Resume Keyword Checker",
    metadataTitle: "Resume Keyword Checker | ApplyReadyCV",
    metaDescription:
      "Compare resume text to a job description, review missing keywords, understand hard and soft skills, and avoid keyword stuffing.",
    seoKeywords: [
      "resume keyword checker",
      "CV keyword checker",
      "job description keyword match",
      "missing resume keywords",
      "resume job match checker",
      "ATS keyword checker",
      "skills keyword checker",
      "resume keyword scanner",
    ],
    eyebrow: "Resume keyword matching",
    intro:
      "A resume keyword check helps you compare the language in a job description with the language in your resume. The goal is not to stuff terms everywhere, but to make sure your relevant skills and experience are visible.",
    summary: [
      "Keyword matching is most useful when paired with truthful examples.",
      "Hard skills, tools, certifications, and role-specific terms are often easier to match than broad soft skills.",
      "ApplyReadyCV shows matched and missing keywords with a simple, transparent method.",
    ],
    checklistTitle: "Keyword review checklist",
    checklist: [
      {
        title: "Start with the job description",
        body: "Paste the posting so the checker can compare meaningful terms against your resume text.",
      },
      {
        title: "Prioritize hard skills and tools",
        body: "Software, certifications, methods, technical skills, and role-specific processes are often strong candidates for honest alignment.",
      },
      {
        title: "Support soft skills with evidence",
        body: "Words like communication or leadership are stronger when paired with examples, scope, and outcomes.",
      },
      {
        title: "Avoid stuffing",
        body: "Only add missing terms where they accurately describe work you have done or skills you can support.",
      },
    ],
    mistakesTitle: "Common keyword matching mistakes",
    mistakes: [
      {
        title: "Copying the entire job post",
        body: "A resume should reflect your experience, not duplicate the posting. Use role language carefully and honestly.",
      },
      {
        title: "Ignoring synonyms",
        body: "Some roles use similar terms differently. Match important language where it is truthful, but keep your bullets natural.",
      },
      {
        title: "Forgetting human readers",
        body: "A keyword-rich resume still needs concise bullets, clear sections, and evidence of impact.",
      },
    ],
    evaluationTitle: "How ApplyReadyCV checks keywords",
    evaluation: [
      {
        title: "Simple extraction",
        body: "The checker removes common stop words, keeps meaningful terms and common role phrases, then compares them against your resume text.",
      },
      {
        title: "Matched and missing lists",
        body: "Results show terms already represented and terms that may deserve review before applying.",
      },
      {
        title: "Context from full scoring",
        body: "Keyword matching is one category. The total score also includes readability, clarity, mode fit, and completeness.",
      },
    ],
    faq: [
      {
        question: "Should every missing keyword be added?",
        answer:
          "No. Add only relevant terms you can support with real experience, education, tools, or projects.",
      },
      {
        question: "Are soft skills useful keywords?",
        answer:
          "They can be, but they are stronger when connected to examples such as documentation, client communication, training, or team coordination.",
      },
      {
        question: "Can keyword matching replace tailoring?",
        answer:
          "No. It helps you notice gaps, but thoughtful tailoring still requires judgment about the role and your real background.",
      },
    ],
  },
} satisfies Record<string, ContentPage>;

export const supportPages = {
  about: {
    path: "/about",
    title: "About ApplyReadyCV",
    description:
      "Learn what ApplyReadyCV is, why it exists, and how its privacy-first, honest feedback philosophy guides the free CV checker.",
    keywords: [
      "about ApplyReadyCV",
      "free CV checker",
      "resume checker philosophy",
      "privacy-first resume checker",
      "honest resume feedback",
    ],
    breadcrumbName: "About",
  },
  contact: {
    path: "/contact",
    title: "Contact ApplyReadyCV",
    description:
      "Contact ApplyReadyCV for product questions, privacy notes, content corrections, bug reports, or feedback about the free CV checker.",
    keywords: [
      "contact ApplyReadyCV",
      "CV checker feedback",
      "resume checker support",
      "ApplyReadyCV contact",
      "resume tool questions",
    ],
    breadcrumbName: "Contact",
  },
  support: {
    path: "/support",
    title: "Support ApplyReadyCV",
    description:
      "Support ApplyReadyCV with an optional crypto donation to help improve the free resume and CV checker.",
    keywords: [
      "support ApplyReadyCV",
      "donate to ApplyReadyCV",
      "support free CV checker",
      "crypto donation resume checker",
      "MetaMask donation",
    ],
    breadcrumbName: "Support",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy | ApplyReadyCV",
    description:
      "Learn how ApplyReadyCV handles resume text, file uploads, pasted job descriptions, local processing, Vercel Analytics, and privacy-first limitations.",
    keywords: [
      "ApplyReadyCV privacy",
      "private resume checker",
      "local resume analysis",
      "resume data privacy",
      "CV checker privacy policy",
    ],
    breadcrumbName: "Privacy",
  },
  terms: {
    path: "/terms",
    title: "Terms and Disclaimer | ApplyReadyCV",
    description:
      "Read the ApplyReadyCV informational-use terms, no-guarantee disclaimer, approximate scoring limitations, and user responsibility notes.",
    keywords: [
      "ApplyReadyCV terms",
      "resume checker disclaimer",
      "ATS checker disclaimer",
      "CV checker limitations",
      "job application tool terms",
    ],
    breadcrumbName: "Terms",
  },
} satisfies Record<string, SeoPage>;
