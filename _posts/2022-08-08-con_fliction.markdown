---
layout:     post
title:      "怪怪的冲突"
subtitle:   "FncK λ0n, WgcK D0MN¡"
date:       2022-08-08 00:00:00
author:     "kara"
header-img: "img/contact-bg.jpg"
tags:
    - blog
    - LaTex
    - mathematics
---

总结一些最近遇到的 markdown 和 所用的 $\LaTeX$ 渲染引擎之间的符号冲突问题。

Jekyll 里使用 $\LaTeX$ 渲染公式暂时没找到更好的工具。但必须忍受 markdown 和 $\LaTeX$ 语法在一些符号上的冲突问题。姑且将其记下于此，以后有闲心再去解决。~~但届时真要解决怕不是要修改之前取消转义之后的所有屎山代码 XD~~

行内公式有问题：

$\mathbf{SVP}\_{\gamma}$,$\mathbf{CVP}\_{\gamma}$,$\mathbf{SIVP}_{\gamma}$

这个地方第一个下划线必须转义成\\_，但第二次出现就不用转义了。

$\mathcal{F}=\\{f\_{k}: X \rightarrow Y\\}\_{k \in K}$

$\mathcal{F}=\\{f\_{k}: X \rightarrow Y\\}\_{k \in K}$

这个地方花括号{}必须转义成\\\\{\\\\}，并且两个都需要转义，但下划线_却不用转义。试了试\\\\(\\\\)括起来的公式，效果如下：

\\(\mathcal{F}=\\{f_{k}: X \rightarrow Y\\}_{k \in K}\\)

\\(\mathcal{F}=\{f_{k}: X \rightarrow Y\}_{k \in K}\\)

行间公式貌似没有问题

$$\mathcal{F}=\{f_{k}: X \rightarrow Y\}_{k \in K}$$

$$\mathcal{F}=\\{f_{k}: X \rightarrow Y\\}_{k \in K}$$