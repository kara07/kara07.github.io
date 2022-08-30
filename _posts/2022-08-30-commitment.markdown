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

走个方案流程：

$\mathbf{Initialize()}:$

$$m \stackrel{\$}{\gets}\mathcal{M}\\
k \stackrel{\$}{\gets}\mathcal{K}$$

$\mathbf{Send(m)}$ _in Commit Phase:_

$$
\begin{aligned}
&r \stackrel{\$}{\gets}\{0,1\}^{s}\\
&c \gets \mathbf{Commit}(k, m, r)\\
&return\enspace c 
\end{aligned}
$$

$\mathbf{Receive(k)}$ _in Reveal Phase:_

$$
(m',r')\gets\mathbf{Open}(k,c)\\
return\enspace \mathbf{Commit(k,m',r')==c}$$

可以看出最重要的就是 $\mathbf{Commit(k,m,r)}$ (~~kimura~~)和 $\mathbf{Open}(k,c)$ 可以说这是一个 commitment scheme 的核心。

# 安全属性

**Hiding**：接收到一个 commitment $c$ 应不暴露 $m$ 的任何信息。实际上就等同于加密方案的语义安全性和密文的不可区分性。形式化即：$\forall m\_0,m\_1$，

$$P_{0} \sim\qty{(k, c) \mid k \stackrel{\$}{\gets} \mathcal{K}, c \stackrel{\$}{\gets} \mathbf{Commit}\left(k, m_{0}\right)}$$

$$P_{1} \sim\qty{(k, c) \mid k \stackrel{\$}{\gets} \mathcal{K}, c \stackrel{\$}{\gets} \mathbf{Commit}\left(k, m_{1}\right)}$$

这俩概率分布在 $(\mathcal{K},\mathcal{C})$ 上应统计学接近。

**Binding**：只要 $k\in\mathcal{K}$ 在第一阶段已经选定，发送者在第二阶段就不能发给接收者另一个 $k'\neq k$。计算观点下，方案 $(t,\varepsilon)$-安全，如果 $\forall k\in\mathcal{K}$，对于所有运行在时间 $t$ 的 $\mathbf{Open}$ 算法 $A\in \mathcal{A}$，其输出 $A(k, c)=\left(m\_{0}, m\_{1}, r\_{0}, r\_{1}\right)$，

$$\pr\left[m_{0} \neq m_{1}, \operatorname{Commit}\qty(k, m_{0}, r_{0})=c=\operatorname{Commit}\qty(k, m_{1}, r_{1})\right]<\epsilon$$

简而言之对于同一个 $k$，两次 $\mathbf{Open}$ 结果不能相同，但按他这么说对于不同 $k$ 的输出结果就可能有 noticeable 概率相同了所以第二阶段不能临时变 $k$。不太了解，感觉是个研究方向？

# lattice based commitment

讲一讲基于格的 commitment scheme。

算了懒得讲了，没啥意思。

$$\begin{aligned}
& \mathbf{Commit}\left(A, m s g \in\{0,1\}^{m}, r \in\{0,1\}^{2 m}\right) \\
=& f_{A}(m s g, r) \\
=& A\left[\begin{array}{c}
m s g \\
r
\end{array}\right] \bmod q
\end{aligned}$$

总之就是用了$\mathrm{SIS}$ 单向函数，把 message 跟 r 封装到 $\mathbf{x}$ 里面构成 Commit function。并且满足 hiding 和 binding。
受到