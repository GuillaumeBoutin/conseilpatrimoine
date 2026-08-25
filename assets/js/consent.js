(function () {
  var GTM_ID = "GTM-ML6QN98N";
  var CONSENT_KEY = "cookie-consent";

  function loadGA() {
    if (!GTM_ID) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
    document.head.appendChild(script);
  }

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }
  function getPrivacyHref() {
    var link = document.querySelector('a[href*="politique-de-confidentialite"]');
    return link ? link.getAttribute("href") : "#";
  }

  var banner = null;

  function showBanner() {
    if (banner) return;
    banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML =
      '<div class="cookie-banner-text">Nous utilisons des cookies de mesure d’audience uniquement avec votre accord, pour comprendre comment améliorer le site. <a href="' +
      getPrivacyHref() +
      '">En savoir plus</a>.</div>' +
      '<div class="cookie-banner-actions">' +
      '<button type="button" class="btn btn-outline" data-consent="refuse">Refuser</button>' +
      '<button type="button" class="btn btn-gold" data-consent="accept">Accepter</button>' +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector('[data-consent="accept"]').addEventListener("click", function () {
      setConsent("accepted");
      hideBanner();
      loadGA();
    });
    banner.querySelector('[data-consent="refuse"]').addEventListener("click", function () {
      setConsent("refused");
      hideBanner();
    });
  }

  function hideBanner() {
    if (banner) {
      banner.remove();
      banner = null;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var consent = getConsent();
    if (consent === "accepted") {
      loadGA();
    } else if (consent !== "refused") {
      showBanner();
    }

    var manageLink = document.getElementById("cookie-settings-link");
    if (manageLink) {
      manageLink.addEventListener("click", function (e) {
        e.preventDefault();
        showBanner();
      });
    }
  });
})();
