# VoiceOffice AI Coach

Design a desktop-first, ultra-sleek dark mode Web Application UI for "VoiceOffice" — an AI-powered sales call flight simulator and coaching dashboard.

LAYOUT ARCHITECTURE:

- Navigation: Persistent, fixed-position left sidebar (64px collapsed icons or 240px expanded). It contains:

  * Brand Logo ("VoiceOffice")

  * 🏠 Lobby / Practice Room

  * 📊 Simulation History

  * ⚙️ Settings

  * Bottom Section: Remaining Minutes Counter Badge ("24 / 30 Mins Left") and User Profile Avatar.

- Main Workspace: Clean, spacious canvas with rounded containers and responsive grid layout.

COLOR PALETTE & STYLING:

- Theme: Premium Dark Mode (#0B0F17 primary background, #161F2E card backgrounds, #1E293B card borders).

- Accent Colors: Vibrant Emerald Green (#00E599) for deal wins, Soft Red/Coral (#FF4D4D) for revenue leaks/confidence drops, Muted Amber (#F59E0B) for opportunities.

- Typography: Modern sans-serif (Inter or Geist), high legibility, clean hierarchies.

PAGE 1: LOBBY / PRACTICE ROOM DASHBOARD

- Top Section: "Quick Practice Room" hero card mimicking a Google Meet / Zoom style launcher.

  * Dropdown 1: Select Prospect Persona (e.g., "Skeptical Enterprise Procurement", "Price-Sensitive Agency Client").

  * Dropdown 2: Target Deal Yield (e.g., "R50,000").

  * Primary Action: Prominent CTA button "📞 Join Simulation Room" with subtle green glow effect.

- Bottom Section: "Recent Simulation History" cards showing past mock calls.

  * Each card displays: Status Badge (🟢 Deal Won / 🔴 Revenue Leaked), Scenario Title, Date/Duration, Final Yield amount, and a button "📊 Open Call Intelligence Report".

PAGE 2: CALL INTELLIGENCE REPORT & CHAT COACH

- Upper Half: Call Performance Summary.

  * "Expected Yield Output" card displaying Deal Target vs Leakage vs Final Yield.

  * Compact Metric Grid displaying 6 key pacing stats (Talk-to-Listen Ratio, Monologue Duration, Objection Pause, Question Density, Value Built %, Confidence Score).

  * Audio Waveform Playback Bar with color-coded event markers on the timeline (Green = Win, Red = Leak).

- Lower Half / Slide-over Drawer: Interactive "Ask AI Coach" ChatGPT-style chat widget.

  * Sleek input box at the bottom: "Ask AI Coach about this meeting..."

  * Compact chat bubble UI showing tactical sales feedback, alternative scripts, and specific timestamp references.

STRICT DESIGN RULES:

- No real-time coaching prompts or live hints visible on call screens (pure simulation focus).

- High visual scannability, no text walls or dense data tables.

- Modern rounded borders (12px to 16px border-radius), subtle drop shadows, clean micro-interactions.

# Lunexweb - Web Development Agency

A modern web application built with React, TanStack Router, and Tailwind CSS.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
