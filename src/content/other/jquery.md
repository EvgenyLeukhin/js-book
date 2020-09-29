# jQuery

Easy js-lib to work with DOM of static html pages.

* [jQuery official docs](https://jquery.com/)

## CDN-link

```html
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
```

## Work

```js
$(document).ready(function() {
  // call jq-methods by selectors
  $('.some-css-class').someJqMethod();
});

// shortcut
$(function() {
  // jquery code
});
```
