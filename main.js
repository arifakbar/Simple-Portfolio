var root = document.documentElement;
var controller = document.querySelector('#controller');
var switcher = document.querySelector('.switcher');
var sSred = document.querySelector('#sSred');
var sSblue = document.querySelector('#sSblue');
var sSorange = document.querySelector('#sSorange');
var sSyellow = document.querySelector('#sSyellow');
var sSgreen = document.querySelector('#sSgreen');
var bSlight = document.querySelector('#bSlight');
var bSdark = document.querySelector('#bSdark');

gsap.from('#navLinks ',{
    opacity:0,
    duration:1,
    y:-40,
})
gsap.from('#navLinks a',{
    opacity:0,
    duration:.5,
    stagger:0.3
})


var switchershow = false;


controller.addEventListener('click',function(){
    
    if(switchershow == true){
        switcher.style.right = '-17%';
        switchershow = false;
    }
    else if(switchershow == false){
        switcher.style.right = '0%';
        switchershow = true;
    }
});
sSred.addEventListener('click',function(){
    root.style.setProperty('--sScolor', 'red');
})
sSblue.addEventListener('click',function(){
    root.style.setProperty('--sScolor', 'blue');
})
sSorange.addEventListener('click',function(){
    root.style.setProperty('--sScolor', 'orange');
})
sSyellow.addEventListener('click',function(){
    root.style.setProperty('--sScolor', 'rgb(223, 223, 70)');
})
sSgreen.addEventListener('click',function(){
    root.style.setProperty('--sScolor', 'green');
})
bSlight.addEventListener('click',function(){
    root.style.setProperty('--bodyBack', '#eff7f6');
    root.style.setProperty('--navBack', 'white');
    root.style.setProperty('--detailColor', 'black');
    root.style.setProperty('--cardBack', 'white');
})
bSdark.addEventListener('click',function(){
    root.style.setProperty('--bodyBack', 'black');
    root.style.setProperty('--navBack', '#091921');
    root.style.setProperty('--detailColor', 'white');
    root.style.setProperty('--cardBack', '#091921');
})

var homeBtn = document.querySelector('#homeBtn');
var aboutBtn = document.querySelector('#aboutBtn');
var serviceBtn = document.querySelector('#serviceBtn');
var portfolioBtn = document.querySelector('#portfolioBtn');
var blogBtn = document.querySelector('#blogBtn');
var contactBtn = document.querySelector('#contactBtn');
var mainAbout = document.querySelector('#mainAbout');
var mainHome = document.querySelector('#mainHome');
var mainService = document.querySelector('#mainService');
var mainPortfolio = document.querySelector('#mainPortfolio');
var mainBlog = document.querySelector('#mainBlog');
var mainContact = document.querySelector('#mainContact');

gsap.from('#mainHome',{
    left:'100%',
    duration:1,
    ease:'expo.inOut',
}) 


homeBtn.addEventListener('click',function(){
    homeBtn.style.color = 'red';
    aboutBtn.style.color = 'black';
    serviceBtn.style.color = 'black';
    portfolioBtn.style.color = 'black';
    blogBtn.style.color = 'black';
    contactBtn.style.color = 'black';
    // alert('home');
    mainAbout.style.zIndex = -1;
    mainService.style.zIndex = -1;
    mainPortfolio.style.zIndex = -1;
    mainBlog.style.zIndex = -1;
    mainContact.style.zIndex = -1;
    mainHome.style.zIndex = 1;
    gsap.from('#mainHome',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
    }) 
})
aboutBtn.addEventListener('click',function(){
    // alert('about');
    homeBtn.style.color = 'black';
    aboutBtn.style.color = 'red';
    serviceBtn.style.color = 'black';
    portfolioBtn.style.color = 'black';
    blogBtn.style.color = 'black';
    contactBtn.style.color = 'black';
    mainHome.style.zIndex = -1;
    mainService.style.zIndex = -1;
    mainPortfolio.style.zIndex = -1;
    mainBlog.style.zIndex = -1;
    mainContact.style.zIndex = -1;
    mainAbout.style.zIndex = 1;
    gsap.from('#mainAbout',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
    }) 
})
serviceBtn.addEventListener('click',function(){
    homeBtn.style.color = 'black';
    aboutBtn.style.color = 'black';
    serviceBtn.style.color = 'red';
    portfolioBtn.style.color = 'black';
    blogBtn.style.color = 'black';
    contactBtn.style.color = 'black';
    // alert('service');
    mainHome.style.zIndex = -1;
    mainPortfolio.style.zIndex = -1;
    mainBlog.style.zIndex = -1;
    mainContact.style.zIndex = -1;
    mainAbout.style.zIndex = -1;
    mainService.style.zIndex = 1;
    gsap.from('#mainService',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
    }) 
    
})
portfolioBtn.addEventListener('click',function(){
    homeBtn.style.color = 'black';
    aboutBtn.style.color = 'black';
    serviceBtn.style.color = 'black';
    portfolioBtn.style.color = 'red';
    blogBtn.style.color = 'black';
    contactBtn.style.color = 'black';
    // alert('port');
    mainHome.style.zIndex = -1;
    mainService.style.zIndex = -1;
    
    mainBlog.style.zIndex = -1;
    mainContact.style.zIndex = -1;
    mainAbout.style.zIndex = -1;
    mainPortfolio.style.zIndex = 1;
    gsap.from('#mainPortfolio',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
    }) 
    
})
blogBtn.addEventListener('click',function(){
    homeBtn.style.color = 'black';
    aboutBtn.style.color = 'black';
    serviceBtn.style.color = 'black';
    portfolioBtn.style.color = 'black';
    blogBtn.style.color = 'red';
    contactBtn.style.color = 'black';
    // alert('blog');
    mainHome.style.zIndex = -1;
    mainService.style.zIndex = -1;
    mainPortfolio.style.zIndex = -1;
    
    mainContact.style.zIndex = -1;
    mainAbout.style.zIndex = -1;
    mainBlog.style.zIndex = 1;
    gsap.from('#mainBlog',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
  
    }) 
    
})
contactBtn.addEventListener('click',function(){
    homeBtn.style.color = 'black';
    aboutBtn.style.color = 'black';
    serviceBtn.style.color = 'black';
    portfolioBtn.style.color = 'black';
    blogBtn.style.color = 'black';
    contactBtn.style.color = 'red';
    // alert('contact');
    mainHome.style.zIndex = -1;
    mainService.style.zIndex = -1;
    mainPortfolio.style.zIndex = -1;
    mainBlog.style.zIndex = -1;
    
    mainAbout.style.zIndex = -1;
    mainContact.style.zIndex = 1;
    gsap.from('#mainContact',{
        left:'100%',
        duration:1,
        ease:'expo.inOut',
        
    }) 
    
})

var pflAllBtn = document.querySelector('#pflAllBtn');
var pflResBtn = document.querySelector('#pflResBtn');
var pflAnimBtn = document.querySelector('#pflAnimBtn');
var pflWdBtn = document.querySelector('#pflWdBtn');
var pLinksBar = document.querySelector('#pLinksBar');

pflAllBtn.addEventListener('click',function(){
    pCardsResponsive.style.zIndex = -1;
    pCardsAnimation.style.zIndex = -1;
    pCardsWebDesign.style.zIndex = -1;
    pCardsAll.style.zIndex = 1;
    gsap.from('#pCardsAll',{
        left:'105%',
        duration:1,
        ease:'expo.inOut',  
    }) 
    gsap.to('#pLinksBar',{
        left:'31.5%',
        width:'25px'
    })
})

pflResBtn.addEventListener('click',function(){
    pCardsAnimation.style.zIndex = -1;
    pCardsWebDesign.style.zIndex = -1;
    pCardsAll.style.zIndex = -1;
    pCardsResponsive.style.zIndex = 1;
    gsap.from('#pCardsResponsive',{
        left:'105%',
        duration:1,
        ease:'expo.inOut',  
    }) 
    gsap.to('#pLinksBar',{
        left:'37%',
        width:'90px',
    })

})

pflAnimBtn.addEventListener('click',function(){
    pCardsResponsive.style.zIndex = -1;
    pCardsWebDesign.style.zIndex = -1;
    pCardsAll.style.zIndex = -1;
    pCardsAnimation.style.zIndex = 1;
    gsap.from('#pCardsAnimation',{
        left:'105%',
        duration:1,
        ease:'expo.inOut',  
    }) 
    gsap.to('#pLinksBar',{
        left:'48.5%',
        width:'90px',
    })
})
pflWdBtn.addEventListener('click',function(){
    pCardsResponsive.style.zIndex = -1;
    pCardsAnimation.style.zIndex = -1;
    pCardsAll.style.zIndex = -1;
    pCardsWebDesign.style.zIndex = 1;
    gsap.from('#pCardsWebDesign',{
        left:'105%',
        duration:1,
        ease:'expo.inOut',  
    }) 
    gsap.to('#pLinksBar',{
        left:'60%',
        width:'90px',
    })
})
