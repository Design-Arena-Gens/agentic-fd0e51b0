import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Prep The Project",
    description:
      "Lint, run tests, and generate a production build locally so you ship a working artifact. Keep `.env` ready for any secrets."
  },
  {
    number: "02",
    title: "Connect Hosting",
    description:
      "Pick a host that fits your stack. Vercel is ideal for Next.js, while Netlify, GitHub Pages, and Cloudflare Pages cover other Jamstack setups."
  },
  {
    number: "03",
    title: "Automate Deploys",
    description:
      "Create a production branch and wire up CI/CD. Each push should trigger linting, tests, and deployment to your host automatically."
  },
  {
    number: "04",
    title: "Verify & Monitor",
    description:
      "Smoke-test the production URL, set up uptime monitoring, and enable error tracking so regressions are spotted fast."
  }
];

const resources = [
  {
    title: "Vercel CLI Deploy",
    description: "One command to ship your Next.js or static site with preview and production targets.",
    href: "https://vercel.com/docs/deployments/overview"
  },
  {
    title: "GitHub Actions Template",
    description: "Drop-in workflow file for automated builds and Vercel deploys from your `main` branch.",
    href: "https://github.com/vercel/vercel-action"
  },
  {
    title: "DNS Cutover Checklist",
    description: "Everything you need to point your custom domain and avoid downtime during launch.",
    href: "https://vercel.com/docs/projects/domains/add-a-domain"
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Publish in minutes</p>
          <h1>Launch the site you already finished</h1>
          <p className="subtitle">
            Follow the proven launch checklist, wire up automated deploys, and deliver a polished production release
            without guesswork.
          </p>
          <div className="cta-row">
            <Link className="button button--primary" href="#playbook">
              View launch playbook
            </Link>
            <Link className="button button--ghost" href="#resources">
              Explore resources
            </Link>
          </div>
        </div>
        <div className="hero__card">
          <p className="card-title">Instant Vercel Ship</p>
          <p className="card-description">
            Run <code>vercel deploy --prod</code> from your project root. Vercel auto-detects your framework, builds,
            and ships your site live in under a minute.
          </p>
          <div className="card-footer">
            <span className="status-dot" aria-hidden />
            <span>Production ready</span>
          </div>
        </div>
      </section>

      <section className="panel" id="playbook">
        <div className="panel__header">
          <h2>Launch playbook</h2>
          <p>Four essential moves that turn a finished site into a reliable production deployment.</p>
        </div>
        <div className="grid grid--steps">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <span className="step-card__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel panel--dark">
        <div className="panel__header">
          <h2>Quick deploy script</h2>
          <p>Drop this into your CI or run it locally to promote the production build.</p>
        </div>
        <pre className="code-block">
{`#!/usr/bin/env bash
set -euo pipefail

npm install
npm run lint
npm run build
vercel deploy --prod --yes`}
        </pre>
      </section>

      <section className="panel" id="resources">
        <div className="panel__header">
          <h2>Helpful resources</h2>
          <p>Guides, templates, and tools to streamline your launch.</p>
        </div>
        <div className="grid grid--resources">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <Link href={resource.href} target="_blank" rel="noreferrer">
                Open guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>
          Need a final check? Validate performance with <Link href="https://pagespeed.web.dev/">PageSpeed Insights</Link>{" "}
          before sharing the link.
        </p>
      </footer>
    </main>
  );
}
