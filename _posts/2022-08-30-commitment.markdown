---
layout:          post
title:           "Commitment Schemes"
subtitle:        "Dendro Archon KAWA11!"
date:            2022-08-30 00:00:00
author:          "kara"
header-img:      "img/post-bg-unix-linux.jpg"
tags:
    - cryptography
    - lattice
    - commitment
---

# Commitment Schemes

Commitment 中文老翻译成承诺，我感觉跟承诺的语义没啥关系啊，更像是单纯的提交，比如 github 里的 commit。也不知道为什么一翻译就翻译成承诺了。很麻。

这个密码学功能实际上跟一般对称加密很类似，只不过接收者收到收到密文没办法解密回原来的 $(m,r)$ 只能解密回另外一组 $(m',r')$。接受者要验证这个 commitment 对不对只能再次调用 commit function 将这俩 $(m',r')$ 输入再过一遍如果他等于密文 $c$ 就是对的。确实，很没意思。

走个流程：

Initialize():
$$m \stackrel{\$}{\gets}\mathcal{M}\\
k \stackrel{\$}{\gets}\mathcal{K}$$
总之讲一讲基于格的 commitment scheme。

算了懒得讲了，没啥意思。

总之就是用了$\mathrm{SIS}$ 单向函数，把 message 跟 r 封装到 $\mathbf{x}$ 里面构成 Commit function。并且满足 hiding 和 binding。
受到