

gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({scrollTrigger:{
    start: "top top",
    end:"+=2500",
    trigger:".trig",
    markers:false,
    scrub:true,
    pin:true
                }});

//1
tl.fromTo(".ch1",{opacity:0}, {opacity:1,duration:3,ease: "power4.out"})
tl.fromTo(".textbox1" , {opacity:0},{opacity:1,duration:3,ease: "power4.out",text:"我國GDP初次分配之完整統計開始於1981年，根據主計處統計，我國受雇者報酬佔GDP的比率從1981年的48.45%緩步上升至1990年的51.71%"})
tl.fromTo(".textbox1" , {opacity:1,},{opacity:0,duration:3,delay:20})
//2
tl.fromTo(".ch2",{opacity:0}, {opacity:1,duration:3,ease: "power4.out"}) 
tl.fromTo(".textbox1" , {opacity:0 , text:" "},{opacity:1,duration:3,ease: "power4.out",text:"但1990年以後受雇者報酬佔比就一路下滑，1995年跌至GDP的50.83%，1997年跌破50%；反之資本家掌控的固定資本消耗（例如廠房機器折舊成本）與營業盈餘卻從1990年以後一路飆升。"})
tl.fromTo(".textbox1" , {opacity:1},{opacity:0,duration:3,delay:20})
//3
tl.fromTo(".ch3",{opacity:0}, {opacity:1,duration:3,ease: "power4.out"})
tl.fromTo(".textbox1" , {opacity:0, text: " "},{opacity:1,duration:3,ease: "power4.out",text:"2002年受雇者報酬佔GDP的比率46.18%，固定資本消耗及營業盈餘合計（11.91%+35.61%=47.52%），二者呈現死亡交叉；以後二者差距逐漸擴大"})
tl.fromTo(".textbox1" , {opacity:1},{opacity:0,duration:3,delay:20})
//4
tl.fromTo(".ch4",{opacity:0}, {opacity:1,duration:3,ease: "power4.out"})
tl.fromTo(".textbox1" , {opacity:0 ,text: " "},{opacity:1,duration:3,ease: "power4.out",text:"2010年與2014年受雇者報酬佔GDP的比率來到43.99%與44.04%的歷史最低與次低點，固定資本消耗及營業盈餘合計則是歷史最高與次高點（50.79%與50.59%），這個現象在2017-19年政黨輪替後才有逐漸改善。"})