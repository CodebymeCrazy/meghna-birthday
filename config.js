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
    "Hi Meghna, first of all happy birthday. I hope today is good to you, and that you enjoy your day. I wish you all the happiness and success you deserve... bcs you're one of the most amazing person i know.. You think soo much about everyone you care about always.... you have such a kind heart.",
    "I was just realizing how long it's been since we first met online... i guess it was around 2019... and in all that time.. i've watched you grow soo much!! you're a completely different person now... in a good way... i feel so grateful, so blessed, that i got to meet you and call you my sister.. i know we have never met in person.. but still you've cared for me... you've listened.. every time i ranted about something falling apart, or about how fucked up life is.. you never judged me. You're part of my family, Meghna. I want to take such good care of you and am holding onto that promise. I'll keep working at it, so that one day you can feel proud of me.",
    "I know life hasn't been kind lately, but listen to me.. you have to stay strong okay? Don't you ever let life build a wall btwn you and your dreams. don't let any of it change who you are... i know it feels so hard but you know god is with you, always watching over you.",
    "i honestly can't imagine anyone being a better sister to me than you silly. Thankyou...for the things you sent me, for all the care nd love. I keep you in my prayers always... and please remember, you never have to suffer alone in anything. I'm here, I've got your back. I might not be that strong right now, but I will be and even now you can still lean on me.",
    "Just keep being yourself okay? you have grown into such a wonderful woman. Take good care of yourself.",
    "I believe in you."
  ],

  signature: "- with love, Yash",
  meta: "your brother · since ",   // the year is added automatically

  // 6 stars, left → right. Index 3 is HER star (the bright rose one).
  // The two marked REAL are where a specific true memory will hit hardest —
  // swap in something only the two of you share.
  memories: [
    { when: "2019",                what: "Two strangers on the internet. I had no idea you'd turn into family." },
    { when: "every late night",    what: "You stayed up just so I wouldn't be alone with whatever I was carrying." },           // REAL — a real night?
    { when: "every time i ranted", what: "I'd tell you how falling-apart everything felt, and you never once judged me." },
    { when: "you",                 what: "The brightest star here. Not a sister by blood the one I got to choose." },
    { when: "the little things",   what: "The things you sent me, the care, the love. I keep you in my prayers, always." },     // REAL — name one thing she sent?
    { when: "today",               what: "You've grown into such a wonderful woman. I'm so proud I know you." }
  ],

  // 7 notes that unlock one at a time through the day
  hourlyNotes: [
    "Good morning, birthday girl. It's your day. ✦",
    "Just a reminder between things: you are so deeply loved.",
    "Whatever you're doing right now- you deserve every bit of the joy.",
    "Five-ish years of knowing you, and you still amaze me.",
    "Be soft with yourself today. You've earned the rest.",
    "Eat the cake. All of it. No notes. (I mean it.)",
    "As today ends.. thank you for being you, Meghna. Always. ✦"
  ],
  unlock: { mode: "fromFirstOpen", intervalMinutes: 60 },
  // (or anchor to a real time:
  //  unlock: { mode:"fixed", startISO:"2026-06-27T00:00:00", intervalMinutes:120 } )

  // Shows on screen AFTER she blows out the candle — the emotional peak.
  finale: "I won't be able to fix all of your problems... but you'll never have to face them alone. I may not have all the answers, but I have all the time in the world for you. No matter what. ✦",

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
