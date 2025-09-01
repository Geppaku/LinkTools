/*　■■■■■　WORKタブのHTML　■■■■■　*/
/*　■■■■　HTML構造　■■■■　*/
const work_elmObjs = [
	{
		tag: 'details', id: '', class: '', title: '', child: [
			{
				tag: 'summary', id: '', class: 'd--h2', title: '日報', child: [{}]
			},
			{
				tag: 'details', id: '', class: '', title: '', child: [
					{
						tag: 'summary', id: '', class: 'd--h3', title: 'SOC Engin',	child: [{}]
					},
					{
						tag: 'div', id: '', class: 'l--flex-container', title: '', child: [
							{
								tag: 'div', id: '', class: 'l--flex-grow', title: '', child: [
									{
										tag: 'h4', id: '', class: 'd--h4', title: 'SOC件数', child: [{}]
									},
									{
										tag: 'textarea', id: 'work--daily-report--soc-count', class: 'l--fullwidth', title: '', child: [{}]
									}
								]
							},
								{
								tag: 'div', id: '', class: 'l--flex-grow', title: '', child: [
									{
										tag: 'h4', id: '', class: 'd--h4', title: 'SOC調査報告', child: [{}]
									},
									{
										tag: 'textarea', id: 'work--daily-report--soc-report', class: 'l--fullwidth', title: '', child: [{}]
									}
								]
							}
						]
					}
				]
			},
			{
				tag: 'details', id: '', class: '', title: '', child: [
					{
						tag: 'summary', id: '', class: 'd--h3', title: 'サイバーログ',	child: [{}]
					},
					{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: '攻撃の概要（InterScan）',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--inter-scan', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
					{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: 'IDS検知件数 > 業務系IDS',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--ids-biz', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
						{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: 'IDS検知件数 > 情報系・OA系IDS',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--ids-oa', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
					{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: 'IPS防御件数 > 情報系・OA系IPS',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--ips-oa', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
					{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: 'IPS防御件数 > 業務系IPS',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--ips-biz', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
					{
						tag: 'details', id: '', class: '', title: '',	child: [
							{
								tag: 'summary', id: '', class: '', title: 'IPS防御件数 > SMFGAzure系IPS',	child: [{}]
							},
							{
								tag: 'textarea', id: 'work--daily-report--ips-azure', class: 'l--fullwidth', title: '',	child: [{}]
							}
						]
					},
				]
			},
			{
				tag: 'details', id: '', class: '', title: '', child: [
					{
						tag: 'summary', id: '', class: 'd--h3', title: '不審メール受信状況',	child: [{}]
					},
					{
						tag: 'h4', id: '', class: 'd--h4', title: '標的型攻撃メールに関する調査', child: [{}]
					},
					{
						tag: 'textarea', id: 'work--daily-report--apt-mail', class: 'l--fullwidth', title: '', child: [{}]
					}
				]
			},
			{
				tag: 'details', id: '', class: '', title: '', child: [
					{
						tag: 'summary', id: '', class: 'd--h3', title: 'News整形',	child: [{}]
					},{
							tag: 'textarea', id: 'work--daily-report--news', class: 'l--fullwidth', title: '', child: [{}]
					}
				]
			}
		]
	}
]

/*　■■■■　HTML要素作成　■■■■　*/
function work_appendHtml(elm,id,c,title,parent) {
	elm.id= id;
	elm.className = c;
	elm.textContent = title;
	parent.appendChild(elm);
}

/*　■■■■　DOM読込時にHTML作成　■■■■　*/
window.addEventListener('DOMContentLoaded', function() {
	var e1 = document.getElementById('work--contents');
	for ( var l2 of work_elmObjs ) {
		var e2 = document.createElement(l2.tag);
		work_appendHtml(e2,l2.id,l2.class,l2.title,e1);
		if ( l2.child !== undefined ) {
			for ( var l3 of l2.child ) {
				var e3 = document.createElement(l3.tag);
				work_appendHtml(e3,l3.id,l3.class,l3.title,e2);
				if ( l3.child !== undefined ) {
					for ( var l4 of l3.child ) {
						var e4 = document.createElement(l4.tag);
						work_appendHtml(e4,l4.id,l4.class,l4.title,e3);
						if ( l4.child !== undefined ) {
							for ( var l5 of l4.child ) {
								var e5 = document.createElement(l5.tag);
								work_appendHtml(e5,l5.id,l5.class,l5.title,e4);
								if ( l5.child !== undefined ) {
									for ( var l6 of l5.child ) {
										var e6 = document.createElement(l6.tag);
										work_appendHtml(e6,l6.id,l6.class,l6.title,e5);
										if ( l6.child !== undefined ) {
											for ( var l7 of l6.child ) {
												var e7 = document.createElement(l7.tag);
												work_appendHtml(e7,l7.id,l7.class,l7.title,e6);
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
});

