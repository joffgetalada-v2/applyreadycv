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

- Workspace-style homepage with a central CV checker and dynamic Role Fit Compass sidebar.
- Dedicated routes for remote, freelance, local, ATS readability, and resume keyword guidance.
- Privacy, terms, about, and contact pages for review-friendly site structure.
- Deterministic local scoring across ATS readability, job match, clarity and achievements, mode fit, and completeness.
- Role Fit Compass recommendations for local role-family alignment, stretch targets, mismatch signals, and missing target-role proof.
- Matched and missing keyword output when a job description is provided.
- Mode-specific recommendations for remote, freelance/gig, and local job applications.
- Copy recommendations and start-over actions.
- Sitemap and robots route support.
- Route metadata, canonical URLs, Open Graph metadata, Twitter metadata, and JSON-LD schema.

## Privacy-first Note

- No account, login, ads, payments, affiliate links, or database.
- Resume text is analyzed locally in the browser with deterministic rules.
- `.txt`, `.pdf`, and `.docx` files are read locally in the browser.
- Older `.doc` files and Google Docs should be exported as `.docx`, `.pdf`, or `.txt` before upload.
- Scanned/image-only PDFs may not contain extractable text and will fall back to pasted text.
- No resumes are sent to third-party APIs or stored server-side.

## Monetization Note

No Google AdSense script, ad placeholders, affiliate links, or paid products are included yet. The site is structured with useful content pages and policy pages so monetization can be considered later after an appropriate hosting plan and policy review.

## Current Limitations

- The analyzer is deterministic and rule-based; it does not use AI or external APIs.
- Keyword matching is transparent and simple, not a semantic matching engine.
- Role Fit Compass suggests role families and directions only; it does not provide live job listings, employers, salaries, or hiring predictions.
- PDF extraction depends on readable embedded text; scanned/image-only PDFs are not OCR processed.
- Older `.doc` files are not supported.
- The score is guidance for common application issues, not a hiring prediction or ATS approval guarantee.
- The contact page uses a placeholder `mailto:` address and no backend form.
- No API keys are required for the current local deterministic checker.

## Future Roadmap

- Add OCR support for scanned PDFs if it can be done without compromising privacy or adding excessive client weight.
- Add downloadable reports.
- Add richer role-specific keyword groups.
- Consider optional job board integrations later, only with clear privacy controls and no fake listings.
- Add optional sample resume templates and before/after examples.
- Add more accessibility and usability tests as the product grows.
- Add production analytics or ads only after privacy review and hosting-plan readiness.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- `lucide-react` icons
