---
layout: post
title: Installing OpenIndiana Hipster 2022.10
date: 2024-02-18 00:32:13
description: OpenIndiana Hipster 2022.10
tags: openindiana hipster unix
categories: operating-systems
toc:
  sidebar: right
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/openindiana2022.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

&nbsp;
###### **Get the OpenIndiana Hipster**

Get the image from the [official website](https://www.openindiana.org/downloads/) and save the Pen Drive with the command (in linux):

```bash
[pratajo@amd64 ~]$ su -
   (enter root password)
[root@amd64 ~]$ dd if=image.usb of=/dev/sdb
```

Attention: to confirm the USB drive letter, use the command _lsblk_

```bash
[root@amd64 ~]$ lsblk
```

&nbsp;
###### **Install**

I recommend reading the Hipster Handbook before installation. You will find instructions that may have application on your specific hardware.

In the case of a "live" distribution, the new operating system will run from the USB stick, without making any changes to the hard disk. You can test Hipster and, if you want, install it on your hard drive.

During installation, create a secure password for Root (administrator) and a user for yourself.

Finally restart the computer, remove the USB stick, enter your personal user and update the entire system.

```bash
[pratajo@amd64 ~]$ su -
   (enter root password)
[root@amd64 ~]$ dd if=image.usb of=/dev/sdb
```

&nbsp;
###### **Add repositories**

```bash
root@amd64:~$ pkg set-publisher -O https://pkg.openindiana.org/hipster-encumbered hipster-encumbered
```

&nbsp;
###### **Install applications**

```bash
root@amd64:~$ pkg install vlc
```
