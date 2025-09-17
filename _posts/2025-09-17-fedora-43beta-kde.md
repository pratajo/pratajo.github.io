---
layout: post
title: Installing Fedora 43 Beta KDE Plasma
date: 2025-09-17 17:00:00
description: Fedora 43 Beta KDE Plasma
tags: fedora kde
categories: operating-systems
thumbnail: assets/img/fedora43bkde.jpg
featured: true
toc:
  sidebar: right
images:
  compare: true
  slider: true
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/fedora43bkde.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

&nbsp;

###### **Get Fedora 43 Beta KDE Plasma**

Use Fedora Media Writer application to create a 'Live USB' or download the ISO image from the [torrent](https://torrent.fedoraproject.org/) list.

Fedora Media Writer is available for Linux and Microsoft Windows.

&nbsp;

###### **Install Fedora**

Fedora images are hybrid ISO images, so they can be used for DVD burning or flash drive creation. They also work on BIOS and UEFI systems.

I recommend using the Fedora Media Writer application to create the bootable flash drive. There is also a version for Windows.

As this is a "live" distribution, the new OS (operating system) will run from the DVD or pen drive without making any changes to the hard disk. You can test the OS and only then install it on the hard drive.

During installation, leave the "root" account disabled. Create a user with administrative rights and a password.

After installation, restart the computer and remove the DVD or flash drive. Log in, open _Terminal_ and update the entire system with the following command:

```bash
sudo dnf update
```

(enter password)

Restart the computer to load a new kernel and start the updated applications. Restart on the desktop or with the _reboot_ command.

```bash
reboot
```

&nbsp;

###### **Parameterize DNF**

Fedora uses DNF to install and update its software over the internet. It also automatically determines application dependencies.

<ins>Repositories Fedora</ins>  
Fedora includes two repositories by default: fedora, with the same software packages as the DVD and updates, with updated packages. These repositories _sign_ their RPM files to make sure they are valid when they are downloaded.

<ins>Other Repositories</ins>  
For applications that conflict with Fedora policy (MP3, DVD, MPEG, binary drivers, etc.) the [RPM Fusion](https://rpmfusion.org/) repository is required.

```bash
sudo dnf install https://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

&nbsp;

###### **Install current applications**

```bash
sudo dnf install thunderbird ktorrent gimp xsane p7zip kde-l10n-Portuguese unrar gsmartcontrol libreoffice-langpack-pt-PT gimp-help gimp-help-pt_BR vlc librecad inkscape scribus
```

&nbsp;

###### **Install codecs**

Switch to full ffmpeg

```bash
sudo dnf swap ffmpeg-free ffmpeg --allowerasing
```

Install additional codecs

```bash
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

Install the hardware accelerated codec for an Intel recent CPU...

```bash
sudo dnf install intel-media-driver
```

... or for an AMD CPU (best choice)

```bash
sudo dnf swap mesa-va-drivers mesa-va-drivers-freeworld
```

```bash
sudo dnf swap mesa-vdpau-drivers mesa-vdpau-drivers-freeworld
```

To play a DVD you need to install the libdvdcss package

```bash
sudo dnf install rpmfusion-free-release-tainted
```

```bash
sudo dnf install libdvdcss
```

```bash
sudo dnf install rpmfusion-nonfree-release-tainted
```

```bash
sudo dnf --repo=rpmfusion-nonfree-tainted install "*-firmware"
```

&nbsp;

###### **Installing [KDevelop IDE](https://kdevelop.org/) (for developers)**

```bash
sudo dnf group install development-tools
```

```bash
sudo dnf group install c-development
```

```bash
sudo dnf install kdevelop kdevelop-pg-qt kdevelop-php
```

&nbsp;

###### **How to change the hostname**

If you want to customize the machine name, the easiest method is using the command line.

This instruction is valid for a computer used at home, which is not part of a enterprise network. We use the _hostnamectl_ command:

```bash
hostnamectl set-hostname new-name
```

This name is stored in the /etc/hostname file.

We can simultaneously check the machine name, operating system, kernel version and architecture with this command:

```bash
hostnamectl status
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
