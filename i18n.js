// 🌐 North Echo Language System (FI default, EN & TR)
window.I18N = {
  fi: {
    nav_products: "Tuotteet",
    nav_instagram: "Instagram",
    nav_cart: "Kori",
    nav_about: "Tietoa meistä",
    hero_title: "North Echo · Minimalistinen luksus",
    hero_sub: "Suunniteltu Suomessa. Premium-silhuetit mustissa ja neutraaleissa sävyissä.",
    cta_shop: "Aloita ostokset",
    categories: "Kategoriat",
    about_title: "Tietoa North Echosta",
    about_text: "North Echo tarjoaa minimalistisia, korkealaatuisia vaatteita. Suunnittelemme mallistomme Suomessa ja painotamme mustien ja neutraalien sävyjen harmoniaa.",
    footer_note: "© {year} North Echo — Helsinki, Suomi"
  },
  en: {
    nav_products: "Products",
    nav_instagram: "Instagram",
    nav_cart: "Cart",
    nav_about: "About Us",
    hero_title: "North Echo · Minimal Luxury Apparel",
    hero_sub: "Designed in Finland. Premium silhouettes in black & neutral tones.",
    cta_shop: "Shop Now",
    categories: "Categories",
    about_title: "About North Echo",
    about_text: "North Echo delivers minimalist, high-quality apparel. Designed in Finland, focusing on black and neutral tones with modern prints.",
    footer_note: "© {year} North Echo — Helsinki, Finland"
  },
  tr: {
    nav_products: "Ürünler",
    nav_instagram: "Instagram",
    nav_cart: "Sepet",
    nav_about: "Hakkımızda",
    hero_title: "North Echo · Minimal Lüks Giyim",
    hero_sub: "Finlandiya’da tasarlandı. Siyah ve nötr tonlarda modern silüetler.",
    cta_shop: "Alışverişe Başla",
    categories: "Kategoriler",
    about_title: "North Echo Hakkında",
    about_text: "North Echo, minimalist ve yüksek kaliteli giyim ürünleri sunar. Finlandiya’da tasarlanmış koleksiyonlarımızda siyah ve nötr tonlara odaklanıyoruz.",
    footer_note: "© {year} North Echo — Helsinki, Finlandiya"
  }
};

// 🔁 Translation logic
function t(key) {
  const lang = localStorage.getItem("lang") || "fi";
  const dict = I18N[lang] || I18N.fi;
  return (dict[key] || key).replace("{year}", new Date().getFullYear());
}

function applyAll() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
}

// 🌍 Language switcher
document.addEventListener("DOMContentLoaded", () => {
  const sel = document.querySelector(".lang select");
  const current = localStorage.getItem("lang") || "fi";
  sel.value = current;
  applyAll();

  sel.addEventListener("change", e => {
    const newLang = e.target.value;
    localStorage.setItem("lang", newLang);
    applyAll();
  });
});
