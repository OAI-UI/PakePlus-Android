window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
window.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('a.logo');
    if (logo) {
        logo.style.display = 'none'; // 隐藏Logo
    }
});
window.addEventListener('DOMContentLoaded', function() {
    // 1. 隐藏 Logo 的 JS 代码
    const logo = document.querySelector('a.logo');
    if (logo) {
        logo.style.display = 'none'; // 隐藏Logo
    }

    // 2. 用 JS 动态创建一段 CSS 并注入到网页中（这是替代你刚才写法的正确方式）
    const style = document.createElement('style');
    style.innerHTML = `
        .stui-vodlist__thumb.banner {
            display: none !important;
        }
    `;
    // 将创建好的样式插入到网页头部
    document.head.appendChild(style);
});
window.addEventListener('DOMContentLoaded', function() {
    
    // 动态创建一个 style 标签
    const style = document.createElement('style');
    
    // 将你的 CSS 规则写在这里（注意是反引号 ` ` ）
    style.innerHTML = `
        /* ---- 下面是你提供的 CSS 代码 ---- */


        
    `;
    
    // 将 style 标签插入到网页的头部
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.documentElement.appendChild(style);
    }
});

Object.defineProperty(navigator, 'webdriver', { get: () => undefined });











window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
