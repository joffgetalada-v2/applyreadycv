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
    "Read practical resume and CV guides for ATS readiness, formatting, resume keywords, freelance applications, common CV mistakes, remote jobs, and better applications.",
  seoKeywords: [
    "resume guides",
    "CV guides",
    "ATS resume guide",
    "ATS resume formatting tips",
    "resume keyword guide",
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
        label: "Local Job CV Checker",
        href: "/local-job-cv-checker",
        description: "Review practical hiring details for local applications.",
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
] satisfies GuidePage[];

export function getGuideBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}
