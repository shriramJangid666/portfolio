
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnitmation(){
    tl = gsap.timeline()

    tl.from('#nav',{
        y : '-10',
        opacity : 0,
        duration : 1.5,
        ease: Expo.easeInout
    })

    .to('.boundingElem',{
        y:0,
        ease: Expo.easeInout,
        duration : 2,
        stagger: .2,
        delay: -1,
    })

    .from('#herofooter',{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInout
    })
}

var timeout;

function shrink(){
    let xscale = 1
    let yscale = 1

    let xprive = 0
    let yprive = 0
    window.addEventListener("mousemove",function(item){
        clearTimeout(timeout)

        xprive = item.clientX
        yprive = item.clientY

        xscale = gsap.utils.clamp(0.8,1.2,item.clientX - xprive)
        yscale = gsap.utils.clamp(0.8,1.2,item.clientY - yprive)

        cursor(xscale,yscale)
        
        timeout = setTimeout(function(){
            document.querySelector('#cursor').style.transform = `translate(${item.clientX}px,${item.clientY}px) scale(${xscale},${yscale})`
        },100)
    })

}

function cursor(xscale,yscale){
    window.addEventListener("mousemove",function(item){
        document.querySelector('#cursor').style.transform = `translate(${item.clientX}px,${item.clientY}px) scale(${xscale},${yscale})`
    })
}

shrink()
cursor()
firstPageAnitmation()


document.querySelectorAll(".porjecctZero").forEach(function (porjecctZero) {
  var rotate = 0;
  var diffrot = 0;

  porjecctZero.addEventListener("mouseleave", function (dets) {
    gsap.to(porjecctZero.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  porjecctZero.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - porjecctZero.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(porjecctZero.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: dets.clientY,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    //   transform: translate(dets.clientX, dets.clientY)
    });
  });
});