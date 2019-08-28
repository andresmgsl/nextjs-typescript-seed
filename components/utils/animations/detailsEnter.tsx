declare var TimelineMax: any;
declare var Power3: any;

/**
 * Function to animate enter of and state 
 * 
 * @param main html selector of main container
 * 
 * @param layout html selector of container layout
 * @param container  html selector of layout container
 */
function detailEnterAnimation(main: string, layout: string, container: string) {

    let tl = new TimelineMax({});
   
    
    tl.from(main,0.5, {ease: Power3.easeInOut,  opacity:0, backgroundColor: 'black'}, 0); // TODO: move color to config
    tl.from(layout, 1, {ease: Power3.easeInOut, opacity:0});
    tl.to(container,0.1, {ease: Power3.easeInOut, overflow:'auto'});
}

export default detailEnterAnimation;