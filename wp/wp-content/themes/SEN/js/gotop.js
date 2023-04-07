/*
ページのトップへスクロー�?靴動榮�
(c)Sapphirus.Biz

HREFに「#TOP」（大文詩��小文詩�龍菠未鰐気掘砲�あ�???��?
ク�?奪�した�?隋▲好�ロー�?靴謄據璽犬琉?崗紊飽榮阿靴泙后�
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
var goTopMove = 20; // 加速度（0:停止〜大きいほど遅くな�?�
var goTopPosi;
function goPageTop() { // �?ゼ萋世伴孫�
	var yPos = document.body.scrollTop || document.documentElement.scrollTop;
	mObj(yPos);
	return false;
}
function mObj(y, s) { // 上に加速移動
	if (s) goTopMove = s;
	goTopPosi = parseInt(y - y * 2 / goTopMove);
	scrollTo(0, goTopPosi);
	if (goTopPosi > 0) setTimeout('mObj(goTopPosi, goTopMove)', 1);
}
if (window.addEventListener) window.addEventListener('load', setGoTop, false);
if (window.attachEvent) window.attachEvent('onload', setGoTop);
