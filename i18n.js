/* North Echo — i18n (FI default; EN & TR)
   Drop-in: Çalışması için tek şart sayfalarda data-i18n attribute’larının bulunması. */

/* 0) İlk ziyaret için FI'yı zorunlu kaydet (kalıcı) */
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "fi");
}

/* 1) Sözlükler */
window.I18N = {
  fi: {
    nav_products:"Tuotteet", nav_instagram:"Instagram", nav_cart:"Kori", nav_about:"Tietoa meistä",
    hero_title:"North Echo · Minimalistinen luksus",
    hero_sub:"Suunniteltu Suomessa. Premium-silhuetit mustissa ja neutraaleissa sävyissä.",
    cta_shop:"Aloita ostokset",
    categories:"Kategoriat",
    about_title:"Tietoa North Echosta",
    about_text:"North Echo tarjoaa minimalistisia, korkealaatuisia vaatteita. Suunnittelemme mallistomme Suomessa ja painotamme mustien ja neutraalien sävyjen harmoniaa. Neuleissa, paidoissa ja T-paidoissa käytämme moderneja painotekniikoita kestävän mukavuuden ja tyylin takaamiseksi.",
    search_placeholder:"Hae tuotteita…",
    sort_featured:"Järjestä: Suositellut", sort_low:"Hinta: Nouseva", sort_high:"Hinta: Laskeva",
    add_to_cart:"Lisää koriin", buy_now:"Osta nyt",
    cart_empty:"Ostoskorisi on tyhjä.", cart_subtotal:"Välisumma", cart_checkout:"Kassalle", continue_shopping:"Jatka ostoksia",
    checkout_title:"Kassa", checkout_sub:"Viimeistele tilaus — toimitus Suomessa (1–3 arkipäivää).",
    form_name:"Koko nimi", form_email:"Sähköposti (otamme yhteyttä)", form_address:"Osoite",
    form_city:"Kaupunki", form_postal:"Postinumero", form_country:"Maa", pay_now:"Siirry maksuun",
    footer_note:"© {year} North Echo — Helsinki, Suomi"
  },
  en: {
    nav_products:"Products", nav_instagram:"Instagram", nav_cart:"Cart", nav_about:"About Us",
    hero_title:"North Echo · Minimal Luxury Apparel",
    hero_sub:"Designed in Finland. Premium silhouettes in black & neutral tones.",
    cta_shop:"Shop Now",
    categories:"Categories",
    about_title:"About North Echo",
    about_text:"North Echo delivers minimalist, high-quality apparel. Designed in Finland, focusing on black and neutral tones. We use modern printing methods across sweaters, shirts and T-shirts for lasting comfort and style.",
    search_placeholder:"Search products…",
    sort_featured:"Sort: Featured", sort_low:"Price: Low to High", sort_high:"Price: High to Low",
    add_to_cart:"Add to Cart", buy_now:"Buy Now",
    cart_empty:"Your cart is empty.", cart_subtotal:"Subtotal", cart_checkout:"Checkout", continue_shopping:"Continue Shopping",
    checkout_title:"Checkout", checkout_sub:"Secure your order — shipping within Finland (1–3 business days).",
    form_name:"Full Name", form_email:"Email (we will contact you)", form_address:"Address",
    form_city:"City", form_postal:"Postal Code", form_country:"Country", pay_now:"Proceed to Payment",
    footer_note:"© {year} North Echo — Helsinki, Finland"
  },
  tr: {
    nav_products:"Ürünler", nav_instagram:"Instagram", nav_cart:"Sepet", nav_about:"Hakkımızda",
    hero_title:"North Echo · Minimal Lüks Giyim",
    hero_sub:"Finlandiya’da tasarlandı. Siyah ve nötr tonlarda modern silüetler.",
    cta_shop:"Alışverişe Başla",
    categories:"Kategoriler",
    about_title:"North Echo Hakkında",
    about_text:"North Echo minimalist ve yüksek kaliteli kıyafetler sunar. Finlandiya’da tasarlanan koleksiyonlarımızda siyah ve nötr tonlara odaklanırız. Kazak, gömlek ve tişörtlerde modern baskı teknikleriyle uzun ömürlü konfor ve stil hedefleriz.",
    search_placeholder:"Ürün ara…",
    sort_featured:"Sırala: Öne Çıkan", sort_low:"Fiyat: Artan", sort_high:"Fiyat: Azalan",
    add_to_cart:"Sepete Ekle", buy_now:"Hemen Al",
    cart_empty:"Sepetiniz boş.", cart_subtotal:"Ara Toplam", cart_checkout:"Ödeme", continue_shopping:"Alışverişe Devam",
    checkout_title:"Ödeme", checkout_sub:"Siparişi güvenle tamamlayın — Finlandiya içi kargo (1–3 iş günü).",
    form_name:"Ad Soyad", form_email:"E-posta (sizinle iletişim kuracağız)", form_address:"Adres",
    form_city:"Şehir", form_postal:"Posta Kodu", form_country:"Ülke", pay_now:"Ödemeye Geç",
    footer_note:"© {year} North Echo — Helsinki, Finlandiya"
  }
};

/* 2) Yardımcılar */
function currentLang() {
  // null/undefined ise FI; boş string set edilmişse de FI'ya çevir
  const val = localStorage.getItem("lang");
  return (val === null || val === undefined || val === "") ? "fi" : val;
}

function t(key){
  const dict = I18N[currentLang()] || I18N.fi;
  const raw = dict[key] ?? key;
  return String(raw).replace("{year}", new Date().getFullYear());
}

function applyAll(){
  // Metinler
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  // Placeholder'lar
  document.querySelectorAll('input[type="search"]').forEach(el=>{
    el.placeholder = t("search_placeholder");
  });
  // Footer (id ile atanmışsa)
  const foot = document.getElementById("footerNote");
  if (foot) foot.textContent = t("footer_note");
  // Dropdown seçili değer
  const sel = document.querySelector(".lang select");
  if (sel) sel.value = currentLang();
}

/* 3) Olaylar — DOM hazır olunca çalıştır */
document.addEventListener("DOMContentLoaded", ()=>{
  // İlk açılışta uygula
  applyAll();

  // Dil değiştirme — TEK bağlayıcı (çift bağlamayı kaldırdık)
  const sel = document.querySelector(".lang select");
  if (sel) {
    sel.value = currentLang();
    sel.addEventListener("change", (e)=>{
      localStorage.setItem("lang", e.target.value);
      applyAll(); // anında çevir
    });
  }
});

/* 4) Geriye uyumluluk için globaller */
window.currentLang = currentLang;
window.t = t;
