---
layout: post
title: Installing OpenIndiana Hipster 2026.04
date: 2026-10-24 17:00:00
last_modified_at: 2026-10-25 21:00:00
description: OpenIndiana Hipster
tags: openindiana hipster unix
categories: operating-systems
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/openindiana2026_04.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

&nbsp;

###### **Why OpenIndiana?**

OpenIndiana Hipster is a community-driven, rolling-release distribution based on illumos (the open-source continuation of OpenSolaris). It keeps the strengths that made Solaris interesting while receiving regular package updates.

People install it for a few practical reasons:

- ZFS and boot environments — Snapshots and easy rollback are first-class features. A bad update rarely leaves you stuck.
- Stable Unix foundation — Solid networking, service management (SMF), zones, and DTrace are still there if you need them.
- Lightweight desktop — The GUI image ships with the MATE desktop. It is responsive even on modest hardware and includes Firefox and Thunderbird out of the box.
- Familiar package management — IPS (pkg) works well for both servers and desktops. Once you get used to publishers and boot environments, day-to-day maintenance is straightforward.
- Free and open — No licensing surprises. The project is maintained by volunteers and continues to ship security fixes and software updates.

It is not the most popular desktop operating system, and hardware support (especially newer GPUs and Wi-Fi) can be more limited than on mainstream Linux distributions. For users who value ZFS, clean Unix behavior, or simply want a modern illumos-based system with a graphical desktop, Hipster remains a workable and interesting option.

&nbsp;

###### **BIOS / UEFI Settings**

Before booting the installer media, enter your system’s BIOS/UEFI setup and disable Secure Boot. OpenIndiana currently supports UEFI boot but does not support Secure Boot.

On many systems this option is found under the Security, Boot, or Authentication tab. After disabling it, save the changes and reboot from the USB stick (or DVD).

Depending on your hardware, you may also need to adjust the boot mode (UEFI vs Legacy/CSM). Prefer UEFI when possible; if the installer creates a non-bootable system, try enabling Legacy/CSM mode as a workaround.

The rest of this guide covers installing a recent Hipster GUI image (including test builds) and the basic post-install steps that make the system usable.

&nbsp;

###### **Get the OpenIndiana Hipster Image**

Download the image from the [official website](https://www.openindiana.org/downloads/) or a [test/daily image](https://dlc.openindiana.aurora-opencloud.org/hipster/isos/hipster/).

**Warning:** The next step will completely overwrite the target device. Make sure you identify the correct USB drive before continuing.

On Linux, first identify the USB drive:

```bash
lsblk
```

Look for the USB stick (usually something like sdb, sdc, etc.). Do not use the system disk.

There should be no mount point listed for the USB device but if any partition of the USB drive is mounted, unmount it first:

```bash
umount /dev/sdX1
```

Then write the image as root (replace /dev/sdX with the correct device and image.usb with the actual filename):

```bash
sudo dd if=image.usb of=/dev/sdX bs=4M status=progress oflag=sync
```

After the write finishes, flush the buffers and safely eject the drive:

```bash
sync
```

```bash
sudo eject /dev/sdX
```

Alternatively, you can power off the device with:

```bash
udisksctl power-off -b /dev/sdX
```

This prevents the “device was removed without unmounting” warning when you physically disconnect the USB stick.

&nbsp;

###### **Install**

I recommend reading the [Hipster Handbook](https://docs.openindiana.org/handbook/getting-started/) before installation. It contains hardware-specific notes that may apply to your system.

If you boot the live image, the system runs entirely from the USB stick without modifying your hard drive. You can explore Hipster and only install it if you decide to keep it.

During the installation:

- Create a temporary password for the root account.
- Create a regular user account for yourself.

On the first boot after installation, you will be asked to set a new root password.

After the installation finishes and you reboot into the installed system (USB stick removed), log in with your regular user and update the system:

```bash
su -
```

```bash
pkg refresh && pkg update
```

**Reboot** after a major update if the update changes kernel, boot-related, or driver packages. You can check whether a reboot is needed with beadm list (a new boot environment is usually created) or simply reboot to be safe. The Image Packaging System (IPS) and ZFS boot environments make this low-risk: if something goes wrong you can boot the previous environment.

&nbsp;

###### **Official repositories**

The main publisher (openindiana.org) is already configured. The most useful additional publisher is the encumbered one (codecs and components that may have patent issues).

To add a repository, use the pkg set-publisher command. Specify the URI first, then the publisher name:

```bash
pkg set-publisher -O https://pkg.openindiana.org/hipster-encumbered hipster-encumbered
```

```bash
pkg set-publisher -g http://sfe.opencsw.org/localhostoih localhostoih
```

After adding a publisher, refresh the package list:

```bash
pkg refresh
```

&nbsp;

| Publisher          | URI                                            | Purpose                                    |
| ------------------ | ---------------------------------------------- | ------------------------------------------ |
| openindiana.org    | https://pkg.openindiana.org/hipster            | Primary (already present)                  |
| hipster-encumbered | https://pkg.openindiana.org/hipster-encumbered | Multimedia codecs and related packages     |
| SFE (optional)     | http://sfe.opencsw.org/localhostoih            | Extra third-party packages (less critical) |

&nbsp;

###### **Install applications**

Firefox and Thunderbird are already included in the GUI image, so you normally do not need to install them separately.

Useful packages after the update:

```bash
pkg install vlc ffmpeg # Multimedia (requires the encumbered publisher)
```

```bash
pkg install libreoffice gimp # Office
```

```bash
pkg install build-essential git # Development tools
```

```bash
pkg install htop terminal/tmux # Other common tools
```

You can search for packages with pkg search <name> and see what’s available with pkg list -a.

&nbsp;

**Notes**

- Prefer pkg update over reinstalling from a new ISO. Hipster receives frequent package updates.
- Boot environments (beadm) are one of the strongest reasons to use IPS/ZFS. Create one before risky changes if you want an easy rollback.
- The official Handbook and the downloads/mirrors page remain the best references for hardware-specific details and current images.

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
