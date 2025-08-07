/*　■■■■■　ルール　■■■■■　*/
/*　■■■■　命名規則　■■■■　*/
/*　■　関数、変数：camelCase　■　*/
/*　■　クラス：PascalCase　■　*/
/*　■　定数：UPPER_SNAKE_CASE　■　*/

/*　■■■■■　変数・定数　■■■■■　*/
/*　■■■■　定数　■■■■　*/
/*　■■■　グローバル定数　■■■　*/
/*　■　子要素が動的に追加される親要素　■　*/
const resetParentElms = document.getElementsByClassName('reset-child--elm');

/*　■　TLD　■　*/
const tlds = ['ac','ad','ae','af','ag','ai','al','am','an','ao','aq','ar','as','at','au','aw','ax','az','ba','bb','bd','be','bf','bg','bh','bi','bj','bl','bm','bn','bo','bq','br','bs','bt','bv','bw','by','bz','ca','cc','cd','cf','cg','ch','ci','ck','cl','cm','cn','co','cr','cu','cv','cw','cx','cy','cz','de','dj','dk','dm','do','dz','ec','ee','eg','eh','er','es','et','eu','fi','fj','fk','fm','fo','fr','ga','gb','gd','ge','gf','gg','gh','gi','gl','gm','gn','gp','gq','gr','gs','gt','gu','gw','gy','hk','hm','hn','hr','ht','hu','id','ie','il','im','in','io','iq','ir','is','it','je','jm','jo','jp','ke','kg','kh','ki','km','kn','kp','kr','kw','ky','kz','la','lb','lc','li','lk','lr','ls','lt','lu','lv','ly','ma','mc','md','me','mf','mg','mh','mk','ml','mm','mn','mo','mp','mq','mr','ms','mt','mu','mv','mw','mx','my','mz','na','nc','ne','nf','ng','ni','nl','no','np','nr','nu','nz','om','pa','pe','pf','pg','ph','pk','pl','pm','pn','pr','ps','pt','pw','py','qa','re','ro','rs','ru','rw','sa','sb','sc','sd','se','sg','sh','si','sj','sk','sl','sm','sn','so','sr','ss','st','sv','sx','sy','sz','tc','td','tf','tg','th','tj','tk','tl','tm','tn','to','tp','tr','tt','tv','tw','tz','ua','ug','uk','um','us','uy','uz','va','vc','ve','vg','vi','vn','vu','wf','ws','ye','yt','za','zm','zw','com','net','org','info','biz','name','pro','cat','asia','xxx','top'];

/*　■■■■　変数　■■■■　*/
/*　■■■　グローバル変数　■■■　*/
let webhookUrl;
let memoValue, memoUnescapedValue;
let now, YYYY, M, MM, D, DD, h, hh, m, mm, s, ss;
let ipv4s = [];
let ipv6s = [];
let cidrs = [];
let urls = [];
let domains = [];
let mails = [];
let macs = [];
let dates = [];
let dateTimes = [];

/*　■■■■■　関数　■■■■■　*/
/*　■■■■　自動実行　■■■■　*/
/*　■■■　ページ読込時　■■■　*/
window.addEventListener('DOMContentLoaded', function() {
	loadItem('memo','footer--textarea');
	memoValue = document.getElementById('footer--textarea').value;
	memoUnescapedValue = memoValue.replace(/hxxps:/gi,'https:').replace(/\[\.\]|\[dot\]/g,'.');
	let elms = document.getElementsByClassName('save-ls--key-value');
	for (let elm of elms) {
		loadItem(elm.getAttribute('id'),elm.getAttribute('id'));
	}
	extractIndicator();
	analysis();
});

/*　■■■　イベントリスナー　■■■　*/
window.addEventListener('load',function() {
	/*　■■　MEMO更新時　■■　*/
	document.getElementById('footer--textarea').addEventListener('input',(event) => {
		/*　■　MEMO関連　■　*/
		saveItem('memo','footer--textarea');
		memoValue = document.getElementById('footer--textarea').value;
		memoUnescapedValue = memoValue.replace(/hxxps:/gi,'https:').replace(/\[\.\]|\[dot\]/g,'.');
		/*　■　抽出、Analysis、Work　■　*/
		extractIndicator();
		for (resetParentElm of resetParentElms) {
			while(resetParentElm.firstChild) {
				resetParentElm.removeChild(resetParentElm.firstChild);
			}
		}
		analysis();
	});
	/*　■■　Config設定時　■■　*/
	document.getElementById('config--save-btn').addEventListener('click',(event) => {
		let elms = document.getElementsByClassName('save-ls--key-value');
		for (let elm of elms) {
			saveItem(elm.getAttribute('id'),elm.getAttribute('id'));
		}
	});
	/*　■■　CMD-BTN　■■　*/
	const cmdBtns = document.querySelectorAll('.cmd-btn');
	cmdBtns.forEach(function(target) {
		target.addEventListener('click', function() {
			switch (target.dataset.action) {
				case 'copy-memo':
					navigator.clipboard.writeText(memoValue);
					break;
				case 'translate-memo':
					if ( window.confirm('機密情報は含まれていませんか？') ) {
						window.open('https://translate.google.co.jp/?tl=ja&text=' + memoValue.replace(/[\r\n]/g,'%0A'));
					}
					break;
				case 'webhook-memo':
					if ( window.confirm('機密情報は含まれていませんか？') ) {
						const xhr = new XMLHttpRequest();
						let webhookUrl = localStorage.getItem('config--webhook');
						xhr.open("GET",webhookUrl + encodeURIComponent(memoValue));
						xhr.send();
					}
					break;
				case 'restore-memo':
					loadItem('backupMemo','footer--textarea');
					saveItem('memo','footer--textarea');
					break;
				case 'clear-memo':
					saveItem('backupMemo','footer--textarea');
					document.getElementById('footer--textarea').value = '';
					saveItem('memo','footer--textarea');
					break;
			}
		})
	});
});

/*　■■■■　グローバル関数　■■■■　*/
/*　■■■　ローカルストレージ　■■■　*/
/*　■　ローカルストレージに保存　■　*/
function saveItem(key,elmId) {
	let item = document.getElementById(elmId).value;
	localStorage.setItem(key,item);
}

/*　■　ローカルストレージから取得　■　*/
function loadItem(key,elmId) {
	document.getElementById(elmId).value = localStorage.getItem(key);
}

/*　■■■　汎用関数　■■■　*/
/*　■■　日時　■■　*/
function getDateTime() {
	now = new Date();
	separateDateTime(now);
}

/*　■　日時の表示形式　■　*/
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
}

/*　■■　TOTP　■■　*/
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

/*　■■　IPアドレス　■■　*/
/*　■　IPレンジ計算　■　*/
function getIpRange(cidr){
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

/*　■　10進数表記ののIPアドレスを2進数に変換　■　*/
function convertToBinaryNum(group){
	let ret = "";
	for ( let i = 0; i < 4; i++ ) {
		let bit = "00000000" + parseInt(group[i], 10).toString(2);
		ret += bit.slice(-8);
	}
	return ret;
}

/*　■　2進数表記のIPアドレスを10進数に変換　■　*/
function convertToIp(num){
	let ret = "";
	ret = parseInt(num.slice(0,8), 2) + ".";
	ret += parseInt(num.slice(8,16), 2) + ".";
	ret += parseInt(num.slice(16,24), 2) + ".";
	ret += parseInt(num.slice(24,32), 2);
	return ret;
}


/*　■■　URL分析　■■　*/
function urlAnalysis(url) {
	let urlObj = {flag: '', url: url};
	let parser = new URL(url);
	urlObj.flag += /https?:\/?[^\/]/.test(url) ? '🤡' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑕𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛𝒜𝒝𝒞𝒟𝒠𝒡𝒢𝒣𝒤𝒥𝒦𝒧𝒨𝒩𝒪𝒫𝒬𝒭𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝒺𝒻𝒼𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝓄𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝔄𝔅𝔆𝔇𝔈𝔉𝔊𝔋𝔌𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔𝔕𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔝𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔸𝔹𝔺𝔻𝔼𝔽𝔾𝔿𝕀𝕁𝕂𝕃𝕄𝕅𝕆𝕇𝕈𝕉𝕊𝕋𝕌𝕍𝕎𝕏𝕐𝕑𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝚤𝚥𝚦𝚧𝚨𝚩𝚪𝚫𝚬𝚭𝚮𝚯𝚰𝚱𝚲𝚳𝚴𝚵𝚶𝚷𝚸𝚹𝚺𝚻𝚼𝚽𝚾𝚿𝛀𝛁𝛂𝛃𝛄𝛅𝛆𝛇𝛈𝛉𝛊𝛋𝛌𝛍𝛎𝛏𝛐𝛑𝛒𝛓𝛔𝛕𝛖𝛗𝛘𝛙𝛚𝛛𝛜𝛝𝛞𝛟𝛠𝛡𝛢𝛣𝛤𝛥𝛦𝛧𝛨𝛩𝛪𝛫𝛬𝛭𝛮𝛯𝛰𝛱𝛲𝛳𝛴𝛵𝛶𝛷𝛸𝛹𝛺𝛻𝛼𝛽𝛾𝛿𝜀𝜁𝜂𝜃𝜄𝜅𝜆𝜇𝜈𝜉𝜊𝜋𝜌𝜍𝜎𝜏𝜐𝜑𝜒𝜓𝜔𝜕𝜖𝜗𝜘𝜙𝜚𝜛𝜜𝜝𝜞𝜟𝜠𝜡𝜢𝜣𝜤𝜥𝜦𝜧𝜨𝜩𝜪𝜫𝜬𝜭𝜮𝜯𝜰𝜱𝜲𝜳𝜴𝜵𝜶𝜷𝜸𝜹𝜺𝜻𝜼𝜽𝜾𝜿𝝀𝝁𝝂𝝃𝝄𝝅𝝆𝝇𝝈𝝉𝝊𝝋𝝌𝝍𝝎𝝏𝝐𝝑𝝒𝝓𝝔𝝕𝝖𝝗𝝘𝝙𝝚𝝛𝝜𝝝𝝞𝝟𝝠𝝡𝝢𝝣𝝤𝝥𝝦𝝧𝝨𝝩𝝪𝝫𝝬𝝭𝝮𝝯𝝰𝝱𝝲𝝳𝝴𝝵𝝶𝝷𝝸𝝹𝝺𝝻𝝼𝝽𝝾𝝿𝞀𝞁𝞂𝞃𝞄𝞅𝞆𝞇𝞈𝞉𝞊𝞋𝞌𝞍𝞎𝞏𝞐𝞑𝞒𝞓𝞔𝞕𝞖𝞗𝞘𝞙𝞚𝞛𝞜𝞝𝞞𝞟𝞠𝞡𝞢𝞣𝞤𝞥𝞦𝞧𝞨𝞩𝞪𝞫𝞬𝞭𝞮𝞯𝞰𝞱𝞲𝞳𝞴𝞵𝞶𝞷𝞸𝞹𝞺𝞻𝞼𝞽𝞾𝞿𝟀𝟁𝟂𝟃𝟄𝟅𝟆𝟇𝟈𝟉𝟊𝟋𝟌𝟍𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿]/.test(url) ? '𝕯' : '' ;
	urlObj.flag += /[∕⁄]/.test(url) ? '➗' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*@[^\/]+/.test(url) ? '🔑' : '' ;
	urlObj.flag += /https?:\/{0,2}([^\/]*@)?translate\.google\.com\//.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}[\w\-]\.translate\.goog/.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}www\.google\.com\/url\?/.test(url) ? '➡️' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[\-\.]?ipfs[\-\.]?[^\/]+/.test(url) ? '🌐' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*\w{16,}/.test(url) ? '🎲' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[bcdfghjklmnpqrstvwxyz0-9]{8,}/.test(url) ? '🎲' : '' ;
	return urlObj;
}


/*　■■　HTMLリスト作成　■■　*/
function appendHtmlList(parentElm, title, items, linkUrl1='default', linkUrl2, encode) {
	let divElm = document.createElement('div');
	parentElm.appendChild(divElm);
	let hElm = document.createElement('h3');
	hElm.textContent = title;
	divElm.appendChild(hElm);
	let ulElm = document.createElement('ul');
	divElm.appendChild(ulElm);
	for ( let item of items ) {
		let liElm = document.createElement('li');
		ulElm.appendChild(liElm);
		switch (encode) {
			case 'wPercent' :
				decodeItem = encodeURI(encodeURIComponent(item));
				break;
			default :
				decodeItem = item;
		}
		if ( linkUrl1=='default' ) {
			liElm.textContent = title + '：' + item;
		} else {
			let aElm = document.createElement('a');
			aElm.textContent = title + '：' + item;
			aElm.href = linkUrl1 + decodeItem +linkUrl2;
			aElm.target = '_blank';
			liElm.appendChild(aElm);
		}
	}
}

function appendHtmlUl(parentElm, ulId, title) {
	let divElm = document.createElement('div');
	parentElm.appendChild(divElm);
	let hElm = document.createElement('h3');
	hElm.textContent = title;
	/*
	let buttonElm = document.createElement('button');
	buttonElm.className = 'list--copy-btn';
	buttonElm.textContent = 'Copy';
	hElm.appendChild(buttonElm);
	*/
	divElm.appendChild(hElm);
	let ulElm = document.createElement('ul');
	ulElm.id = ulId;
	divElm.appendChild(ulElm);
}

function appendHtmlLi(parentElm, prefix, item, linkUrl='default') {
	let liElm = document.createElement('li');
	parentElm.appendChild(liElm);
	if ( linkUrl=='default' ) {
		liElm.textContent = prefix + item;
		parentElm.appendChild(liElm);
	} else {
		let aElm = document.createElement('a');
		aElm.textContent = prefix + item;
		aElm.href = linkUrl;
		aElm.target = '_blank';
		liElm.appendChild(aElm);
	}
}



/*　■■■　共通関数　■■■　*/
/*　■■　Indicator抽出　■■　*/
function extractIndicator() {
	/*　■　IPv4アドレス抽出（ipv4sに格納）　■　*/
	let dupIpv4s = memoUnescapedValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g);
	ipv4s = new Set(dupIpv4s);
	/*　■　CIDR抽出（cidrsに格納）　■　*/
	let dupCidrs = memoUnescapedValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2})/g);
	cidrs = new Set(dupCidrs);
	/*　■　IPv6アドレス抽出（ipv6sに格納）　■　*/
	let dupIpv6s = memoUnescapedValue.match(/([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/g);
	ipv6s = new Set(dupIpv6s);
	/*　■　URL抽出（urlsに格納）　■　*/
	let dupUrls = memoUnescapedValue.match(/(http(s)?:\/{0,2}[^\s,]+)/g);
	urls = new Set(dupUrls);
	/*　■　Domain抽出（domainsに格納）　■　*/
	for ( let tld of tlds ) {
		let reg = new RegExp('[A-Za-z0-9\\.\\-]+\\.' + tld + '[^A-Za-z0-9\\.\\-]*', 'g');
		let dupDomains = memoUnescapedValue.match(reg);
		domains = new Set(dupDomains);
	}
}

/*　■■■　Analysis　■■　*/
function analysis() {
	const ipOsints = [
		//{ name: '', url1: '', url2: '', encode: '' },
		{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
		{ name: 'JPNIC WHOIS', url1: 'https://whois.nic.ad.jp/cgi-bin/whois_gw?key=', url2: '', encode: ''  },
		{ name: 'Virus Total', url1: 'https://www.virustotal.com/gui/ip-address/', url2: '', encode: ''  },
		{ name: 'SHODAN', url1: 'https://www.shodan.io/host/', url2: '', encode: ''  },
	];
	const domainOsints = [
		//{ name: '', url1: '', url2: '', encode: '' },
		{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
		{ name: 'Nslookup', url1: 'https://www.nslookup.io/domains/', url2: '/dns-records/', encode: ''  },
	];
	const urlOsints = [
		//{ name: '', url1: '', url2: '', encode: '' },
		{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
		{ name: 'Virus Total', url1: 'https://www.virustotal.com/gui/search/', url2: '', encode: 'wPercent'  },
		{ name: 'Google Translate Proxy', url1: 'https://translate.google.com/translate?u=', url2: '', encode: ''  },
	];
	let elmMAI = document.getElementById('main--analysis--ip-address');
	/*　■■　IPアドレス無害化　■■　*/
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--sanitized', 'Sanitized');
	let elmMAIS = document.getElementById('main--analysis--ip-address--sanitized');
	for ( let ip of ipv4s ){
		let sanitizedIp = ip.replace(/(\d+\.\d+\.\d+)\.(\d+)/,'$1[.]$2');
		appendHtmlLi(elmMAIS, '', sanitizedIp);
	}
	/*　■■　CIDR計算　■■　*/
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--cidr', 'Cidr');
	let elmMAIC = document.getElementById('main--analysis--ip-address--cidr');
	for ( let cidr of cidrs ) {
		let linkUrl = 'htmlTools/cidr2list.htm?cidr=' + cidr;
		let ipRange = getIpRange(cidr);
		let str = ( ipRange.min !== '' && ipRange.max !== '' ) ? cidr + ' = ' + convertToIp(ipRange.min) + ' - ' + convertToIp(ipRange.max) : '' ;
		appendHtmlLi(elmMAIC, '', str, linkUrl);
	}
	/*　■■　OSINT-IPアドレス　■■　*/
	for ( let ipOsint of  ipOsints ) {
		let parentElm = document.getElementById('main--analysis--ip-address');
		appendHtmlList(parentElm, ipOsint.name, ipv4s, ipOsint.url1, ipOsint.url2, ipOsint.encode);
	}
	/*　■■　DOMAIN-ANALYSIS　■■　*/
	let elmMAD = document.getElementById('main--analysis--domain');
	for ( let domainOsint of  domainOsints ) {
		appendHtmlList(elmMAD, domainOsint.name, domains, domainOsint.url1, domainOsint.url2, domainOsint.encode);
	}

	/*　■■　URL-ANALYSIS　■■　*/
	let elmMAU = document.getElementById('main--analysis--url');
	let urlDatass = [];
	for ( let url of urls ) {
		let urlObj = urlAnalysis(url);
		urlDatass.push(Object.values(urlObj));
	}
	appendHtmlTable(elmMAU, ['Flag', 'URL'], urlDatass );
	/*　■■　OSINT-URL　■■　*/
	for ( let urlOsint of  urlOsints ) {
		appendHtmlList(elmMAU, urlOsint.name, urls, urlOsint.url1, urlOsint.url2, urlOsint.encode);
	}
}

function appendHtmlTable(parentElm, headers, datass) {
	let tableElm = document.createElement('table');
	parentElm.appendChild(tableElm);
	let trThElm = document.createElement('tr');
	tableElm.appendChild(trThElm);
	for ( let header of headers ) {
		let thElm = document.createElement('th');
		trThElm.appendChild(thElm);
		thElm.textContent = header;
	}
	for ( let datas of datass ) {
		let trTdElm = document.createElement('tr');
		tableElm.appendChild(trTdElm);
		for ( let data of datas ) {
			let tdElm = document.createElement('td');
			trTdElm.appendChild(tdElm);
			tdElm.textContent = data;
		}
	}
}