"use strict";var breakpoint={above_desktop:window.matchMedia("(min-width: 1025px)"),below_desktop:window.matchMedia("(max-width: 1024px)"),above_small:window.matchMedia("(min-width: 851px)"),below_small:window.matchMedia("(max-width: 850px)"),above_tablet:window.matchMedia("(min-width: 768px)"),below_tablet:window.matchMedia("(max-width: 767px)"),below_mobile:window.matchMedia("(max-width: 550px)")},header=document.getElementById("header");breakpoint.above_small.matches&&window.addEventListener("scroll",function(){document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop>100?header.classList.add("is-fixed"):(document.documentElement&&document.documentElement.scrollTop||0==document.body.scrollTop)&&header.classList.remove("is-fixed")});var header_button=document.getElementById("header-button"),header_nav=document.getElementById("header-nav");header_button.addEventListener("click",function(){this.classList.toggle("is-open"),header_nav.classList.toggle("is-open"),document.querySelector(".btn-scroll-down")&&document.querySelector(".btn-scroll-down").classList.toggle("hide")});for(var nav_scroll=document.querySelectorAll(".js-scrollpage"),i=0;i<nav_scroll.length;i++)nav_scroll[i].addEventListener("click",function(){header_button.classList.remove("is-open"),header_nav.classList.remove("is-open")});var scroll_to_form=document.querySelectorAll(".js-scrollToForm"),scroll_to_faq=document.querySelectorAll(".js-scrollToFaq"),section_form=document.getElementById("section-form"),section_faq=document.getElementById("section-faq");section_form&&!function(){for(var e=section_form.offsetTop-58,o=0;o<scroll_to_form.length;o++)scroll_to_form[o].addEventListener("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:e},600)})}(),section_faq&&!function(){for(var e=section_faq.offsetTop-58,o=0;o<scroll_to_faq.length;o++)scroll_to_faq[o].addEventListener("click",function(o){o.preventDefault(),$("html, body").animate({scrollTop:e},600)})}();