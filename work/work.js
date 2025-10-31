/*　■■■■■　WORKタブのHTML　■■■■■　*/
/*　■■■■　HTMLソース　■■■■　*/
const WORK_HTML = '<details open><summary class="d--h2">Workタブについて</summary><p>業務に直結した、機密情報を含む内容を扱うためのスペースです。</p><p>ローカルで「work/work.js」を編集し、使用してください。</p>'

/*　■■■■　DOM読込時に構築　■■■■　*/
window.addEventListener('DOMContentLoaded', function() {
	document.getElementById('work--contents').innerHTML = WORK_HTML;
});