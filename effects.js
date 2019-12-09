$(document).ready(animationStartShow);

$(document).ready(function () {

    $('#startTab').click(function () {
        if(!($('#contentStart').is(':visible')))
            setTimeout(animationStartShow,1000);
        if($('#contentAbout').is(':visible'))
            animationAboutHide();
    });

    $('#aboutTab').click(function () {
        if(!($('#contentAbout').is(':visible')))
            setTimeout(animationAboutShow,1000);
        if($('#contentStart').is(':visible'))
            animationStartHide();
    });

});



function animationStartShow(){
    $('#contentStart').show();
    $('#moustache1').show(500).animate({"top":"-=35px"},500).animate({"left":"-=210px"},500);
    $('#moustache2').show(500).animate({"top":"+=35px"},500).animate({"left":"+=210px"},500);

    setTimeout(function () {
        $('#myphoto').fadeTo(500,1);
    }, 1500);

    setTimeout(function(){
        $('#welcome1').fadeTo(500, 1);
    }, 1500);

    setTimeout(function(){
        $('#welcome2').fadeTo(500, 1);
        $('#welcome3').fadeTo(500, 1);
    }, 2500);
}

function animationStartHide(){
    setTimeout(function () {
        $('#contentStart').hide(200);
    },800);

    $('#moustache1').animate({"top":"+=35px"},400).animate({"left":"+=210px"},400);
    $('#moustache2').animate({"top":"-=35px"},400).animate({"left":"-=210px"},400);
    $('#welcome1').fadeTo(400, 0);
    $('#welcome2').fadeTo(400, 0);
    $('#welcome3').fadeTo(400, 0);
    $('#myphoto').fadeTo(1000,0);
    setTimeout(function () {
        $('#moustache1').hide(200);
        $('#moustache2').hide(200);
    }, 800);

}

function animationAboutShow(){
    $('#contentAbout').show();
    $('#contentAbout').fadeTo(500,1);
}

function animationAboutHide(){
    setTimeout(function () {
        $('#contentAbout').hide();
    },500);
    $('#contentAbout').fadeTo(500,0);
}