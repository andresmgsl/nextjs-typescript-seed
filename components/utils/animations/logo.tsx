// TODO: Add realtion between GSAP library and its typescript @type and react-gsap
declare var TimelineMax: any;
declare var TweenMax: any;
declare var Power3: any;
declare var CustomEase: any;


let tl: any;
/**
 * Function to animate enter of home page
 * 
 * @param main html selector of main container
 * @param title html selector of title 
 */
function LogoMainAnimation(textMaskClass: string, 
                            titleBoxClass: string, 
                            subTitleBoxClass: string, 
                            callback: Function,
                            data: any) 
{
    // times
    const initDelay = 1.2,
    initSecondDelay = initDelay + 0.25,
    titleInDuration = .6,
    subTitleInDuration = titleInDuration + .1,
    maskDuration = 2,
    titleOutDuration = {
    "short": .6,
    "long": 1
    },
    subTitleOutDuration = {
    "short": .6,
    "long": 1
    };



    TweenMax.set(textMaskClass, {scaleX:0, transformOrgin: 'left center'});
    tl = new TimelineMax({onComplete:callback.bind(data)});

    tl.from(titleBoxClass,titleInDuration, {ease: Power3.easeInOut,  opacity: 0}, initDelay); 
    tl.from(titleBoxClass,titleInDuration, {ease: Power3.easeInOut, rotation: 4,  y: 40, scaleY:1.4}, initDelay); // both start at time: 1, for smooth animation

    tl.from(subTitleBoxClass,subTitleInDuration, {ease: Power3.easeInOut, rotation: 4, opacity: 0}, initSecondDelay); 
    tl.from(subTitleBoxClass,subTitleInDuration, {ease: Power3.easeInOut, y: 20, scaleY:1.4}, initSecondDelay); // both start 0.25 s later, to add follow effect

    // This is the sugar. We animate the hidden mask to achive text filling effect. CustomEase extra pluging is used
    tl.to(textMaskClass, maskDuration, { ease: CustomEase.create("custom", `M0,0 C0.212,0 0.257,0.014 0.336,0.09 0.412,0.164 0.436,0.356 0.478,0.504 0.527,0.68 0.584,0.816 0.644,0.882 0.716,0.961 0.734,1 1,1`), scaleX:1}); // for better visualitation look at GreenSock Ease Visualizer

    // Add some timeline tagsinitSecondDelay
    tl.add("startFirstOutAnimation", initDelay + titleInDuration + subTitleInDuration + maskDuration + .3); //  An .3 extra delay (TODO: Rethink and refact)
    tl.add("startSecondOutAnimation", initDelay + titleInDuration + subTitleInDuration + maskDuration + .3); // An .3 extra delay (TODO: Rethink and refact)

    tl.to(titleBoxClass,titleOutDuration.short, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "startFirstOutAnimation");
    tl.to(titleBoxClass,titleOutDuration.long, {ease: Power3.easeInOut, y: -100 }, "startFirstOutAnimation");

    tl.to(subTitleBoxClass,subTitleOutDuration.short, {ease: Power3.easeInOut, rotation: -3, opacity: 0, scaleY:1.1}, "startSecondOutAnimation");
    tl.to(subTitleBoxClass,subTitleOutDuration.long, {ease: Power3.easeInOut, y: -100 }, "startSecondOutAnimation");
    
}

export default LogoMainAnimation;