---
layout: post
title: Change the partition owner
date: 2021-05-27 15:09:00
description: Partition owner
tags: linux
categories: applications
thumbnail: assets/img/partition.jpg
---

By adding a hard disk for storing files to the system, we create the various desired partitions on it with the KDE Partition Manager. These partitions belong to the root superuser, which prevents us from saving files with our user. One method of changing the partition owner is using the command line. But first we need to mount the new partitions, selecting them in the file manager, in our case Dolphin.

```bash
sudo /run/media/username
ls
```

The ls command lists the various partitions already mounted on this disk. It remains for us to change the owner of the various partitions created with the following command (without the quotes):

```bash
sudo chown "your username":"your usergroup" -R "partition name"
```

For example:

```bash
sudo chown pratajo:pratajo -R Movies
```

The -R option of the chown command extends the owner change to subfolders, recursively.
