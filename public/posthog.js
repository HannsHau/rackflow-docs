(function(){
  // Bootstrap PostHog array if not present
  (function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split('.');2==o.length&&((t=t[o[0]]),(e=o[1])),(t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)));});}((p=t.createElement('script')).type='text/javascript'),(p.crossOrigin='anonymous'),(p.async=true),(p.src=s.api_host+'/static/array.js'),(r=t.getElementsByTagName('script')[0]).parentNode.insertBefore(p,r);var u=e;void 0!==a?(u=e[a]=[]):(a='posthog');u.people=u.people||[];u.toString=function(t){var e='posthog';return'posthog'!==a&&(e+='.'+a),t||(e+=' (stub)'),e;};u.people.toString=function(){return u.toString(1)+'.people (stub)';};o='capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys getNextSurveyStep onSessionId'.split(' ');for(n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a]);},e.__SV=1);})(document,window.posthog||[]);

  function getCookie(name){var value='; '+document.cookie;var parts=value.split('; '+name+'=');if(parts.length===2) return parts.pop().split(';').shift();}
  function hasConsent(){
    var CONSENT_KEY='marketing_consent_v1';
    var v=getCookie(CONSENT_KEY);
    if(v==='accepted') return true;
    try{ return (localStorage.getItem(CONSENT_KEY)||'')==='accepted'; }catch(e){ return false; }
  }

  function init(){
    if(!hasConsent()) return;
    var env=(window.__RACKFLOW_ENV&&typeof window.__RACKFLOW_ENV==='object')?window.__RACKFLOW_ENV:{};
    var key=env.POSTHOG_KEY; var host=env.POSTHOG_HOST;
    if(!key||!host) return;
    var hostname=(window.location&&window.location.hostname)||'';
    var isRackflow=/((^|\.)rackflow\.app$)/.test(hostname) || hostname==='localhost';
    // Initialize
    window.posthog.init(key,{
      api_host: host,
      cross_subdomain_cookie: isRackflow,
      cookie_domain: isRackflow?'.rackflow.app':undefined,
      defaults: '2025-05-24'
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init);
  }else{
    init();
  }
})();


