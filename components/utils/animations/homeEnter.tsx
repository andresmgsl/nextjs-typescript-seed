declare var TimelineMax: any;
declare var Power4: any;

/**
 * Function to animate enter of home page
 * 
 * @param main html selector of main container
 * @param title html selector of title 
 */
function homeEnterAnimation(main: string, title: string) {

    let tl = new TimelineMax({});
   
    tl.from(main,.7, {ease: Power4.easeInOut, opacity:0}, 0);
    tl.from(title, 1, {ease: Power4.easeInOut, rotation: 4,  y: 100, scaleY:1.2, opacity: 0});
    tl.to(main,.1, {ease: Power4.easeInOut, overflow:'auto'});     
    
}

export default homeEnterAnimation;