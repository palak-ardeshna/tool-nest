# Drafts

Articles waiting for Parth's hands-on paragraph. Nothing here is wired into
`src/content/articles/index.ts`, so nothing here can go live by accident.

To publish one:

1. Replace every `<!-- PARTH: ... -->` block with what actually happened. If it
   did not happen, delete the draft.
2. Stock image and `imageAlt` are already set. Replace with your own UI screenshot if you have one.
3. Check `git log --since='7 days ago'` — the cadence test allows two a week.
4. `git mv` the file into `src/content/articles/`, add it to `index.ts`, `npm test`.
