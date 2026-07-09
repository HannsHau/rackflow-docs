// Cross-property URLs are resolved at build time for Astro pages. Use local
// defaults in development/docker, and production defaults otherwise, while
// still allowing explicit PUBLIC_* overrides per environment.
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
