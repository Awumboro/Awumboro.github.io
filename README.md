# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


download and install node js: [text](https://nodejs.org/en/download)
Install modules: `npm install`
Start the Development Server: `npm run dev`
Build for Production: `npm run build`
Deploy to GitHub Pages: `npm run deploy`

refresh cache: `npx update-browserslist-db@latest`

Point GitHub Pages to the gh-pages Branch
On your repository page shown in the screenshot, click on the Settings tab located in the top menu bar (far right of Code, Issues, Pull requests, etc.).

In the left sidebar under the Code and automation section, click Pages.

Under Build and deployment:

Source: Select Deploy from a branch.

Branch: Open the dropdown that currently says None or main, and select gh-pages.

Folder: Leave the folder as / (root).

Click the Save button.

run: Deploy to GitHub Pages: `npm run deploy`
