# Meghna's Birthday Card 🎂✦

A small, self-contained digital birthday card — no build step, no framework.

## Files
- **config.js** — the only file you edit (name, letter, memories, hourly notes, music, Firebase config)
- **index.html** — her card (the main experience)
- **sign.html** — the page friends use to secretly leave notes

## How it works
Friends leave notes on `sign.html`. Notes are stored in a Firebase Firestore
`guestbook` collection and appear live inside her card under
*"From everyone who loves you."* If Firebase is unavailable it falls back to
`localStorage` (same-device only).

## Deploy
Drop all three files onto [Vercel](https://vercel.com). The card is the main
link; the friends' link is `your-site.vercel.app/sign.html`. The shared
guestbook and mic-blow feature need the HTTPS link (not a local file).
