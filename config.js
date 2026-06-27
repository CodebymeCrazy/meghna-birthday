/* ════════════════════════════════════════════════════════════════
   EDIT THIS FILE ONCE. Both index.html (her card) and sign.html
   (the page you send her friends) read from it.
   ════════════════════════════════════════════════════════════════ */
window.CARD = {

  herName: "Meghna",
  year: 2019,
  greeting: "Happy Birthday,",

  // your letter — one string per paragraph
  message: [
    "We met as strangers on a screen, and somehow you became family.",
    "Thank you for every late-night talk, every time you showed up, and for being exactly the kind of person the world needs more of.",
    "Wishing you a year as bright as you are."
  ],

  signature: "— with love, Yash",
  meta: "your brother · since ",   // the year is added automatically

  // 6 stars, left → right. Index 3 is HER star (the bright rose one).
  memories: [
    { when: "2019",             what: "The day we first talked. I had no idea you'd become this important." },
    { when: "that one night",   what: "When you stayed up just so I wouldn't be alone with it." },
    { when: "our running joke", what: "You know the one. It still makes me laugh out of nowhere." },
    { when: "you",              what: "The brightest one here. The sister I got to choose." },
    { when: "every hard week",  what: "Somehow you always knew when to check in." },
    { when: "today",            what: "Older, wiser, and still my favourite person to talk to." }
  ],

  // 7 notes that unlock one at a time through the day
  hourlyNotes: [
    "Good morning, birthday girl. It's your day. ✦",
    "Hope you've smiled at least three times already.",
    "Reminder: you are deeply, genuinely loved.",
    "Whatever you're doing right now — you deserve the joy.",
    "Five years of knowing you and you still amaze me.",
    "Eat the cake. All of it. No notes.",
    "As today ends: thank you for being you. Always. ✦"
  ],
  unlock: { mode: "fromFirstOpen", intervalMinutes: 60 },
  // (or anchor to a real time:
  //  unlock: { mode:"fixed", startISO:"2026-06-27T00:00:00", intervalMinutes:120 } )

  music: { enabled: true, ownTrackUrl: "" },  // paste a direct .mp3 URL to use your own song

  /* ── PASTE YOUR FIREBASE CONFIG HERE ──
     Firebase console → Project settings → "Your apps" → web app → config.
     Then in Firestore, create the database and allow read+create on the
     "guestbook" collection (rules sample is in the chat).
     Leave as null to run in local demo mode (same-device only).            */
  firebase: {
    apiKey: "AIzaSyBFo8BRjoJvLFF0nSt4ZZPVkyN0UGcKjPc",
    authDomain: "virtual-card-18da9.firebaseapp.com",
    projectId: "virtual-card-18da9",
    storageBucket: "virtual-card-18da9.firebasestorage.app",
    messagingSenderId: "690377525321",
    appId: "1:690377525321:web:1693f2139768e8c8ded798",
    measurementId: "G-V1X935EE55"
  }
};
