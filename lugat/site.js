(function(){var h=document.documentElement,l=null;
try{l=new URLSearchParams(location.search).get('lang')}catch(e){}
if(!l){try{l=localStorage.getItem('lugat-lang')}catch(e){}}
if(!l){l=((navigator.language||'tr').toLowerCase().indexOf('tr')===0)?'tr':'en'}
function set(en){h.classList.toggle('l-en',en);h.lang=en?'en':'tr';
document.querySelectorAll('[data-set]').forEach(function(b){b.setAttribute('aria-pressed',String((b.getAttribute('data-set')==='en')===en))})}
set(l==='en');
document.addEventListener('DOMContentLoaded',function(){set(h.classList.contains('l-en'))});
document.addEventListener('click',function(e){var b=e.target.closest('[data-set]');if(!b)return;var en=b.getAttribute('data-set')==='en';
set(en);try{localStorage.setItem('lugat-lang',en?'en':'tr')}catch(err){}})})();
