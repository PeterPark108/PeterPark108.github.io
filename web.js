(function(){var s='<svg class="web" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000000" stroke-width="1.2">';
function web(cx,cy,R,n,r){for(var i=0;i<n;i++){var a=i/n*Math.PI*2;s+='<line x1="'+cx+'" y1="'+cy+'" x2="'+(cx+R*Math.cos(a))+'" y2="'+(cy+R*Math.sin(a))+'"/>';}
for(var k=1;k<=r;k++){var rr=R*k/r,d='';for(var j=0;j<=n;j++){var b=j/n*Math.PI*2,x=cx+rr*Math.cos(b),y=cy+rr*Math.sin(b);d+=(j?'Q'+(cx+rr*.9*Math.cos(b-Math.PI/n))+' '+(cy+rr*.9*Math.sin(b-Math.PI/n))+' ':'M')+x+' '+y+' ';}s+='<path d="'+d+'"/>';}}
web(0,0,700,14,9);web(1440,900,600,12,8);s+='</g></svg>';document.body.insertAdjacentHTML('afterbegin',s);})();
