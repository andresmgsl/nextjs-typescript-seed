
declare var TweenMax: any;
declare var TimelineMax: any;
declare var CustomEase: any;
declare var Power2: any;


function setInitialState(textMaskClass: string, text: string) {
    TweenMax.set(textMaskClass, {scaleY:0, transformOrigin:'center bottom'});
    TweenMax.set(text, {transformOrigin:'center bottom'});
    let tl = new TimelineMax({paused: true});
    tl.to(textMaskClass, .6, { ease: CustomEase.create('custom', `M0,0 C0.212,0 0.257,0.014 0.336,0.09 0.412,0.164 0.436,0.356 0.478,0.504 0.527,0.68 0.584,0.816 0.644,0.882 0.716,0.961 0.734,1 1,1`), scaleY:1},0); // for better visualitation look at GreenSock Ease Visualizer
    tl.to(text, .6, { ease: Power2.easeInOut, scaleY:1.09},0);
    return tl;
}

/**
 * Function to animate fill home text
 * 
 * @param textMaskClass html selector of fill maxk
 */
function homeTitlesEnterAnimation(tl: any) {
    tl.play();
}

/**
 * Function to animate fill home text
 * 
 * @param textMaskClass html selector of fill maxk
 */
function homeTitlesOutAnimation(tl: any) {
    tl.reverse();
}




export {setInitialState, homeTitlesEnterAnimation, homeTitlesOutAnimation};