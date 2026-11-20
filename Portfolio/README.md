# 🎨 Personal Portfolio

A responsive personal portfolio website built with **HTML**, **CSS** and **JavaScript**. It showcases who I am, what I can do and the projects I have built. Part of [M-Elphast-Academy-Core](../README.md), the main repository of Elphast Academy.

🔗 **Live demo:** [prince-qbit.github.io/M-Elphast-Academy-Core](https://prince-qbit.github.io/M-Elphast-Academy-Core/)


## ✨ Features

- **Fully responsive:** mobile-first layout that adapts to phones, tablets and 
- **Mobile navigation:** hamburger menu with smooth open/close
- **Dark / light theme toggle:** preference saved in `localStorage`
- **Smooth scrolling** with the active nav link highlighted as you scroll
- **Scroll-reveal animations** using the Intersection Observer API
- **Projects section:** cards linking to live demos and source code
- **Contact form** with client-side validation
- **Accessible and SEO-friendly:** semantic HTML, alt text, meta tags, keyboard navigation


## 🧰 Tech Stack

| Tool | Purpose |
| ---- | ------- |
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, Flexbox, Grid, custom properties, media queries |
| **JavaScript (ES6+)** | Interactivity, theme toggle, form validation |
| **Google Fonts** | Typography |
| **GitHub Pages** | Hosting |

No frameworks, build tools or dependencies.


## 🧠 Concepts Practiced

| Concept | Where to find it |
| ------- | ---------------- |
| **Semantic HTML** (`header`, `nav`, `main`, `section`, `footer`) | `index.html` |
| **CSS custom properties** (theming with variables) | `assets/css/style.css` |
| **Flexbox and CSS Grid layouts** | `assets/css/style.css` |
| **Responsive design with media queries** | `assets/css/style.css` |
| **DOM manipulation and events** | `assets/js/script.js` |
| **`localStorage`** (saving theme preference) | `assets/js/script.js` |
| **Intersection Observer API** (scroll animations, active links) | `assets/js/script.js` |
| **Form validation** | `assets/js/script.js` |
| **Accessibility basics** (ARIA labels, focus states, contrast) | `index.html`, `style.css` |


## 🗂️ Project Structure

```
personal-portfolio/
├── index.html                # single-page portfolio
├── README.md
└── assets/
    ├── css/
    │   └── style.css         # all styles, themes and breakpoints
    ├── js/
    │   └── script.js         # navigation, theme toggle, animations, form
    └── images/
        ├── profile.jpg       # your photo
        └── projects/         # project screenshots
```


## 📄 Page Sections

| Section | Purpose |
| ------- | ------- |
| **Hero** | Name, role, short tagline and call-to-action buttons |
| **About** | Short bio and photo |
| **Skills** | Technologies and tools I use |
| **Projects** | Featured work with screenshots and links |
| **Contact** | Contact form and social links |
| **Footer** | Copyright (year updated automatically) and quick links |


## 📱 Responsive Breakpoints

| Device | Width | Layout |
| ------ | ----- | ------ |
| **Mobile** | below 600px | Single column, hamburger menu |
| **Tablet** | 600px - 991px | Two-column grids |
| **Desktop** | 992px and above | Full navigation bar, multi-column grids |

Test responsiveness with your browser's DevTools (`F12`, then the device toolbar icon).



## 🎨 Customize It

1. **Your details:** edit the text in `index.html` (name, bio, skills, links).
2. **Colors:** change the variables at the top of `style.css`:
   ```css
   :root {
     --primary: #6c63ff;
     --bg: #ffffff;
     --text: #1a1a2e;
   }
   [data-theme="dark"] {
     --bg: #0f0f1a;
     --text: #f1f1f1;
   }
   ```
3. **Images:** replace `assets/images/profile.jpg` and add project screenshots in `assets/images/projects/`.
4. **Projects:** copy one project card in the Projects section and update its title, description and links.



## ✅ Pre-Launch Checklist

- [ ] Looks good at 320px, 768px and 1280px widths
- [ ] All links and buttons work
- [ ] Every image has meaningful `alt` text
- [ ] Page has a `<title>`, meta description and favicon
- [ ] Theme toggle works and remembers the choice
- [ ] Navigation works with the keyboard (Tab / Enter)
- [ ] Lighthouse scores of 90+ for Performance, Accessibility and SEO
- [ ] Images are compressed (under about 200 KB each)
- [ ] Personal details and project links are updated


## 🛠️ Troubleshooting

| Problem | Fix |
| ------- | --- |
| CSS or JS not loading | Check the file paths in `index.html` (`assets/css/style.css`). Paths are case-sensitive on GitHub Pages |
| Images missing after deploy | Match the exact file name and case (`Profile.jpg` is not `profile.jpg`) |
| Mobile menu does nothing | Confirm the script is loaded at the end of `<body>` or uses `defer` |
| Layout looks zoomed out on phones | Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in `<head>` |
| Theme resets on refresh | Check that the theme is saved and read from `localStorage` on page load |
| GitHub Pages shows a 404 | Set **Settings → Pages → Source** to **GitHub Actions** and check the workflow ran |


## 💡 Ideas to Extend

- Make the contact form work with [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com)
- Add a **typing animation** to the hero tagline
- Add a **blog** or **certificates** section
- Fetch your latest repos from the **GitHub API** and display them automatically
- Add **page transitions** and micro-interactions
- Make it a **PWA** (installable, works offline)
- Add a downloadable **resume (PDF)** button
