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

Jekyll 里使用 $\LaTeX$ 渲染公式暂时没找到更好的工具。但必须忍受 markdown 和 $\LaTeX$ 语法在一些符号上的冲突问题。姑且将其记下于此，以后有闲心再去解决。~~但届时真要解决怕不是要修改之前取消转义之后的所有屎山代码 :-(~~

行内公式有问题：

$\mathbf{SVP}\_{\gamma}$,$\mathbf{CVP}\_{\gamma}$,$\mathbf{SIVP}_{\gamma}$

$\mathbf{SVP}\_{\gamma}$,$\mathbf{CVP}\_{\gamma}$,balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala$\mathbf{SIVP}_{\gamma}$

$\mathbf{SVP}\_{\gamma},\mathbf{CVP}\_{\gamma},\mathbf{SIVP}_{\gamma}$

$A\_a$$B\_b$$C_c$

$A\_a$ AAA $B\_b$ BBB $C_c$

这个地方第一个下划线必须转义成 \\_，第二次出现的也需要转义，第三个好像就不用了，但可能会出现bug。

$X=\{\mathbf{x} \mid\\|\mathbf{x}\\| \leq \beta\}$

$A\|A$$B\|B$$C|C$

$\\|$$\\|$$|$

$\|$bala$\|$bala$|$

这个地方\\|也必须转义成\\\\|，貌似是出现的每一个都需要转义。

$\mathcal{F}=\\{f\_{k}: X \rightarrow Y\\}\_{k \in K}$

$\mathcal{F}=\\{f_{k}: X \rightarrow Y\\}_{k \in K}$

这个地方花括号 {} 必须转义成 \\\\{\\\\}，并且两个都需要转义，但下划线_却不用转义。试了试 \\\\(\\\\) 括起来的公式，效果如下：

\\(\mathcal{F}=\\{f_{k}: X \rightarrow Y\\}_{k \in K}\\)

\\(\mathcal{F}=\{f_{k}: X \rightarrow Y\}_{k \in K}\\)

行间公式貌似没有问题

$$\mathcal{F}=\{f_{k}: X \rightarrow Y\}_{k \in K}$$

$$\mathcal{F}=\\{f_{k}: X \rightarrow Y\\}_{k \in K}$$

目前可以公开的情报：行间公式不需要转义，行内公式需要转义。成对出现的符号比如 {} 两个都需要转义，单个出现的符号如 _ 和 \| 最好也都转义，但存在出现两次第三次不需要转义的情况，且不转义可能会会出现转义格式错误。具体原因不明。

很像研究一下 Mathjax 的代码从源头上解决问题，但最近真的没时间，啥研究成果都没有导师已经催得我妈都不认得了。只能作罢有机会再研究。~~真的很想抛弃 markdown 全用 LaTex 写。~~