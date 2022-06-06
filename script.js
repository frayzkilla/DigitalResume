setTimeout(function(){
    document.querySelector("#load").classList.add("fade-out");
    document.querySelector(".load-wrapper").classList.add("fade-out");
    setTimeout(function(){
        document.querySelector("#load").classList.add("hide");
        document.querySelector(".load-wrapper").classList.add("hide");
        document.querySelector(".container-fluid-bg").classList.remove("hide");
        document.querySelector(".container-fluid-bg").classList.add("fade-out-reverse");
        document.querySelector(".container-fluid").classList.remove("hide");
        document.querySelector(".container-fluid").classList.add("fade-out-reverse");
        setTimeout(function(){
            document.querySelector(".blnk").classList.add("blink-1");
        }, 500);
    }, 1500);
}, 1500);

$('.fa-github').on('click', function(){
    /* $(location).attr('href', "https://github.com/frayzkilla"); */
    window.open("https://github.com/frayzkilla", '_blank');
});

$('.fa-vk').on('click', function(){
    window.open("https://vk.com/frvyz", '_blank');
});

$('.fa-at').on('click', function(){
    let copyText = $('.mail');
    copyText.select();
    document.execCommand("copy");
    document.querySelector(".email_copied").classList.remove("hide");
    document.querySelector(".email_copied").classList.add("blink-1");
    setTimeout(function(){
        document.querySelector(".email_copied").classList.add("hide");
        document.querySelector(".email_copied").classList.remove("blink-1");
    }, 1500)
});

$('.fa-phone').on('click', function(){
    let copyText = $('.phone');
    copyText.select();
    document.execCommand("copy");
    document.querySelector(".phone_copied").classList.remove("hide");
    document.querySelector(".phone_copied").classList.add("blink-1");
    setTimeout(function(){
        document.querySelector(".phone_copied").classList.add("hide");
        document.querySelector(".phone_copied").classList.remove("blink-1");
    }, 1500)
});

$(".weather").hover(function () {
    $(".weather-desc").animate({'opacity':'1'}, 100);
},
function () {
    $(".weather-desc").animate({'opacity':'0'}, 100);
});

$(".taskmaster").hover(function () {
    $(".taskmaster-desc").animate({'opacity':'1'}, 100);
},
function () {
    $(".taskmaster-desc").animate({'opacity':'0'}, 100);
});