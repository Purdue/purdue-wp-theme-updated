!function(r){var n={};function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=r,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,r){r(1),t.exports=r(9)},function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5),r(6),r(7),r(8)},function(t,e){function d(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}document.addEventListener("DOMContentLoaded",function(){window.FontAwesomeConfig={searchPseudoElements:!0};var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0),u=document.querySelector(".side-nav");0<t.length&&t.forEach(function(l){l.addEventListener("click",function(){var e,t=l.dataset.target,r=d(document.querySelectorAll("[data-menu='".concat(t,"']"))),n=document.querySelector(".purdue-navbar-white"),a=document.querySelector(".purdue-navbar-black>.navbar-end"),o="false"===l.getAttribute("aria-expanded"),i=l.querySelector(".burger-icon"),s=l.querySelector(".close-icon");function c(t){return e.apply(this,arguments)}l.setAttribute("aria-expanded",o),l.classList.toggle("is-active"),l.classList.contains("is-active")?(i.style.display="none",s.style.display="block"):(i.style.display="block",s.style.display="none"),u&&u.classList.toggle("is-active"),r&&(r.forEach(function(t){t!==n&&t.classList.toggle("is-active")}),window.addEventListener("resize",removeActive=(e=function(t){1024<=document.body.clientWidth&&(r.forEach(function(t){return t.classList.remove("is-active")}),console.log(t),window.removeEventListener("resize",removeActive),console.log("closed"))},c.toString=function(){return e.toString()},c))),n&&n.classList.toggle("is-active"),a&&a.classList.toggle("is-active")})});var r=document.body.clientWidth;Array.prototype.slice.call(document.querySelectorAll(".navbar-dropdown"),0).forEach(function(t){var e=Array.prototype.slice.call(t.querySelectorAll(".submenu"),0);r<1023&&"none"!==t.style.display&&0<e.lenght&&e.forEach(function(t){Array.prototype.slice.call(t.querySelectorAll(".navbar-dropdown-submenu"),0).style.display="block"})});var n=window.location.href;if(u){var e=u.querySelector(".navbar-menu"),a=Array.prototype.slice.call(e.querySelectorAll(".navbar-item:not(.submenu)"),0),o=Array.prototype.slice.call(e.querySelectorAll(".submenu"),0),i=!1;0<a.length&&a.forEach(function(t){if(t.firstChild.getAttribute("href")===n){if(t.classList.add("active"),t.getElementsByTagName("a")[0].style.fontWeight="700",i=!0,t.classList.contains("has-dropdown")){t.setAttribute("aria-expanded","true");var e=t.querySelector(".navbar-link"),r=t.querySelector(".navbar-dropdown");e.classList.add("navbar-link-open"),r.classList.add("is-active")}}else t.classList.contains("has-dropdown")&&t.setAttribute("aria-expanded","false")}),0<o.length&&o.forEach(function(t){var e=t.firstChild.getAttribute("href");n.includes(e)?(t.classList.add("active"),t.getElementsByTagName("a")[0].style.fontWeight="700",t.parentElement.parentElement.classList.add("active"),t.parentElement.parentElement.firstChild.classList.add("navbar-link-open"),t.parentElement.classList.add("is-active"),t.parentElement.parentElement.setAttribute("aria-expanded","true")):i||t.parentElement.parentElement.setAttribute("aria-expanded","false")});var s=Array.prototype.slice.call(e.querySelectorAll(".has-dropdown:not(.submenu)"),0);0<s.length&&s.forEach(function(o){var i=o.querySelector(".navbar-link"),n=o.querySelector(".navbar-link:not(.navbar-link-open)"),s=o.querySelector(".navbar-dropdown");if(n&&1023<=r){var a=n.parentElement;a.addEventListener("mouseover",function(){var t=n.getBoundingClientRect().top,e=window.innerHeight-t;console.log(t);var r=0-s.offsetHeight+a.offsetHeight;s.style.top=e<300?r+"px":"0px"})}r<1023&&i.addEventListener("click",function(t){t.preventDefault();var e=t.clientX,r=parseInt(window.getComputedStyle(i).getPropertyValue("width"),10),n=parseInt(window.getComputedStyle(i).getPropertyValue("left"),10);if(r+n-36<e&&e<r+n-6){i.classList.toggle("navbar-link-open"),s.classList.toggle("is-active"),s.style.height=s.scrollHeight+"px",$isOpen=s.classList.contains("is-active");var a=!!$isOpen;o.setAttribute("aria-expanded",a)}else window.location.href=i.href})})}})},function(t,e){function s(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(t){function e(t,e){return t.classList&&s(t.classList).includes(e)}function c(t){return window.getComputedStyle(t).getPropertyValue("display")}var l=t;switch(document.body.clientWidth,!0){case e(l,"accordion__heading--footer"):document.querySelectorAll(".accordion__heading--footer").forEach(function(t){var e=t.getAttribute("aria-controls"),r=t.querySelectorAll(".accordion__icon"),n=t.querySelector(".accordion__icon__plus"),a=t.querySelector(".accordion__icon__minus"),o=document.querySelector("#"+e),i=c(o);if(t.getAttribute("aria-expanded")&&t!==l)t.setAttribute("aria-expanded","false"),null===o.getAttribute("state-animating")&&(u(a),d(n),o.style.height=0,u(o),o.setAttribute("state-animating","true"),setTimeout(function(){u(o),o.removeAttribute("state-animating")},200));else if(t===l){var s="false"===l.getAttribute("aria-expanded");l.setAttribute("aria-expanded",s),i&&"none"!==i&&null===o.getAttribute("state-animating")?(r.forEach(function(t){f(t)}),o.style.height=0,o.setAttribute("state-animating","true"),setTimeout(function(){u(o),o.removeAttribute("state-animating")},200)):null===o.getAttribute("state-animating")&&(r.forEach(function(t){f(t)}),d(o),o.setAttribute("state-animating","true"),setTimeout(function(){o.removeAttribute("state-animating")},200),o.style.height=o.scrollHeight+"px")}});break;case e(l,"accordion__heading"):var r=l.getAttribute("aria-controls"),n=l.querySelectorAll(".accordion__icon"),a=document.querySelector("#"+r),o=c(a),i="false"===l.getAttribute("aria-expanded");l.setAttribute("aria-expanded",i),o&&"none"!==o&&null===a.getAttribute("state-animating")?(n.forEach(function(t){f(t)}),a.style.height=0,a.setAttribute("state-animating","true"),setTimeout(function(){u(a),a.removeAttribute("state-animating")},200)):null===a.getAttribute("state-animating")&&(n.forEach(function(t){f(t)}),d(a),a.setAttribute("state-animating","true"),setTimeout(function(){a.removeAttribute("state-animating"),a.style.height="auto"},200),a.style.height=a.scrollHeight+"px")}}var u=function(t){t.classList?(t.classList.add("hide"),t.classList.remove("show")):"svg"===t.nodeName&&(t.getAttribute("class").indexOf("hide")<=-1?t.setAttribute("class",t.getAttribute("class")+" hide"):-1<t.getAttribute("class").indexOf("show")&&t.setAttribute("class",t.getAttribute("class").replace("show","")))},d=function(t){t.classList?(t.classList.add("show"),t.classList.remove("hide")):"svg"===t.nodeName&&(t.getAttribute("class").indexOf("show")<=-1&&t.setAttribute("class",t.getAttribute("class")+" show"),-1<t.getAttribute("class").indexOf("hide")&&t.setAttribute("class",t.getAttribute("class").replace("hide","")))},f=function(t){var e=window.getComputedStyle(t).getPropertyValue("display");e&&"none"!==e?u(t):d(t)},n=document.body.clientWidth,o=document.querySelector(".narrow-footer"),i=document.querySelector(".footer");o&&(o.querySelectorAll(".accordion__heading--footer").forEach(function(t){n<1322&&(t.setAttribute("aria-expanded",!1),t.setAttribute("aria-disabled",!1))}),o.querySelectorAll(".narrow-footer>.accordion__content--footer").forEach(function(t){n<1322&&u(t)}),o.querySelectorAll(".narrow-footer>.accordion__heading--footer>.accordion__icon__plus").forEach(function(t){n<1322&&d(t)}),o.querySelectorAll(".narrow-footer>.accordion__heading--footer>.accordion__icon__minus").forEach(function(t){n<1322&&u(t)})),i&&(i.querySelectorAll(".accordion__heading--footer").forEach(function(t){n<1023&&(t.setAttribute("aria-expanded",!1),t.setAttribute("aria-disabled",!1))}),i.querySelectorAll(".narrow-footer>.accordion__content--footer").forEach(function(t){n<1023&&u(t)}),i.querySelectorAll(".narrow-footer>.accordion__heading--footer>.accordion__icon__plus").forEach(function(t){n<1023&&d(t)}),i.querySelectorAll(".narrow-footer>.accordion__heading--footer>.accordion__icon__minus").forEach(function(t){n<1023&&u(t)})),[].concat(s(document.querySelectorAll(".header__mainNav-dropDownInner")),s(document.querySelectorAll(".header__mainNav-dropDownOuter"))).forEach(function(t){var e,r;n<768&&((r=(e=t).previousElementSibling)&&r.setAttribute("aria-expanded","false"),e.classList.add("hide"),e.classList.remove("show"))});window.addEventListener("resize",function(){var a=document.body.clientWidth;o&&o.querySelectorAll(".accordion__heading--footer").forEach(function(t){var e=document.querySelector("#"+t.getAttribute("aria-controls")),r=t.querySelectorAll(".accordion__icon"),n=window.getComputedStyle(e).getPropertyValue("display");1322<=a?(t.setAttribute("aria-expanded",!0),t.setAttribute("aria-disabled",!0),r.forEach(function(t){-1<t.getAttribute("class").indexOf("hide")&&t.setAttribute("class",t.getAttribute("class").replace("hide","")),-1<t.getAttribute("class").indexOf("show")&&t.setAttribute("class",t.getAttribute("class").replace("show",""))}),e.classList.remove("hide","show"),e.removeAttribute("style")):("none"!==n?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1),t.setAttribute("aria-disabled",!1))}),i&&i.querySelectorAll(".accordion__heading--footer").forEach(function(t){var e=document.querySelector("#"+t.getAttribute("aria-controls")),r=t.querySelectorAll(".accordion__icon"),n=window.getComputedStyle(e).getPropertyValue("display");1023<=a?(t.setAttribute("aria-expanded",!0),t.setAttribute("aria-disabled",!0),r.forEach(function(t){-1<t.getAttribute("class").indexOf("hide")&&t.setAttribute("class",t.getAttribute("class").replace("hide","")),-1<t.getAttribute("class").indexOf("show")&&t.setAttribute("class",t.getAttribute("class").replace("show",""))}),e.classList.remove("hide","show"),e.removeAttribute("style")):("none"!==n?t.setAttribute("aria-expanded",!0):t.setAttribute("aria-expanded",!1),t.setAttribute("aria-disabled",!1))})}),document.addEventListener("click",function(t){var e=t.target;if(e.classList&&e.classList.contains(".narrow-footer>accordion__heading--footer")&&o)document.body.clientWidth<=1322&&r(e);else if(e.classList&&e.classList.contains(".footer>accordion__heading--footer")&&i){document.body.clientWidth<=1023&&r(e)}else e.classList&&e.classList.contains("accordion__heading")&&r(e)})},function(t,e){/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)},function(t,e){function r(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}window.almDone=function(){r(document.querySelectorAll(".alm-btn-wrap")).forEach(function(t){t.style.display="none"})},window.almDone()},function(t,e){"undefined"!=typeof wpDataCharts&&Object.keys(wpDataCharts).map(function(t){wpDataCharts[t].render_data.options.chartArea.width="70%",wpDataCharts[t].render_data.options.chartArea.height="85%",wpDataCharts[t].render_data.options.chartArea.top="0","google_pie_chart"===wpDataCharts[t].render_data.type&&(wpDataCharts[t].render_data.options.chartArea.width="100%",wpDataCharts[t].render_data.options.chartArea.height="100%",wpDataCharts[t].render_data.options.colors=["#DAAA00","#6F727B","#C4BFC0","#EBD99F","#FFFFFF","#AA864B","#827839"],wpDataCharts[t].render_data.options.pieSliceTextStyle={color:"black"},wpDataCharts[t].render_data.options.pieSliceBorderColor="")}),jQuery(window).load(function(){"undefined"==typeof wpDataChartsCallbacks&&(wpDataChartsCallbacks={}),wpDataChartsCallbacks[82]=function(t){t.options.data.datasets[0].backgroundColor=["#6F727B","#C4BFC0","#C4BFC0","#FFFFFF","#AA864B","#827839","#DAAA00"]}})},function(t,e){var r=document.querySelector("#to-top");r&&(r.addEventListener("click",function(){window.scroll({top:0,behavior:"smooth"})}),window.addEventListener("scroll",function(){if(600<window.scrollY){r.classList.remove("to-top-hidden"),r.classList.add("to-top-shown");var t=document.getElementsByTagName("footer")[0],e=window.innerHeight-t.getBoundingClientRect().top;80<=e?r.classList.add("to-top-relative"):e<80&&r.classList.remove("to-top-relative")}else r.classList.remove("to-top-shown"),r.classList.add("to-top-hidden")}))},function(t,e){var r=window.location.href,n=document.querySelector(".purdue-navbar-white>.navbar-menu>.navbar-start");if(n){var a=Array.prototype.slice.call(n.querySelectorAll("a"),0);0<a.length&&a.forEach(function(t){var e=t.getAttribute("href");r===e&&(t.parentElement.parentElement.classList.contains("navbar-start")?t.classList.add("is-active-page"):t.parentElement.parentElement.classList.contains("navbar-dropdown")?t.parentElement.parentElement.previousElementSibling.classList.add("is-active-page"):t.parentElement.parentElement.classList.contains("navbar-dropdown-submenu")&&t.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add("is-active-page"))})}},function(t,e,r){}]);