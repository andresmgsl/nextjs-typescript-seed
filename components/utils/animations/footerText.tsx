declare var TweenMax: any;
declare var TimelineMax: any;
declare var CustomEase: any;
declare var Power2: any;


function setInitialState(textMaskClass: string, text: string, backImage: string, smallText: string, callback: Function) {
    const insideImage = backImage + ' img';
    
    TweenMax.set(textMaskClass, {scaleY:0, transformOrigin:'center bottom'});
    TweenMax.set(text, {transformOrigin:'center bottom'});
    TweenMax.set(backImage, {transformOrigin:'center center'});
    TweenMax.set(insideImage, {transformOrigin:'center center'});
    
    let tl = new TimelineMax({paused: true, onComplete: callback});
    tl.to(textMaskClass, 1.6, { ease: CustomEase.create('custom', `M0,0 C0.212,0 0.257,0.014 0.336,0.09 0.412,0.164 0.436,0.356 0.478,0.504 0.527,0.68 0.584,0.816 0.644,0.882 0.716,0.961 0.734,1 1,1`), scaleY:1},0); // for better visualitation look at GreenSock Ease Visualizer
    tl.to(text, 1.6, { ease: Power2.easeInOut, scaleY:1.1},0);
    tl.to(backImage, 1.6, { ease: Power2.easeInOut, scale:0.9},0)
    tl.to(insideImage, 1.6, { ease: Power2.easeInOut, scale:1.2},0)

    // start .8 (-=.8) seconds later (hardcode 50% progress for now)
    tl.to(smallText,0.4, { ease: Power2.easeInOut, color: "black", y:-5},0.5);
    return tl;
}

/**
 * Function to animate fill home text
 * 
 * @param textMaskClass html selector of fill maxk
 */
function footerTextEnterAnimation(tl: any) {
    tl.play();
}

/**
 * Function to animate fill home text
 * 
 * @param textMaskClass html selector of fill maxk
 */
function footerTextOutAnimation(tl: any) {
    tl.reverse();
}




export { setInitialState, footerTextEnterAnimation, footerTextOutAnimation };