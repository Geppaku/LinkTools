//■■■ルール
//■■命名規則
//■関数、変数、メソッド：キャメルケース（somethingName）
//■クラス：パスカルケース（ClassName）
//■定数：大文字スネークケース（CONSTANT_NAME）



//■■■グローバル変数
//■■部署変更等で修正が必要
//■メール関連
let defaultMailTo = '';
let defaultMailCc = '';
let mailName = '';

//■API Key
const API_KEY_IPQS = '';
const API_KEY_IPINFO = '';
const API_KEY_SHODAN = '';
const API_KEY_IPVOID = '';


//■■修正不要
//■共通関数で使用する変数
let YYYY, M, MM, D, DD, h, hh, m, mm, s, ss, YYYYMMDD, hhmm, ss_YYYYMMDD, sh_YYYYMMDD, sc_hhmm, hs_hhmm, ssc_YYYYMMDDhhmm, shc_YYYYMMDDhhmm, hshc_YYYYMMDDhhmm;
let inputText, unsanitizedText, decodeUriText, decodeUnicodeText, decodeBase64Text;
let ipv4 = [];
let ipv6 = [];
let cidr = [];
let url = [];
let domain = [];
let mail = [];
let mac = [];
let date = [];
let dateTime = [];

//■ローカル保存領域
let storage = localStorage;
let username = storage.getItem('setUsername');
let accountname = storage.getItem('setAccountname');
let mailAddress = storage.getItem('setMailAddress');
let phoneNumber1 = storage.getItem('setPhoneNumber1');
let phoneNumber2 = storage.getItem('setPhoneNumber2');
let postCode = storage.getItem('setPostCode');
let address = storage.getItem('setAddress');

//■TLD
const tld = ['ac','ad','ae','af','ag','ai','al','am','an','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','eu','fi','fj','fk','fm','fo','fr','ga','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy','hk','hm','hn','hr','ht','hu','id','ie','il','im','in','io','iq','ir','is','it','je','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mf','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz','tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tp','tr','tt','tv','tw','tz','ua','ug','uk','um','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw','com','net','org','info','biz','name','pro','cat','asia','xxx'];

//■月
const monEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const monNum = [1,2,3,4,5,6,7,8,9,10,11,12];

//■■■一括処理
//■■ページ読込時に実行する関数
function startUp() {
	loadConfig();
	loadContent('memo');
	getContents('memo');
	extIPv4('memo');
	extIPv6('memo');
	extCIDR('memo');
	extURL('memo');
	extDomain('memo');
	extMail('memo');
	extMAC('memo');
	extDate('memo');
	extDateTime('memo');
	uriDecode('memo');
	unicodeDecode('memo');
	base64Decode('memo');
	analysis();
	//setInterval('alarm()',10000);
}


//■■memo更新時に実行する関数
function changeMemo() {
	saveContent('memo');
	let extractList = document.getElementsByClassName('extract-list');
	for ( let l of extractList ) {
		l.innerText = '';
	}
	getContents('memo');
	extIPv4('memo');
	extIPv6('memo');
	extCIDR('memo');
	extURL('memo');
	extDomain('memo');
	extMail('memo');
	extMAC('memo');
	extDate('memo');
	extDateTime('memo');
	uriDecode('memo');
	unicodeDecode('memo');
	base64Decode('memo');
	analysis();
}



//■■■グローバル関数
//■■特化関数
//■ローカルストレージにテキストの内容を保存
function saveContent(key) {
	let textContent = document.getElementById(key);
	let contetnt = document.getElementById(key).value;
	storage.setItem(key, contetnt);
}

//■ローカルストレージから前回保存した内容を呼び出す
function loadContent(key) {
	document.getElementById(key).value = storage.getItem(key);
}

//■//第2引数で指定した値に置換
function replaceContent(id,value) {
	document.getElementById(id).value = contetnt;
}

//■モーダルウィンドウ（設定読込）
function loadConfig() {
	document.getElementById('username').innerText = username;
	document.getElementById('setUsername').value = username;
	document.getElementById('setAccountname').value = accountname;
	document.getElementById('setMailAddress').value = mailAddress;
	document.getElementById('setPhoneNumber1').value = phoneNumber1;
	document.getElementById('setPhoneNumber2').value = phoneNumber2;
	document.getElementById('setPostCode').value = postCode;
	document.getElementById('setAddress').value = address;
}

//■モーダルウィンドウ（設定適用）
function applyConfig() {
	let setUsernameValue = document.getElementById('setUsername').value;
	storage.setItem('setUsername', setUsernameValue);
	let setAccountnameValue = document.getElementById('setAccountname').value;
	storage.setItem('setAccountname', setAccountnameValue);
	let setMailAddressValue = document.getElementById('setMailAddress').value;
	storage.setItem('setMailAddress', setMailAddressValue);
	let setPhoneNumber1Value = document.getElementById('setPhoneNumber1').value;
	storage.setItem('setPhoneNumber1', setPhoneNumber1Value);
	let setPhoneNumber2Value = document.getElementById('setPhoneNumber2').value;
	storage.setItem('setPhoneNumber2', setPhoneNumber2Value);
	let setPostCodeValue = document.getElementById('setPostCode').value;
	storage.setItem('setPostCode', setPostCodeValue);
	let setAddressValue = document.getElementById('setAddress').value;
	storage.setItem('setAddress', setAddressValue);
	location.reload(true);
}

//■memo内容取得
function getContents(src) {
	inputText = document.getElementById(src).value;
	unsanitizedText = inputText.replace(/●|\[dot\]|\[\.\]/g,'.');
}


//■■汎用関数
//■比較関数
function compareFunc(a, b) {
	return a - b;
}

//■分割関数
function delimitStr(digit, delim, str) {
	let splitStr = '';
	if ( digit == 'ymd' ) {
		splitStr = str.substr(0,4) + delim + str.substr(4,2) + delim + str.substr(6,2);
	} else if ( digit == 'ymdhm' ) {
		splitStr = str.substr(0,4) + delim + str.substr(4,2) + delim + str.substr(6,2) + ' ' + str.substr(8,2) + ':' + str.substr(10,2);
	} else if ( Number.isInteger(digit) && digit > 0 ) {
		splitStr = str.substr(0,digit);
		for ( let i = digit; i < str.length; i += digit ) {
			splitStr += delim + str.substr(i,digit);
		}
	}
	return splitStr;
}

//■要素内のURL（文字列）を全て開く
function openAllUrl(src) {
	if ( document.getElementById(src).innerText != '' ) {
		let escapedText = document.getElementById(src).innerText;
		let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
		let duplicateURL = text.match(/(http(s)?:\/\/[^\s,]+)/g);
		let set = new Set(duplicateURL);
		let url = Array.from(set);
		if ( window.confirm('危険なURLは含まれていませんか？') ) {
			for ( let v of url ) {
				window.open(v, '_blank');
			}
		}
	}
}

//■要素内のリンク（aタグ）を全て開く
function openAllLink(src) {
	let target = document.getElementById(src);
	let link = target.querySelectorAll('a');
	for ( let v of link ) {
		window.open(v.getAttribute('href'), '_blank');
	}
}

//■要素内のテキストをコピー
function copy(element, btnId) {
	let btn = document.getElementById(btnId);
	let txt = document.getElementById(element).textContent;
	txt = txt.match(/[^\s].*[^\s]/g);
	navigator.clipboard.writeText(txt);
	btn.value = 'Copied!';
	setTimeout(() => (btn.value = 'Copy'), 1000);
}

function copyValue(element, btnId) {
	let btn = document.getElementById(btnId);
	let txt = document.getElementById(element).value;
	navigator.clipboard.writeText(txt);
	btn.value = 'Copied!';
	setTimeout(() => (btn.value = 'Copy'), 1000);
}

function copyInnerText(element, btnId) {
	let btn = document.getElementById(btnId);
	let txt = document.getElementById(element).innerText;
	navigator.clipboard.writeText(txt);
	btn.value = 'Copied!';
	setTimeout(() => (btn.value = 'Copy'), 1000);
}

//■日時
function getDateTime() {
	now = new Date();
	separateDateTime(now);
}

//■日時の表示形式
function separateDateTime(dateTime) {
	YYYY = dateTime.getFullYear();
	M = dateTime.getMonth() + 1;
	D = dateTime.getDate();
	MM = ('0' + M).slice(-2);
	DD = ('0' + D).slice(-2);
	h = dateTime.getHours();
	m = dateTime.getMinutes();
	s = dateTime.getSeconds();
	hh = ('0' + h).slice(-2);
	mm = ('0' + m).slice(-2);
	ss = ('0' + s).slice(-2);
	MMDD = MM + DD;
	ss_MD = M + '/' + D;
	ss_MMDD = MM + '/' + DD;
	YYYYMMDD = YYYY + MM + DD;
	ss_YYYYMMDD = YYYY + '/' + MM + '/' + DD;
	sh_YYYYMMDD = YYYY + '-' + MM + '-' + DD;
	sc_hhmm = hh + ':' + mm;
	sc_hhmmss = hh + ':' + mm + ':' + ss;
	YYYYMMDDhhmm = YYYYMMDD + hh + mm;
	ssc_YYYYMMDDhhmm = ss_YYYYMMDD + ' ' + sc_hhmm;
	shc_YYYYMMDDhhmm = sh_YYYYMMDD + ' ' + sc_hhmm;
	ssc_YYYYMMDDhhmmss = ss_YYYYMMDD + ' ' + sc_hhmmss;
}

//■リスト追加
function addHtmlList(tag, str, element, linkUrl) {
	let newLi = document.createElement('li');
	let newAnchor = document.createElement(tag);
	let addText = document.createTextNode(str);
	let addList = document.getElementById(element);
	newLi.appendChild (newAnchor);
	newAnchor.appendChild(addText);
	if ( tag == 'a' ) {
		newAnchor.href = linkUrl;
		newAnchor.target = '_blank';
	}
	addList.appendChild(newLi);
}

//■TOTP
function calcTotp(privateKey,otp) {
	let secret = document.getElementById(privateKey).value;
	let b32=s=>[0,8,16,24,32,40,48,56]
		.map(i=>[0,1,2,3,4,5,6,7]
			.map(j=>s.charCodeAt(i+j)).map(c=>c<65?c-24:c-65))
		.map(a=>[(a[0]<<3)+(a[1]>>2),
			(a[1]<<6)+(a[2]<<1)+(a[3]>>4),
			(a[3]<<4)+(a[4]>>1),
			(a[4]<<7)+(a[5]<<2)+(a[6]>>3),
			(a[6]<<5)+(a[7]>>0),
		]).flat(),
		trunc=dv=>dv.getUint32(dv.getInt8(19)&0x0f)&0x7fffffff,
		c=Math.floor(Date.now()/1000/30);
	crypto.subtle.importKey('raw',new Int8Array(b32(secret)),{name:'HMAC',hash:{name:'SHA-1'}},true,['sign'])
		.then(k=>crypto.subtle.sign('HMAC',k,new Int8Array([0,0,0,0,c>>24,c>>16,c>>8,c])))
		.then(h=>document.getElementById(otp).value=('0'+trunc(new DataView(h))).slice(-6));
	crypto.subtle.importKey('raw',new Int8Array(b32(secret)),{name:'HMAC',hash:{name:'SHA-1'}},true,['sign'])
		.then(k=>crypto.subtle.sign('HMAC',k,new Int8Array([0,0,0,0,c>>24,c>>16,c>>8,c])))
		.then(h=>navigator.clipboard.writeText(('0'+trunc(new DataView(h))).slice(-6)));
}

//■IPレンジ計算
function getIPrange(cidr){
	let ipaddress = cidr.split('/'),
			group = ipaddress[0].split('.'),
			ipBit = "",
			minIpBit = "",
			maxIpBit = "",
			tmpMinIpBit = "",
			tmpMaxIpBit = "",
			maxAddress = ipaddress[0];
	// 入力値が空、IPアドレスをカンマ基準で配列にした際に4つじゃない場合
	// ネットワークのビット数が規定の数値(1~32)じゃない場合
	if ( ipaddress === "" || group.length !== 4 ||
			(ipaddress.length === 2 && String(ipaddress[1]).match(/^([1-9]|[1-2][0-9]|3[0-2])$/) === null ) ) {
		return {min:'', max: ''}; // 空を返す
	}
	// IPアドレスのみの場合
	if ( ipaddress.length === 1 ) {
		return {min: convertToBinaryNum(group), max: convertToBinaryNum(group)};
	}
	for ( let i = 0; i < 4; i++ ) {
		let bit = parseInt(group[i], 10).toString(2);
		if ( Number(ipaddress[1]) >= ((i+1)*8) ) {
			ipBit += ("00000000" + bit).slice(-8);
		}
		else {
			let tmpIpBit = ("00000000" + bit).slice(-8);
			minIpBit += ipBit + (tmpIpBit.slice(0, Number(ipaddress[1]) - (i*8)) + "00000000").slice(0, 8);
			maxIpBit += ipBit + (tmpIpBit.slice(0, Number(ipaddress[1]) - (i*8)) + "11111111").slice(0, 8);
			break;
		}
	}
	minIpBit = (minIpBit + "00000000000000000000000000000000").slice(0, 32);
	maxIpBit = (maxIpBit + "11111111111111111111111111111111").slice(0, 32);
	return {min: minIpBit, max: maxIpBit};
}

/**
 * 10進数表記ののIPアドレスを2進数に変換
 * @params array sample: ['127', '0', '0', '0']
 * @return string sample: 01111111000000000000000000000000
 **/
function convertToBinaryNum(group){
	let ret = "";
	for ( let i = 0; i < 4; i++ ) {
		let bit = "00000000" + parseInt(group[i], 10).toString(2);
		ret += bit.slice(-8);
	}
	return ret;
}

/**
 * 2進数表記のIPアドレスを10進数に変換
 * @params array sample: 01111111000000000000000000000000
 * @return string sample: 127.0.0.1
 **/
function convertToIP(num){
	let ret = "";
	ret = parseInt(num.slice(0,8), 2) + ".";
	ret += parseInt(num.slice(8,16), 2) + ".";
	ret += parseInt(num.slice(16,24), 2) + ".";
	ret += parseInt(num.slice(24,32), 2);
	return ret;
}


//■■共通関数
//■IPv4アドレス抽出（ipv4に格納）
function extIPv4(src) {
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	let duplicateIPv4 = text.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g);
	let ipv4Set = new Set(duplicateIPv4);
	ipv4 = Array.from(ipv4Set);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_ip');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = ipv4.length;
	}
}

//■IPv6アドレス抽出（ipv6に格納）
function extIPv6(src) {
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	let duplicateIPv6 = text.match(/([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/g);
	let ipv6Set = new Set(duplicateIPv6);
	ipv6 = Array.from(ipv6Set);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_ipv6');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = ipv6.length;
	}
}

//■IPレンジ抽出（cidrに格納）
function extCIDR(src){
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	let duplicateCIDR = text.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2})/g);
	let cidrSet = new Set(duplicateCIDR);
	cidr = Array.from(cidrSet);
}

//■URL抽出（urlに格納）
function extURL(src) {
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	let duplicateURL = text.match(/(http(s)?:\/\/[^\s,]+)/g);
	let set = new Set(duplicateURL);
	url = Array.from(set);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_url');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = url.length;
	}
}

//■【開発中】Domain抽出（domainに格納）
function extDomain(src) {
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	for ( let v of tld ) {
		let reg = new RegExp('[A-Za-z0-9\\.\\-]+\\.' + v + '[^A-Za-z0-9\\.\\-]');
		let duplicateDomain = text.match(reg);
		let set = new Set(duplicateDomain);
		domain = Array.from(set);
	}
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_domain');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = domain.length;
	}
}

//■メールアドレス抽出（mailに格納）
function extMail(src) {
	let escapedText = document.getElementById(src).value;
	let text = escapedText.replace(/●|\[dot\]|\[\.\]/g,'.');
	let duplicateMail = text.match(/([A-Za-z0-9_.-]{1,}@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,})/g);
	let set = new Set(duplicateMail);
	mail = Array.from(set);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_mail');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = mail.length;
	}
}

//■MACアドレス抽出（macに格納）
function extMAC(src) {
	let text = document.getElementById(src).value;
	let duplicateMAC = text.match(/([0-9a-fA-F]{12})|(([0-9a-fA-F]{4}\.){2}[0-9a-fA-F]{4})|(([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2})/g);
	let uniSet = [];
	if ( duplicateMAC !== null ) {
		for ( let v of duplicateMAC ) {
			let w = v.replace(/[:\.]/g,'');
			uniSet.push(w);
		}
	}
	let macSet = new Set(uniSet);
	mac = Array.from(macSet);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_mac');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = mac.length;
	}
}

//■年月日抽出（dateに格納）
function extDate(src) {
	let text = document.getElementById(src).value;
	let duplicateDate = text.match(/((\d{8})|(\d{4}\-\d{1,2}\-\d{1,2})|(\d{4}\/\d{1,2}\/\d{1,2}))/g);
	let uniSet = [];
	if ( duplicateDate !== null ) {
		for ( let v of duplicateDate ) {
			let x = v;
			if ( v.match(/[\-\/]/) ) {
				let w = v.split(/[\-\/]/);
				x = w[0] + ('0'+w[1]).slice(-2) + ('0'+w[2]).slice(-2);
			}
			uniSet.push(x);
		}
	}
	let dateSet = new Set(uniSet);
	date = Array.from(dateSet);
	date.sort(compareFunc);
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	let details = document.getElementsByClassName('dtl_date');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = date.length;
	}
	//details自動オープン（0以外の数値は true となるので、 配列.length で判定）
	details = document.getElementsByClassName('dtl_abuse_tool');
	for ( let d = 0; d < details.length; d++ ) {
		details[d].open = date.length || ipv4.length;
	}
}

//■日時抽出（dateTimeに格納）
function extDateTime(src) {
	let text = document.getElementById(src).value;
	let duplicateDateTime = text.match(/((\d{8}\s\d{4})|(\d{4}\-\d{1,2}\-\d{1,2}\s\d{1,2}:\d{2})|(\d{4}\/\d{1,2}\/\d{1,2}\s\d{1,2}:\d{2}))/g);
	let uniSet = [];
	if ( duplicateDateTime !== null ) {
		for ( let v of duplicateDateTime ) {
			let x = v;
			if ( v.match(/[\-\/\s:]/) ) {
				let w = v.split(/[\-\/\s:]/);
				x = w[0] + ('0'+w[1]).slice(-2) + ('0'+w[2]).slice(-2) + ('0'+w[3]).slice(-2) + ('0'+w[4]).slice(-2);
			}
			uniSet.push(x);
		}
	}
	let dateTimeSet = new Set(uniSet);
	dateTime = Array.from(dateTimeSet);
	dateTime.sort(compareFunc);
}

//■URIデコード（decodeUriTextに格納）
function uriDecode(src) {
	let text = document.getElementById(src).value;
	try {
		decodeUriText = decodeURIComponent(text);
	} catch(e) {
		decodeUriText = '';
	}
}

//■ユニコードデコード（decodeUnicodeTextに格納）
function unicodeDecode(src) {
	let text = document.getElementById(src).value;
	let strs = text.match(/\\u.{4}/ig);
	if ( strs!==null ) {
		for ( let i = 0, len = strs.length; i < len; i++ ) {
			decodeUnicodeText += String.fromCharCode(strs[i].replace('\\u', '0x'));
		}
	}
}

//■BASE64デコード（decodeBase64Textに格納）
function base64Decode(src) {
	let text = document.getElementById(src).value;
	let encodeBase64Text = text.replace(/[^a-zA-Z0-9\+\/]/g,'');
	try {
		decodeBase64Text = window.atob(encodeBase64Text);
	} catch(e) {
		decodeBase64Text = '';
	}
}


//■■個別関数（使い回せず、処理も長い/個別に関数キックが設定されている）
//■Post
function post() {
	const xhr = new XMLHttpRequest();
	xhr.open("POST", "●●URL●●");
	const body = JSON.stringify({
		ip: ipv4,
		mail: mailAddress,
	});
	xhr.send(body);
	alert("メッセージ");
}

//■セミコロン区切りメールアドレスをコピー
function copySSMA() {
	let ssma='';
	for ( let v of mail ) {
		ssma += v + ';';
	}
	navigator.clipboard.writeText(ssma);
}

//■英語表記日時抽出（dateTimeEnに格納）＆タイムゾーン変換
function convertTimezone(src) {
	document.getElementById('abuse_timezone_convert_list').innerText = "";
	getDateTime();
	let dateTimeEn,dateTimeNum,dateTimeConvert;
	let text = document.getElementById(src).value;
	let fromTimezone = document.getElementById('selectFromTimezone').value;
	let toTimezone = document.getElementById('selectToTimezone').value;
	monEn.forEach((x,i) => {
		let re1 = new RegExp(x+"\\s+\\d{1,2}\\s+\\d{1,2}:\\d{2}:\\d{2}","g");
		dateTimeEn = text.match(re1);
		if (dateTimeEn!==null) {
			let re2 = new RegExp(x+"\\s+","g");
			let re3 = YYYY + "-" + monNum[i] + "-";
			let re4 = new RegExp("\\s+");
			dateTimeEn.forEach((y,j) => {
				dateTimeNum = y.replace(re2,re3);
				dateTimeNum = dateTimeNum.replace(re4,"T");
				dateTimeConvert = new Date(dateTimeNum);
				separateDateTime(dateTimeConvert);
				fromStr = ssc_YYYYMMDDhhmmss;
				dateTimeConvert.setMinutes(dateTimeConvert.getMinutes() - Number(fromTimezone)*60 + Number(toTimezone)*60);
				separateDateTime(dateTimeConvert);
				toStr = ssc_YYYYMMDDhhmmss;
				str = fromStr + ' → ' + toStr;
				addHtmlList('p', str, 'abuse_timezone_convert_list');
			})
		}
	})
}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



//■■■Analysis
function analysis() {
	//■■IP Address
	for ( let v of ipv4 ) {
		let str, linkUrl;
		//■IP Address
		let reg = new RegExp(/(^127\.)|(^169\.254\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^192\.168\.)/);
		if ( reg.test(v) ) {
			str = '[Private]' + v;
		} else {
			str = '[Global ]' + v;
		}
		addHtmlList('p', str, 'ip-list');
		//■Sanitized
		str = v.replace(/(\d+\.\d+\.\d+)\.(\d+)/,'$1[.]$2');
		addHtmlList('p', str, 'ip-list_sanitized');
		//■Whois（Whois.com）
		str = 'Whois：' + v;
		linkUrl = 'https://www.whois.com/whois/' + v;
		addHtmlList('a', str, 'ip-list_whois', linkUrl);
		//■VirusTotal
		str = 'VirusTotal：' + v;
		linkUrl = 'https://www.virustotal.com/gui/ip-address/' + v;
		addHtmlList('a', str, 'ip-list_virustotal', linkUrl);
		//■SHODAN
		str = 'SHODAN：' + v;
		linkUrl = 'https://www.shodan.io/search?query=' + v;
		addHtmlList('a', str, 'ip-list_shodan', linkUrl);
		//■Censys
		str = 'Censys：' + v;
		linkUrl = 'https://search.censys.io/hosts/' + v;
		addHtmlList('a', str, 'ip-list_censys', linkUrl);
		//■AbuseIPDB
		str = 'AbuseIPDB：' + v;
		linkUrl = 'https://www.abuseipdb.com/check/' + v;
		addHtmlList('a', str, 'ip-list_abuseipdb', linkUrl);
		//■Talos
		str = 'Talos：' + v;
		linkUrl = 'https://talosintelligence.com/reputation_center/lookup?search=' + v;
		addHtmlList('a', str, 'ip-list_talos', linkUrl);
		//■bgp.he.net
		str = 'bgp.he.net：' + v;
		linkUrl = 'https://bgp.he.net/ip/' + v + '#_rbl';
		addHtmlList('a', str, 'ip-list_bgphenet', linkUrl);
		//■SPUR
		str = 'SPUR：' + v;
		linkUrl = 'https://spur.us/context/' + v;
		addHtmlList('a', str, 'ip-list_spur', linkUrl);
		//■IPQualityScore
		str = 'IPQualityScore：' + v;
		linkUrl = 'https://ipqualityscore.com/api/json/ip/' + API_KEY_IPQS + '/' + v;
		addHtmlList('a', str, 'ip-list_ipqualityscore', linkUrl);
		//■ipinfo
		str = 'ipinfo：' + v;
		linkUrl = 'https://ipinfo.io/' + v + '?token=' + API_KEY_IPINFO;
		addHtmlList('a', str, 'ip-list_ipinfo', linkUrl);
		//■IPVOID
		str = 'IPVOID：' + v;
		linkUrl = 'https://endpoint.apivoid.com/iprep/v1/pay-as-you-go/?key=' + API_KEY_IPVOID + '&ip=' + v;
		addHtmlList('a', str, 'ip-list_ipvoid', linkUrl);
		//■ShodanHistory
		str = 'ShodanHistory：' + v;
		linkUrl = 'https://api.shodan.io/shodan/host/' + v + '?history=True&key=' + API_KEY_SHODAN;
		addHtmlList('a', str, 'ip-list_shodan-history', linkUrl);
	}
	for ( let c of cidr ) {
		let str, linkUrl, iprange;
		let range = getIPrange(c);
		if ( range.min !== "" && range.max !== "" ) {
			iprange = convertToIP(range.min) + " - " + convertToIP(range.max);
		}
		str = c + " =  " + iprange;
		linkUrl = "html_tools/ip_address_expansion.htm?cidr=" + c;
		addHtmlList('a', str, 'ip-list_iprange', linkUrl);
	}
	//■■URL
	for ( let v of url ) {
		let str, linkUrl;
		let fqdn = v.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
		//■URL
		str = v;
		addHtmlList('p', str, 'url-list');
		//■FQDN
		str = fqdn;
		addHtmlList('p', str, 'url-list_fqdn');
		//■Screenshot
		str = 'Screenshot：' + v;
		linkUrl = 'https://api.screenshotmachine.com?key=ecf073&dimension=1024xfull&url=' + v;
		addHtmlList('a', str, 'url-list_screenshot', linkUrl);
		//■Whois
		str = 'Whois：' + fqdn;
		linkUrl = 'https://www.whois.com/whois/' + fqdn;
		addHtmlList('a', str, 'url-list_whois', linkUrl);
		//■VirusTotal
		let w = v.match(/(^https?:\/{2,}.*?)(?:\/|\?|#|$)/)[1];
		str = 'VirusTotal：' + fqdn;
		linkUrl = 'https://www.virustotal.com/gui/search/' + fqdn.replace('://','%253A%252F%252F');
		addHtmlList('a', str, 'url-list_virustotal', linkUrl);
	}
	//■■Mail
	for ( let v of mail ) {
		let str, linkUrl;
		let mailDomain = v.match(/@{1}([A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,})/)[1];
		//■Mail Address
		str = v;
		addHtmlList('p', str, 'analysis_mail-address_list');
		//■SearchDomain
		str = 'Search：' + mailDomain;
		linkUrl = 'https://www.google.com/search?q=%22' + mailDomain + '%22';
		addHtmlList('a', str, 'analysis_mail-domain_list', linkUrl);
		//■Whois
		str = 'Whois：' + mailDomain;
		linkUrl = 'https://whois.domaintools.com/' + mailDomain;
		addHtmlList('a', str, 'analysis_mail-whois_list', linkUrl);
	}
	//■■Decode
	document.getElementById('url-decode').innerText = decodeUriText;
	document.getElementById('unicode-decode').innerText = decodeUnicodeText;
	document.getElementById('base64-decode').innerText = decodeBase64Text;
	//■■Script
	let text = document.getElementById('memo').value;
	let duplicateScript = text.match(/(\<script[\s\S]*?\<\/script\>)/g);
	let set = new Set(duplicateScript);
	let script = Array.from(set);
	for ( let v of script ) {
		let scriptStr = '========================================\r\n' + v + '\r\n========================================';
		addHtmlList('pre', scriptStr, 'script-list');
	}
}



//■■■Abuse
function abuse() {
	//■■MAC Address
	for ( let v of mac ) {
		let str, macStr, linkUrl;
		//■. 区切り
		str = delimitStr(4, '.', v);
		addHtmlList('p', str, 'abuse_mac_colon-delimited_list');
		//■: 区切り
		str = delimitStr(2, ':', v);
		addHtmlList('p', str, 'abuse_mac_dot-delimited_list');
		//■区切り無し
		str = v;
		addHtmlList('p', str, 'abuse_mac_no-delimited_list');
		//■MAC検索（COTO）
		macStr = delimitStr(2, ':', v);
		str = 'MAC検索：' + macStr;
		linkUrl = 'https://opeweb.pv2.zaq.ad.jp/solutions/customers/jcom/som/foundCustomerAccountsByMacAddresses.jsp?macAddresses=[' + macStr + ']';
		addHtmlList('a', str, 'abuse_mac_search_list', linkUrl);
		//■ベンダー検索
		macStr = delimitStr(2, ':', v);
		str = 'ベンダー検索：' + macStr;
		linkUrl = 'https://maclookup.app/search/result?mac=' + v;
		addHtmlList('a', str, 'abuse_mac_vendor-search_list', linkUrl);
	}
	//■■IPv4 Address
	for ( let v of ipv4 ) {
		let ipv4Octed = v.match(/(\d+)/g);
		for ( let i=0; i*4<ipv4Octed.length; i++) {
			let str, ipv4OctedStr, linkUrl;
			str = 'IPアドレス検索：' + v;
			linkUrl = 'https://opeweb.pv2.zaq.ad.jp/common/search.jsp?search_mode=search&resultID=9170948325113274064&performed=true&fast_search=no&do_search=yes&ctrl=t4122758596013619618_4122758596013619619&tab=0&return=%2Fncobject.jsp%3Ftab%3D_User%2BInformation%26id%3D9153941498913581178&project=9143430980013383722&currobject=o&system_index_on=false&collapse_but=no&profile_id=9145722162113513330&object=9145722162113513330&o=9153941498913581178&explorer_mode=disable&property_ishidden_group_1=no&_r9144156902513990077=eq&_v9144156902513990077_0=' + ipv4Octed[i] + '&_v9144156902513990077_3=' + ipv4Octed[i+1] + '&_v9144156902513990077_6=' + ipv4Octed[i+2] + '&_v9144156902513990077_9=' + ipv4Octed[i+3];
			addHtmlList('a', str, 'abuse_ipv4_coto_list', linkUrl);
		}
	}
	//■■IPv6 Address
	for ( let v of ipv6 ) {
		let str, ipv6Str, linkUrl;
		//■IPv6
		str = v;
		addHtmlList('p', str, 'abuse_ipv6_list');
		//■IPv6(- 区切り)
		str = v.replace(/:/g,'-');
		addHtmlList('p', str, 'abuse_ipv6_hs_list');
		//■上位2.5オクテット
		//addHtmlList('p', str, 'abuse_ipv6_25oct_list');
		//■上位3オクテット
		//addHtmlList('p', str, 'abuse_ipv6_3oct_list');
		//■上位3.5オクテット
		//addHtmlList('p', str, 'abuse_ipv6_35oct_list');
	}
	for ( let v of dateTime ) {
		let str;
		let dateTimeOffsetStr = delimitStr('ymdhm', '/', v);
		let dateTimeOffset;
		//■日時
		str = delimitStr('ymdhm', '/', v);
		addHtmlList('p', str, 'abuse_date_time_list');
		//■UTC → JST
		dateTimeOffset = new Date(dateTimeOffsetStr);
		let dateTimeUp9 = dateTimeOffset;
		dateTimeUp9.setHours(dateTimeOffset.getHours() + 9);
		separateDateTime(dateTimeUp9);
		let dateTimeUp9Str = ssc_YYYYMMDDhhmm;
		str = dateTimeOffsetStr + ' → ' + dateTimeUp9Str;
		addHtmlList('p', str, 'abuse_date_utc2jst_list');
		//■JST → UTC
		dateTimeOffset = new Date(dateTimeOffsetStr);
		let dateTimeDown9 = dateTimeOffset;
		dateTimeDown9.setHours(dateTimeOffset.getHours() - 9);
		separateDateTime(dateTimeDown9);
		let dateTimeDown9Str = ssc_YYYYMMDDhhmm;
		str = dateTimeOffsetStr + ' → ' + dateTimeDown9Str;
		addHtmlList('p', str, 'abuse_date_jst2utc_list');
	}
}



//■■■メイン以外
//■■メール作成
function createMail(type) {
	getDateTime();
	let mailSubject, mailBody;
	switch ( type ) {
		case '残業申請':
			mailTo = defaultMailTo;
			mailCc = defaultMailCc;
			mailSubject = "【残業申請】" + username + " " + ss_MD;
			mailBody = 
				mailName + "%0D%0A%0D%0A" + 
				"お疲れ様です。" + username + "です。" + "%0D%0A" + 
				"以下の通り、残業申請いたします。" + "%0D%0A%0D%0A" +
				"残業予定：●●" + "%0D%0A" +
				"残業理由：●●" + "%0D%0A%0D%0A" +
				"ご承認をお願いいたします。" + "%0D%0A%0D%0A" + 
				username;
			break;
		case '残業延長申請':
			mailTo = defaultMailTo;
			mailCc = defaultMailCc;
			mailSubject = "【残業延長申請】" + username + " " + ss_MD;
			mailBody = 
				mailName + "%0D%0A%0D%0A" + 
				"お疲れ様です。" + username + "です。" + "%0D%0A" + 
				"以下の通り、残業延長を申請いたします。" + "%0D%0A%0D%0A" +
				"残業予定：●●" + "%0D%0A" +
				"延長理由：●●" + "%0D%0A%0D%0A" +
				"ご承認をお願いいたします。" + "%0D%0A%0D%0A" + 
				username;
			break;
		case '出社申請':
			mailTo = defaultMailTo;
			mailCc = defaultMailCc;
			mailSubject = "【出社申請】" + username + " ●/●";
			mailBody = 
				mailName + "%0D%0A%0D%0A" + 
				"お疲れ様です。" + username + "です。" + "%0D%0A" + 
				"以下理由のため、荻窪出社を申請いたします。" + "%0D%0A%0D%0A" + 
				"【出社日・理由】" + "%0D%0A" + 
				"出社日：●/●（●）" + "%0D%0A" +
				"理  由：●●" + "%0D%0A%0D%0A" +
				"ご承認をお願いいたします。" + "%0D%0A%0D%0A" + 
				username;
			break;
		case '有休申請':
			mailTo = defaultMailTo;
			mailCc = defaultMailCc;
			mailSubject = "【有休申請】" + username + " ●/●（全休）";
			mailBody = 
				mailName + "%0D%0A%0D%0A" + 
				"お疲れ様です。" + username + "です。" + "%0D%0A" + 
				"私用のため、有休を申請いたします。" + "%0D%0A%0D%0A" + 
				"●/●（●）：全休" + "%0D%0A%0D%0A" +
				"ご承認をお願いいたします。" + "%0D%0A%0D%0A" + 
				username;
			break;
	}
	window.open("mailto:" + mailTo + "?cc=" + mailCc + "&subject=" + mailSubject + "&body=" + mailBody,"_blank");
}


//■■アラーム
/*
flag = false;
function alarm() {
	getDateTime();
	let alarmTime = hh + ':' + mm;
	switch (alarmTime) {
		case '10:59' :
			if (flag) {
				flag = false;
				let obj = window.open();
				obj.document.open();
				obj.document.write('<html><head><title>🔔朝礼🔔</title></head><body></body></html>');
				obj.document.close();
			}
			break;
		case '17:39' :
			if (flag) {
				flag = false;
				let obj = window.open();
				obj.document.open();
				obj.document.write('<html><head><title>🔔夕礼🔔</title></head><body><a href="https://vg.i-abs.co.jp/vpc-243-042/TimePro-VG/page/OVg52270t.aspx">WEB勤怠</a></body></html>');
				obj.document.close();
			}
			break;
		default :
			flag = true;
	}
}
*/
