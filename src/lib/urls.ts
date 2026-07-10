// Cross-property URLs are baked at build time as fallbacks (SEO, no-JS). Nav
// links with data-rf-link are rewritten at runtime from window.__RACKFLOW_ENV
// (see public/apply-env-links.js and Dockerfile env injection).
function normalizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}

function appEnv(): string {
  return import.meta.env.PUBLIC_APP_ENV || 'production';
}

function appUrl(envUrl: string | undefined, localUrl: string, productionUrl: string): string {
  if (envUrl) {
    return normalizeUrl(envUrl);
  }

  if (appEnv() === 'development' || appEnv() === 'docker') {
    return localUrl;
  }

  return productionUrl;
}

export const HOME_URL = appUrl(
  import.meta.env.PUBLIC_HOME_URL,
  'http://localhost:3002',
  'https://www.rackflow.app',
);
export const BLOG_URL = appUrl(
  import.meta.env.PUBLIC_BLOG_URL,
  'http://localhost:3004/blog',
  'https://rackflow.app/blog',
);
export const DOCS_URL = appUrl(
  import.meta.env.PUBLIC_DOCS_URL,
  'http://localhost:3003',
  'https://docs.rackflow.app',
);
export const WEB_APP_URL = appUrl(
  import.meta.env.PUBLIC_WEB_APP_URL,
  'http://localhost:3000',
  'https://app.rackflow.app',
);

export const demoUrl = () => 'https://calendly.com/hannshaustein/demo';
export const loginUrl = () => `${WEB_APP_URL}/login?source=docs`;
export const signupUrl = () => `${WEB_APP_URL}/signup?source=docs`;
