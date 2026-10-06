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
        .header-logo svg { display: none !important; }
        .SidebarPolicy\\#kP { display: none !important; }
        .header-user-menu.header-dropdown>.btn { display: none !important; }
        .header-dropdown-content__signup-plate { display: none !important; }
        .header-dropdown .header-dropdown-content li>a:not(.btn,.app-sidebar-lang-select-list-link,.aloha-promo-banner).header-dropdown-menu-item--signup { display: none !important; }
        .login-form .forgot-password-link:hover { display: none !important; }
        .login-form .forgot-password-link { display: none !important; }
        .login__third-party-authorization { display: none !important; }
        .login__login-without-password-link { display: none !important; }
        .login__footer { display: none !important; }
        .PWAInstallMessengerNotificationV2_mobile\\#kJ { display: none !important; }
        .LogoWithLanguageSection__logoContainer\\#HQ { display: none !important; }
        .RowTop__left-nav\\#QD, .RowTop__left-tour\\#PH { display: none !important; }
        .SeoDescriptionSection\\#DD { display: none !important; }
        .Footer__row-labels\\#sF { display: none !important; }
        .Footer__row-copyright\\#O7 { display: none !important; }
        .country-appearance .top-models-hint-list { display: none !important; }
        .settings-content .settings-island.settings-island-locked>.settings-island-content { display: none !important; }
        .settings-island-content-button-container.settings-island-content-button-container.settings-island-content-button-container { display: none !important; }
        .settings-content .settings-island:last-child { display: none !important; }
        .settings-allow-using-content__hint a { display: none !important; }
        .dmca-protection-form-settings-island__hint a { display: none !important; }
        .settings-content .settings-show-delete-my-account { display: none !important; }
        .affiliate-header-section__link-block { display: none !important; }
        .affiliate-user-section__block { display: none !important; }
        .affiliate-model-section__link { display: none !important; }
        .main-person-rules__link { display: none !important; }
        .news-latest-list { display: none !important; }
        .BannersCarousel\\#uM { display: none !important; }
        .broadcasting-safety-rules-new .broadcasting-safety-rules-new-info__list { display: none !important; }
        .ViewCamShareButton_withRightPadding\\#Ou { display: none !important; }
        .interactive-toys .interactive-toy-description-link { display: none !important; }
        .app-tile .author { display: none !important; }
        .app-tile .app-image .app-description { display: none !important; }
        .app-tile .app-image img { display: none !important; }
        .app-tile { display: none !important; }
        .ContestRulesHeader__becomeModel\\#Xe { display: none !important; }
        .ContestRulesPage__wiki\\#YP { display: none !important; }
        .payments-declaimer__button { display: none !important; }
        .ModelFanClubSubscriptionsPricesNewDescription__link\\#O_ { display: none !important; }
        .SidebarLink\\#Ot.SidebarLink__variant-main\\#HJ { display: none !important; }
        .PWAInstallMessengerNotificationV2\\#he { display: none !important; }
        .PWAQrCodeSection\\#nm { display: none !important; }
        .payout-settings .page-block { display: none !important; }
        .text-title-l1 { display: none !important; }
        .affiliate-header-section__faq-link { display: none !important; }
        .PlasmaStreamingAppButton\\#wW { display: none !important; }
        .next-payout-settings-payment-link { display: none !important; }
        .model-info { display: none !important; }
        .ViewCamHeader__shareButton\\#_t { display: none !important; }
        .DiscountsPanel__link\\#wN:hover { display: none !important; }
        .TipMenuDiscountsPanel__previewLink\\#FF:hover { display: none !important; }
        .DiscountsPanel__link\\#wN { display: none !important; }
        .TipMenuDiscountsPanel__previewLink\\#FF { display: none !important; }
        .RowTopContainer__right\\#Vj { display: none !important; }
        .join-sc-community-banner__content { display: none !important; }
        .TopModelsHeader__becomeModelButton__geo\\#sd { display: none !important; }
        .header-user-menu.header-dropdown>.about-us-button { display: none !important; }
        #main-message>p { display: none !important; }
        .player-controls-user__join-btn {display: none !important; }
        .new-ultimate-required {display: none !important; }
        .main-layout.sticky-header-mobile .header-notifications {display: none !important; }
        .login-form__field-error {display: none !important; }







        
    `;
    
    // 将 style 标签插入到网页的头部
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.documentElement.appendChild(style);
    }
});

Object.defineProperty(navigator, 'webdriver', { get: () => undefined });










