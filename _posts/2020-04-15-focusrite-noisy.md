---
layout: post
title: Focusrite iTrack Dock noisy when iPad is charged
date: 2020-04-15 21:01:00
description: Focusrite iTrack Dock noisy
tags: keyboard music
categories: music
thumbnail: assets/img/itrack_noisy/itrack7.jpg
---

&nbsp;

The iTrack Dock is an audio interface designed specifically for the iPad. Fits many Apple tablets that use the lightning plug. Includes microphone/instrument inputs and monitor outputs.

What makes this device unique is the fact that it charges the iPad while it is in use.

However many users report the same defect: a noise that arises from the 96% charge of the iPad and that increases when we move the image.

One user presented a solution which is to include a switch, interrupting the charge when the iPad is almost charged. But this solution leads to constant charge/discharge cycles on the iPad. In addition, it would be good if we disconnected the iPad from the Dock, it was fully charged.

Analyzing the electronic board, we verify the existence of audio tracks next to the voltage regulators. For example. the headphone plug is soldered in the area of ​​the voltage regulators. A bad option.

I decided to isolate the charging circuit so that the circuit would not charge the iPad and it worked well. So I used a DC/DC converter to power it from the 12V switch.

The DC/DC converter is 12V - 5V 3A.

After testing, since the DC/DC converter does not fit inside the Dock box, I drilled a hole in the back and cut the cover.

---

##### **⚠️ DISCLAIMER OF LIABILITY ⚠️**

The author is not responsible for damages made on the Dock and / or iPad.
This information is provided in the hope that it will be useful, but WITHOUT ANY WARRANTY. There is no implied support when referring to this article. Any assistance provided will be voluntary. Use this information at your own risk.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack1.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack2.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack3.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack4.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack5.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack6.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/itrack_noisy/itrack7.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
