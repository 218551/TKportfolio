$(document).ready(animationStartShow);

$(document).ready(function () {

    $('#startTab').click(function () {
        if(!($('#contentStart').is(':visible'))) {
            animationAboutHide();
            animationStartShow();
        }
    })

    $('#aboutTab').click(function () {
        if(!($('#contentAbout').is(':visible'))) {
            animationStartHide();
            animationAboutShow();
        }
    })

});



function animationStartShow(){
    $('#contentStart').show();
    $('#moustache1').show(1000).animate({"top":"-=35px"},500).animate({"left":"-=210px"},500);
    $('#moustache2').show(1000).animate({"top":"+=35px"},500).animate({"left":"+=210px"},500);
    $('#myphoto').fadeTo(1000,1)

    setTimeout(function(){
        $('#welcome1').fadeTo(1000, 1);
    }, 2000);

    setTimeout(function(){
        $('#welcome2').fadeTo(1000, 1);
        $('#welcome3').fadeTo(1000, 1);
    }, 3000);
}

function animationStartHide(){
    $('#contentStart').hide(1000);
    $('#moustache1').animate({"top":"+=35px"},500).animate({"left":"+=210px"},500);
    $('#moustache2').animate({"top":"-=35px"},500).animate({"left":"-=210px"},500);
    $('#moustache1').hide(1000)
    $('#moustache2').hide(1000)
    $('#myphoto').fadeTo(1000,0)

    setTimeout(function(){
        $('#welcome1').fadeTo(1000, 0);
    }, 0);

    setTimeout(function(){
        $('#welcome2').fadeTo(1000, 0);
        $('#welcome3').fadeTo(1000, 0);
    }, 0);
}

function animationAboutShow(){
    $('#contentAbout').show();

    setTimeout(function(){
        $('#contentAbout').fadeTo(1000,1);
    }, 1000);
}

function animationAboutHide(){
    $('#contentAbout').hide(1000);
    $('#contentAbout').fadeTo(1000,0);
}