function sizer() {
    if (window.matchMedia("(max-width: 500px)").matches){ /*If the window is less than 375 pixels*/
    console.log("small");
    document.body.style.background = "url(/images/bg-mobile.svg) no-repeat hsl(257, 40%, 49%)";
    document.body.style.display = "inline-block";
    

    document.getElementById("ill").style.width = "175%"
    document.getElementById("ill").style.marginLeft = "-10%"
    document.getElementById("ill").style.marginTop = "40%"
    document.getElementById("ill").style.padding = "12%"


    document.getElementById("right").style.padding = "5%"
    document.getElementById("right").style.width = "90%"


    document.getElementById("title").style.fontSize = "25px"
    document.getElementById("title").style.width = "100%";
    document.getElementById("title").style.marginTop = "-20px"


    document.getElementById("desc").style.fontSize = "17px"
    document.getElementById("desc").style.width = "100%"
    document.getElementById("desc").style.textAlign = "centre"
    document.getElementById("desc").style.lineHeight = "30px"


    document.getElementById("butt").style.width = "80%"
    document.getElementById("butt").style.fontSize = "18px"
    document.getElementById("butt").style.padding = "5%"
    document.getElementById("butt").style.borderRadius = "60px"
    document.getElementById("butt").style.marginTop = "10px"
    document.getElementById("butt").style.marginLeft = "30px"


    document.getElementById("socials").style.marginRight = "25%"
    document.getElementById("socials").style.marginTop = "10%"
    document.getElementById("socials").style.fontSize = "25px"
    document.getElementById("socials").style.fontSize = "25px"
}
}

sizer()