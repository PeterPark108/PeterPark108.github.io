(function(){
var tabs=[].slice.call(document.querySelectorAll('.wtabs [role=tab]')),items=document.querySelectorAll('.wc[data-dom]');
function sel(b,focus){var f=b.dataset.f;tabs.forEach(function(t){var on=t===b;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});items.forEach(function(c){c.hidden=!(f==='all'||c.dataset.dom===f)});if(focus)b.focus()}
tabs.forEach(function(b,i){b.addEventListener('click',function(){sel(b)});b.addEventListener('keydown',function(e){var k=e.key,n=null;if(k==='ArrowRight')n=tabs[(i+1)%tabs.length];else if(k==='ArrowLeft')n=tabs[(i-1+tabs.length)%tabs.length];else if(k==='Home')n=tabs[0];else if(k==='End')n=tabs[tabs.length-1];if(n){e.preventDefault();sel(n,true)}})});
var lb=document.getElementById('lb'),cur=null,opener=null;
function open(id,fromHash){var m=document.getElementById(id);if(!m||!m.classList.contains('pm'))return;if(cur)close(true);cur=m;opener=document.activeElement;m.hidden=false;document.body.classList.add('pm-on');m.querySelector('.pm-box').focus();if(!fromHash&&location.hash!=='#'+id)history.pushState(null,'','#'+id)}
function close(silent){if(!cur)return;cur.hidden=true;document.body.classList.remove('pm-on');var id=cur.id;cur=null;if(!silent&&location.hash==='#'+id)history.pushState(null,'',location.pathname+location.search);var o=document.querySelector('[data-open="'+id+'"]');(o||opener)&&(o||opener).focus()}
document.querySelectorAll('[data-open]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();open(a.dataset.open)})});
document.querySelectorAll('.pm').forEach(function(m){m.addEventListener('click',function(e){if(e.target===m)close()});m.querySelector('.pm-x').addEventListener('click',function(){close()})});
document.addEventListener('keydown',function(e){if(!cur||(lb&&lb.classList.contains('on')))return;if(e.key==='Escape'){close();return}
if(e.key==='Tab'){var f=cur.querySelectorAll('a[href],button,figure.art2');if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&(document.activeElement===a||document.activeElement===cur.querySelector('.pm-box'))){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}},true);
document.querySelectorAll('.pm .art2').forEach(function(f){f.tabIndex=0;f.setAttribute('role','button');f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();f.click()}})});
function fromHash(){var h=decodeURIComponent(location.hash.slice(1));if(h&&document.getElementById(h)&&document.getElementById(h).classList.contains('pm'))open(h,true);else close(true)}
window.addEventListener('popstate',fromHash);fromHash()})();
