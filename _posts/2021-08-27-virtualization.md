---
layout: post
title: Fedora Virtualization
date: 2021-08-27 15:09:00
description: KVM
tags: linux
categories: applications
thumbnail: assets/img/virtualization.png
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kvm.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

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
  - Firmware: UEFI x86_64
  - Sound: ac97
  - Video Virtio + 3D acceleration

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
