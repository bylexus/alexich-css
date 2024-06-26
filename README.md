# alexi.ch css/component framework

> (this is a work in progress)

This is my implementation of a simple CSS and web component framework for my everyday-use. 
It is completely developed by myself, and for my own use-cases only, mainly, the main site using it: [alexi.ch](https://alexi.ch).

## Goal

As "modern" CSS and web components finally have arrived in all major browsers, the main goal was to build on modern foundations only, without using an external dependency: I even gave up on any build tools: What you get here
is direclty importable and usable, no 30-step-build process needed.

* only uses standard HTML/CSS/JS features, no external dependencies. This also forbides a CSS "transpiler" like scss/sass.
* only using "modern" Web standards that have landed in the major browsers 
* don't re-invent the wheel - use what's already there (e.g. css layouting, grid, flexbox)
* don't support legacy / old standards / browsers
* needed assets created by myself
* covers my own needs - nothing more

With "modern" I especially mean your device need to suppor the following technologies:

* CSS grid and flexbox system
* CSS custom properties and calc functions
* CSS Container Queries
* no browser-specific css-selectors
* native Web Components
* ES 6 modules in the browser

## Quick Start

You can start right now by just including the main CSS directly in your HTML:

```html
<html>
<head>
  <!-- Link the newest version: -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bylexus/alexich-css/alexich_css.css">
  <!-- or link a specific version: -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bylexus/alexich-css@1.2.3/alexich_css.css">

  <!-- import needed web components -->
  <script type="module" src="https://cdn.jsdelivr.net/gh/bylexus/alexich-css/components/progress-bar.js"></script>
</head>
<body>
	<div class="container">
		<h1>Hello, alexi.ch css!</h1>
		<progress-bar value="20" max="100" appearance="full">ready!</progress-bar>
	</div>
</body>
</html>
```

### Next steps

Check the  [full documentation](https://rawcdn.githack.com/bylexus/alexich-css/main/doc/index.html) for more details.


(c) 2024 [alexi.ch](https://alexi.ch)
