---
layout:     post
title:      "linux手术小记"
subtitle:   "Death to Re:live"
date:       2019-04-21 00:00:00
author:     "kara"
header-img: "img/linuxsurgery/linuxsurgery.jpg"
tags:
    -linux
    - 生活
--- 

> 从3月份到现在博客一直没更新过，但实际上我的电脑发生了翻天覆地的变化，其中打算挑几个有意思的设置分享下。

> 在此感谢[asutorufa](https://asutorufa.github.io/)为我提供的巨大帮助。

---

# 切换 KDE 图形界面

在此之前一直用的gnome，动画掉帧不说，看视频画面还会撕裂。换成KDE后完美解决这些问题，界面特效帅的一批。相对的会更消耗硬件资源。先放一张预览图

[](img/linuxsurgery/1.png)

可以看到终端能够设置透明模糊背景，标题栏同样可以相同设置。选项栏可以完全放到顶部状态栏节省空间。底部托盘使用的是latte。界面窗口有很多炫酷动画和特效。我大体设置成这个样子，整体会很像mac，个人觉得比mac更加杀马特，看个人喜好吧。

安装KDE十分简单，只需要一行命令

```shell
sudo apt install kubuntu-desktop
```

安装过程网上已有很多教程，并且也比较简单，这里就不再赘述。

KDE同时配置了很多好用的工具软件，比如文本处理的kate，文件管理器dolphin，光盘刻录软件K3b等等，当然一些软件你可能并不喜欢，同时也可以选择卸载更换。

安装新的图形界面后，我在配置上花了很多的时间，一开始对快捷键不适应，便将快捷键全盘修改。界面样式和工具配置则是基本上每天都在变化。完全适应大概要磨合很长的一段时间。

---

# 在linux上使用steamplay运行大型游戏

> 这个能说的篇幅很大，但因为毕竟是在摸鱼也不想多说。

大体就是使用proton为每个游戏创建一个wine环境。

整体运行效率还是可以的，一些小游戏都可以稳定运行，大型游戏的话我试过黑魂3会稍微卡一点，个人的垃圾笔记本开全低特效还是可以勉强带动。黑魂1重置版则流畅的一批，甚至可以开开高特效(~~严重怀疑重置版炒冷饭~~

同时可以将windows的存档文件链接给linux系统，这样就可以实现双系统存档共享了。具体每个文件位置和链接方法都不一样，自己琢磨吧...

放张截图

[](img/linuxsurgery/2.png)

---

# ubuntu系统使用chromium浏览器硬解视频

[参考这个链接](https://launchpad.net/~saiarcot895/+archive/ubuntu/chromium-dev/)

使用了开放了API整合了视频硬解插件的chromium-dev版。

其中获取API KEY阶段可以使用网上分享的第三方KEY比如Arch wiki（花了好长时间自己生成了一个最终还无法使用...
