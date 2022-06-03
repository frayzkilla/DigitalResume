

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

document.querySelector(".am-go").addEventListener("click", function(){
    window.location.hash="intro-go";
})

