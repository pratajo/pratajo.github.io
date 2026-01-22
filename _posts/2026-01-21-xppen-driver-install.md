---
layout: post
title: XPPen driver install on Fedora 42+
date: 2026-01-21 21:01:00
description: XPPen driver installation
tags: restoration images xppen driver
categories: applications
---

The [XP-Pen Artist 12 3rd Gen](https://www.xp-pen.com/product/artist-12-3rd.html) is a compact, portable 11.9-inch drawing display launched in late 2025, offering excellent value for beginner to intermediate digital artists. Featuring a Full HD laminated screen with anti-glare etched glass (99% sRGB coverage), it delivers vibrant colors and a natural paper-like texture. The battery-free X4 stylus provides 16,384 levels of pressure, 60° tilt support, and ultra-low 2g activation force for smooth, precise strokes. It includes eight customizable express keys and two innovative X-Dials for quick access to zoom, brush size, and other shortcuts. With a single USB-C cable for video, data, and power, plus broad compatibility (Linux, Windows, macOS, Android), this lightweight (~719g) tablet is an affordable yet feature-rich choice for on-the-go creativity.

In recent months it has no longer been possible to install the drawing display driver via "Discover". Through the "Terminal" we get the following error: "package does not verify: no digest".
Several attempts with the "dnf install" command also fail.

Searching for the error in the file, the result is:

```bash
pratajo@amd64:~$ rpm -K XPPenLinux-xxxx.rpm
XPPenLinux-xxxx.rpm: DIGESTS NOT-OK
```

Grok explains that this is quite common in recent Fedora versions (especially Fedora 42/43+ in 2026), because RPM has been updated to more modern versions (RPM 6.0+ or equivalents) that reject packages without strong digests (such as SHA-256) or that use obsolete algorithms (old MD5/SHA-1). Many third-party or older packages haven't been rebuilt/updated for this yet, which is why you need to bypass the check with --nodigest.

The solution I found was to install the rpm directly, using a command with flags to bypass the checks:

```bash
sudo rpm -Uvh --nodigest --nosignature ./XPPenLinux-xxxx.rpm
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
