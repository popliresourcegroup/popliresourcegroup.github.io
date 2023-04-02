/*
¥Ú¡¼¥¸¤Î¥È¥Ã¥×¤Ø¥¹¥¯¥í¡¼¥?·¤Æ°ÜÆ°
(c)Sapphirus.Biz

HREF¤Ë¡Ö#TOP¡×¡ÊÂçÊ¸»í…¦¾®Ê¸»íˆÎ¶èÊÌ¤ÏÌµ¤·¡Ë¤¬¤¢¤???¯¤?
¥¯¥?Ã¥¯¤·¤¿¾?ç¡¢¥¹¥¯¥í¡¼¥?·¤Æ¥Ú¡¼¥¸¤Î°?Ö¾å¤Ë°ÜÆ°¤·¤Þ¤¹¡£
Ex.) <a href="#TOP">PAGE TOP</a>
*/
function setGoTop() {
	var aTagList = document.getElementsByTagName('a');
	for (var i = 0; i < aTagList.length; i++) {
		if (aTagList[i].href.match(/#top/i)) {
			aTagList[i].onclick = goPageTop;
		}
	}
}
var goTopMove = 20; // ²ÃÂ®ÅÙ¡Ê0:Ää»ß¡ÁÂç¤­¤¤¤Û¤ÉÃÙ¤¯¤Ê¤?Ë
var goTopPosi;
function goPageTop() { // µ?¥¼èÆÀ¤È¼Â¹Ô
	var yPos = document.body.scrollTop || document.documentElement.scrollTop;
	mObj(yPos);
	return false;
}
function mObj(y, s) { // ¾å¤Ë²ÃÂ®°ÜÆ°
	if (s) goTopMove = s;
	goTopPosi = parseInt(y - y * 2 / goTopMove);
	scrollTo(0, goTopPosi);
	if (goTopPosi > 0) setTimeout('mObj(goTopPosi, goTopMove)', 1);
}
if (window.addEventListener) window.addEventListener('load', setGoTop, false);
if (window.attachEvent) window.attachEvent('onload', setGoTop);
