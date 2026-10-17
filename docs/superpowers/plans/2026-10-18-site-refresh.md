# MMusic site refresh implementation plan

> Execute inline using the existing React, TypeScript and Vite setup. The user approved the direction in chat, requested all-song artwork slides, and authorised temporary contact details.

**Goal:** Make MMusic a focused, black-and-white music site with its own player, a release journal, and working information pages.

**Design:** Keep Orbitron and Space Mono and the existing achromatic theme tokens. Use the cover slideshow as the main visual, with restrained typography and generous spacing. Header: Listen, Journal, Contact and theme. Footer: Contact, Privacy, Terms. Replace store links and generic platform claims with an honest development notice and artist introduction.

**Architecture:** Keep the current checkout and dependencies. Use hash routes for information pages and journal articles so GitHub Pages supports direct links and refreshes. Retain the custom player and catalogue. Keep the homepage mounted during navigation so playing music is not interrupted. Store journal entries in a small typed data file.

**Content constraints:** Use existing release titles and genres; do not invent upcoming dates, artist quotes or release plans. Temporary contact details use the reserved `.example` domain and are visibly marked as placeholders. Privacy and terms are labelled draft content, accurately describe hosting, external media/fonts and the saved theme, and do not claim legal completeness.

## Tasks

- [x] Add failing rendering checks for navigation, the slideshow, working information routes and journal articles.
- [x] Implement the shared header/footer and hash navigation, including back navigation, route titles, focus and scroll handling.
- [x] Implement an 18-cover grayscale slideshow with manual controls, pause/resume and reduced-motion support.
- [x] Replace generic homepage sections with the slideshow hero, existing custom player, release journal and app-development notice.
- [x] Add Contact, Privacy and Terms drafts with labelled example details and three factual release introductions.
- [x] Run the whole test suite and production build. Test slides, routes, playback continuity and mobile layout in the browser.
- [x] Obtain a focused final review, fix material findings, and prepare the verified changes for publication.

## Review focus

- Direct hash URLs and unknown article slugs must render the correct page or a useful not-found page.
- Reduced motion must stop automatic cover rotation; navigation controls must have keyboard labels.
- Information-page navigation must not discard active playback.
- Placeholder information must not appear to be a real contact destination or final legal policy.
- Mobile navigation and the player must stay within the viewport.

## Execution record

- Existing playback was verified in the previous change; preserve its working AAC sources and controls.
- Ruling: use existing artwork and no generated hero image, because the user requested a slideshow of all song images.
- Ruling: temporary contact is `hello@mmusic.example`; no working contact form or pretend delivery.

- Verification: all five rendering/regression tests and the production build passed. Browser checks covered automatic/manual cover rotation, pause/resume, Contact/Privacy navigation, release articles, a 375px mobile viewport, both themes and uninterrupted audio across routes.
- Review: one P2 skip-link route issue was reproduced in the browser and fixed by focusing the current main element without changing its hash. The same keyboard activation then retained the Contact route.
- Mobile QA: removed secondary playlist statistics on small screens so titles and artist names stay readable.
- Publication and live-site verification are reported in the delivery message.
