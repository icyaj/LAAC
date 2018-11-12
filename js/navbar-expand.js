function checkScroll() {
    
    if($(window).scrollTop() <= 20 && !expanded) {      // if navbar needs to expand
        $(".navbar").css("padding", "1rem 1rem");       // expand navbar
        expanded = true;                                // and remember that it's expanded
    }

    else if($(window).scrollTop() > 30 && expanded) {   // if navbar needs to contract
        $(".navbar").css("padding", ".5rem 1rem");      // contract navbar
        expanded = false;                               // and remember that it's contracted
    }

    setTimeout(checkScroll, 10);                        // check again in 10ms
}
var expanded = true;    // initialise expanded
checkScroll();          // check for the first time
