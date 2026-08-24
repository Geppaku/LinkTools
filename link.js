//　■■■■■　命名規則　■■■■■
//　■■■■　関数、変数：camelCase　■■■■
//　■■■■　クラス：PascalCase　■■■■
//　■■■■　定数：UPPER_SNAKE_CASE　■■■■

//　■■■■■　グローバル定数　■■■■■
//　■■■■　OSINT　■■■■
const ipOsints = [
//	{ title: '表示名', name: '表示/非表示を切り替える識別名', url1: 'URL（IPアドレス等の前の部分）', url2: 'URL（IPアドレス等の後の部分）', encode: 'クエリで渡すドメイン等のエンコード種類', icon: 'アイコンのファイル名' },
	{ title: 'Search', name: 'ip-search', url1: 'https://www.google.com/search?q="', url2: '"', encode: '', icon: 'google.ico' },
	{ title: 'Whois', name: 'ip-whois', url1: 'https://www.whois.com/whois/', url2: '', encode: '', icon: 'whois.png' },
	{ title: 'JPNIC WHOIS', name: 'ip-jpnicwhois', url1: 'https://whois.nic.ad.jp/cgi-bin/whois_gw?key=', url2: '', encode: '', icon: 'jpnic.png' },
	{ title: 'Nslookup', name: 'ip-nslookup', url1: 'https://www.nslookup.io/domains/', url2: '/dns-records/', encode: '', icon: 'nslookup.png' },
	{ title: 'Virus Total', name: 'ip-virustotal', url1: 'https://www.virustotal.com/gui/ip-address/', url2: '', encode: '', icon: 'virustotal.svg' },
	{ title: 'SHODAN', name: 'ip-shodan', url1: 'https://www.shodan.io/host/', url2: '', encode: '', icon: 'shodan.png' },
	{ title: 'urlscan Pro', name: 'ip-urlscanpro', url1: 'https://pro.urlscan.io/search?query=page.ip:"', url2: '"', encode: '', icon: 'urlscanpro.png' },
	{ title: 'IPinfo', name: 'ip-ipinfo', url1: 'https://ipinfo.io/', url2: '', encode: '', icon: 'ipinfo.png' },
	{ title: 'IPSHU', name: 'ip-ipshu', url1: 'https://ja.ipshu.com/ipv4/', url2: '', encode: '', icon: 'ipshu.ico' },
	{ title: 'AbuseIPDB', name: 'ip-abuseipdb', url1: 'https://www.abuseipdb.com/check/', url2: '', encode: '', icon: 'abuseipdb.ico' },
	{ title: 'Hurricane Electric', name: 'ip-he', url1: 'https://bgp.he.net/ip/', url2: '', encode: '', icon: 'he.ico' },
	{ title: 'SPUR', name: 'ip-spur', url1: 'https://spur.us/context/', url2: '', encode: '', icon: 'spur.ico' },
];
const domainOsints = [
	{ title: 'Search', name: 'domain-search', url1: 'https://www.google.com/search?q="', url2: '"', encode: '', icon: 'google.ico' },
	{ title: 'Whois', name: 'domain-whois', url1: 'https://www.whois.com/whois/', url2: '', encode: '', icon: 'whois.png' },
	{ title: 'Nslookup', name: 'domain-nslookup', url1: 'https://www.nslookup.io/domains/', url2: '/dns-records/', encode: '', icon: 'nslookup.png' },
	{ title: 'urlscan Pro', name: 'domain-urlscanpro', url1: 'https://pro.urlscan.io/search?query="', url2: '"', encode: '', icon: 'urlscanpro.png' },
];
const urlOsints = [
	{ title: 'Virus Total', name: 'url-wirustotal', url1: 'https://www.virustotal.com/gui/search/', url2: '', encode: 'wPercent', icon: 'virustotal.svg' },
	{ title: 'Archive', name: 'url-archive', url1: 'https://web.archive.org/web///', url2: '', encode: '', icon: 'archive.png' },
];
const mailOsints = [
	{ title: 'Search', name: 'mail-search', url1: 'https://www.google.com/search?q="', url2: '"', encode: '', icon: 'google.ico' },
];
const hashOsints = [
	{ title: 'Virus Total', name: 'hash-virustotal', url1: 'https://www.virustotal.com/gui/search/', url2: '', encode: '', icon: 'virustotal.svg' },
];
const cveOsints = [
	{ title: 'Search', name: 'domain-search', url1: 'https://www.google.com/search?q="', url2: '"', encode: '', icon: 'google.ico' },
	{ title: 'CVE', name: 'cve-cveorg', url1: 'https://www.cve.org/CVERecord?id=', url2: '', encode: '', icon: 'cveorg.png' },
	{ title: 'NVD', name: 'cve-nvd', url1: 'https://nvd.nist.gov/vuln/detail/', url2: '', encode: '', icon: 'nvd.png' },
];

//　■■■■　TLD　■■■■
const tlds = ['AAA','AARP','ABB','ABBOTT','ABBVIE','ABC','ABLE','ABOGADO','ABUDHABI','AC','ACADEMY','ACCENTURE','ACCOUNTANT','ACCOUNTANTS','ACO','ACTOR','AD','ADS','ADULT','AE','AEG','AERO','AETNA','AF','AFL','AFRICA','AG','AGAKHAN','AGENCY','AI','AIG','AIRBUS','AIRFORCE','AIRTEL','AKDN','AL','ALIBABA','ALIPAY','ALLFINANZ','ALLSTATE','ALLY','ALSACE','ALSTOM','AM','AMAZON','AMERICANEXPRESS','AMERICANFAMILY','AMEX','AMFAM','AMICA','AMSTERDAM','ANALYTICS','ANDROID','ANQUAN','ANZ','AO','AOL','APARTMENTS','APP','APPLE','AQ','AQUARELLE','AR','ARAB','ARAMCO','ARCHI','ARMY','ARPA','ART','ARTE','AS','ASDA','ASIA','ASSOCIATES','AT','ATHLETA','ATTORNEY','AU','AUCTION','AUDI','AUDIBLE','AUDIO','AUSPOST','AUTHOR','AUTO','AUTOS','AW','AWS','AX','AXA','AZ','AZURE','BA','BABY','BAIDU','BANAMEX','BAND','BANK','BAR','BARCELONA','BARCLAYCARD','BARCLAYS','BAREFOOT','BARGAINS','BASEBALL','BASKETBALL','BAUHAUS','BAYERN','BB','BBC','BBT','BBVA','BCG','BCN','BD','BE','BEATS','BEAUTY','BEER','BERLIN','BEST','BESTBUY','BET','BF','BG','BH','BHARTI','BI','BIBLE','BID','BIKE','BING','BINGO','BIO','BIZ','BJ','BLACK','BLACKFRIDAY','BLOCKBUSTER','BLOG','BLOOMBERG','BLUE','BM','BMS','BMW','BN','BNPPARIBAS','BO','BOATS','BOEHRINGER','BOFA','BOM','BOND','BOO','BOOK','BOOKING','BOSCH','BOSTIK','BOSTON','BOT','BOUTIQUE','BOX','BR','BRADESCO','BRIDGESTONE','BROADWAY','BROKER','BROTHER','BRUSSELS','BS','BT','BUILD','BUILDERS','BUSINESS','BUY','BUZZ','BV','BW','BY','BZ','BZH','CA','CAB','CAFE','CAL','CALL','CALVINKLEIN','CAM','CAMERA','CAMP','CANON','CAPETOWN','CAPITAL','CAPITALONE','CAR','CARAVAN','CARDS','CARE','CAREER','CAREERS','CARS','CASA','CASE','CASH','CASINO','CAT','CATERING','CATHOLIC','CBA','CBN','CBRE','CC','CD','CENTER','CEO','CERN','CF','CFA','CFD','CG','CH','CHANEL','CHANNEL','CHARITY','CHASE','CHAT','CHEAP','CHINTAI','CHRISTMAS','CHROME','CHURCH','CI','CIPRIANI','CIRCLE','CISCO','CITADEL','CITI','CITIC','CITY','CK','CL','CLAIMS','CLEANING','CLICK','CLINIC','CLINIQUE','CLOTHING','CLOUD','CLUB','CLUBMED','CM','CN','CO','COACH','CODES','COFFEE','COLLEGE','COLOGNE','COM','COMMBANK','COMMUNITY','COMPANY','COMPARE','COMPUTER','COMSEC','CONDOS','CONSTRUCTION','CONSULTING','CONTACT','CONTRACTORS','COOKING','COOL','COOP','CORSICA','COUNTRY','COUPON','COUPONS','COURSES','CPA','CR','CREDIT','CREDITCARD','CREDITUNION','CRICKET','CROWN','CRS','CRUISE','CRUISES','CU','CUISINELLA','CV','CW','CX','CY','CYMRU','CYOU','CZ','DAD','DANCE','DATA','DATE','DATING','DATSUN','DAY','DCLK','DDS','DE','DEAL','DEALER','DEALS','DEGREE','DELIVERY','DELL','DELOITTE','DELTA','DEMOCRAT','DENTAL','DENTIST','DESI','DESIGN','DEV','DHL','DIAMONDS','DIET','DIGITAL','DIRECT','DIRECTORY','DISCOUNT','DISCOVER','DISH','DIY','DJ','DK','DM','DNP','DO','DOCS','DOCTOR','DOG','DOMAINS','DOT','DOWNLOAD','DRIVE','DTV','DUBAI','DUNLOP','DUPONT','DURBAN','DVAG','DVR','DZ','EARTH','EAT','EC','ECO','EDEKA','EDU','EDUCATION','EE','EG','EMAIL','EMERCK','ENERGY','ENGINEER','ENGINEERING','ENTERPRISES','EPSON','EQUIPMENT','ER','ERICSSON','ERNI','ES','ESQ','ESTATE','ET','EU','EUROVISION','EUS','EVENTS','EXCHANGE','EXPERT','EXPOSED','EXPRESS','EXTRASPACE','FAGE','FAIL','FAIRWINDS','FAITH','FAMILY','FAN','FANS','FARM','FARMERS','FASHION','FAST','FEDEX','FEEDBACK','FERRARI','FERRERO','FI','FIDELITY','FIDO','FILM','FINAL','FINANCE','FINANCIAL','FIRE','FIRESTONE','FIRMDALE','FISH','FISHING','FIT','FITNESS','FJ','FK','FLICKR','FLIGHTS','FLIR','FLORIST','FLOWERS','FLY','FM','FO','FOO','FOOD','FOOTBALL','FORD','FOREX','FORSALE','FORUM','FOUNDATION','FOX','FR','FREE','FRESENIUS','FRL','FROGANS','FRONTIER','FTR','FUJITSU','FUN','FUND','FURNITURE','FUTBOL','FYI','GA','GAL','GALLERY','GALLO','GALLUP','GAME','GAMES','GAP','GARDEN','GAY','GB','GBIZ','GD','GDN','GE','GEA','GENT','GENTING','GEORGE','GF','GG','GGEE','GH','GI','GIFT','GIFTS','GIVES','GIVING','GL','GLASS','GLE','GLOBAL','GLOBO','GM','GMAIL','GMBH','GMO','GMX','GN','GODADDY','GOLD','GOLDPOINT','GOLF','GOO','GOODYEAR','GOOG','GOOGLE','GOP','GOT','GOV','GP','GQ','GR','GRAINGER','GRAPHICS','GRATIS','GREEN','GRIPE','GROCERY','GROUP','GS','GT','GU','GUCCI','GUGE','GUIDE','GUITARS','GURU','GW','GY','HAIR','HAMBURG','HANGOUT','HAUS','HBO','HDFC','HDFCBANK','HEALTH','HEALTHCARE','HELP','HELSINKI','HERE','HERMES','HIPHOP','HISAMITSU','HITACHI','HIV','HK','HKT','HM','HN','HOCKEY','HOLDINGS','HOLIDAY','HOMEDEPOT','HOMEGOODS','HOMES','HOMESENSE','HONDA','HORSE','HOSPITAL','HOST','HOSTING','HOT','HOTELS','HOTMAIL','HOUSE','HOW','HR','HSBC','HT','HU','HUGHES','HYATT','HYUNDAI','IBM','ICBC','ICE','ICU','ID','IE','IEEE','IFM','IKANO','IL','IM','IMAMAT','IMDB','IMMO','IMMOBILIEN','IN','INC','INDUSTRIES','INFINITI','INFO','ING','INK','INSTITUTE','INSURANCE','INSURE','INT','INTERNATIONAL','INTUIT','INVESTMENTS','IO','IPIRANGA','IQ','IR','IRISH','IS','ISMAILI','IST','ISTANBUL','IT','ITAU','ITV','JAGUAR','JAVA','JCB','JE','JEEP','JETZT','JEWELRY','JIO','JLL','JM','JMP','JNJ','JO','JOBS','JOBURG','JOT','JOY','JP','JPMORGAN','JPRS','JUEGOS','JUNIPER','KAUFEN','KDDI','KE','KERRYHOTELS','KERRYPROPERTIES','KFH','KG','KH','KI','KIA','KIDS','KIM','KINDLE','KITCHEN','KIWI','KM','KN','KOELN','KOMATSU','KOSHER','KP','KPMG','KPN','KR','KRD','KRED','KUOKGROUP','KW','KY','KYOTO','KZ','LA','LACAIXA','LAMBORGHINI','LAMER','LAND','LANDROVER','LANXESS','LASALLE','LAT','LATINO','LATROBE','LAW','LAWYER','LB','LC','LDS','LEASE','LECLERC','LEFRAK','LEGAL','LEGO','LEXUS','LGBT','LI','LIDL','LIFE','LIFEINSURANCE','LIFESTYLE','LIGHTING','LIKE','LILLY','LIMITED','LIMO','LINCOLN','LINK','LIVE','LIVING','LK','LLC','LLP','LOAN','LOANS','LOCKER','LOCUS','LOL','LONDON','LOTTE','LOTTO','LOVE','LPL','LPLFINANCIAL','LR','LS','LT','LTD','LTDA','LU','LUNDBECK','LUXE','LUXURY','LV','LY','MA','MADRID','MAIF','MAISON','MAKEUP','MAN','MANAGEMENT','MANGO','MAP','MARKET','MARKETING','MARKETS','MARRIOTT','MARSHALLS','MATTEL','MBA','MC','MCKINSEY','MD','ME','MED','MEDIA','MEET','MELBOURNE','MEME','MEMORIAL','MEN','MENU','MERCKMSD','MG','MH','MIAMI','MICROSOFT','MIL','MINI','MINT','MIT','MITSUBISHI','MK','ML','MLB','MLS','MM','MMA','MN','MO','MOBI','MOBILE','MODA','MOE','MOI','MOM','MONASH','MONEY','MONSTER','MORMON','MORTGAGE','MOSCOW','MOTO','MOTORCYCLES','MOV','MOVIE','MP','MQ','MR','MS','MSD','MT','MTN','MTR','MU','MUSEUM','MUSIC','MV','MW','MX','MY','MZ','NA','NAB','NAGOYA','NAME','NAVY','NBA','NC','NE','NEC','NET','NETBANK','NETFLIX','NETWORK','NEUSTAR','NEW','NEWS','NEXT','NEXTDIRECT','NEXUS','NF','NFL','NG','NGO','NHK','NI','NICO','NIKE','NIKON','NINJA','NISSAN','NISSAY','NL','NO','NOKIA','NORTON','NOW','NOWRUZ','NOWTV','NP','NR','NRA','NRW','NTT','NU','NYC','NZ','OBI','OBSERVER','OFFICE','OKINAWA','OLAYAN','OLAYANGROUP','OLLO','OM','OMEGA','ONE','ONG','ONL','ONLINE','OOO','OPEN','ORACLE','ORANGE','ORG','ORGANIC','ORIGINS','OSAKA','OTSUKA','OTT','OVH','PA','PAGE','PANASONIC','PARIS','PARS','PARTNERS','PARTS','PARTY','PAY','PCCW','PE','PET','PF','PFIZER','PG','PH','PHARMACY','PHD','PHILIPS','PHONE','PHOTO','PHOTOGRAPHY','PHOTOS','PHYSIO','PICS','PICTET','PICTURES','PID','PIN','PING','PINK','PIONEER','PIZZA','PK','PL','PLACE','PLAY','PLAYSTATION','PLUMBING','PLUS','PM','PN','PNC','POHL','POKER','POLITIE','PORN','POST','PR','PRAXI','PRESS','PRIME','PRO','PROD','PRODUCTIONS','PROF','PROGRESSIVE','PROMO','PROPERTIES','PROPERTY','PROTECTION','PRU','PRUDENTIAL','PS','PT','PUB','PW','PWC','PY','QA','QPON','QUEBEC','QUEST','RACING','RADIO','RE','READ','REALESTATE','REALTOR','REALTY','RECIPES','RED','REDSTONE','REDUMBRELLA','REHAB','REISE','REISEN','REIT','RELIANCE','REN','RENT','RENTALS','REPAIR','REPORT','REPUBLICAN','REST','RESTAURANT','REVIEW','REVIEWS','REXROTH','RICH','RICHARDLI','RICOH','RIL','RIO','RIP','RO','ROCKS','RODEO','ROGERS','ROOM','RS','RSVP','RU','RUGBY','RUHR','RUN','RW','RWE','RYUKYU','SA','SAARLAND','SAFE','SAFETY','SAKURA','SALE','SALON','SAMSCLUB','SAMSUNG','SANDVIK','SANDVIKCOROMANT','SANOFI','SAP','SARL','SAS','SAVE','SAXO','SB','SBI','SBS','SC','SCB','SCHAEFFLER','SCHMIDT','SCHOLARSHIPS','SCHOOL','SCHULE','SCHWARZ','SCIENCE','SCOT','SD','SE','SEARCH','SEAT','SECURE','SECURITY','SEEK','SELECT','SENER','SERVICES','SEVEN','SEW','SEX','SEXY','SFR','SG','SH','SHANGRILA','SHARP','SHELL','SHIA','SHIKSHA','SHOES','SHOP','SHOPPING','SHOUJI','SHOW','SI','SILK','SINA','SINGLES','SITE','SJ','SK','SKI','SKIN','SKY','SKYPE','SL','SLING','SM','SMART','SMILE','SN','SNCF','SO','SOCCER','SOCIAL','SOFTBANK','SOFTWARE','SOHU','SOLAR','SOLUTIONS','SONG','SONY','SOY','SPA','SPACE','SPORT','SPOT','SR','SRL','SS','ST','STADA','STAPLES','STAR','STATEBANK','STATEFARM','STC','STCGROUP','STOCKHOLM','STORAGE','STORE','STREAM','STUDIO','STUDY','STYLE','SU','SUCKS','SUPPLIES','SUPPLY','SUPPORT','SURF','SURGERY','SUZUKI','SV','SWATCH','SWISS','SX','SY','SYDNEY','SYSTEMS','SZ','TAB','TAIPEI','TALK','TAOBAO','TARGET','TATAMOTORS','TATAR','TATTOO','TAX','TAXI','TC','TCI','TD','TDK','TEAM','TECH','TECHNOLOGY','TEL','TEMASEK','TENNIS','TEVA','TF','TG','TH','THD','THEATER','THEATRE','TIAA','TICKETS','TIENDA','TIPS','TIRES','TIROL','TJ','TJMAXX','TJX','TK','TKMAXX','TL','TM','TMALL','TN','TO','TODAY','TOKYO','TOOLS','TOP','TORAY','TOSHIBA','TOTAL','TOURS','TOWN','TOYOTA','TOYS','TR','TRADE','TRADING','TRAINING','TRAVEL','TRAVELERS','TRAVELERSINSURANCE','TRUST','TRV','TT','TUBE','TUI','TUNES','TUSHU','TV','TVS','TW','TZ','UA','UBANK','UBS','UG','UK','UNICOM','UNIVERSITY','UNO','UOL','UPS','US','UY','UZ','VA','VACATIONS','VANA','VANGUARD','VC','VE','VEGAS','VENTURES','VERISIGN','VERSICHERUNG','VET','VG','VI','VIAJES','VIDEO','VIG','VIKING','VILLAS','VIN','VIP','VIRGIN','VISA','VISION','VIVA','VIVO','VLAANDEREN','VN','VODKA','VOLVO','VOTE','VOTING','VOTO','VOYAGE','VU','WALES','WALMART','WALTER','WANG','WANGGOU','WATCH','WATCHES','WEATHER','WEATHERCHANNEL','WEBCAM','WEBER','WEBSITE','WED','WEDDING','WEIBO','WEIR','WF','WHOSWHO','WIEN','WIKI','WILLIAMHILL','WIN','WINDOWS','WINE','WINNERS','WME','WOLTERSKLUWER','WOODSIDE','WORK','WORKS','WORLD','WOW','WS','WTC','WTF','XBOX','XEROX','XIHUAN','XIN','XN--11B4C3D','XN--1CK2E1B','XN--1QQW23A','XN--2SCRJ9C','XN--30RR7Y','XN--3BST00M','XN--3DS443G','XN--3E0B707E','XN--3HCRJ9C','XN--3PXU8K','XN--42C2D9A','XN--45BR5CYL','XN--45BRJ9C','XN--45Q11C','XN--4DBRK0CE','XN--4GBRIM','XN--54B7FTA0CC','XN--55QW42G','XN--55QX5D','XN--5SU34J936BGSG','XN--5TZM5G','XN--6FRZ82G','XN--6QQ986B3XL','XN--80ADXHKS','XN--80AO21A','XN--80AQECDR1A','XN--80ASEHDB','XN--80ASWG','XN--8Y0A063A','XN--90A3AC','XN--90AE','XN--90AIS','XN--9DBQ2A','XN--9ET52U','XN--9KRT00A','XN--B4W605FERD','XN--BCK1B9A5DRE4C','XN--C1AVG','XN--C2BR7G','XN--CCK2B3B','XN--CCKWCXETD','XN--CG4BKI','XN--CLCHC0EA0B2G2A9GCD','XN--CZR694B','XN--CZRS0T','XN--CZRU2D','XN--D1ACJ3B','XN--D1ALF','XN--E1A4C','XN--ECKVDTC9D','XN--EFVY88H','XN--FCT429K','XN--FHBEI','XN--FIQ228C5HS','XN--FIQ64B','XN--FIQS8S','XN--FIQZ9S','XN--FJQ720A','XN--FLW351E','XN--FPCRJ9C3D','XN--FZC2C9E2C','XN--FZYS8D69UVGM','XN--G2XX48C','XN--GCKR3F0F','XN--GECRJ9C','XN--GK3AT1E','XN--H2BREG3EVE','XN--H2BRJ9C','XN--H2BRJ9C8C','XN--HXT814E','XN--I1B6B1A6A2E','XN--IMR513N','XN--IO0A7I','XN--J1AEF','XN--J1AMH','XN--J6W193G','XN--JLQ480N2RG','XN--JVR189M','XN--KCRX77D1X4A','XN--KPRW13D','XN--KPRY57D','XN--KPUT3I','XN--L1ACC','XN--LGBBAT1AD8J','XN--MGB9AWBF','XN--MGBA3A3EJT','XN--MGBA3A4F16A','XN--MGBA7C0BBN0A','XN--MGBAAM7A8H','XN--MGBAB2BD','XN--MGBAH1A3HJKRD','XN--MGBAI9AZGQP6J','XN--MGBAYH7GPA','XN--MGBBH1A','XN--MGBBH1A71E','XN--MGBC0A9AZCG','XN--MGBCA7DZDO','XN--MGBCPQ6GPA1A','XN--MGBERP4A5D4AR','XN--MGBGU82A','XN--MGBI4ECEXP','XN--MGBPL2FH','XN--MGBT3DHD','XN--MGBTX2B','XN--MGBX4CD0AB','XN--MIX891F','XN--MK1BU44C','XN--MXTQ1M','XN--NGBC5AZD','XN--NGBE9E0A','XN--NGBRX','XN--NODE','XN--NQV7F','XN--NQV7FS00EMA','XN--NYQY26A','XN--O3CW4H','XN--OGBPF8FL','XN--OTU796D','XN--P1ACF','XN--P1AI','XN--PGBS0DH','XN--PSSY2U','XN--Q7CE6A','XN--Q9JYB4C','XN--QCKA1PMC','XN--QXA6A','XN--QXAM','XN--RHQV96G','XN--ROVU88B','XN--RVC1E0AM3E','XN--S9BRJ9C','XN--SES554G','XN--T60B56A','XN--TCKWE','XN--TIQ49XQYJ','XN--UNUP4Y','XN--VERMGENSBERATER-CTB','XN--VERMGENSBERATUNG-PWB','XN--VHQUV','XN--VUQ861B','XN--W4R85EL8FHU5DNRA','XN--W4RS40L','XN--WGBH1C','XN--WGBL6A','XN--XHQ521B','XN--XKC2AL3HYE2A','XN--XKC2DL3A5EE0H','XN--Y9A3AQ','XN--YFRO4I67O','XN--YGBI2AMMX','XN--ZFR164B','XXX','XYZ','YACHTS','YAHOO','YAMAXUN','YANDEX','YE','YODOBASHI','YOGA','YOKOHAMA','YOU','YOUTUBE','YT','YUN','ZA','ZAPPOS','ZARA','ZERO','ZIP','ZM','ZONE','ZUERICH','ZW'];

//　■■■■　曜日表記　■■■■
const JpDows = ["日", "月", "火", "水", "木", "金", "土"];
const enDows = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];

//　■■■■　子要素リセット対象要素（子要素が動的に追加される要素）　■■■■
const childResetElms = document.getElementsByClassName('child-reset--elm');

//　■■■■■　グローバル変数　■■■■■
let memoElm, memoValue, memoFangValue;
let webhookUrl;
let now, YYYY, M, MM, D, DD, A, a, h, hh, m, mm, s, ss;
let ipv4s = [];
let ipv6s = [];
let cidrs = [];
let urls = [];
let domains = [];
let mails = [];
let md5s = [];
let sha1s = [];
let sha256s = [];
let invisibleCharacters = [];
let macs = [];
let cves = [];
let dates = [];
let dateTimes = [];
let configObj = {};

//　■■■■■　関数　■■■■■
//　■■■■　DOM読込時　■■■■
window.addEventListener('DOMContentLoaded', function() {
	memoElm = document.getElementById('footer--textarea');
	if ( memoElm !== null ) {
		loadLS2Value('memo',memoElm);
		memoChanged();
		setEventListener();
	}
	loadConfig();
//　■■■　時計（日時）表示　■■■
	setTimeout(function () {
		showClock();
		setInterval("showClock()", 1000);
	}, 1000 - new Date().getUTCMilliseconds() );
});

//　■■■■　汎用関数　■■■■
//　■■■　LocalStorage　■■■
function loadLS2Value(key,elm) {
	if ( localStorage.getItem(key) !== null && elm !== null ) {
		elm.value = localStorage.getItem(key);
	}
}

//　■■■　日時　■■■
function getDateTime() {
	now = new Date();
	separateDateTime(now);
}
function separateDateTime(dateTime) {
	YYYY = dateTime.getFullYear();
	M = dateTime.getMonth() + 1;
	D = dateTime.getDate();
	MM = ('0' + M).slice(-2);
	DD = ('0' + D).slice(-2);
	A = JpDows[dateTime.getDay()];
	a = enDows[dateTime.getDay()];
	h = dateTime.getHours();
	m = dateTime.getMinutes();
	s = dateTime.getSeconds();
	hh = ('0' + h).slice(-2);
	mm = ('0' + m).slice(-2);
	ss = ('0' + s).slice(-2);
}

//　■■■　IPアドレス　■■■
//　■■　IPレンジ計算　■■
function getIpRange(cidr){
	let ipaddress = cidr.split('/'),
			group = ipaddress[0].split('.'),
			ipBit = "",
			minIpBit = "",
			maxIpBit = "",
			tmpMinIpBit = "",
			tmpMaxIpBit = "",
			maxAddress = ipaddress[0];
	//　入力値が空、IPアドレスをカンマ基準で配列にした際に4つじゃない場合
	//　ネットワークのビット数が規定の数値(1~32)じゃない場合
	if ( ipaddress === "" || group.length !== 4 ||
			(ipaddress.length === 2 && String(ipaddress[1]).match(/^([1-9]|[1-2][0-9]|3[0-2])$/) === null ) ) {
		return {min:'', max: ''}; // 空を返す
	}
	//　IPアドレスのみの場合
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
//　■■　10進数表記ののIPアドレスを2進数に変換　■■
function convertToBinaryNum(group){
	let ret = "";
	for ( let i = 0; i < 4; i++ ) {
		let bit = "00000000" + parseInt(group[i], 10).toString(2);
		ret += bit.slice(-8);
	}
	return ret;
}
//　■■　2進数表記のIPアドレスを10進数に変換　■■
function convertToIp(num){
	let ret = parseInt(num.slice(0,8), 2) + ".";
	ret += parseInt(num.slice(8,16), 2) + ".";
	ret += parseInt(num.slice(16,24), 2) + ".";
	ret += parseInt(num.slice(24,32), 2);
	return ret;
}
//　■■　ipが、cidrの範囲内にあるかどうか判定　■■
function ipInRange(ip, cidr) {
	let cidrIp = cidr.split('/')[0];
	let cidrRange = Number(cidr.split('/')[1]);
	let ipNumber = parseInt(ip.split('.').map(e=>Number(e).toString(2).padStart(8,'0')).join(''),2,);
	let cidrIpNumber = parseInt(cidrIp.split('.').map(e=>Number(e).toString(2).padStart(8,'0')).join(''),2,);
	let ipNetwork = ipNumber >>> (32 - cidrRange);
	let cidrIpNetwork = cidrIpNumber >>> (32 - cidrRange);
	return ipNetwork === cidrIpNetwork;
}
//　■■　IPv4分類　■■
function ipv4Classify(ipv4) {
	let ipv4Class = '';
	ipv4Class += ipInRange(ipv4, '10.0.0.0/8') ? 'Private' : '';
	ipv4Class += ipInRange(ipv4, '172.16.0.0/12') ? 'Private' : '';
	ipv4Class += ipInRange(ipv4, '192.168.0.0/16') ? 'Private' : '';
	ipv4Class += ipInRange(ipv4, '192.0.2.0/24') ? 'Example' : '';
	ipv4Class += ipInRange(ipv4, '198.51.100.0/24') ? 'Example' : '';
	ipv4Class += ipInRange(ipv4, '203.0.113.0/24') ? 'Example' : '';
	ipv4Class += ipInRange(ipv4, '169.254.0.0/16') ? 'LinkLocal' : '';
	ipv4Class += ipInRange(ipv4, '127.0.0.0/8') ? 'Loopback' : '';
	ipv4Class += (ipv4Class.length == 0) ? 'Global' : '';
	return ipv4Class;
}

//　■■■　URL分析　■■■
function urlAnalysis(url) {
	let urlObj = {'flag': '', 'url': url, 'siteDisplayed':''};
	urlObj.flag += /https?:\/?[^\/]/.test(url) ? '🤡' : '' ;
	urlObj.flag += /[∕⁄]/.test(url) ? '➗' : '' ;
	urlObj.flag += /https?:\/{0,2}[@\w\-\.]*[^@\w\-\.\/]/.test(url) ? '👽' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*@[^\/]+/.test(url) ? '🔑' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*translate\.google\.com\//.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]+\.translate\.goog[\/]/.test(url) ? '📖' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*www\.google\.com\/url\?/.test(url) ? '➡️' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*www\.bing\.com\/ck\/a\?/.test(url) ? '➡️' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[\-\.]?ipfs[\-\.]?[^\/]+/.test(url) ? '🌐' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*\w{16,}/.test(url) ? '🎲' : '' ;
	urlObj.flag += /https?:\/{0,2}[^\/]*[bcdfghjklmnpqrstvwxyz0-9]{8,}/.test(url) ? '🎲' : '' ;
//	let parser = new URL(url);　エラー出る
	urlObj.siteDisplayed += /https?:\/{0,2}[^\/]*safelinks\.protection\.outlook\.com\/[\w\-_\.\/]*(\?.*)?[\?&]url=https?[^&]+/.test(url)
		? decodeURIComponent(url.match(/[\?&]url=https?[^&]+/gi)[0].match(/https?.+/gi)[0]) : '';
	urlObj.siteDisplayed += /https?:\/{0,2}[^\/]*www\.google\.com\/url(\?.*)?[\?&]url=https?[^&]+/.test(url)
		? decodeURIComponent(url.match(/[\?&]url=https?[^&]+/gi)[0].match(/https?.+/gi)[0]) : '';
	urlObj.siteDisplayed += /https?:\/{0,2}[^\/]*www\.bing\.com\/ck\/a(\?.*)?[\?&]u=a1aHR0c[^&]+/.test(url)
		? atob(url.match(/a1aHR0c[^&]+/gi)[0]) : '';
	urlObj.siteDisplayed += /https?:\/{0,2}[^\/]+\.translate\.goog[\/]/.test(url)
		? url.replace('.translate.goog/','/').replace(/\?.*/,'').replaceAll('-','.').replaceAll('..','.') : '';
	return urlObj;
}

//　■■■　HTML要素追加　■■■
//　■■　TABLE要素追加　■■
function appendHtmlTable(parentElm, headers, datass) {
	let tableElm = document.createElement('table');
	tableElm.className = 'l--break-word';
	parentElm.appendChild(tableElm);
	let trThElm = document.createElement('tr');
	tableElm.appendChild(trThElm);
	for ( let i=0; i<headers.length; i++ ) {
		let thElm = document.createElement('th');
		trThElm.appendChild(thElm);
		thElm.textContent = headers[i];
		if ( i > 0 ) {
			//　■　Copyアイコン追加
			let svgCopyElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svgCopyElm.setAttribute('class', 'd--icon-btn l--margin-left--1rem');
			svgCopyElm.setAttribute('data-act', 'copy--table-column');
			svgCopyElm.setAttribute('data-target', i);
			let useCopyElm = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			useCopyElm.setAttribute('href', '#svg--copy');
			svgCopyElm.appendChild(useCopyElm);
			thElm.appendChild(svgCopyElm);
			//　■　Openアイコン追加
			let svgOpenElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			svgOpenElm.setAttribute('class', 'd--icon-btn l--margin-left--1rem');
			svgOpenElm.setAttribute('data-act', 'open--table-column--uri');
			svgOpenElm.setAttribute('data-target', i);
			let useOpenElm = document.createElementNS('http://www.w3.org/2000/svg', 'use');
			useOpenElm.setAttribute('href', '#svg--ext-link');
			svgOpenElm.appendChild(useOpenElm);
			thElm.appendChild(svgOpenElm);
		}
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
//　■■　UL＆LI要素追加　■■
function appendHtmlList(parentElm, items, osintObj) {
	if ( localStorage.getItem('display-osint')==null ) {
		saveConfig();
	}
	displayOsintObj = JSON.parse(localStorage.getItem('display-osint'));
	if( displayOsintObj[osintObj.name] == null || displayOsintObj[osintObj.name] !== false ) {
		let divElm = document.createElement('div');
		parentElm.appendChild(divElm);
		let hElm = document.createElement('h3');
		hElm.className = 'l--flex-container l--align-items--center';
		let imgElm = document.createElement('img');
		imgElm.src = './img/osintIcon/' + osintObj.icon;
		imgElm.className = 'l--height--1rem l--width--1rem l--padding-right--025rem';
		let hTitleNode = document.createTextNode(osintObj.title);
		let svgElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svgElm.setAttribute('class', 'd--icon-btn l--margin-left--1rem');
		svgElm.setAttribute('data-act', 'open--list--link');
		let useElm = document.createElementNS('http://www.w3.org/2000/svg', 'use');
		useElm.setAttribute('href', '#svg--ext-link');
		divElm.appendChild(hElm);
		hElm.appendChild(imgElm);
		hElm.appendChild(hTitleNode);
		hElm.appendChild(svgElm);
		svgElm.appendChild(useElm);
		let ulElm = document.createElement('ul');
		divElm.appendChild(ulElm);
		for ( let item of items ) {
			if ( item.length > 64) {
				item = item.substr(0,32) + ' ... ' + item.substr(-16);
			}
			let liElm = document.createElement('li');
			ulElm.appendChild(liElm);
			switch (osintObj.encode) {
				case 'wPercent' :
					decodeItem = encodeURI(encodeURIComponent(item));
				break;
				default :
					decodeItem = item;
			}
			if ( osintObj.linkUrl1=='default' ) {
				liElm.textContent = item;
			} else {
				let aElm = document.createElement('a');
				aElm.textContent = item;
				aElm.href = osintObj.url1 + decodeItem + osintObj.url2;
				aElm.target = '_blank';
				liElm.appendChild(aElm);
			}
		}
	}
}
//　■■　UL要素追加　■■
function appendHtmlUl(parentElm, ulId, title) {
	let divElm = document.createElement('div');
	parentElm.appendChild(divElm);
	let hElm = document.createElement('h3');
	hElm.textContent = title;
	let svgElm = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgElm.setAttribute('class', 'd--icon-btn l--margin-left--1rem');
	svgElm.setAttribute('data-act', 'copy--list');
	let useElm = document.createElementNS('http://www.w3.org/2000/svg', 'use');
	useElm.setAttribute('href', '#svg--copy');
	divElm.appendChild(hElm);
	hElm.appendChild(svgElm);
	svgElm.appendChild(useElm);
	let ulElm = document.createElement('ul');
	ulElm.id = ulId;
	ulElm.className = "l--break-word";
	divElm.appendChild(ulElm);
}
//　■■　LI要素追加　■■
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







//　■■■■　関数　■■■■
//　■■■　SAVE-CONFIG　■■■
function saveConfig() {
	let elms = document.querySelectorAll('.a--config');
	let configObjNames = [];
	for ( let elm of elms ) {
		configObjNames.push(elm.dataset.object);
	}
	configObjNames = new Set(configObjNames);
	for ( let configObjName of configObjNames ) {
		let obj = {};
		for ( let elm of elms ) {
			if ( elm.dataset.object == configObjName ) {
				switch ( elm.dataset.type ) {
					case 'checked' :
						obj[elm.dataset.name] = elm.checked;
					break;
					case 'value' :
						obj[elm.dataset.name] = elm.value;
					break;
				}
			}
		}
		configObj[configObjName] = obj;
	}
	//　■■　TOTP設定の保存　■■
	let totpElms = document.querySelectorAll('.a--config-totp');
	let configTotpObj = {};
	for ( let i=0; i<totpElms.length; i++ ) {
		let obj = {};
		obj['name'] = totpElms[i].value;
		obj['seacret'] = totpElms[i].parentElement.nextElementSibling.firstElementChild.value;
		configTotpObj[i] = obj;
	}
	configObj['totp'] = configTotpObj;
	//　■■　メール設定の保存　■■
	let mailElms = document.querySelectorAll('.a--config-mail');
	let configMailObj = {};
	for ( let i=0; i<mailElms.length; i++ ) {
		let obj = {};
		obj['name'] = mailElms[i].value;
		obj['to'] = mailElms[i].parentElement.parentElement.children[1].children[1].value;
		obj['cc'] = mailElms[i].parentElement.parentElement.children[2].children[1].value;
		obj['bcc'] = mailElms[i].parentElement.parentElement.children[3].children[1].value;
		obj['subject'] = mailElms[i].parentElement.parentElement.children[4].children[1].value;
		obj['body'] = mailElms[i].parentElement.parentElement.children[5].children[1].value;
		configMailObj[i] = obj;
	}
	configObj['mail'] = configMailObj;
	//　■■　LocalStorageへの保存　■■
	for ( let key of Object.keys(configObj) ) {
		localStorage.setItem(key,JSON.stringify(configObj[key]));
	}
	location.reload()
}

//　■■■　LOAD-CONFIG　■■■
function loadConfig() {
	let elms = document.querySelectorAll('.a--config');
	let configObjNames = [];
	for ( let elm of elms ) {
		configObjNames.push(elm.dataset.object);
	}
	configObjNames = new Set(configObjNames);
	for ( let configObjName of configObjNames ) {
		let obj = JSON.parse(localStorage.getItem(configObjName));
		for ( let elm of elms ) {
			if ( elm.dataset.name !== null && elm.dataset.object == configObjName ) {
				switch ( elm.dataset.type ) {
					case 'checked' :
						elm.checked = obj[elm.dataset.name];
					break;
					case 'value' :
						elm.value = obj[elm.dataset.name];
					break;
				}
			}
		}
	}
	//　■■　TOTP設定の読込　■■
	let totpElms = document.querySelectorAll('.a--config-totp');
	let configTotpObj = JSON.parse(localStorage.getItem('totp'));
	for ( let i=0; i<totpElms.length; i++ ) {
		totpElms[i].value = configTotpObj[i]['name'];
		totpElms[i].parentElement.nextElementSibling.firstElementChild.value = configTotpObj[i]['seacret'];
	}
	//　■■　メール設定の読込　■■
	let mailElms = document.querySelectorAll('.a--config-mail');
	let configMailObj = JSON.parse(localStorage.getItem('mail'));
	for ( let i=0; i<mailElms.length; i++ ) {
		mailElms[i].value = configMailObj[i]['name'];
		mailElms[i].parentElement.parentElement.children[1].children[1].value = configMailObj[i]['to'];
		mailElms[i].parentElement.parentElement.children[2].children[1].value = configMailObj[i]['cc'];
		mailElms[i].parentElement.parentElement.children[3].children[1].value = configMailObj[i]['bcc'];
		mailElms[i].parentElement.parentElement.children[4].children[1].value = configMailObj[i]['subject'];
		mailElms[i].parentElement.parentElement.children[5].children[1].value = configMailObj[i]['body'];
	}
	if ( document.getElementById('header--nav--config')!==null && localStorage.getItem('user-info')!==null ) {
		document.getElementById('header--nav--config').innerText = '⚙ ' + JSON.parse(localStorage.getItem('user-info'))['name'];
	}
}

function showClock() {
	getDateTime();
	let dateStr = YYYY + '-' + MM + '-' + DD + ' ' + a;
	let clockStr = hh + '<br>' + mm + '<br>' + ss;
	if ( document.getElementById('clock--date') !== null && document.getElementById('clock--time') ) {
		document.getElementById('clock--date').innerHTML = dateStr;
		document.getElementById('clock--time').innerHTML = clockStr;
	}
}

function memoChanged() {
	localStorage.setItem('memo',memoElm.value);
	memoValue = memoElm.value;
	memoFangValue = memoValue.replace(/\[\.\]|\[dot\]/g,'.').replace(/(http|hxxp)(s?)\[?:\]?\/{0,2}/gi,'http$2://');
	for (childResetElm of childResetElms) {
		while(childResetElm.firstChild) {
			childResetElm.removeChild(childResetElm.firstChild);
		}
	}
	extractIndicator();
	analysis();
	let memoCntElm = document.getElementById('footer--textarea--cnt');
	cntStr(memoElm, memoCntElm);
}


//　■■■　Indicator抽出　■■■
function extractIndicator() {
	let dtls;
	//　■■　IPv4アドレス抽出（ipv4sに格納）　■■
	let dupIpv4s = memoFangValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g);
	ipv4s = new Set(dupIpv4s);
	dtls = document.getElementsByClassName('a--dtl--ip');
	for ( let dtl of dtls ) {
		dtl.open = ipv4s.size;
	}
	//　■■　CIDR抽出（cidrsに格納）　■■
	let dupCidrs = memoFangValue.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2})/g);
	cidrs = new Set(dupCidrs);
	//　■■　IPv6アドレス抽出（ipv6sに格納）　■■
	let dupIpv6s = memoFangValue.match(/([0-9a-f]{1,4}:){7,7}[0-9a-f]{1,4}|([0-9a-f]{1,4}:){1,7}:|([0-9a-f]{1,4}:){1,6}:[0-9a-f]{1,4}|([0-9a-f]{1,4}:){1,5}(:[0-9a-f]{1,4}){1,2}|([0-9a-f]{1,4}:){1,4}(:[0-9a-f]{1,4}){1,3}|([0-9a-f]{1,4}:){1,3}(:[0-9a-f]{1,4}){1,4}|([0-9a-f]{1,4}:){1,2}(:[0-9a-f]{1,4}){1,5}|[0-9a-f]{1,4}:((:[0-9a-f]{1,4}){1,6})|:((:[0-9a-f]{1,4}){1,7}|:)|fe80:(:[0-9a-f]{0,4}){0,4}%[0-9a-z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-f]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/gi);
	ipv6s = new Set(dupIpv6s);
	//　■■　URL抽出（urlsに格納）　■■
	let dupUrls = memoFangValue.match(/(https?:\/{0,2}[^\s,]+)/gi);
	urls = new Set(dupUrls);
	dtls = document.getElementsByClassName('a--dtl--url');
	for ( let dtl of dtls ) {
		dtl.open = urls.size;
	}
	//　■■　Domain抽出（domainsに格納）　■■
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
	dtls = document.getElementsByClassName('a--dtl--domain');
	for ( let dtl of dtls ) {
		dtl.open = domains.length;
	}
	//　■■　メールアドレス抽出（mailsに格納）　■■
	let dupMails = memoFangValue.match(/[a-z0-9_\.\-\+]+@[a-z0-9\.\-]+\.[a-z]+/gi);
	mails = new Set(dupMails);
	dtls = document.getElementsByClassName('a--dtl--mail');
	for ( let dtl of dtls ) {
		dtl.open = mails.size;
	}
	//　■■　HASH値抽出　■■
	let regHash = /[^a-f0-9]/gi;
	//　■　MD5のHASH値抽出（md5sに格納）　■
	let dupMd5s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{32}($|[^a-f0-9])/gi);
	if ( dupMd5s !== null ) {
		dupMd5s = dupMd5s.map(value => value.replace(regHash,''));
	}
	md5s = new Set(dupMd5s);
	//　■　SHA1のHASH値抽出（sha1sに格納）　■
	let dupSha1s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{40}($|[^a-f0-9])/gi);
	if ( dupSha1s !== null ) {
		dupSha1s = dupSha1s.map(value => value.replace(regHash,''));
	}
	sha1s = new Set(dupSha1s);
	//　■　SHA256のHASH値抽出（sha256sに格納）　■
	let dupSha256s = memoValue.match(/(^|[^a-f0-9])[a-f0-9]{64}($|[^a-f0-9])/gi);
	if ( dupSha256s !== null ) {
		dupSha256s = dupSha256s.map(value => value.replace(regHash,''));
	}
	sha256s = new Set(dupSha256s);
	dtls = document.getElementsByClassName('a--dtl--hash');
	for ( let dtl of dtls ) {
		dtl.open = md5s.size + sha1s.size + sha256s.size;
	}
	//　■■　不可視文字抽出（invisibleCharactersに格納）　■■
	let regInvisibleCharacters = /[͏؜឴឵᠋᠌᠍᠎     ​‌‍‎‏‪‫‬‭‮  ⁠⁡⁢⁣⁤⁥⁦⁧⁨⁩⁪⁫⁬⁭⁮⁯⠀󠀁󠀠󠀡󠀢󠀣󠀤󠀥󠀦󠀧󠀨󠀩󠀪󠀫󠀬󠀭󠀮󠀯󠀰󠀱󠀲󠀳󠀴󠀵󠀶󠀷󠀸󠀹󠀺󠀻󠀼󠀽󠀾󠀿󠁀󠁁󠁂󠁃󠁄󠁅󠁆󠁇󠁈󠁉󠁊󠁋󠁌󠁍󠁎󠁏󠁐󠁑󠁒󠁓󠁔󠁕󠁖󠁗󠁘󠁙󠁚󠁛󠁜󠁝󠁞󠁟󠁠󠁡󠁢󠁣󠁤󠁥󠁦󠁧󠁨󠁩󠁪󠁫󠁬󠁭󠁮󠁯󠁰󠁱󠁲󠁳󠁴󠁵󠁶󠁷󠁸󠁹󠁺󠁻󠁼󠁽󠁾󠁿󠄀󠄁󠄂󠄃󠄄󠄅󠄆󠄇󠄈󠄉󠄊󠄋󠄌󠄍󠄎󠄏󠄐󠄑󠄒󠄓󠄔󠄕󠄖󠄗󠄘󠄙󠄚󠄛󠄜󠄝󠄞󠄟󠄠󠄡󠄢󠄣󠄤󠄥󠄦󠄧󠄨󠄩󠄪󠄫󠄬󠄭󠄮󠄯󠄰󠄱󠄲󠄳󠄴󠄵󠄶󠄷󠄸󠄹󠄺󠄻󠄼󠄽󠄾󠄿󠅀󠅁󠅂󠅃󠅄󠅅󠅆󠅇󠅈󠅉󠅊󠅋󠅌󠅍󠅎󠅏󠅐󠅑󠅒󠅓󠅔󠅕󠅖󠅗󠅘󠅙󠅚󠅛󠅜󠅝󠅞󠅟󠅠󠅡󠅢󠅣󠅤󠅥󠅦󠅧󠅨󠅩󠅪󠅫󠅬󠅭󠅮󠅯󠅰󠅱󠅲󠅳󠅴󠅵󠅶󠅷󠅸󠅹󠅺󠅻󠅼󠅽󠅾󠅿󠆀󠆁󠆂󠆃󠆄󠆅󠆆󠆇󠆈󠆉󠆊󠆋󠆌󠆍󠆎󠆏󠆐󠆑󠆒󠆓󠆔󠆕󠆖󠆗󠆘󠆙󠆚󠆛󠆜󠆝󠆞󠆟󠆠󠆡󠆢󠆣󠆤󠆥󠆦󠆧󠆨󠆩󠆪󠆫󠆬󠆭󠆮󠆯󠆰󠆱󠆲󠆳󠆴󠆵󠆶󠆷󠆸󠆹󠆺󠆻󠆼󠆽󠆾󠆿󠇀󠇁󠇂󠇃󠇄󠇅󠇆󠇇󠇈󠇉󠇊󠇋󠇌󠇍󠇎󠇏󠇐󠇑󠇒󠇓󠇔󠇕󠇖󠇗󠇘󠇙󠇚󠇛󠇜󠇝󠇞󠇟󠇠󠇡󠇢󠇣󠇤󠇥󠇦󠇧󠇨󠇩󠇪󠇫󠇬󠇭󠇮︀︁︂︃︄︅︆︇︈︉︊︋︌︍︎️﻿￹￺￻￼]+/gi;
	let dupInvisibleCharacters = memoValue.match(/.{0,32}[͏؜឴឵᠋᠌᠍᠎     ​‌‍‎‏‪‫‬‭‮  ⁠⁡⁢⁣⁤⁥⁦⁧⁨⁩⁪⁫⁬⁭⁮⁯⠀󠀁󠀠󠀡󠀢󠀣󠀤󠀥󠀦󠀧󠀨󠀩󠀪󠀫󠀬󠀭󠀮󠀯󠀰󠀱󠀲󠀳󠀴󠀵󠀶󠀷󠀸󠀹󠀺󠀻󠀼󠀽󠀾󠀿󠁀󠁁󠁂󠁃󠁄󠁅󠁆󠁇󠁈󠁉󠁊󠁋󠁌󠁍󠁎󠁏󠁐󠁑󠁒󠁓󠁔󠁕󠁖󠁗󠁘󠁙󠁚󠁛󠁜󠁝󠁞󠁟󠁠󠁡󠁢󠁣󠁤󠁥󠁦󠁧󠁨󠁩󠁪󠁫󠁬󠁭󠁮󠁯󠁰󠁱󠁲󠁳󠁴󠁵󠁶󠁷󠁸󠁹󠁺󠁻󠁼󠁽󠁾󠁿󠄀󠄁󠄂󠄃󠄄󠄅󠄆󠄇󠄈󠄉󠄊󠄋󠄌󠄍󠄎󠄏󠄐󠄑󠄒󠄓󠄔󠄕󠄖󠄗󠄘󠄙󠄚󠄛󠄜󠄝󠄞󠄟󠄠󠄡󠄢󠄣󠄤󠄥󠄦󠄧󠄨󠄩󠄪󠄫󠄬󠄭󠄮󠄯󠄰󠄱󠄲󠄳󠄴󠄵󠄶󠄷󠄸󠄹󠄺󠄻󠄼󠄽󠄾󠄿󠅀󠅁󠅂󠅃󠅄󠅅󠅆󠅇󠅈󠅉󠅊󠅋󠅌󠅍󠅎󠅏󠅐󠅑󠅒󠅓󠅔󠅕󠅖󠅗󠅘󠅙󠅚󠅛󠅜󠅝󠅞󠅟󠅠󠅡󠅢󠅣󠅤󠅥󠅦󠅧󠅨󠅩󠅪󠅫󠅬󠅭󠅮󠅯󠅰󠅱󠅲󠅳󠅴󠅵󠅶󠅷󠅸󠅹󠅺󠅻󠅼󠅽󠅾󠅿󠆀󠆁󠆂󠆃󠆄󠆅󠆆󠆇󠆈󠆉󠆊󠆋󠆌󠆍󠆎󠆏󠆐󠆑󠆒󠆓󠆔󠆕󠆖󠆗󠆘󠆙󠆚󠆛󠆜󠆝󠆞󠆟󠆠󠆡󠆢󠆣󠆤󠆥󠆦󠆧󠆨󠆩󠆪󠆫󠆬󠆭󠆮󠆯󠆰󠆱󠆲󠆳󠆴󠆵󠆶󠆷󠆸󠆹󠆺󠆻󠆼󠆽󠆾󠆿󠇀󠇁󠇂󠇃󠇄󠇅󠇆󠇇󠇈󠇉󠇊󠇋󠇌󠇍󠇎󠇏󠇐󠇑󠇒󠇓󠇔󠇕󠇖󠇗󠇘󠇙󠇚󠇛󠇜󠇝󠇞󠇟󠇠󠇡󠇢󠇣󠇤󠇥󠇦󠇧󠇨󠇩󠇪󠇫󠇬󠇭󠇮︀︁︂︃︄︅︆︇︈︉︊︋︌︍︎️﻿￹￺￻￼]+.{0,32}/gi);
	if ( dupInvisibleCharacters !== null ) {
		dupInvisibleCharacters = dupInvisibleCharacters.map(value => value.replace(regInvisibleCharacters,'👁'));
	}
	invisibleCharacters = new Set(dupInvisibleCharacters);
	dtls = document.getElementsByClassName('a--dtl--unicode');
	for ( let dtl of dtls ) {
		dtl.open = invisibleCharacters.size;
	}
	//　■■　CVE番号抽出（cvesに格納）　■■
	let dupCves = memoFangValue.match(/(CVE\-\d{4}\-\d{4,})/ig);
	cves = new Set(dupCves);
	dtls = document.getElementsByClassName('a--dtl--cve');
	for ( let dtl of dtls ) {
		dtl.open = cves.size;
	}
}

//　■■■　ANALYSIS　■■■
function analysis() {
	//　■■　ANALYSIS--IP-ADDRESS　■■
	let elmMAI = document.getElementById('main--analysis--ip-address');
	//　■　ANALYSIS--IP-ADDRESS--TYPE　■
	let ipv4Datass = [];　//　[[Class,IPv4],[Class,IPv4],...]の二重配列
	for ( let ipv4 of ipv4s ) {
		let ipv4Class = ipv4Classify(ipv4);
		ipv4Datass.push([ipv4Class,ipv4]);
	}
	appendHtmlTable(elmMAI, ['Class', 'IP Address'], ipv4Datass);
	//　■　ANALYSIS--IP-ADDRESS--DEFANG　■
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--defang', 'Defang');
	let elmMAID = document.getElementById('main--analysis--ip-address--defang');
	for ( let ip of ipv4s ){
		let defangIp = ip.replace(/\./g,'[.]');
		appendHtmlLi(elmMAID, '', defangIp);
	}
	//　■　ANALYSIS--IP-ADDRESS--CIDR　■
	appendHtmlUl(elmMAI, 'main--analysis--ip-address--cidr', 'Cidr');
	let elmMAIC = document.getElementById('main--analysis--ip-address--cidr');
	for ( let cidr of cidrs ) {
		let linkUrl = 'htmlTools/cidr2list.htm?cidr=' + cidr;
		let ipRange = getIpRange(cidr);
		let str = ( ipRange.min !== '' && ipRange.max !== '' ) ? cidr + ' = ' + convertToIp(ipRange.min) + ' - ' + convertToIp(ipRange.max) : '' ;
		appendHtmlLi(elmMAIC, '', str, linkUrl);
	}
	//　■　ANALYSIS--IP-ADDRESS--OSINT　■
	let elmMAIP = document.getElementById('main--analysis--ip-address');
	for ( let ipOsint of ipOsints ) {
		appendHtmlList(elmMAIP, ipv4s, ipOsint);
	}
	//　■■　ANALYSIS--DOMAIN　■■
	let elmMAD = document.getElementById('main--analysis--domain');
	//　■　ANALYSIS--DOMAIN--DOMAIN　■
	appendHtmlUl(elmMAD, 'main--analysis--domain--fang', 'Domain');
	let elmMADF = document.getElementById('main--analysis--domain--fang');
	for ( let domain of domains ){
		appendHtmlLi(elmMADF, '', domain);
	}
	//　■　ANALYSIS--DOMAIN--DEFANG　■
	appendHtmlUl(elmMAD, 'main--analysis--domain--defang', 'Defang');
	let elmMADD = document.getElementById('main--analysis--domain--defang');
	for ( let domain of domains ){
		let defangDomain = domain.replace(/\./g,'[.]');
		appendHtmlLi(elmMADD, '', defangDomain);
	}
	//　■　ANALYSIS--DOMAIN--OSINT　■
	for ( let domainOsint of domainOsints ) {
		appendHtmlList(elmMAD, domains, domainOsint);
	}
	//　■■　ANALYSIS--URL　■■
	let elmMAU = document.getElementById('main--analysis--url');
	//　■　ANALYSIS--URL--FLAG　■
	let urlDatass = [];
	for ( let url of urls ) {
		let urlObj = urlAnalysis(url);
		urlDatass.push(Object.values(urlObj));
	}
	appendHtmlTable(elmMAU, ['Flag', 'URL', 'Site Displayed'], urlDatass );
	//　■　ANALYSIS--URL--DEFANG　■
	appendHtmlUl(elmMAU, 'main--analysis--url--defang', 'Defang');
	let elmMAUD = document.getElementById('main--analysis--url--defang');
	for ( let url of urls ){
		let defangUrl = url.replace(/http(s?):\/\//,'hxxp$1[:]//').replace(/\./gi,'[.]');
		appendHtmlLi(elmMAUD, '', defangUrl);
	}
	//　■　ANALYSIS--URL--OSINT　■
	for ( let urlOsint of urlOsints ) {
		appendHtmlList(elmMAU, urls, urlOsint);
	}
	//　■■　ANALYSIS--MAIL　■■
	let elmMAM = document.getElementById('main--analysis--mail');
	appendHtmlUl(elmMAM, 'main--analysis--mail-address', 'Mail Address');
	let elmMAMA = document.getElementById('main--analysis--mail-address');
	for ( let mail of mails ) {
		appendHtmlLi(elmMAMA, '', mail);
	}
	for ( let mailOsint of mailOsints ) {
		appendHtmlList(elmMAM, mails, mailOsint);
	}
	//　■■　ANALYSIS--HASH　■■
	let elmMAH = document.getElementById('main--analysis--hash');
	//　■　ANALYSIS--HASH--OSINT　■
	let hashs = [...md5s, ...sha1s, ...sha256s];
	for ( let hashOsint of hashOsints ) {
		appendHtmlList(elmMAH, hashs, hashOsint);
	}
	//　■■　ANALYSIS--UNICODE　■■
	let elmMAUIC = document.getElementById('main--analysis--unicode--invisible-character');
	appendHtmlUl(elmMAUIC, 'main--analysis--unicode--invisible-character--list', 'Invisible Character');
	let elmMAUICL = document.getElementById('main--analysis--unicode--invisible-character--list');
	for ( let invisibleCharacter of invisibleCharacters ) {
		appendHtmlLi(elmMAUICL, '', invisibleCharacter);
	}
	//　■■　ANALYSIS--CVE　■■
	let elmMAC = document.getElementById('main--analysis--cve');
	//　■　ANALYSIS--CVE--ID　■
	appendHtmlUl(elmMAC, 'main--analysis--cve--id', 'CVE-ID');
	let elmMACI = document.getElementById('main--analysis--cve--id');
	for ( let cve of cves ){
		appendHtmlLi(elmMACI, '', cve);
	}
	//　■　ANALYSIS--CVE--OSINT　■
	for ( let cveOsint of cveOsints ) {
		appendHtmlList(elmMAC, cves, cveOsint);
	}
}



function setEventListener() {
	memoElm.addEventListener('input', memoChanged);
	document.querySelectorAll('.a--event-speaker').forEach(function(elm) {
		elm.addEventListener('click', function() {
			switch ( elm.dataset.act ) {
				case 'save' :
					saveConfig();
				break;
				case 'copy' :
					copy(elm);
				break;
				case 'calc-totp' :
					calcTotp(elm);
				break;
				case 'create-mail' :
					createMail(elm);
				break;
				case 'memo-cmd' :
					memoCmd(elm);
				break;
				default :
					console.log(elm);
				break;
			}
		});
	});
	document.getElementById('analysis').addEventListener('click', function(e) {
		if ( e.target.tagName == 'svg' || e.target.tagName == 'use' ) {
			let elm = ( e.target.tagName == 'svg' ) ? e.target : e.target.parentElement ;
			switch ( elm.dataset.act ) {
				case 'copy--list' :
					copyList(elm);
				break;
				case 'open--list--link' :
					openListLink(elm);
				break;
				case 'copy--table-column' :
					copyTableColumn(elm);
				break;
				case 'open--table-column--uri' :
					openTableColumnUri(elm);
				break;
				default :
					console.log(elm);
				break;
			}
		}
	});
}

function copy(elm) {
	switch ( elm.dataset.target ) {
		case 'previous' :
			switch ( elm.dataset.type ) {
				case 'value' :
					navigator.clipboard.writeText(elm.previousElementSibling.value);
				break;
			}
		break;
	}
}

function calcTotp(elm) {
	let secret = elm.parentElement.previousElementSibling.firstElementChild.value;
	let output = elm.parentElement.nextElementSibling.firstElementChild;
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
		.then(h=>output.value=('0'+trunc(new DataView(h))).slice(-6));
	crypto.subtle.importKey('raw',new Int8Array(b32(secret)),{name:'HMAC',hash:{name:'SHA-1'}},true,['sign'])
		.then(k=>crypto.subtle.sign('HMAC',k,new Int8Array([0,0,0,0,c>>24,c>>16,c>>8,c])))
		.then(h=>navigator.clipboard.writeText(('0'+trunc(new DataView(h))).slice(-6)));
}

function copyList(elm) {
	let items = elm.parentNode.nextElementSibling.children;
	let text = '';
	for ( let item of items ) {
		text += item.textContent + '\n';
	}
	navigator.clipboard.writeText(text);
}

function openListLink(elm) {
	let items = elm.parentElement.nextElementSibling.children;
	for ( let item of items ) {
		let links = item.querySelectorAll('a');
		for ( let link of links ) {
			window.open(link.getAttribute('href'), '_blank');
		}
	}
}

function copyTableColumn(elm) {
	let trs = elm.parentElement.parentElement.parentElement.children;
	let colNum = elm.dataset.target;
	let text = '';
	for ( let i=1; i<trs.length; i++ ) {
		text += trs[i].children[colNum].innerText + '\n';
	}
	navigator.clipboard.writeText(text);
}

function openTableColumnUri(elm,target) {
	let trs = elm.parentElement.parentElement.parentElement.children;
	let colNum = elm.dataset.target;
	if ( window.confirm('危険なURIは含まれていませんか？') ) {
		for ( let i=1; i<trs.length; i++ ) {
			window.open(trs[i].children[colNum].innerText, '_blank');
		}
	}
}

function memoCmd(elm) {
	switch ( elm.dataset.cmd ) {
		case 'copy' :
			navigator.clipboard.writeText(memoValue);
		break;
		case 'translate' :
			if ( window.confirm('機密情報は含まれていませんか？') ) {
				window.open('https://translate.google.co.jp/?tl=ja&text=' + memoValue.replace(/[\r\n]/g,'%0A'));
			}
		break;
		case 'webhook' :
			if ( window.confirm('機密情報は含まれていませんか？') ) {
				let webhookUrl = document.getElementById('config--webhook').value;
				let lines = memoValue.split('\n');
				let querys = [];
				for ( let i=0; i<lines.length; i++ ) {
					querys.push('q' + i + '=' + encodeURIComponent(lines[i]));
				}
				window.open(webhookUrl + '?&q=' + encodeURIComponent(memoValue) + '&' + querys.join('&'));
			}
		break;
		case 'restore' :
			memoElm.value = localStorage.getItem('memoBackup');
			memoChanged();
		break;
		case 'clear' :
			localStorage.setItem('memoBackup',memoElm.value);
			memoElm.value = '';
			memoChanged();
		break;
		default :
			console.log(elm);
		break;
	}
}

function createMail(elm) {
	getDateTime();
	let to = elm.parentElement.parentElement.children[1].children[1].value;
	let cc = elm.parentElement.parentElement.children[2].children[1].value;
	let bcc = elm.parentElement.parentElement.children[3].children[1].value;
	let subject = elm.parentElement.parentElement.children[4].children[1].value;
	let body = elm.parentElement.parentElement.children[5].children[1].value.replace(/\n/g,'%0D%0A%0D%0A');
	subject = subject.replace(/%YYYY/g,YYYY).replace(/%MM/g,MM).replace(/%M/g,M).replace(/%DD/g,DD).replace(/%D/g,D).replace(/%hh/g,hh).replace(/%h/g,h).replace(/%mm/g,mm).replace(/%m/g,m).replace(/%A/g,A);
	body = body.replace(/%YYYY/g,YYYY).replace(/%MM/g,MM).replace(/%M/g,M).replace(/%DD/g,DD).replace(/%D/g,D).replace(/%hh/g,hh).replace(/%h/g,h).replace(/%mm/g,mm).replace(/%m/g,m).replace(/%A/g,A);
	let mailCc = cc=='' ? '' : '&cc=' + cc;
	let mailBcc = bcc=='' ? '' : '&bcc=' + bcc;
	window.open('mailto:' + to + '?' + 'subject=' + subject + mailCc + mailBcc + '&body=' + body, '_blank');
}

function cntStr(cntElm, outputElm) {
	let strCnt = cntElm.value.length;
	let strLines = cntElm.value.match(/\n/g);
	strLine = strLines==null ? 1 : strLines.length + 1;
	outputElm.innerText = strLine.toLocaleString() + ' 行 / ' + strCnt.toLocaleString() + ' 文字';
}


//　■■■■■　作成中　■■■■■
function exportConfig() {
	Object.keys(localStorage).forEach(function(key) {
		configObj[key] = localStorage.getItem(key);
	});
	const downloadLink = document.createElement('a');
	downloadLink.download = 'LinkTools.conf';
	downloadLink.href = URL.createObjectURL(new Blob([JSON.stringify(configObj)], { 'type' : 'application/json' }));
	downloadLink.setAttribute('hidden', true);
	document.body.appendChild(downloadLink);
	downloadLink.click();
	downloadLink.remove();
}

function importConfig() {
	const fileInput = document.createElement('input');
	fileInput.type = 'file';
	fileInput.setAttribute('hidden', true);
	fileInput.addEventListener('change', (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			const fileContents = e.target.result;
			displayElement.textContent = fileContents;
			currentContents = fileContents;
		}
		reader.readAsText(file);
	}, false);
	fileInput.click();
	fileInput.remove();
	console.log(fileInput);
}



