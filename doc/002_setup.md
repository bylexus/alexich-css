## Setup

### Self-hosted

It is preferred to host the library by yourself, so that you are independant of any external ressources
such as a CDN.

You can download the library from the github repo:

https://github.com/bylexus/alexich-css/archive/refs/heads/main.zip

or in the terminal via curl:

```sh
$ curl -o alexich-css.zip https://github.com/bylexus/alexich-css/archive/refs/heads/main.zip
```

Then, unzip the folder and copy it to your website's public folder, reference the main css file
and optionally the web components you intend to use, and you're done:

```html
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <link rel="stylesheet" href="path/to/alexich-css/alexich_css.css">
  <!-- import web components you intend to use -->
  <script type="module" src="path/to/alexich-css/components/progress-bar.js"></script>
</head>
<body>
	<div class="container">
		<h1>Hello, alexi.ch css!</h1>
		<progress-bar value="20" max="100" appearance="full">ready!</progress-bar>
	</div>
</body>
</html>
```


### via CDN

The jsdeliver CDN lets you use the library directly from the github repo. Instead of download the
library, you can use it via CDN:
			
```html
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <!-- Link the newest version: -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bylexus/alexich-css/alexich_css.css">
  <!-- or link a specific version: -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/bylexus/alexich-css@1.2.3/alexich_css.css">
  
  <!-- import web components you intend to use -->
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
