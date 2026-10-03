# Mom’s birthday adventure

Static HTML/CSS/vanilla JavaScript. No installation, build, external assets, analytics, or server is required. Publish the repository root through GitHub Pages.

## Files
- index.html: semantic shell.
- style.css: responsive illustrations and reduced-motion styles.
- content.js: 2026 dates, 28 stops, content, DEV_MODE.
- progression.js: local calendar dates, sequential eligibility, resilient localStorage.
- games.js: reusable gentle game mechanics and three-stage finale.
- script.js: screens, original inline SVG scenery, map, developer panel.

## Content still needed
CONTENT.title is Birthday Adventure. CONTENT.birthdayMessage contains a short letter using only the supplied sentiments, including missing Mom while away at college. Both can be edited in content.js. The approved route now uses 28 real Goa places. Optional researched cultural finds are defined in EGGS, with source links. Occasional fact cards use the same content. Church stops remain at 5, 10, 15, 20, 25; all buildings are storybook interpretations, rather than exact architectural replicas. No personal memories are invented. No external artwork or audio is needed.

## Progress
Normal key: goaBirthdayAdventure_v1. Data contains completed IDs, intro, ending. Progress stays in this browser/device and does not sync. Calendar dates are local, with October 3–30, 2026 inclusive. The first incomplete eligible level can be played; future dates stay locked. Earlier eligible games can be completed in order after returning later. Completed games can be replayed. The finale requires all earlier games and October 30 or later. A static site trusts the device clock; this is not server-enforced security.

## Developer testing
In content.js change DEV_MODE to true locally, refresh, and use the Development only panel. It uses goaBirthdayAdventure_dev_v1, separate from normal progress. Enter a simulated date and comma-separated completed IDs, then Apply. Complete 1–27 prepares the finale; Clear development progress resets that test save. Use real date removes the simulated date. Restore DEV_MODE=false before giving the gift. Simulated dates last only for the loaded page.

Test October 30: set 2026-10-30, choose Complete 1–27, then play 28. Test a future lock: set 2026-10-29 with 1–27 complete; 28 stays locked. Catch-up: set 2026-10-10 with 1,2,3 complete; only 4 is playable until completed. To clear normal progress deliberately, use browser site-data controls, or console localStorage.removeItem('goaBirthdayAdventure_v1') then refresh.

Required progression scenarios: Oct 3 / none → 1; Oct 10 / 1–3 → 4; Oct 10 / 1–7 → 8; Oct 20 / 1–18 → 19 remains date-locked until Oct 21 (the original scenario conflicts with the calendar); Oct 29 / 1–26 → 27 and 28 future; Oct 30 / 1–26 → 27 and 28 blocked; Oct 30 / 1–27 → 28; Oct 29 / 1–27 → 28 future; all complete → ending remains accessible.

## Mom character
An original articulated SVG in script.js is inspired by the supplied photo: dark hair and a cream outfit; glasses and pearls were removed at your request. CSS animates walking legs and arms, waving, and blinking; reduced motion disables animation. The original photo is not stored in or shipped with the site. The character appears in scenery and at the currently playable map stop. The real-place route was approved and implemented.

## Goa discoveries
43 distinct finds are placed at 56 daily-scene locations, plus 3 on the home scene, 2 on the map, and 2 at the finale (63 placements). They include food, crafts, music/theatre, crops, and activities. Tap illustrated details or use Look a little closer to highlight them. Little finds reopens discovered cards and filters by category. Discoveries save in the same versioned key, independently of game completion, and older saves migrate without erasing completed games. The original photo is not distributed; Mom still has no glasses or pearls.

Each find has a public official source URL in content.js, also available through its card’s About this discovery section. The cultural details describe Goa generally; their placement is not a claim that an item is specific to a beach or church. No recordings or external images are used.
