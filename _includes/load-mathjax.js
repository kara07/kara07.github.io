window.MathJax = {
    loader: {load: ['[tex]/physics']},
    tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    packages: {'[+]': ['physics']}
    },
    svg: {
    fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();