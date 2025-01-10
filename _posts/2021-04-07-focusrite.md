---
layout: post
title: Focusrite iTrack Dock and Roland A-49
date: 2021-04-07 21:01:00
description: Roland A-49 parameters
tags: keyboard music
categories: music
thumbnail: assets/img/roland-a49.jpg
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/roland-a49.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

&nbsp;

The Roland A-49 controller keyboard receives power exclusively from the UBS port. But in the factory setting, the POWER indicator only lights up if it receives power and compatible data communication. So the indicator lights up if the USB cable is connected to a computer's USB port. But it doesn't light up when:

- the cable is connected to a power supply, with the intention of using the DIN MIDI OUT plug
- the cable is connected to a USB hub, the solution to be connected to the iPad
- the cable is connected to the Focusrite dock!

For this we have to make two changes to the keyboard:

1. Change the operating mode to "Stand-alone mode" and
2. Change from "Dedicated Driver" to "Generic Driver"

The User Manual has an instruction for changing the driver but it is useless without it being in autonomous mode.

&nbsp;

###### **Change the operating mode to "Stand-alone mode"**

Press and hold the Function, Assign and Pitch buttons, and connect the USB cable to a power source. The POWER indicator lights up whenever the keyboard is connected to a powered USB port.

&nbsp;

###### **Change from "Dedicated Driver" to "Generic Driver"**

With the keyboard on, press the keys in the following sequence:

1. Function -> ADV -> [-]
2. Disconnect the USB cable and reconnect it.

The keyboard now works on an iPad and iTrack Dock.

If you want to reconnect the A-49 to a computer where you have already installed the driver for Windows or Mac OS X, reset the keyboard with the "Dedicated Driver". To do this, repeat the previous sequence replacing [-] with [+].
