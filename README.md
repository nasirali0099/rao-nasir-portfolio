# Rao Nasir — Portfolio Website

A responsive, dark-themed software engineering portfolio built with **HTML5, CSS3, Bootstrap 5, and vanilla JavaScript**. It is a static website and can be deployed to Vercel without a build step.

## Preview locally

1. Extract the ZIP file.
2. Open `index.html` in your browser, or run a local static server from this folder:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## Deploy to Vercel

### Option A — Deploy with GitHub (recommended)

1. Create a new GitHub repository, for example `rao-nasir-portfolio`.
2. Upload `index.html`, the `assets/` folder, and this README.
3. Sign in to [Vercel](https://vercel.com/), choose **Add New → Project**, and import the repository.
4. Keep the framework preset as **Other**. Leave build and output commands empty; the site is static.
5. Deploy.

### Option B — Deploy with Vercel CLI

Install and authenticate the Vercel CLI first, then run from this folder:

```bash
vercel
```

Follow the CLI prompts. For production deployment, run:

```bash
vercel --prod
```

## Before publishing

- Verify the experience timeline and current employment status.
- Confirm that every project description accurately reflects your personal contribution.
- Add your preferred professional email if you want direct email contact.
- Add a downloadable PDF CV if desired.
- Confirm that all public project URLs work and that you have permission to describe your contributions.

## Files

- `index.html` — page content and Bootstrap structure
- `assets/style.css` — visual styling, responsive layout, and dark theme
- `assets/script.js` — current year, navbar state, and mobile navigation

Bootstrap and Bootstrap Icons are loaded from public CDNs. A network connection is needed for those resources and the Google Fonts used by the page.
