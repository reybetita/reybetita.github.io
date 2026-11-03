# Rey Noel Betita — Portfolio

A personal portfolio for software development, desktop applications, automation, and public health information systems.

Live site: [reybetita.github.io](https://reybetita.github.io/)

## Design

Warm paper colors, editorial typography, a personal portrait, and large application screenshots. The content stays visible without JavaScript; there are no autoplay effects or skill ratings. The layout adapts to mobile and respects reduced-motion preferences.

AgentMode leads the project showcase with its real application screenshot (sample project and synthetic Git history), technology stack, and implemented features. The showcase also includes Script Runner, SAB App, PMNP-ICT Help Center, and Claw Machine Saga.

## Local preview

From this folder, run `python -m http.server 8080`, then open `http://localhost:8080`.

The site uses plain HTML, CSS, and JavaScript. No package installation or build is required. Google Fonts is optional; system fonts provide the fallback when offline.

## Screenshots

Click a project image to open its gallery. Use the arrow buttons or left/right arrow keys to browse; Escape closes it and returns focus to the project. Without JavaScript, each image link opens the source screenshot.

Project galleries are defined in `script.js`; initial screenshots and all descriptive content are in `index.html`. AgentMode's screenshot is `src/agentmode-workspace.png`.

## Deployment

GitHub Pages serves the root of the `main` branch. Publish through the repository's normal commit/push workflow. Local changes do not update the live site until pushed.

© 2026 Rey Noel Betita. All rights reserved.
