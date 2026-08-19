# ✿ Kawaii Robux Cloud ✿

A cute, pastel, aggressively fake "free Robux generator" — built as a **prank**, not a scam.

It pretends to hack the cuteness firewall, stalls at 99% like every real fake generator does,
and then drops the punchline: *there is no generator, there never is.* The reveal doubles as a
tiny phishing-awareness PSA.

## What it does

1. Ask for a Roblox username and a Robux "bag"
2. A kawaii cat CAPTCHA ("tap every square with a cat")
3. Fake terminal + progress bar that theatrically freezes at 99%
4. **"it's a prank 💖"** — plus four real tips about Robux scams

## What it deliberately does NOT do

- No password, email, PIN, or payment field — the only input is a username
- No `fetch`, no form `action`, no analytics, no cookies, no `localStorage`
- Nothing leaves the browser tab; a refresh erases everything
- No Roblox branding, logos, or colors — it is a parody, unaffiliated with Roblox Corporation

## Run it

Zero dependencies, zero build step. Open `index.html`, or:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

Deploy anywhere static (GitHub Pages, Netlify, Vercel).

## Files

| File | What's in it |
| --- | --- |
| `index.html` | All four steps of the bit |
| `styles.css` | Pastel/kawaii theme, CSS cat, animations (respects `prefers-reduced-motion`) |
| `script.js` | Step flow, cat CAPTCHA, fake console, confetti |

## Please keep it a joke

Send it to friends. Don't strip the reveal, don't add a login form, and don't put it anywhere
that implies it's affiliated with Roblox. The whole point is that the punchline is the payload.
