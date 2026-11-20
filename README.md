# Shameer H B — Portfolio website

A responsive, static portfolio website built with HTML, CSS and vanilla JavaScript. It does not need a paid domain, hosting plan, database or build step.

## Preview locally

Open `index.html` in a browser. For a local server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish for free with GitHub Pages

1. Create a new public GitHub repository named `portfolio-website`.
2. Upload the contents of this folder to the repository root. Do not upload the enclosing folder itself.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. GitHub will publish the site at `https://shameerhb.github.io/portfolio-website/` after the Pages deployment completes.

No custom domain is required. GitHub Pages provides the address.

## Before publishing

- Check that the project descriptions and metrics are accurate and that the linked repositories are public.
- Add a professional email or LinkedIn link if you want recruiters to contact you outside GitHub.
- The Mini SWE Bench card is intentionally labelled in progress and has no repository link until its code is published.
- The website has no contact form or analytics. The privacy page describes the current static setup.

## Files

- `index.html` — portfolio content and page structure
- `styles.css` — responsive visual system
- `script.js` — navigation, active section, scroll reveal and tagline animation
- `404.html` — branded not found page
- `privacy.html`, `terms.html` — informational pages
- `assets/` — favicon and social preview image
