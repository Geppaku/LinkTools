/*　■■■■■　ルール　■■■■■　*/
/*　■■■■　命名規則　■■■■　*/
/*　■　関数、変数：camelCase　■　*/
/*　■　クラス：PascalCase　■　*/
/*　■　定数：UPPER_SNAKE_CASE　■　*/

/*　■■■■■　変数・定数　■■■■■　*/
/*　■■■■　定数　■■■■　*/
/*　■■■　グローバル定数　■■■　*/
/*　■■　OSINT　■■　*/
const ipOsints = [
	{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
	{ name: 'JPNIC WHOIS', url1: 'https://whois.nic.ad.jp/cgi-bin/whois_gw?key=', url2: '', encode: ''  },
	{ name: 'Virus Total', url1: 'https://www.virustotal.com/gui/ip-address/', url2: '', encode: ''  },
	{ name: 'SHODAN', url1: 'https://www.shodan.io/host/', url2: '', encode: ''  },
	{ name: 'urlscan Pro', url1: 'https://pro.urlscan.io/search?query=page.ip:"', url2: '"', encode: ''  },
	{ name: 'Search', url1: 'https://www.google.com/search?q="', url2: '"', encode: ''  },
];
const domainOsints = [
	{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
	{ name: 'Nslookup', url1: 'https://www.nslookup.io/domains/', url2: '/dns-records/', encode: ''  },
	{ name: 'Search', url1: 'https://www.google.com/search?q="', url2: '"', encode: ''  },
	{ name: 'urlscan Pro', url1: 'https://pro.urlscan.io/search?query="', url2: '"', encode: ''  },
];
const urlOsints = [
	{ name: 'Whois', url1: 'https://www.whois.com/whois/', url2: '', encode: ''  },
	{ name: 'Virus Total', url1: 'https://www.virustotal.com/gui/search/', url2: '', encode: 'wPercent'  },
];
const hashOsints = [
	{ name: 'Virus Total', url1: 'https://www.virustotal.com/gui/search/', url2: '', encode: ''  },
];

/*　■　子要素が動的に追加される親要素　■　*/
const resetParentElms = document.getElementsByClassName('reset-child--elm');

/*　■　TLD　■　*/
const tlds = ['AAA','AARP','ABB','ABBOTT','ABBVIE','ABC','ABLE','ABOGADO','ABUDHABI','AC','ACADEMY','ACCENTURE','ACCOUNTANT','ACCOUNTANTS','ACO','ACTOR','AD','ADS','ADULT','AE','AEG','AERO','AETNA','AF','AFL','AFRICA','AG','AGAKHAN','AGENCY','AI','AIG','AIRBUS','AIRFORCE','AIRTEL','AKDN','AL','ALIBABA','ALIPAY','ALLFINANZ','ALLSTATE','ALLY','ALSACE','ALSTOM','AM','AMAZON','AMERICANEXPRESS','AMERICANFAMILY','AMEX','AMFAM','AMICA','AMSTERDAM','ANALYTICS','ANDROID','ANQUAN','ANZ','AO','AOL','APARTMENTS','APP','APPLE','AQ','AQUARELLE','AR','ARAB','ARAMCO','ARCHI','ARMY','ARPA','ART','ARTE','AS','ASDA','ASIA','ASSOCIATES','AT','ATHLETA','ATTORNEY','AU','AUCTION','AUDI','AUDIBLE','AUDIO','AUSPOST','AUTHOR','AUTO','AUTOS','AW','AWS','AX','AXA','AZ','AZURE','BA','BABY','BAIDU','BANAMEX','BAND','BANK','BAR','BARCELONA','BARCLAYCARD','BARCLAYS','BAREFOOT','BARGAINS','BASEBALL','BASKETBALL','BAUHAUS','BAYERN','BB','BBC','BBT','BBVA','BCG','BCN','BD','BE','BEATS','BEAUTY','BEER','BERLIN','BEST','BESTBUY','BET','BF','BG','BH','BHARTI','BI','BIBLE','BID','BIKE','BING','BINGO','BIO','BIZ','BJ','BLACK','BLACKFRIDAY','BLOCKBUSTER','BLOG','BLOOMBERG','BLUE','BM','BMS','BMW','BN','BNPPARIBAS','BO','BOATS','BOEHRINGER','BOFA','BOM','BOND','BOO','BOOK','BOOKING','BOSCH','BOSTIK','BOSTON','BOT','BOUTIQUE','BOX','BR','BRADESCO','BRIDGESTONE','BROADWAY','BROKER','BROTHER','BRUSSELS','BS','BT','BUILD','BUILDERS','BUSINESS','BUY','BUZZ','BV','BW','BY','BZ','BZH','CA','CAB','CAFE','CAL','CALL','CALVINKLEIN','CAM','CAMERA','CAMP','CANON','CAPETOWN','CAPITAL','CAPITALONE','CAR','CARAVAN','CARDS','CARE','CAREER','CAREERS','CARS','CASA','CASE','CASH','CASINO','CAT','CATERING','CATHOLIC','CBA','CBN','CBRE','CC','CD','CENTER','CEO','CERN','CF','CFA','CFD','CG','CH','CHANEL','CHANNEL','CHARITY','CHASE','CHAT','CHEAP','CHINTAI','CHRISTMAS','CHROME','CHURCH','CI','CIPRIANI','CIRCLE','CISCO','CITADEL','CITI','CITIC','CITY','CK','CL','CLAIMS','CLEANING','CLICK','CLINIC','CLINIQUE','CLOTHING','CLOUD','CLUB','CLUBMED','CM','CN','CO','COACH','CODES','COFFEE','COLLEGE','COLOGNE','COM','COMMBANK','COMMUNITY','COMPANY','COMPARE','COMPUTER','COMSEC','CONDOS','CONSTRUCTION','CONSULTING','CONTACT','CONTRACTORS','COOKING','COOL','COOP','CORSICA','COUNTRY','COUPON','COUPONS','COURSES','CPA','CR','CREDIT','CREDITCARD','CREDITUNION','CRICKET','CROWN','CRS','CRUISE','CRUISES','CU','CUISINELLA','CV','CW','CX','CY','CYMRU','CYOU','CZ','DAD','DANCE','DATA','DATE','DATING','DATSUN','DAY','DCLK','DDS','DE','DEAL','DEALER','DEALS','DEGREE','DELIVERY','DELL','DELOITTE','DELTA','DEMOCRAT','DENTAL','DENTIST','DESI','DESIGN','DEV','DHL','DIAMONDS','DIET','DIGITAL','DIRECT','DIRECTORY','DISCOUNT','DISCOVER','DISH','DIY','DJ','DK','DM','DNP','DO','DOCS','DOCTOR','DOG','DOMAINS','DOT','DOWNLOAD','DRIVE','DTV','DUBAI','DUNLOP','DUPONT','DURBAN','DVAG','DVR','DZ','EARTH','EAT','EC','ECO','EDEKA','EDU','EDUCATION','EE','EG','EMAIL','EMERCK','ENERGY','ENGINEER','ENGINEERING','ENTERPRISES','EPSON','EQUIPMENT','ER','ERICSSON','ERNI','ES','ESQ','ESTATE','ET','EU','EUROVISION','EUS','EVENTS','EXCHANGE','EXPERT','EXPOSED','EXPRESS','EXTRASPACE','FAGE','FAIL','FAIRWINDS','FAITH','FAMILY','FAN','FANS','FARM','FARMERS','FASHION','FAST','FEDEX','FEEDBACK','FERRARI','FERRERO','FI','FIDELITY','FIDO','FILM','FINAL','FINANCE','FINANCIAL','FIRE','FIRESTONE','FIRMDALE','FISH','FISHING','FIT','FITNESS','FJ','FK','FLICKR','FLIGHTS','FLIR','FLORIST','FLOWERS','FLY','FM','FO','FOO','FOOD','FOOTBALL','FORD','FOREX','FORSALE','FORUM','FOUNDATION','FOX','FR','FREE','FRESENIUS','FRL','FROGANS','FRONTIER','FTR','FUJITSU','FUN','FUND','FURNITURE','FUTBOL','FYI','GA','GAL','GALLERY','GALLO','GALLUP','GAME','GAMES','GAP','GARDEN','GAY','GB','GBIZ','GD','GDN','GE','GEA','GENT','GENTING','GEORGE','GF','GG','GGEE','GH','GI','GIFT','GIFTS','GIVES','GIVING','GL','GLASS','GLE','GLOBAL','GLOBO','GM','GMAIL','GMBH','GMO','GMX','GN','GODADDY','GOLD','GOLDPOINT','GOLF','GOO','GOODYEAR','GOOG','GOOGLE','GOP','GOT','GOV','GP','GQ','GR','GRAINGER','GRAPHICS','GRATIS','GREEN','GRIPE','GROCERY','GROUP','GS','GT','GU','GUCCI','GUGE','GUIDE','GUITARS','GURU','GW','GY','HAIR','HAMBURG','HANGOUT','HAUS','HBO','HDFC','HDFCBANK','HEALTH','HEALTHCARE','HELP','HELSINKI','HERE','HERMES','HIPHOP','HISAMITSU','HITACHI','HIV','HK','HKT','HM','HN','HOCKEY','HOLDINGS','HOLIDAY','HOMEDEPOT','HOMEGOODS','HOMES','HOMESENSE','HONDA','HORSE','HOSPITAL','HOST','HOSTING','HOT','HOTELS','HOTMAIL','HOUSE','HOW','HR','HSBC','HT','HU','HUGHES','HYATT','HYUNDAI','IBM','ICBC','ICE','ICU','ID','IE','IEEE','IFM','IKANO','IL','IM','IMAMAT','IMDB','IMMO','IMMOBILIEN','IN','INC','INDUSTRIES','INFINITI','INFO','ING','INK','INSTITUTE','INSURANCE','INSURE','INT','INTERNATIONAL','INTUIT','INVESTMENTS','IO','IPIRANGA','IQ','IR','IRISH','IS','ISMAILI','IST','ISTANBUL','IT','ITAU','ITV','JAGUAR','JAVA','JCB','JE','JEEP','JETZT','JEWELRY','JIO','JLL','JM','JMP','JNJ','JO','JOBS','JOBURG','JOT','JOY','JP','JPMORGAN','JPRS','JUEGOS','JUNIPER','KAUFEN','KDDI','KE','KERRYHOTELS','KERRYPROPERTIES','KFH','KG','KH','KI','KIA','KIDS','KIM','KINDLE','KITCHEN','KIWI','KM','KN','KOELN','KOMATSU','KOSHER','KP','KPMG','KPN','KR','KRD','KRED','KUOKGROUP','KW','KY','KYOTO','KZ','LA','LACAIXA','LAMBORGHINI','LAMER','LAND','LANDROVER','LANXESS','LASALLE','LAT','LATINO','LATROBE','LAW','LAWYER','LB','LC','LDS','LEASE','LECLERC','LEFRAK','LEGAL','LEGO','LEXUS','LGBT','LI','LIDL','LIFE','LIFEINSURANCE','LIFESTYLE','LIGHTING','LIKE','LILLY','LIMITED','LIMO','LINCOLN','LINK','LIVE','LIVING','LK','LLC','LLP','LOAN','LOANS','LOCKER','LOCUS','LOL','LONDON','LOTTE','LOTTO','LOVE','LPL','LPLFINANCIAL','LR','LS','LT','LTD','LTDA','LU','LUNDBECK','LUXE','LUXURY','LV','LY','MA','MADRID','MAIF','MAISON','MAKEUP','MAN','MANAGEMENT','MANGO','MAP','MARKET','MARKETING','MARKETS','MARRIOTT','MARSHALLS','MATTEL','MBA','MC','MCKINSEY','MD','ME','MED','MEDIA','MEET','MELBOURNE','MEME','MEMORIAL','MEN','MENU','MERCKMSD','MG','MH','MIAMI','MICROSOFT','MIL','MINI','MINT','MIT','MITSUBISHI','MK','ML','MLB','MLS','MM','MMA','MN','MO','MOBI','MOBILE','MODA','MOE','MOI','MOM','MONASH','MONEY','MONSTER','MORMON','MORTGAGE','MOSCOW','MOTO','MOTORCYCLES','MOV','MOVIE','MP','MQ','MR','MS','MSD','MT','MTN','MTR','MU','MUSEUM','MUSIC','MV','MW','MX','MY','MZ','NA','NAB','NAGOYA','NAME','NAVY','NBA','NC','NE','NEC','NET','NETBANK','NETFLIX','NETWORK','NEUSTAR','NEW','NEWS','NEXT','NEXTDIRECT','NEXUS','NF','NFL','NG','NGO','NHK','NI','NICO','NIKE','NIKON','NINJA','NISSAN','NISSAY','NL','NO','NOKIA','NORTON','NOW','NOWRUZ','NOWTV','NP','NR','NRA','NRW','NTT','NU','NYC','NZ','OBI','OBSERVER','OFFICE','OKINAWA','OLAYAN','OLAYANGROUP','OLLO','OM','OMEGA','ONE','ONG','ONL','ONLINE','OOO','OPEN','ORACLE','ORANGE','ORG','ORGANIC','ORIGINS','OSAKA','OTSUKA','OTT','OVH','PA','PAGE','PANASONIC','PARIS','PARS','PARTNERS','PARTS','PARTY','PAY','PCCW','PE','PET','PF','PFIZER','PG','PH','PHARMACY','PHD','PHILIPS','PHONE','PHOTO','PHOTOGRAPHY','PHOTOS','PHYSIO','PICS','PICTET','PICTURES','PID','PIN','PING','PINK','PIONEER','PIZZA','PK','PL','PLACE','PLAY','PLAYSTATION','PLUMBING','PLUS','PM','PN','PNC','POHL','POKER','POLITIE','PORN','POST','PR','PRAXI','PRESS','PRIME','PRO','PROD','PRODUCTIONS','PROF','PROGRESSIVE','PROMO','PROPERTIES','PROPERTY','PROTECTION','PRU','PRUDENTIAL','PS','PT','PUB','PW','PWC','PY','QA','QPON','QUEBEC','QUEST','RACING','RADIO','RE','READ','REALESTATE','REALTOR','REALTY','RECIPES','RED','REDSTONE','REDUMBRELLA','REHAB','REISE','REISEN','REIT','RELIANCE','REN','RENT','RENTALS','REPAIR','REPORT','REPUBLICAN','REST','RESTAURANT','REVIEW','REVIEWS','REXROTH','RICH','RICHARDLI','RICOH','RIL','RIO','RIP','RO','ROCKS','RODEO','ROGERS','ROOM','RS','RSVP','RU','RUGBY','RUHR','RUN','RW','RWE','RYUKYU','SA','SAARLAND','SAFE','SAFETY','SAKURA','SALE','SALON','SAMSCLUB','SAMSUNG','SANDVIK','SANDVIKCOROMANT','SANOFI','SAP','SARL','SAS','SAVE','SAXO','SB','SBI','SBS','SC','SCB','SCHAEFFLER','SCHMIDT','SCHOLARSHIPS','SCHOOL','SCHULE','SCHWARZ','SCIENCE','SCOT','SD','SE','SEARCH','SEAT','SECURE','SECURITY','SEEK','SELECT','SENER','SERVICES','SEVEN','SEW','SEX','SEXY','SFR','SG','SH','SHANGRILA','SHARP','SHELL','SHIA','SHIKSHA','SHOES','SHOP','SHOPPING','SHOUJI','SHOW','SI','SILK','SINA','SINGLES','SITE','SJ','SK','SKI','SKIN','SKY','SKYPE','SL','SLING','SM','SMART','SMILE','SN','SNCF','SO','SOCCER','SOCIAL','SOFTBANK','SOFTWARE','SOHU','SOLAR','SOLUTIONS','SONG','SONY','SOY','SPA','SPACE','SPORT','SPOT','SR','SRL','SS','ST','STADA','STAPLES','STAR','STATEBANK','STATEFARM','STC','STCGROUP','STOCKHOLM','STORAGE','STORE','STREAM','STUDIO','STUDY','STYLE','SU','SUCKS','SUPPLIES','SUPPLY','SUPPORT','SURF','SURGERY','SUZUKI','SV','SWATCH','SWISS','SX','SY','SYDNEY','SYSTEMS','SZ','TAB','TAIPEI','TALK','TAOBAO','TARGET','TATAMOTORS','TATAR','TATTOO','TAX','TAXI','TC','TCI','TD','TDK','TEAM','TECH','TECHNOLOGY','TEL','TEMASEK','TENNIS','TEVA','TF','TG','TH','THD','THEATER','THEATRE','TIAA','TICKETS','TIENDA','TIPS','TIRES','TIROL','TJ','TJMAXX','TJX','TK','TKMAXX','TL','TM','TMALL','TN','TO','TODAY','TOKYO','TOOLS','TOP','TORAY','TOSHIBA','TOTAL','TOURS','TOWN','TOYOTA','TOYS','TR','TRADE','TRADING','TRAINING','TRAVEL','TRAVELERS','TRAVELERSINSURANCE','TRUST','TRV','TT','TUBE','TUI','TUNES','TUSHU','TV','TVS','TW','TZ','UA','UBANK','UBS','UG','UK','UNICOM','UNIVERSITY','UNO','UOL','UPS','US','UY','UZ','VA','VACATIONS','VANA','VANGUARD','VC','VE','VEGAS','VENTURES','VERISIGN','VERSICHERUNG','VET','VG','VI','VIAJES','VIDEO','VIG','VIKING','VILLAS','VIN','VIP','VIRGIN','VISA','VISION','VIVA','VIVO','VLAANDEREN','VN','VODKA','VOLVO','VOTE','VOTING','VOTO','VOYAGE','VU','WALES','WALMART','WALTER','WANG','WANGGOU','WATCH','WATCHES','WEATHER','WEATHERCHANNEL','WEBCAM','WEBER','WEBSITE','WED','WEDDING','WEIBO','WEIR','WF','WHOSWHO','WIEN','WIKI','WILLIAMHILL','WIN','WINDOWS','WINE','WINNERS','WME','WOLTERSKLUWER','WOODSIDE','WORK','WORKS','WORLD','WOW','WS','WTC','WTF','XBOX','XEROX','XIHUAN','XIN','XN--11B4C3D','XN--1CK2E1B','XN--1QQW23A','XN--2SCRJ9C','XN--30RR7Y','XN--3BST00M','XN--3DS443G','XN--3E0B707E','XN--3HCRJ9C','XN--3PXU8K','XN--42C2D9A','XN--45BR5CYL','XN--45BRJ9C','XN--45Q11C','XN--4DBRK0CE','XN--4GBRIM','XN--54B7FTA0CC','XN--55QW42G','XN--55QX5D','XN--5SU34J936BGSG','XN--5TZM5G','XN--6FRZ82G','XN--6QQ986B3XL','XN--80ADXHKS','XN--80AO21A','XN--80AQECDR1A','XN--80ASEHDB','XN--80ASWG','XN--8Y0A063A','XN--90A3AC','XN--90AE','XN--90AIS','XN--9DBQ2A','XN--9ET52U','XN--9KRT00A','XN--B4W605FERD','XN--BCK1B9A5DRE4C','XN--C1AVG','XN--C2BR7G','XN--CCK2B3B','XN--CCKWCXETD','XN--CG4BKI','XN--CLCHC0EA0B2G2A9GCD','XN--CZR694B','XN--CZRS0T','XN--CZRU2D','XN--D1ACJ3B','XN--D1ALF','XN--E1A4C','XN--ECKVDTC9D','XN--EFVY88H','XN--FCT429K','XN--FHBEI','XN--FIQ228C5HS','XN--FIQ64B','XN--FIQS8S','XN--FIQZ9S','XN--FJQ720A','XN--FLW351E','XN--FPCRJ9C3D','XN--FZC2C9E2C','XN--FZYS8D69UVGM','XN--G2XX48C','XN--GCKR3F0F','XN--GECRJ9C','XN--GK3AT1E','XN--H2BREG3EVE','XN--H2BRJ9C','XN--H2BRJ9C8C','XN--HXT814E','XN--I1B6B1A6A2E','XN--IMR513N','XN--IO0A7I','XN--J1AEF','XN--J1AMH','XN--J6W193G','XN--JLQ480N2RG','XN--JVR189M','XN--KCRX77D1X4A','XN--KPRW13D','XN--KPRY57D','XN--KPUT3I','XN--L1ACC','XN--LGBBAT1AD8J','XN--MGB9AWBF','XN--MGBA3A3EJT','XN--MGBA3A4F16A','XN--MGBA7C0BBN0A','XN--MGBAAM7A8H','XN--MGBAB2BD','XN--MGBAH1A3HJKRD','XN--MGBAI9AZGQP6J','XN--MGBAYH7GPA','XN--MGBBH1A','XN--MGBBH1A71E','XN--MGBC0A9AZCG','XN--MGBCA7DZDO','XN--MGBCPQ6GPA1A','XN--MGBERP4A5D4AR','XN--MGBGU82A','XN--MGBI4ECEXP','XN--MGBPL2FH','XN--MGBT3DHD','XN--MGBTX2B','XN--MGBX4CD0AB','XN--MIX891F','XN--MK1BU44C','XN--MXTQ1M','XN--NGBC5AZD','XN--NGBE9E0A','XN--NGBRX','XN--NODE','XN--NQV7F','XN--NQV7FS00EMA','XN--NYQY26A','XN--O3CW4H','XN--OGBPF8FL','XN--OTU796D','XN--P1ACF','XN--P1AI','XN--PGBS0DH','XN--PSSY2U','XN--Q7CE6A','XN--Q9JYB4C','XN--QCKA1PMC','XN--QXA6A','XN--QXAM','XN--RHQV96G','XN--ROVU88B','XN--RVC1E0AM3E','XN--S9BRJ9C','XN--SES554G','XN--T60B56A','XN--TCKWE','XN--TIQ49XQYJ','XN--UNUP4Y','XN--VERMGENSBERATER-CTB','XN--VERMGENSBERATUNG-PWB','XN--VHQUV','XN--VUQ861B','XN--W4R85EL8FHU5DNRA','XN--W4RS40L','XN--WGBH1C','XN--WGBL6A','XN--XHQ521B','XN--XKC2AL3HYE2A','XN--XKC2DL3A5EE0H','XN--Y9A3AQ','XN--YFRO4I67O','XN--YGBI2AMMX','XN--ZFR164B','XXX','XYZ','YACHTS','YAHOO','YAMAXUN','YANDEX','YE','YODOBASHI','YOGA','YOKOHAMA','YOU','YOUTUBE','YT','YUN','ZA','ZAPPOS','ZARA','ZERO','ZIP','ZM','ZONE','ZUERICH','ZW'];

/*　■■■■　変数　■■■■　*/
/*　■■■　グローバル変数　■■■　*/
let webhookUrl;
let memoValue, memoFangValue;
let now, YYYY, M, MM, D, DD, h, hh, m, mm, s, ss;
let ipv4s = [];
let ipv6s = [];
let cidrs = [];
let urls = [];
let domains = [];
let mails = [];
let md5s = [];
let sha1s = [];
let sha256s = [];
let macs = [];
let dates = [];
let dateTimes = [];

/*　■■■■■　関数　■■■■■　*/
/*　■■■■　自動実行　■■■■　*/
/*　■■■　ページ読込時　■■■　*/
window.addEventListener('DOMContentLoaded', function() {
	loadItem('memo','footer--textarea');
	memoValue = document.getElementById('footer--textarea').value;
	memoFangValue = memoValue.replace(/hxxps?:/gi,'https:').replace(/\[\.\]|\[dot\]/g,'.');
	/*　■　LocalStorageに保存したデータの読込　■　*/
	let elms = document.getElementsByClassName('save-ls');
	for (let elm of elms) {
		loadItem(elm.getAttribute('id'),elm.getAttribute('id'));
	}
	userName = localStorage.getItem('config--user-name');
	extractIndicator();
	analysis();
	copyList();
});

/*　■■■　イベントリスナー　■■■　*/
window.addEventListener('load',function() {
	/*　■■　MEMO更新時　■■　*/
	document.getElementById('footer--textarea').addEventListener('input',(event) => {
		/*　■　MEMO関連　■　*/
		saveItem('memo','footer--textarea');
		memoValue = document.getElementById('footer--textarea').value;
		memoFangValue = memoValue.replace(/\[\.\]|\[dot\]/g,'.').replace(/http\[:\]/gi,'http:').replace(/hxxp:/gi,'http:').replace(/hxxp\[:\]/gi,'http:').replace(/https\[:\]/gi,'https:').replace(/hxxps:/gi,'https:').replace(/hxxps\[:\]/gi,'https:');
		/*　■　抽出、Analysis　■　*/
		extractIndicator();
		for (resetParentElm of resetParentElms) {
			while(resetParentElm.firstChild) {
				resetParentElm.removeChild(resetParentElm.firstChild);
			}
		}
		analysis();
		copyList();
	});
	/*　■■　Config設定時　■■　*/
	document.querySelectorAll('.save-ls-btn').forEach(function(target) {
		target.addEventListener('click', function() {
			let elms = document.getElementsByClassName('save-ls');
			for (let elm of elms) {
				saveItem(elm.getAttribute('id'),elm.getAttribute('id'));
			}
		})
	});
	/*　■■　CMD-BTN　■■　*/
	document.querySelectorAll('.cmd-btn').forEach(function(target) {
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
	/*　■■　CALC--TOTP-BTN　■■　*/
	const calcTotpBtns = document.querySelectorAll('.calc--totp');
	calcTotpBtns.forEach(function(target) {
		target.addEventListener('click', function() {
			let secretElmId = target.dataset.target + '--secret';
			let outputElmId = target.dataset.target + '--output';
			calcTotp(secretElmId, outputElmId);
		})
	});
	/*　■■　CREATE-MAIL　■■　*/
	const createMailElms = document.querySelectorAll('.create-mail');
	createMailElms.forEach(function(target) {
		target.addEventListener('click', function() {
			createMail(target.dataset.type);
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

/*　■　COPY--LIST　■　*/
function copyList() {
	document.querySelectorAll('.copy--list--btn').forEach(function(target){
		target.addEventListener('click', function() {
			let lis = target.parentNode.nextElementSibling.children;
			let txt = '';
			for ( let li of lis ) {
				txt += li.textContent + '\n';
			}
			navigator.clipboard.writeText(txt);
		});
	});
}

/*　■　OPEN--LIST-LINK　■　*/
function copyList() {
	document.querySelectorAll('.open--list-link--btn').forEach(function(target){
		target.addEventListener('click', function() {
			let lis = target.parentNode.nextElementSibling.children;
			for ( li of lis ) {
				let links = li.querySelectorAll('a');
				for ( let link of links ) {
					window.open(link.getAttribute('href'), '_blank');
				}
			}
		});
	});
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
	let ret = parseInt(num.slice(0,8), 2) + ".";
	ret += parseInt(num.slice(8,16), 2) + ".";
	ret += parseInt(num.slice(16,24), 2) + ".";
	ret += parseInt(num.slice(24,32), 2);
	return ret;
}


/*　■■　ipが、cidrの範囲内にあるかどうか判定　■■　*/
function ipInRange(ip, cidr) {
	let cidrIp = cidr.split('/')[0];
	let cidrRange = Number(cidr.split('/')[1]);
	let ipNumber = parseInt(ip.split('.').map(e=>Number(e).toString(2).padStart(8,'0')).join(''),2,);
	let cidrIpNumber = parseInt(cidrIp.split('.').map(e=>Number(e).toString(2).padStart(8,'0')).join(''),2,);
	let ipNetwork = ipNumber >>> (32 - cidrRange);
	let cidrIpNetwork = cidrIpNumber >>> (32 - cidrRange);
	return ipNetwork === cidrIpNetwork;
}


/*　■■　IPv4分類　■■　*/
function ipv4Classify(ipv4) {
	let ipv4Obj = {'class': '', 'ipv4': ipv4};
	ipv4Obj.class += ipInRange(ipv4, '10.0.0.0/8') ? 'Private' : '';
	ipv4Obj.class += ipInRange(ipv4, '172.16.0.0/12') ? 'Private' : '';
	ipv4Obj.class += ipInRange(ipv4, '192.168.0.0/16') ? 'Private' : '';
	ipv4Obj.class += ipInRange(ipv4, '192.0.2.0/24') ? 'Example' : '';
	ipv4Obj.class += ipInRange(ipv4, '198.51.100.0/24') ? 'Example' : '';
	ipv4Obj.class += ipInRange(ipv4, '203.0.113.0/24') ? 'Example' : '';
	ipv4Obj.class += ipInRange(ipv4, '169.254.0.0/16') ? 'LinkLocal' : '';
	ipv4Obj.class += ipInRange(ipv4, '127.0.0.0/8') ? 'Loopback' : '';
	ipv4Obj.class += (ipv4Obj.class.length == 0) ? 'Global' : '';
	return ipv4Obj;
}


/*　■■　URL分析　■■　*/
function urlAnalysis(url) {
	let urlObj = {'flag': '', 'url': url};
	let parser = new URL(url);
	urlObj.flag += /https?:\/?[^\/]/.test(url) ? '🤡' : '' ;
	urlObj.flag += /[∕⁄]/.test(url) ? '➗' : '' ;
	urlObj.flag += /https?:\/{0,2}[@\w\-\.\/]*[^@\w\-\.\/]/.test(url) ? '👽' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*@[^\/]+/.test(url) ? '🔑' : '' ;
	urlObj.flag += /https?:\/{0,2}([^\/]*@)?translate\.google\.com\//.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}[\w\-]\.translate\.goog/.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}www\.google\.com\/url\?/.test(url) ? '➡️' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[\-\.]?ipfs[\-\.]?[^\/]+/.test(url) ? '🌐' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*\w{16,}/.test(url) ? '🎲' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[bcdfghjklmnpqrstvwxyz0-9]{8,}/.test(url) ? '🎲' : '' ;
	return urlObj;
}


/*　■■　HTML要素追加　■■　*/
/*　■　TABLE要素追加　■　*/
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
/*　■　UL＆LI要素追加　■　*/
function appendHtmlList(parentElm, title, items, linkUrl1='default', linkUrl2, encode) {
	let divElm = document.createElement('div');
	parentElm.appendChild(divElm);
	let hElm = document.createElement('h3');
	hElm.textContent = title;
	let buttonElm = document.createElement('button');
	buttonElm.className = 'open--list-link--btn d--btn d--color-grey d--no-border l--margin-left--1';
	buttonElm.textContent = '⬀';
	hElm.appendChild(buttonElm);
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

/*　■　UL要素追加　■　*/
function appendHtmlUl(parentElm, ulId, title) {
	let divElm = document.createElement('div');
	parentElm.appendChild(divElm);
	let hElm = document.createElement('h3');
	hElm.textContent = title;
	let buttonElm = document.createElement('button');
	buttonElm.className = 'copy--list--btn d--btn d--color-grey d--no-border l--margin-left--1';
	buttonElm.textContent = '❐';
	hElm.appendChild(buttonElm);
	divElm.appendChild(hElm);
	let ulElm = document.createElement('ul');
	ulElm.id = ulId;
	divElm.appendChild(ulElm);
}

/*　■　LI要素追加　■　*/
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
	let dupIpv4s = memoFangValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g);
	ipv4s = new Set(dupIpv4s);
	/*　■　CIDR抽出（cidrsに格納）　■　*/
	let dupCidrs = memoFangValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2})/g);
	cidrs = new Set(dupCidrs);
	/*　■　IPv6アドレス抽出（ipv6sに格納）　■　*/
	let dupIpv6s = memoFangValue.match(/([0-9a-f]{1,4}:){7,7}[0-9a-f]{1,4}|([0-9a-f]{1,4}:){1,7}:|([0-9a-f]{1,4}:){1,6}:[0-9a-f]{1,4}|([0-9a-f]{1,4}:){1,5}(:[0-9a-f]{1,4}){1,2}|([0-9a-f]{1,4}:){1,4}(:[0-9a-f]{1,4}){1,3}|([0-9a-f]{1,4}:){1,3}(:[0-9a-f]{1,4}){1,4}|([0-9a-f]{1,4}:){1,2}(:[0-9a-f]{1,4}){1,5}|[0-9a-f]{1,4}:((:[0-9a-f]{1,4}){1,6})|:((:[0-9a-f]{1,4}){1,7}|:)|fe80:(:[0-9a-f]{0,4}){0,4}%[0-9a-z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-f]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/gi);
	ipv6s = new Set(dupIpv6s);
	/*　■　URL抽出（urlsに格納）　■　*/
	let dupUrls = memoFangValue.match(/(https?:\/{0,2}[^\s,]+)/gi);
	urls = new Set(dupUrls);
	/*　■　Domain抽出（domainsに格納）　■　*/
	let dupDomains = [];
	for ( let tld of tlds ) {
		let reg = new RegExp('[a-z0-9\\.\\-]+\\.' + tld + '($|[^a-z0-9\\.\\-])', 'gi');
		let tldDomains = memoFangValue.match(reg);
		if ( tldDomains !== null ) {
			dupDomains = [...dupDomains, ...tldDomains];
		}
	}
	let unsortDomains = new Set(dupDomains);
	let undefinedDomains = [...Array(memoFangValue.length)];
	for ( let unsortDomain of unsortDomains ) {
		let idx = memoFangValue.indexOf(unsortDomain);
		undefinedDomains.splice(idx, 1, unsortDomain);
	}
	let regDomain = /[^a-z0-9\.\-]/gi;
	domains = undefinedDomains.filter(value => value !== undefined).map(value => value.replace(regDomain,''));
	let regHash = /[^a-f0-9]/gi;
	/*　■　MD5のHASH値抽出（md5sに格納）　■　*/
	let dupMd5s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{32}($|[^a-f0-9])/gi);
	if ( dupMd5s !== null ) {
		dupMd5s = dupMd5s.map(value => value.replace(regHash,''));
	}
	md5s = new Set(dupMd5s);
	/*　■　SHA1のHASH値抽出（sha1sに格納）　■　*/
	let dupSha1s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{40}($|[^a-f0-9])/gi);
	if ( dupSha1s !== null ) {
		dupSha1s = dupSha1s.map(value => value.replace(regHash,''));
	}
	sha1s = new Set(dupSha1s);
	/*　■　SHA256のHASH値抽出（sha256sに格納）　■　*/
	let dupSha256s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{64}($|[^a-f0-9])/gi);
	if ( dupSha256s !== null ) {
		dupSha256s = dupSha256s.map(value => value.replace(regHash,''));
	}
	sha256s = new Set(dupSha256s);
}

/*　■■■　Analysis　■■　*/
function analysis() {
	/*　■■　ANALYSIS--IP-ADDRESS　■■　*/
	let elmMAI = document.getElementById('main--analysis--ip-address');
	/*　■　TYPE-IP-ADDRESS　■　*/
	let ipv4Datass = [];
	for ( let ipv4 of ipv4s ) {
		let ipv4Obj = ipv4Classify(ipv4);
		ipv4Datass.push(Object.values(ipv4Obj));
	}
	appendHtmlTable(elmMAI, ['Class', 'IP Address'], ipv4Datass);
	/*　■　DEFANG-IP-ADDRESS　■　*/
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--defang', 'Defang');
	let elmMAID = document.getElementById('main--analysis--ip-address--defang');
	for ( let ip of ipv4s ){
		let defangIp = ip.replace(/\./g,'[.]');
		appendHtmlLi(elmMAID, '', defangIp);
	}
	/*　■　CIDR　■　*/
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--cidr', 'Cidr');
	let elmMAIC = document.getElementById('main--analysis--ip-address--cidr');
	for ( let cidr of cidrs ) {
		let linkUrl = 'htmlTools/cidr2list.htm?cidr=' + cidr;
		let ipRange = getIpRange(cidr);
		let str = ( ipRange.min !== '' && ipRange.max !== '' ) ? cidr + ' = ' + convertToIp(ipRange.min) + ' - ' + convertToIp(ipRange.max) : '' ;
		appendHtmlLi(elmMAIC, '', str, linkUrl);
	}
	/*　■　OSINT-IP-ADDRESS　■　*/
	for ( let ipOsint of ipOsints ) {
		let parentElm = document.getElementById('main--analysis--ip-address');
		appendHtmlList(parentElm, ipOsint.name, ipv4s, ipOsint.url1, ipOsint.url2, ipOsint.encode);
	}
	/*　■■　DOMAIN-ANALYSIS　■■　*/
	let elmMAD = document.getElementById('main--analysis--domain');
	/*　■　DOMAIN　■　*/
	appendHtmlUl(elmMAD, 'main--analysis--domain--fang', 'Domain');
	let elmMADF = document.getElementById('main--analysis--domain--fang');
	for ( let domain of domains ){
		appendHtmlLi(elmMADF, '', domain);
	}
	/*　■　DEFANG-DOMAIN　■　*/
	appendHtmlUl(elmMAD, 'main--analysis--domain--defang', 'Defang');
	let elmMADD = document.getElementById('main--analysis--domain--defang');
	for ( let domain of domains ){
		let defangDomain = domain.replace(/\./g,'[.]');
		appendHtmlLi(elmMADD, '', defangDomain);
	}
	/*　■　OSINT-DOMAIN　■　*/
	for ( let domainOsint of domainOsints ) {
		appendHtmlList(elmMAD, domainOsint.name, domains, domainOsint.url1, domainOsint.url2, domainOsint.encode);
	}
	/*　■■　URL-ANALYSIS　■■　*/
	let elmMAU = document.getElementById('main--analysis--url');
	/*　■　FLAG-URL　■　*/
	let urlDatass = [];
	for ( let url of urls ) {
		let urlObj = urlAnalysis(url);
		urlDatass.push(Object.values(urlObj));
	}
	appendHtmlTable(elmMAU, ['Flag', 'URL'], urlDatass );
	/*　■　DEFANG-URL　■　*/
	appendHtmlUl(elmMAU, 'main--analysis--url--defang', 'Defang');
	let elmMAUD = document.getElementById('main--analysis--url--defang');
	for ( let url of urls ){
		let defangUrl = url.replace(/http/,'hxxp').replace(/\./gi,'[.]');
		appendHtmlLi(elmMAUD, '', defangUrl);
	}
	/*　■　OSINT-URL　■　*/
	for ( let urlOsint of urlOsints ) {
		appendHtmlList(elmMAU, urlOsint.name, urls, urlOsint.url1, urlOsint.url2, urlOsint.encode);
	}
	/*　■■　HASH-ANALYSIS　■■　*/
	let elmMAH = document.getElementById('main--analysis--hash');
	/*　■　OSINT-HASH　■　*/
	for ( let hashOsint of hashOsints ) {
		appendHtmlList(elmMAH, hashOsint.name, md5s, hashOsint.url1, hashOsint.url2, hashOsint.encode);
		appendHtmlList(elmMAH, hashOsint.name, sha1s, hashOsint.url1, hashOsint.url2, hashOsint.encode);
		appendHtmlList(elmMAH, hashOsint.name, sha256s, hashOsint.url1, hashOsint.url2, hashOsint.encode);
	}
}

function createMail(type) {
	let mailTo = localStorage.getItem('config--mail-to');
	let mailCc = localStorage.getItem('config--mail-cc');
	let mailName = '石川さん';
	let phoneNumber = localStorage.getItem('config--phone-number-1');
	let mailSubject, mailBody;
	switch (type) {
		case 'telework-start':
			mailSubject = '【勤怠連絡】本日のテレワークを開始します';
			mailBody = 
				mailName + '%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				'本日のテレワークを開始いたします。%0D%0A%0D%0A' + 
				'よろしくお願いいたします。%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				userName;
		break;
		case 'telework-end':
			mailSubject = '【勤怠連絡】本日のテレワークを終了します';
			mailBody = 
				mailName + '%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				'本日のテレワークを終了いたします。%0D%0A%0D%0A' + 
				'よろしくお願いいたします。%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				userName;
		break;
		case 'paid-leave':
			mailSubject = '【勤怠連絡】●/●に休暇をいただきます';
			mailBody = 
				mailName + '%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				'●/●（●）に休暇をいただきます。%0D%0A%0D%0A' + 
				'お忙しい中ご迷惑をおかけいたしますが、よろしくお願いいたします。%0D%0A%0D%0A' + 
				'%0D%0A%0D%0A' + 
				'緊急の要件は、携帯電話（' + phoneNumber + '）までご連絡ください。%0D%0A%0D%0A' +
				'%0D%0A%0D%0A' + 
				userName;
		break;
	}
	window.open('mailto:' + mailTo + '?cc=' + mailCc + '&subject=' + mailSubject + '&body=' + mailBody, '_blank');
}
