var gRootURL = {
	root: '/',
}

var gBaseURL = {
	menu0: gRootURL.root + '',
	menu1: gRootURL.root + 'convention/',
	menu2: gRootURL.root + 'plan/',
	menu3: gRootURL.root + '_libs/',
	menu4: gRootURL.root + 'accessibility/',
}

var include = {
	meta: function () {
		document.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge;Chromeframe=1">');
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />');
		document.write('<meta name="robots" content="ALL">');
		document.write('<meta name="keywords" content="웹퍼블리싱 가이드">');
		document.write('<meta name="description" content="웹퍼블리싱 가이드">');
		document.write('<meta name="author" content="이효준">');
		document.write('<meta name="generator" content="Visual Studio Code">');
		document.write('<title>웹퍼블리싱 가이드</title>');
	},
	head: function () {
		document.write('<link rel="shortcut icon" type="image/x-icon" href="/assets/images/favicon.ico" />');
		document.write('<link rel="stylesheet" type="text/css" href="/assets/css/import.css">');
		document.write('<link rel="stylesheet" type="text/css" href="/assets/css/shCoreDefault.css">');
		document.write('<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>');
		document.write('<script src="/assets/js/ui.js"></script>');
		document.write('<script src="/assets/js/XRegExp.js"></script>');
		document.write('<script src="/assets/js/shCore.js"></script>');
		document.write('<script src="/assets/js/shBrushJScript.js"></script>');
		document.write('<script src="/assets/js/shBrushXml.js"></script>');
		document.write('<script src="/assets/js/shBrushCss.js"></script>');
		document.write('<script>SyntaxHighlighter.all();</script>');
	},
	header: function () {
		document.write('<header>');
		document.write('	<h1>프로젝트 <span>웹퍼블리싱 가이드</span></h1>');
		document.write('	<nav class="gnb">');
		document.write('		<ul>');
		document.write('			<li><a href="'+gBaseURL.menu0+'pub_guide.html">기본정책</a></li>');
		document.write('			<li><a href="'+gBaseURL.menu1+'rule_standard.html">규칙 가이드</a></li>');
		document.write('			<li><a href="'+gBaseURL.menu2+'plan_codeset.html">설계 가이드</a></li>');
		document.write('			<li><a href="'+gBaseURL.menu3+'elements_form.html">라이브러리</a></li>');
		document.write('			<li><a href="'+gBaseURL.menu4+'wa_intro.html">웹접근성 점검</a></li>');
		document.write('		</ul>');
		document.write('	</nav>');
		document.write('	<a href="/index.html" class="home">HOME</a>');
		document.write('</header>');
	},
	aside: {
		init: function () {
			this.opneHTML();
			this.menu0();
			this.menu1();
			this.menu2();
			this.menu3();
			this.menu4();
			this.closeHTML();
		},
		opneHTML: function () {
			document.write('<aside>');
		},
		closeHTML: function () {

			document.write('</aside>');
		},

		// INDEX
		menu0: function () {
			var baseURL = gBaseURL.menu0;
		},

		// 규칙가이드
		menu1: function () {
			var baseURL = gBaseURL.menu1;
			document.write('<ul class="lnb lnb_01">');
			document.write('	<li><a href="'+baseURL+'rule_standard.html">표준규칙</a></li>');
			document.write('	<li><a href="'+baseURL+'rule_code.html">코드규칙</a></li>');
			document.write('	<li><a href="'+baseURL+'rule_name.html">네임규칙</a></li>');
			document.write('</ul>');
		},

		// 설계가이드
		menu2: function () {
			var baseURL = gBaseURL.menu1;
			document.write('<ul class="lnb lnb_02">');
			document.write('	<li><a href="/plan/plan_codeset.html">Codeset</a></li>');
			document.write('	<li><a href="/plan/plan_layout.html">Layout</a></li>');
			document.write('	<li><a href="/plan/plan_general.html">General</a></li>');
			document.write('	<li><a href="/plan/plan_wai.html">WAI-ARIA</a></li>');
			document.write('</ul>');
		},

		// 라이브러리 
		menu3: function () {
			var baseURL = gBaseURL.menu3;
			document.write('<ul class="lnb lnb_03">');
			document.write('	<li><a href="/_libs/elements_form.html">forms</a></li>');
			document.write('	<li><a href="#1">Button</a></li>');
			document.write('	<li><a href="#2">Icon</a></li>');
			document.write('	<li><a href="#3">Label</a></li>');
			document.write('	<li><a href="#4">Badge</a></li>');
			document.write('	<li><a href="#5">Bullet</a></li>');
			document.write('	<li><a href="#6">Thumbnail</a></li>');
			document.write('	<li><a href="#7">Panels</a></li>');
			document.write('	<li><a href="#8">Card</a></li>');
			document.write('	<li><a href="#9">Step</a></li>');
			document.write('	<li><a href="#10">Table</a></li>');
			document.write('	<li><a href="#11">Pagination</a></li>');
			document.write('	<li><a href="#12">Progress</a></li>');
			document.write('</ul>');
			document.write('<ul class="lnb lnb_04">');
			document.write('	<li><a href="/_libs/modules_tab.html">Tab</a></li>');
			document.write('	<li><a href="#13">Accordion</a></li>');
			document.write('	<li><a href="#14">Folder</a></li>');
			document.write('	<li><a href="#15">Tooltip</a></li>');
			document.write('	<li><a href="#16">Dropdown</a></li>');
			document.write('	<li><a href="#17">Popup</a></li>');
			document.write('	<li><a href="#18">Dimmer</a></li>');
			document.write('	<li><a href="#19">Sticky</a></li>');
			document.write('	<li><a href="#20">Spy Scroll</a></li>');
			document.write('	<li><a href="#21">Custom Scrol</a></li>');
			document.write('	<li><a href="#22">Floating Scroll</a></li>');
			document.write('</ul>');
		},

		// 웹접근성 점검
		menu4: function () {
			var baseURL = gBaseURL.menu4;
			document.write('<ul class="lnb lnb_05">');
			document.write('<li><a href="/accessibility/wa_intro.html">웹접근성 개요</a></li>');
			document.write('<li><a href="/accessibility/wa_part.html">역활별 체크리스트</a></li>');
			document.write('<li><a href="/accessibility/wa_process.html">개선작업 프로세스</a></li>');
			document.write('<!-- <li><a href="">기본명칭 정의예시</a></li> -->');
			document.write('</ul>');
		},
	},
	footer: function () {
		document.write('<footer>Copyright 2019 © LEEHYOJUN All right reserved.</footer>');
	},
}