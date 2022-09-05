---
layout:          post
title:           "Ring Lattices"
subtitle:        "Lesser lord kusanari"
date:            2022-08-30 00:03:00
author:          "kara"
header-img:      "img/post-bg-unix-linux.jpg"
tags:
    - cryptography
    - lattice
    - algebra

---

# Origin

大佬们觉得普通随机格效率低，于是转向特定代数格。一般随机格效率真的低吗？看看原来的 $\mathrm{SIS}$ 函数 $f\_{\mathbf{A}} \colon \qty{0,1}^m \to \mathbb{Z}\_{q}^{n}$ 计算复杂度近似 $O(n m \log q) \approx O\left(n^{2}\right)$。但在密钥穷举攻击下只需要 $2^{O(m)}\approx2^{O(n)}$ 复杂度。安全确实是安全的，满足计算安全性的要求。但相差似乎并不那么理想(~~其实这么粗略看并感觉没什么卵用，也就图一乐~~)。另一个问题是密钥长度问题，密钥长度就是 ran 的矩阵大小，也就是 $n\times m$。

# Ring SIS

开始在 $\mathbf{A} \in \mathbb{Z}^{n\times m}\_{q}$ 上做手脚。直观的降低了密钥大小，并且在计算时可以用快速傅里叶变换使得计算复杂度也随之降低至 $\tilde{O}(n)$。

思路也很简单，既然要降低密钥长度那就减小矩阵，让一部分生成整个矩阵。这样子还需要矩阵的一部分进行生成，不知道有没有更高效的矩阵生成算法。来活：

首先假设 $m=2n\log q$ 看着方便点，给这矩阵竖向来几刀给他全部切成方阵：

$$\left(
A_{1} \mid  A_{2} \mid  \cdots \mid A_{2\log q} 
\right)$$

并且令每个 $A\_i$ 都有以下形式：

$$\left(\begin{array}{ccccc}
a_{0} & a_{1} & a_{2} & \ldots & a_{n-1} \\
a_{n-1} & a_{0} & a_{1} & \ldots & a_{n-2} \\
a_{n-2} & a_{n-1} & a_{0} & \ldots & a_{n-3} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
a_{1} & a_{2} & a_{3} & \ldots & a_{0}
\end{array}\right)$$

$a\_{0}, a\_{1}, \ldots, a\_{n} \in \mathbb{Z}\_{q}$。这种形式的矩阵叫做循环矩阵，可以想象成有一个向量不停旋转生成整个矩阵。两个这样的矩阵之间的乘法也可以用快速傅里叶变换使其在 $O(n\log n)$ 时间内完成。

现在考虑这个商环：$\mathbb{Z}\_{q}[x] /\left(x^{n}-1\right)$，咱发现他的每一个元素，i.e.，$\left(x^{n}-1\right)$ 的每一个陪集，都可以用一个阶小于等于 $n-1$ 的多项式代表，那就可以定义一个函数 $\varphi\colon\mathbb{Z}\_{q}[x] /\left(x^{n}-1\right) \to \mathcal{C}$，$\mathcal{C} \subseteq \mathbb{Z}\_{q}^{n \times n}$ 使得：

$$\varphi\left(a_{0}+a_{1} x+\cdots+a_{n-1} x^{n-1}\right)=R_{\mathbf{a}} \text {, where } \mathbf{a}=\left(a_{0}, a_{1}, \ldots, a_{n-1}\right)$$

$R\_{\mathbf{a}}$ 就是上面说的由 $\mathbf{a}$ 生成的小循环矩阵。显然双射。

$$\varphi\left(\sum_{i=0}^{n-1} a_{i} x^{i}+\sum_{i=0}^{n-1} b_{i} x^{i}\right)=\varphi\left(\sum_{i=0}^{n-1} a_{i} x^{i}\right)+\varphi\left(\sum_{i=0}^{n-1} b_{i} x^{i}\right)$$

$$\varphi\left(\left(\sum_{i=0}^{n-1} a_{i} x^{i}\right) \cdot\left(\sum_{i=0}^{n-1} b_{i} x^{i}\right)\right)=\varphi\left(\sum_{i=0}^{n-1} a_{i} x^{i}\right) \cdot \varphi\left(\sum_{i=0}^{n-1} b_{i} x^{i}\right)$$

且加乘同态。所以 $\varphi$ 是个环同构。所以对这循环矩阵进行操作也就是对这个环操作。

大佬也证了用 $\mathbb{Z}\_{q}[x] /\left(x^{n}-1\right)$ 的 $\mathrm{RingSIS}$ 并不抗碰撞 $\mathbb{Z}\_{q}[x] /\left(x^{n}+1\right)$ 就单向抗碰撞(~~想想也是~~)。