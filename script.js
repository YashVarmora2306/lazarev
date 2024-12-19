function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}

function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            gsap.to(e.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        e.addEventListener("mouseleave", function () {

            gsap.to(e.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        e.addEventListener("mousemove", function (dets) {
            gsap.to(e.childNodes[3], {
                x: dets.x - e.getBoundingClientRect().x - 50,
                y: dets.y - e.getBoundingClientRect().y - 130,
            })
        })
    })
}

function page3VideoAnimation() {

    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0

        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 1,
            borderRadius: "30px"
        })
    })

}


navAnimation()

page2Animation()

page3VideoAnimation()