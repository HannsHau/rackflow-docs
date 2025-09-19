(function(){
  var CONSENT_KEY='marketing_consent_v1';
  function getCookie(name){
    var value='; '+document.cookie;var parts=value.split('; '+name+'=');if(parts.length===2) return parts.pop().split(';').shift();
  }
  function setCookie(name,value,days){
    var expires=''; if(days){ var date=new Date(); date.setTime(date.getTime()+days*24*60*60*1000); expires='; expires='+date.toUTCString(); }
    var hostname=window.location&&window.location.hostname?window.location.hostname:'';
    var isRackflow=/(^|\.)rackflow\.app$/.test(hostname);
    var domainAttr=isRackflow?'; domain=.rackflow.app':'';
    document.cookie=name+'='+value+expires+'; path=/'+domainAttr+'; SameSite=Lax';
  }
  function shouldShow(){
    var v=getCookie(CONSENT_KEY);
    if(v==='accepted'||v==='rejected') return false;
    try{ var ls=localStorage.getItem(CONSENT_KEY); return !(ls==='accepted'||ls==='rejected'); }catch(e){ return true; }
  }
  function render(){
    if(!shouldShow()) return;
    var wrap=document.createElement('div');
    wrap.className='consent-banner';
    wrap.setAttribute('role','dialog');
    wrap.setAttribute('aria-live','polite');
    wrap.setAttribute('aria-label','Cookie consent');
    var homeUrl=(window.__RACKFLOW_ENV&&window.__RACKFLOW_ENV.PUBLIC_HOME_URL)||'http://localhost:3002';
    wrap.innerHTML=`
      <div class="cookie-consent-banner">
        <div class="cookie-consent-content">
          <p>
            We use optional cookies to analyze website traffic. See our
            <a href="${homeUrl}/privacy" target="_self" rel="noopener noreferrer">Privacy Policy</a>.
          </p>
          <div class="cookie-consent-actions">
            <button class="button" data-action="reject" type="button">Reject</button>
            <button class="pri-button" data-action="accept" type="button">Accept</button>
          </div>
        </div>
      </div>
    `;
    function accept(){ setCookie(CONSENT_KEY,'accepted',365*2); try{ localStorage.setItem(CONSENT_KEY,'accepted'); }catch(e){} if(wrap&&wrap.parentNode){ wrap.parentNode.removeChild(wrap);} }
    function reject(){ setCookie(CONSENT_KEY,'rejected',365*2); try{ localStorage.setItem(CONSENT_KEY,'rejected'); }catch(e){} if(wrap&&wrap.parentNode){ wrap.parentNode.removeChild(wrap);} }
    wrap.addEventListener('click',function(e){ var t=e.target; if(!(t instanceof Element)) return; var action=t.getAttribute('data-action'); if(action==='accept') accept(); if(action==='reject') reject(); });
    document.body.appendChild(wrap);
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',render); } else { render(); }
})();


