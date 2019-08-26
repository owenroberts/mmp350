---
layout: main
title: MMP 350 Public Pad
---
<!-- Firebase -->
<script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>
<!-- CodeMirror -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css" />
<!-- Firepad -->
<link rel="stylesheet" href="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.css" />
<script src="https://cdn.firebase.com/libs/firepad/1.4.0/firepad.min.js"></script>
<style>
	html, body { height: 100%; }
	.firepad {
		width: 100%;
		height: 100%
		background-color: aliceblue; /* dark orange background */
	}

	/* Note: CodeMirror applies its own styles which can be customized in the same way.
		To apply a background to the entire editor, we need to also apply it to CodeMirror. */
	.firepad .CodeMirror {
		position: static;
		top: 0;
		padding: 0;
	}
	.CodeMirror pre { font-size: 18px; }
	.powered-by-firepad { display: none; }
	.firepad-toolbar {
		padding: 0;
		height: auto;
		line-height: 2.5;
	}
	a.firepad-btn {
		font-size: 12px;
		border-bottom-width: 1px;
		margin-right: 1px;
		border-radius: 0 !important;
	}
	a.firepad-btn:hover { 
		background-color: #D1E5F7;
		border-color: #9b26ff;
	}
	a.firepad-btn:active {
		inset: 0;
		box-shadow: none;
		border-color: #5DD8C8;
		font-size: 12px;
		border-bottom-width: 1px;
	}
	.firepad-btn-group { margin: 0; }
</style>

<div id="firepad"></div>
<script>

	function init() {
		// Initialize Firebase.
		// TODO: replace with your Firebase project configuration.
		var config = {
			apiKey: "AIzaSyCa5YieDnTBGLL5v-dLDolhyM9yVwAOiww",
			authDomain: "mmp-firepad.firebaseapp.com",
			databaseURL: "https://mmp-firepad.firebaseio.com/"
		};
		firebase.initializeApp(config);

		// Get Firebase Database reference.
		var firepadRef = firebase.database().ref('pads').child('350');

		// Create CodeMirror (with lineWrapping on).
		var codeMirror = CodeMirror(document.getElementById('firepad'), { lineWrapping: true });

		// Create Firepad (with rich text toolbar and shortcuts enabled).
		var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
			richTextShortcuts: true,
			richTextToolbar: true,
			defaultText: 'Hello, World!'
		});

		const colors = ['#f0f', '#ff0', '#00f', '#0f0'];
		firepad.setUserColor(colors[Math.round(Math.random() * colors.length)]);
	}
	window.addEventListener('load', init);
</script>


<!-- 

	old pad 
	
// final project
https://nemflores.github.io/mmp350/app/index
https://moequinn.github.io/mmp350/gameforumapp/index.html
https://miguelc210.github.io/MMP350/Fork/index.html
https://sadate11.github.io/mmp350/midterm/index.html
https://itsanerin.github.io/NannyAndMe/index.html
https://tehcyfer.github.io/MMP350FInal/
https://trinidawn.github.io/mmp350//thank-you-app/index.html


template example
https://owenbmcc.github.io/template/
https://github.com/owenbmcc/template/

rating system:
https://codepen.io/owenroberts/pen/ZZKEvd

midterm presentation links

Nemesio Flores -
https://nemflores.github.io/mmp350/midterm/index
https://docs.google.com/presentation/d/1GGPKPZu9AQBWuXPhtZGS8YXlcpF8hSk1t33qUNnhgbw/edit?usp=sharing

https://trinidawn.github.io/mmp350/thank-you-app/index.html

Johnny Medina -
https://docs.google.com/presentation/d/1Wb2KiBhy9IMdTdBc4Dy9FPu4mPEFUrTMy4d6MUBBrQs/edit?usp=sharing
https://tehcyfer.github.io/MMP-350-Midterm/index.html

moe
https://moequinn.github.io/mmp350

https://itsanerin.github.io/NannyAndMe/index.html

web app

- login
- store information
- ex
  - video game forum - save user posts in different categories
  - connect 4 game - save users moves, between two users
  - student forum organized by class - social network within bmcc
  - rate bmcc courses - user created courses + comments/ratings
  - linked in for college - majors, skills, schedules, 
  - astrology - what do users contribute?
  - thank you app - design templates - design one and save in database - send to contacts
   


pitch deck example
https://docs.google.com/presentation/d/1m0qY5KpIysaQY3o6T7_FgHi_TYEI5Y_RVBGEJlLb1jY/edit?usp=sharing




color scheme
https://nemflores.github.io/mmp350/week6/index
https://miguelc210.github.io/MMP350/Fork/index.html
https://moequinn.github.io/mmp350
https://itsanerin.github.io/MMP350/color/

typography
https://nemflores.github.io/mmp350/week4/index
https://miguelc210.github.io/MMP350/Fork/index.html
https://moequinn.github.io/mmp350
https://itsanerin.github.io/MMP350/typography/
https://trinidawn.github.io/mmp350/template/index.html



responsive design assignment
https://nemflores.github.io/mmp350/week3.2/index.html
https://trinidawn.github.io/mmp350/template/index.html
https://miguelc210.github.io/MMP350/Fork/index.html
https://moequinn.github.io/mmp350/



week 2 css grid layout

https://nemflores.github.io/mmp350/week2.2/index.html
https://miguelc210.github.io/MMP350/Fork/index.html
https://trinidawn.github.io/mmp350//template/index.html
https://tehcyfer.github.io/cyfer-layout/
https://moequinn.github.io/mmp350/
https://duquea95.github.io/template/index.html
https://itsanerin.github.io/template/
https://sammy9811.github.io/template/

week 1 website break down

https://trinidawn.github.io/mmp350/website-breakdown-wk1/index.html
https://nemflores.github.io/mmp350/week1.1/index.html
https://miguelc210.github.io/MMP350/BackendWebsite/index.html
https://duquea95.github.io/mmp-350/
https://itsanerin.github.io/MMP350/back-end/index.html
https://moequinn.github.io/mmp350/
https://acexproject.github.io/mmp350/github-work/assgn1/
https://tehcyfer.github.io/MMP350/
https://sadate11.github.io/mmp350/weblogin/index.html0
https://sammy9811.github.io/MMP350/
https://krsmace.github.io/mmp350/website/

layout assignment fork: https://github.com/owenbmcc/template

html/css review
https://owenbmcc.github.io/mmp350/review/index.html

assignment 1 what web service are you using?
Moises - Gamestop
Joseph - Soundcloud
Johnny - Pinterest
Miguel - Spotify
Erin - Code Academy
Nemesio-Twitter
Samuel-Tidal
Bingpei - CodePen
Dawn - Udemy
El Sadate - Invision
Khallid -Expo


website breakdown example
https://owenbmcc.github.io/mmp350/website/




Welcome to MMP 350.
 -->