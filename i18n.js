
window.I18N = {
  en:{nav_products:"Products",nav_instagram:"Instagram",nav_cart:"Cart",nav_about:"About Us",hero_title:"North Echo · Minimal Luxury Apparel",hero_sub:"Designed in Finland. Premium silhouettes in black & neutral tones.",cta_shop:"Shop Now",categories:"Categories",about_title:"About North Echo",about_text:"North Echo delivers minimalist, high‑quality apparel. Based in Finland, we focus on black and neutral tones with clean silhouettes. We use modern printing methods for sweaters, shirts and T‑shirts to ensure lasting comfort and style.",search_placeholder:"Search products…",sort_featured:"Sort: Featured",sort_low:"Price: Low to High",sort_high:"Price: High to Low",add_to_cart:"Add to Cart",buy_now:"Buy Now",footer_note:"© {year} North Echo — Helsinki, Finland",cart_empty:"Your cart is empty.",cart_subtotal:"Subtotal",cart_checkout:"Checkout",continue_shopping:"Continue Shopping",checkout_title:"Checkout",checkout_sub:"Secure your order — shipping within Finland (1–3 business days).",form_name:"Full Name",form_email:"Email (we will contact you)",form_address:"Address",form_city:"City",form_postal:"Postal Code",form_country:"Country",pay_now:"Proceed to Payment"},
  tr:{nav_products:"Ürünler",nav_instagram:"Instagram",nav_cart:"Sepet",nav_about:"Hakkımızda",hero_title:"North Echo · Minimal Lüks Giyim",hero_sub:"Finlandiya’da tasarlandı. Siyah ve nötr tonlarda temiz silüetler.",cta_shop:"Alışverişe Başla",categories:"Kategoriler",about_title:"North Echo Hakkında",about_text:"North Echo minimalist, kaliteli kıyafetler sunar. Finlandiya merkezli markamız, siyah ve nötr tonlara odaklanır. Kazak, gömlek ve tişörtlerde modern baskı teknikleriyle uzun ömürlü konfor ve stil hedefleriz.",search_placeholder:"Ürün ara…",sort_featured:"Sırala: Öne Çıkan",sort_low:"Fiyat: Artan",sort_high:"Fiyat: Azalan",add_to_cart:"Sepete Ekle",buy_now:"Hemen Al",footer_note:"© {year} North Echo — Helsinki, Finlandiya",cart_empty:"Sepetiniz boş.",cart_subtotal:"Ara Toplam",cart_checkout:"Ödeme",continue_shopping:"Alışverişe Devam",checkout_title:"Ödeme",checkout_sub:"Siparişinizi güvenle tamamlayın — Finlandiya içi kargo (1–3 iş günü).",form_name:"Ad Soyad",form_email:"E‑posta (sizinle iletişim kuracağız)",form_address:"Adres",form_city:"Şehir",form_postal:"Posta Kodu",form_country:"Ülke",pay_now:"Ödemeye Geç"},
  fi:{nav_products:"Tuotteet",nav_instagram:"Instagram",nav_cart:"Kori",nav_about:"Tietoa meistä",hero_title:"North Echo · Minimalistinen luksus",hero_sub:"Suunniteltu Suomessa. Premium‑silhuetit mustissa ja neutraaleissa sävyissä.",cta_shop:"Aloita ostokset",categories:"Kategoriat",about_title:"Tietoa North Echosta",about_text:"North Echo tarjoaa minimalistisia, laadukkaita vaatteita. Suomessa toimiva brändimme keskittyy mustiin ja neutraaleihin sävyihin. Käytämme moderneja painomenetelmiä neuleissa, paidoissa ja T‑paidoissa kestävän mukavuuden ja tyylin takaamiseksi.",search_placeholder:"Hae tuotteita…",sort_featured:"Järjestä: Suositellut",sort_low:"Hinta: Nouseva",sort_high:"Hinta: Laskeva",add_to_cart:"Lisää koriin",buy_now:"Osta nyt",footer_note:"© {year} North Echo — Helsinki, Suomi",cart_empty:"Ostoskorisi on tyhjä.",cart_subtotal:"Välisumma",cart_checkout:"Kassalle",continue_shopping:"Jatka ostoksia",checkout_title:"Kassa",checkout_sub:"Viimeistele tilaus — toimitus Suomessa (1–3 arkipäivää).",form_name:"Koko nimi",form_email:"Sähköposti (otamme yhteyttä)",form_address:"Osoite",form_city:"Kaupunki",form_postal:"Postinumero",form_country:"Maa",pay_now:"Siirry maksuun"}
};
function t(key){
  const lang = localStorage.getItem('lang') || 'fi';
  const dict = (I18N[lang] || I18N.fi);
  return (dict[key] || key).replace('{year}', new Date().getFullYear());
}
function applyAll(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('input[type="search"]').forEach(el=>{
    el.placeholder = t('search_placeholder');
  });
  const sel = document.querySelector('.lang select');
  if (sel) sel.value = localStorage.getItem('lang') || 'fi';
}
document.addEventListener('DOMContentLoaded', ()=>{
  if(!localStorage.getItem('lang')) localStorage.setItem('lang','fi');
  applyAll();
  const sel = document.querySelector('.lang select');
  if(sel){
    sel.addEventListener('change', e=>{
      localStorage.setItem('lang', e.target.value);
      applyAll();
    });
  }
});
window.currentLang = ()=> localStorage.getItem('lang')||'fi';
