---
layout: post
title: Creating one or multiple buttons to copy text to the clipboard
date: 2024-12-20 15:09:00
last_modified_at: 2024-12-20 15:09:00
description: HTML and JavaScript
tags: development linux
categories: applications
---

To create a single "copy to clipboard" button on a website page, we can use simple code like this:

```html
<html>
  <head>
    <script>
      function copy_to_clipboard(elm_id) {
        var text = document.getElementById(elm_id).innerHTML;

        navigator.clipboard.writeText(text);
      }
    </script>
  </head>
  <body>
    <p id="1">text to copy</p>
    <button onclick="copy_to_clipboard('1')">Copy</button>
  </body>
</html>
```

If we need to have, on the same web page, several buttons in different text boxes, we repeat this code for each button, only being required to change the id attribute for each button. I usually use id="1" for the first button on the page, id="2" for the second button, and so on.

If you want to have two or more buttons on the same frame, here is an example:

```html
<html>
  <head>
    <script>
      function copy_to_clipboard(elm_id) {
        var text = document.getElementById(elm_id).innerHTML;

        navigator.clipboard.writeText(text);
      }
    </script>
  </head>
  <body>
    <p id="8">text to copy-1</p>
    <button onclick="copy_to_clipboard('8')">Copy</button>
    <p id="9">text to copy-2</p>
    <button onclick="copy_to_clipboard('9')">Copy</button>
    <p id="10">text to copy-3</p>
    <button onclick="copy_to_clipboard('10')">Copy</button>
  </body>
</html>
```

&nbsp;

<script src="https://giscus.app/client.js"
        data-repo="pratajo/pratajo.github.io"
        data-repo-id="R_kgDONl93Sw"
        data-category="Comments"
        data-category-id="DIC_kwDONl93S84Cl7yv"
        data-mapping="title"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossorigin="anonymous"
        async>
</script>
