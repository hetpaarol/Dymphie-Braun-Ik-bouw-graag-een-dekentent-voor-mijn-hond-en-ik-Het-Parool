(function(window, document, undefined) {

"use strict";var ClientApi=function(){var c={},l=null,u=!1,s=null;function n(t,e){var n,i,a,o=null,r=null,d=null;o=t[0]||"",r=t[1],d=t[2],n=t[1],"event"===(o=o.toLowerCase())?"login"===n&&(t[1]="login-done",u=!0,y(),p(),v(l)):"ready"===o||"update"===o?("function"==typeof r&&(a=r,"ready"===(i=o)&&!0===window._privacy.ready?a():(void 0===s[i]&&(s[i]=[]),s[i].push(a))),t[1]=o+"-done"):(t.done=t.done||!1,!1===t.done&&(!0!==e&&l.push(t),!0===c[o]?(r(),t.done=!0):"function"==typeof d&&d()))}function v(t){for(var e=0;e<t.length;e++)n(t[e],!0)}function y(t){var e=null;e=(t=t||"").split("|"),c.functional=!0,(c.analytics=!0)===u?(c.socialmedia=!0,c.targetedadvertising=!0,c.contentrecommendation=!0):(c.socialmedia=-1!==e.indexOf("social_media"),c.targetedadvertising=-1!==e.indexOf("targeted_advertising"),c.contentrecommendation=-1!==e.indexOf("content_recommendation")),window.dataLayer.push({event:"privacySettings",privacy:{functional:c.functional,analytics:c.analytics,recommendations:c.contentrecommendation,targetedAdvertising:c.targetedadvertising,social:c.socialmedia}}),window._privacy.settings=c,s.ready||i("update")}function p(){for(var t=document.querySelectorAll("[data-privacy-src]"),e=0,n=null,i=null,a=null;e<t.length;e++)i=(i=(n=t[e]).getAttribute("data-privacy-category")||"").toLowerCase(),a=n.getAttribute("data-privacy-src")||"",!0===c[i]&&(n.setAttribute("src",a),n.removeAttribute("data-privacy-category"),n.removeAttribute("data-privacy-src"))}function i(t){var e=s[t],n=0;if(void 0!==e)for(;n<e.length;n++)(0,e[n])()}return{init:function(){window.dataLayer=window.dataLayer||[],l=window._privacy||[],c={},u=!1,s={},window._privacy={push:n},function(){for(var t=document.cookie.split(";"),e=0,n=null,i=null,a=null,o=!1;e<t.length;e++)(n=(n=t[e]).split("="))[0]&&n[1]&&(i=n[0].trim(),a=n[1].trim(),"pws"===i&&(o=!0,y(a)));!1===o&&y()}(),p(),v(l),document.addEventListener("DOMContentLoaded",p),i("ready"),delete s.ready,window._privacy.ready=!0}}}();ClientApi.init();
}(window, document));
