// Rewrites cross-property nav links from window.__RACKFLOW_ENV (injected at
// container start). Static HTML keeps production fallbacks for SEO/no-JS.
(function () {
  var env = window.__RACKFLOW_ENV;
  if (!env || typeof env !== 'object') return;

  function hasValue(key) {
    var value = env[key];
    return typeof value === 'string' && value.trim().length > 0;
  }

  var hasRuntimeConfig = ['PUBLIC_HOME_URL', 'PUBLIC_BLOG_URL', 'PUBLIC_DOCS_URL', 'PUBLIC_WEB_APP_URL'].some(hasValue);
  if (!hasRuntimeConfig) return;

  function pick(key, fallback) {
    return hasValue(key) ? env[key].trim() : fallback;
  }

  var home = pick('PUBLIC_HOME_URL', 'https://www.rackflow.app');
  var blog = pick('PUBLIC_BLOG_URL', 'https://rackflow.app/blog');
  var docs = pick('PUBLIC_DOCS_URL', 'https://docs.rackflow.app');
  var app = pick('PUBLIC_WEB_APP_URL', 'https://app.rackflow.app');

  var routes = {
    home: home,
    'home-product': home + '/#product-section',
    'home-pricing': home + '/pricing',
    'home-imprint': home + '/imprint',
    'home-privacy': home + '/privacy',
    'home-terms': home + '/terms',
    'home-security': home + '/security',
    blog: blog,
    docs: docs,
    'app-login': app + '/login?source=docs',
    'app-signup': app + '/signup?source=docs',
  };

  document.querySelectorAll('[data-rf-link]').forEach(function (el) {
    var key = el.getAttribute('data-rf-link');
    if (key && routes[key]) {
      el.href = routes[key];
    }
  });
})();
