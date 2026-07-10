// Populated at deploy time (no secrets in repo). Defaults for local dev can be overridden.
window.__RACKFLOW_ENV = Object.assign({}, window.__RACKFLOW_ENV || {}, {
  PUBLIC_APP_ENV: "",
  PUBLIC_HOME_URL: "",
  PUBLIC_BLOG_URL: "",
  PUBLIC_DOCS_URL: "",
  PUBLIC_WEB_APP_URL: "",
  POSTHOG_KEY: "",
  POSTHOG_HOST: ""
});


