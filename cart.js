
const CART_KEY='ne_cart_v2';
function readCart(){ return JSON.parse(localStorage.getItem(CART_KEY)||'{}'); }
function writeCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function cartCount(){ const c=readCart(); return Object.values(c).reduce((a,b)=>a+b,0); }
function addToCart(id,qty=1){ const c=readCart(); c[id]=(c[id]||0)+qty; writeCart(c); updateCartBadge(); }
function setQty(id,qty){ const c=readCart(); if(qty<=0) delete c[id]; else c[id]=qty; writeCart(c); }
function removeFromCart(id){ const c=readCart(); delete c[id]; writeCart(c); }
function updateCartBadge(){ const el=document.querySelector('#cartCount'); if(el) el.textContent = cartCount(); }
