# ApplyReadyCV

ApplyReadyCV is a free, privacy-first resume and CV checker for people applying to remote jobs, freelance gigs, and local jobs. It provides practical feedback on readability, relevance, missing keywords, completeness, and application fit without claiming guaranteed ATS approval, interviews, or job offers.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Useful checks:

```bash
npm run lint
npm run build
```

## Current Feature List

- Workspace-style homepage with a central CV checker and right-side insight panel.
- Dedicated routes for remote, freelance, local, ATS readability, and resume keyword guidance.
- Privacy, terms, about, and contact pages for review-friendly site structure.
- Deterministic local scoring across ATS readability, job match, clarity and achievements, mode fit, and completeness.
- Matched and missing keyword output when a job description is provided.
- Mode-specific recommendations for remote, freelance/gig, and local job applications.
- Copy recommendations and start-over actions.
- Sitemap and robots route support.
- Route metadata, canonical URLs, Open Graph metadata, Twitter metadata, and JSON-LD schema.

## Privacy-first Note

- No account, login, ads, payments, affiliate links, or database.
- Resume text is analyzed locally in the browser with deterministic rules.
- `.txt` files are read locally through the browser File API.
- PDF and DOCX uploads currently show a safe fallback asking the user to paste resume text.
- No resumes are sent to third-party APIs or stored server-side.

## Monetization Note

No Google AdSense script, ad placeholders, affiliate links, or paid products are included yet. The site is structured with useful content pages and policy pages so monetization can be considered later after an appropriate hosting plan and policy review.

## Current Limitations

- The analyzer is deterministic and rule-based; it does not use AI or external APIs.
- Keyword matching is transparent and simple, not a semantic matching engine.
- PDF and DOCX text extraction is not enabled yet.
- The score is guidance for common application issues, not a hiring prediction or ATS approval guarantee.
- The contact page uses a placeholder `mailto:` address and no backend form.

## Future Roadmap

- Add robust local PDF and DOCX text extraction.
- Add downloadable reports.
- Add richer role-specific keyword groups.
- Add optional sample resume templates and before/after examples.
- Add more accessibility and usability tests as the product grows.
- Add production analytics or ads only after privacy review and hosting-plan readiness.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `lucide-react` icons
