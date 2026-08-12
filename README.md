# Anand Netralya

A static website for Anand Netralaya Eye Care Hospital.

## Setup

1. Install Git on Windows: https://git-scm.com/download/win
2. Open a terminal in this folder.
3. Initialize the repository:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

4. Create a GitHub repository and add it as remote:

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Update workflow

After changing any code or image:

```powershell
git add .
git commit -m "Update website"
git push
```

## Files included

- `index.html`
- `about.html`
- `service.html`
- `gallery.html`
- `contact.html`
- `your-visit.html`
- `appointment.html`
- `styles.css`
- `tailwind.config.js`
- `package.json`
- `package-lock.json`

## Notes

- If you want the site to update automatically on GitHub, use GitHub Pages or a deployment pipeline.
