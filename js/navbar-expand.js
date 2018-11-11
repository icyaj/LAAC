function checkScroll() {
    if($(window).scrollTop() <= 20 && !expanded) {
        $(".navbar").css("padding", "1rem 1rem");
        expanded = true;
    }
    else if($(window).scrollTop() > 30 && expanded) {
        $(".navbar").css("padding", ".5rem 1rem");
        expanded = false;
    }
    setTimeout(checkScroll, 10);
}
var expanded = true;
checkScroll();

