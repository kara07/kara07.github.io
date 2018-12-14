---
layout:     post
title:      "ubuntu 18.04下配置复古终端模拟器"
subtitle:   "cool-retro-term settings"
date:       2018-12-11 13:06:00
author:     "kara"
header-img: "img/retro-term/hacking.jpg"
tags:
    - 技术
    - linux
    - 终端
    - ubuntu
---

![](/img/retro-term/welcome.jpg)

拥有一台上世纪八十年代的古董电脑或是古董游戏机一直是每个宅男的梦想(~~至少是我的梦想~~。充满像素感的文字散发着淡淡的微光，这便是早期CRT(阴极射线管)显示器的醍醐味。然而笨重，清晰度低的CRT显示器最终为LCD(液晶显示器)所取代。在获得更高分辨率，更丰富的色彩的同时却失去了早期显示器朦胧的韵味。

cool-retro-term是一款复古终端模拟器，能够将终端变成一台复古的CRT显示器。支持自定义配置及从外部加载配置。整体呈现效果十分美观。

## 安装

在这里我只介绍ubuntu18.04下的安装，其他linux发行版的用户可以参考[原文档](https://github.com/Swordfish90/cool-retro-term/blob/master/README.md#build-instructions-osx)，macos用户可以下载已经编译好的[DMG](https://github.com/Swordfish90/cool-retro-term/releases)

---

**使用包管理器**

直接运行以下命令：

```shell
sudo add-apt-repository ppa:vantuz/cool-retro-term
sudo apt-get update
sudo apt-get install cool-retro-term
```

原项目对于ubuntu系统只提供到17.10的支持，在我的18.04系统下出现了很多依赖问题。原软件包的一些依赖已经被废弃或是不兼容，在软件发布源中已不能够被下载。

他们是：
* qtdeclarative5-dialogs-plugin
* libqt5qml-graphicaleffects
* qml-module-qtquick-controls

可以在我的[github](https://github.com/kara07/cool-retro-term-dependence#cool-retro-term-dependence)中找到这些依赖。之后只要对每个.deb软件包跑一遍*dpkg -i*就行了。

---

**编译安装**

进行编译之前，先要安装一些依赖。不同的发行版所需的依赖不太一样，具体可以参考文档的[Dependencies](https://github.com/Swordfish90/cool-retro-term/blob/master/README.md#dependencies)部分

> 同样对于ubuntu只支持到17.10版本。因为本人是直接使用包管理器安装完成的，所以不清楚编译过程中是否还存在依赖等问题。

编译(首先需要Qt 5.2以上的版本支持)：

```shell
# 将其克隆到本地
git clone --recursive https://github.com/Swordfish90/cool-retro-term.git

# 进入目录
cd cool-retro-term

# 编译 ( Fedora 和 OpenSUSE 的用户应使用 qmake-qt5 来替代 qmake )
qmake && make

# 玩的开心!
./cool-retro-term
```

## 配置
打开Cool Retro Term后，默认呈现的就是一台古老的CRT显示器的样子。若不喜欢默认样式，点击Edit-Settings可以进行设置。

Genreal选项卡里的Profile有一些自带的配置文件Profile，点击Load按钮可以加载它们。点击New新建一个配置文件，然后可以进行具体的配置，调整效果实时可见，十分方便。

我的配置如下：

![充满噪点和抖动的球形屏让人欲罢不能](/img/retro-term/setting.jpg)

# 将cool-retro-term设为默认启动

首先应安装 *dconf-tools*

`$ sudo apt-get install dconf-tools`

直接从应用程序界面打开 *dconf-tools*,依次打开 org > gnome > desktop > applications > terminal 

更改应用结果为

```
exec  cool-retro-term
exec-arg -e
```

摁一下 ctrl+shift+t 测试以下修改结果吧。


