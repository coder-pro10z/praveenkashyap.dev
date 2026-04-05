You are an expert frontend developer specializing in modern, premium SaaS UI and dark-mode portfolios. Your task is to refactor an existing portfolio project card component into a highly polished, visual-first layout.

### TASK
Write the HTML and CSS (or relevant component code if using a framework like React/Angular) for a single, premium project card based on the exact specifications below. 

### 1. STRICT LAYOUT & CSS CONSTRAINTS

**Global Card Styles:**
* **Background:** Dark matte background (e.g., `#1e1e1e` or `#0a0a0a`).
* **Border/Effect:** Soft glassmorphism effect, rounded corners (e.g., `12px`), and a very subtle drop shadow or inner border to make it pop against a dark canvas.
* **Spacing:** Outer spacing from screen edges is allowed, but strictly NO unnecessary inner padding around the image. Keep vertical padding in the text body tight and well-balanced.

**Image Container (CRITICAL - DO NOT DEVIATE):**
* The card media container MUST be perfectly square (`aspect-ratio: 1 / 1`).
* It must span `width: 100%` of the card.
* There must be absolutely ZERO padding or margin inside this container. The image must touch the top, left, and right edges of the card.
* The `<img>` tag inside MUST use `object-fit: contain;`, `width: 100%;`, and `height: 100%;`. 
* *Do not use `cover` or crop the image in any way.* The entire system diagram must be fully visible. Use a dark fallback background (like `#000`) for the container so any blank space matches the diagram's background.

**Typography & Elements:**
* **Title:** Bold, high-contrast white, modern sans-serif (e.g., `1.5rem`).
* **Subtitle:** Slightly muted gray, smaller than the title.
* **Summary:** Soft white tone, italicized, elegant spacing, limited to a single line visually.
* **Bullets:** Custom styled list. Compact, readable, `1.4` line height. Max 2 bullets.
* **Tech Stack Tags:** Pill-shaped `<span>` elements, centered, with a subtle dark background (e.g., `#333`) and text color matching the primary white.
* **CTA Button:** Full-width block link, centered text. Transparent background with a subtle blue neon border (`1px solid #007bff`) and text color. On hover, background fills with the subtle blue.

### 2. EXACT CONTENT TO INJECT

Please populate the HTML structure with the following exact content:

* **Image Source:** `assets/images/project-diagram.png` *(Note: Ensure the source asset used has no connection line drawn between 'Cheatsheet' and 'UserProgress/Analytics')*.
* **Project Title:** FullStackMastery
* **Subtitle:** Full Stack · .NET Core + Angular
* **Summary:** A comprehensive full-stack assessment platform tailored for .NET and Angular developers.
* **Highlights (Bullets):**
    * Architected a modular ASP.NET Core backend utilizing Clean Architecture and SOLID principles to efficiently manage question banks, file parsing, and user progress analytics.
    * Developed a dynamic Angular frontend featuring instant-feedback mock quizzes, timed professional assessments, and curated technical study guides.
* **Tech Stack Pills:** [ .NET Core ] [ Angular ] [ C# ] [ SQL Server ]
* **CTA Button:** View Repository

### 3. OUTPUT REQUIREMENTS
Provide clean, semantic HTML and modular CSS. Do not include any generic placeholder text, do not add long heavy paragraphs, and ensure the CSS strictly enforces the 1:1 `object-fit: contain` rule for the image.