$(document).ready(animationStartShow);

$(document).ready(function () {

    $('#startTab').click(function () {
        if(!($('#contentStart').is(':visible')))
            setTimeout(animationStartShow,1000);
        if($('#contentAbout').is(':visible'))
            animationAboutHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
    });

    $('#aboutTab').click(function () {
        if(!($('#contentAbout').is(':visible')))
            setTimeout(animationAboutShow,1000);
        if($('#contentStart').is(':visible'))
            animationStartHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
    });

    $('#careerTab').click(function () {
        if(!($('#contentCareer').is(':visible')))
            setTimeout(animationCareerShow,1000);
        if(($('#contentAbout').is(':visible')))
            animationAboutHide();
        if($('#contentStart').is(':visible'))
            animationStartHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
    });

    $('#skilsTab').click(function () {
        if(!($('#contentSkils').is(':visible')))
            setTimeout(animationSkilsShow,1000);
        if(($('#contentAbout').is(':visible')))
            animationAboutHide();
        if($('#contentStart').is(':visible'))
            animationStartHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
    });

});

function animationStartShow(){
    $('#contentStart').show();
    $('#moustache1').show(500).animate({"top":"-=5%"},500).animate({"left":"-=15%"},500);
    $('#moustache2').show(500).animate({"top":"+=5%"},500).animate({"left":"+=15%"},500);

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

    setTimeout(function () {
        $('#quote').fadeTo(500,1);
    }, 3000);
}

function animationStartHide(){
    setTimeout(function () {
        $('#contentStart').hide(200);
    },800);

    $('#moustache1').animate({"top":"+=5%"},400).animate({"left":"+=15%"},400);
    $('#moustache2').animate({"top":"-=5%"},400).animate({"left":"-=15%"},400);
    $('#welcome1').fadeTo(400, 0);
    $('#welcome2').fadeTo(400, 0);
    $('#welcome3').fadeTo(400, 0);
    $('#myphoto').fadeTo(1000,0);
    $('#quote').fadeTo(1000,0);
    setTimeout(function () {
        $('#moustache1').hide(200);
        $('#moustache2').hide(200);
    }, 800);

}

function animationAboutShow(){
    $('#contentAbout').show();
    $('#contentAbout').fadeTo(0,1);
    setTimeout(function () {
        $('#aboutLeft1').fadeTo(250,1);
    },250);
    setTimeout(function () {
        $('#aboutLeft2').fadeTo(250,1);
    },500);
    setTimeout(function () {
        $('#aboutLeft3').fadeTo(250,1);
    },750);
    setTimeout(function () {
        $('#aboutRight1').fadeTo(250,1);
    },1000);
    setTimeout(function () {
        $('#aboutRight2').fadeTo(250,1);
    },1250);
    setTimeout(function () {
        $('#aboutRight3').fadeTo(250,1);
    },1500);
    setTimeout(function () {
        $('#aboutRight4').fadeTo(250,1);
    },1750);
}

function animationAboutHide(){
    setTimeout(function () {
        $('#contentAbout').hide();
    },500);
    $('#contentAbout').fadeTo(500,0);
    $('#aboutLeft1').fadeTo(500,0);
    $('#aboutLeft2').fadeTo(500,0);
    $('#aboutLeft3').fadeTo(500,0);
    $('#aboutRight1').fadeTo(500,0);
    $('#aboutRight2').fadeTo(500,0);
    $('#aboutRight3').fadeTo(500,0);
    $('#aboutRight4').fadeTo(500,0);
}

function animationCareerShow() {
    $('#contentCareer').show();
    $('#contentCareer').fadeTo(0, 1);
    setTimeout(function () {
        $('#careerRight1').fadeTo(250, 1);
    }, 250);
    setTimeout(function () {
        $('#careerRight2').fadeTo(250, 1);
    }, 500);
    setTimeout(function () {
        $('#careerRight3').fadeTo(250, 1);
    }, 750);
    setTimeout(function () {
        $('#careerPic').fadeTo(250, 1);
    }, 1000);
}

function animationCareerHide() {
    setTimeout(function () {
        $('#contentCareer').hide();
    }, 500);
    $('#contentCareer').fadeTo(500, 0);
    $('#careerRight1').fadeTo(500, 0);
    $('#careerRight2').fadeTo(500, 0);
    $('#careerRight3').fadeTo(500, 0);
    $('#careerPic').fadeTo(500, 0);
}

function animationSkilsShow() {
    $('#contentSkils').show();
    $('#contentSkils').fadeTo(0, 1);
    setTimeout(function () {
        $('#skilsLeft1').fadeTo(250, 1);
    }, 250);
    setTimeout(function () {
        $('#skilsLeft2').fadeTo(250, 1);
    }, 500);
    setTimeout(function () {
        $('#skilsLeft3').fadeTo(250, 1);
    }, 750);
    setTimeout(function () {
        $('#skilsRight1').fadeTo(250, 1);
    }, 1500);
    setTimeout(function () {
        $('#skilsRight2').fadeTo(250, 1);
    }, 1250);
    setTimeout(function () {
        $('#skilsRight3').fadeTo(250, 1);
    }, 1000);
}

function animationSkilsHide() {
    setTimeout(function () {
        $('#contentSkils').hide();
    }, 500);
    $('#contentSkils').fadeTo(500, 0);
    $('#skilsLeft1').fadeTo(500, 0);
    $('#skilsLeft2').fadeTo(500, 0);
    $('#skilsLeft3').fadeTo(500, 0);
    $('#skilsRight1').fadeTo(500, 0);
    $('#skilsRight2').fadeTo(500, 0);
    $('#skilsRight3').fadeTo(500, 0);
}