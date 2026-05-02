---
layout: post
title: How to Backup and Restore Thunderbird Remote Images Whitelist (Clean Install)
date: 2026-05-02 15:00:00
last_modified_at: 2026-05-02 15:00:00
description: Thunderbird Remote Images Whitelist
tags: fedora linux
categories: applications
thumbnail: assets/img/hostname.jpg
featured: false
---

Every time I do a clean installation of Thunderbird, I have to manually reconfigure the whitelist for loading remote images from trusted senders. This guide shows a quick and clean way to backup and restore that setting without carrying over unnecessary profile data.

Note: This method is specific to Fedora Linux (and other Linux distributions using the same folder structure). It does not apply to Windows or macOS.

###### **Backup (on your current Thunderbird)**

1.  Close Thunderbird completely.

2.  Open a terminal and run:

    ```bash
cp ~/.thunderbird/*.default-esr/permissions.sqlite ~/permissions.sqlite
```

3.  The file permissions.sqlite will be saved in your Home folder. Copy it to a safe place (USB drive, external disk, etc.).

###### **Restore (on a new Thunderbird installation)**

1. Install Thunderbird and open it once (it will create the new profile).
2. Close Thunderbird.
3. Open your file manager and go to your Home folder.
4. Press Ctrl + H to show hidden files.
5. Enter the folder .thunderbird.
6. Open the folder that ends with .default-esr.
7. Rename the existing permissions.sqlite file to permissions-old.sqlite (just in case).
8. Copy your backup file permissions.sqlite into this folder (replace when asked).
9. Open Thunderbird again.

Your remote images whitelist will be restored.

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
