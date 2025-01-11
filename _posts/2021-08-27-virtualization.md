---
layout: post
title: Fedora Virtualization
date: 2021-08-27 15:09:00
description: KVM
tags: linux
categories: applications
thumbnail: assets/img/kvm.jpg
---

Check that the KVM kernel modules are properly loaded.

```bash
lsmod | grep kvm
```

If this command lists kvm_amd or kvm_intel, KVM is configured correctly.

&nbsp;

###### **Install the KVM Virtual Machine Manager**

Search for KVM in Discover and install the application.

&nbsp;

###### **Creating virtual machines**

Launch Virtual Machine Manager in Applications > System

&nbsp;

###### **Personal parameterization for each VM:**

Launch Virtual Machine Manager in Applications > System

- Memory: 4048
- CPUs: 2
- Select or create custom storage: /home/pratajo/KVM (20GB)
- Customize the installation before starting:
  * Firmware: UEFI x86_64
  * Sound: ac97
  * Video Virtio + 3D acceleration
