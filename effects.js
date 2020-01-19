var bannerNo;
var bannerVis;

$(document).ready(function () {

   bannerNo = ($('.element').length);
   bannerVis = 1;

    hideProjects();

    animationStartShow();

    $('#rightArrow').click(function () {
        nextProject();
    });

    $('#leftArrow').click(function () {
        prevProject();
    });

    $('#startTab').click(function () {
        if(!($('#contentStart').is(':visible')))
            setTimeout(animationStartShow,1000);
        if($('#contentAbout').is(':visible'))
            animationAboutHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
        if($('#contentProjects').is(':visible'))
            animationProjectsHide();
        if($('#contentContact').is(':visible'))
            animationContactHide();
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
        if($('#contentProjects').is(':visible'))
            animationProjectsHide();
        if($('#contentContact').is(':visible'))
            animationContactHide();
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
        if($('#contentProjects').is(':visible'))
            animationProjectsHide();
        if($('#contentContact').is(':visible'))
            animationContactHide();
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
        if($('#contentProjects').is(':visible'))
            animationProjectsHide();
        if($('#contentContact').is(':visible'))
            animationContactHide();
    });

    $('#projectsTab').click(function () {
        if(!($('#contentProjects').is(':visible')))
            setTimeout(animationProjectsShow,1000);
        if(($('#contentAbout').is(':visible')))
            animationAboutHide();
        if($('#contentStart').is(':visible'))
            animationStartHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
        if($('#contentContact').is(':visible'))
            animationContactHide();
    });

    $('#contactTab').click(function () {
        if(!($('#contentContact').is(':visible')))
            setTimeout(animationContactShow,1000);
        if(($('#contentAbout').is(':visible')))
            animationAboutHide();
        if($('#contentStart').is(':visible'))
            animationStartHide();
        if($('#contentCareer').is(':visible'))
            animationCareerHide();
        if($('#contentSkils').is(':visible'))
            animationSkilsHide();
        if($('#contentProjects').is(':visible'))
            animationProjectsHide();
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

function animationProjectsShow() {
    $('#contentProjects').show();
    $('#contentProjects').fadeTo(0, 1);
    setTimeout(function () {
        $('#projectsTitleBar').fadeTo(250, 1);
    }, 250);
    setTimeout(function () {
        $('#projectsDescription').fadeTo(250, 1);
    }, 500);
    setTimeout(function () {
        $('#projectsSlider').fadeTo(250, 1);
    }, 750);
}

function animationProjectsHide() {
    setTimeout(function () {
        $('#contentProjects').hide();
    }, 500);
    $('#contentProjects').fadeTo(500, 0);
    $('#projectsTitleBar').fadeTo(500, 0);
    $('#projectsDescription').fadeTo(500, 0);
    $('#projectsSlider').fadeTo(500, 0);
}

function animationContactShow() {
    $('#contentContact').show();
    $('#contentContact').fadeTo(0, 1);
    setTimeout(function () {
        $('#contactName').fadeTo(250, 1);
    }, 250);
    setTimeout(function () {
        $('#contactAdress').fadeTo(250, 1);
    }, 500);
    setTimeout(function () {
        $('#contactPhone').fadeTo(250, 1);
    }, 750);
    setTimeout(function () {
        $('#contactMail').fadeTo(250, 1);
    }, 1000);
    setTimeout(function () {
        $('#contactFacebook').fadeTo(250, 1);
    }, 1250);
    setTimeout(function () {
        $('#contactGithub').fadeTo(250, 1);
    }, 1500);
    setTimeout(function () {
        $('#contactCv').fadeTo(250, 1);
    }, 1750);
}

function animationContactHide() {
    setTimeout(function () {
        $('#contentContact').hide();
    }, 500);
    $('#contactName').fadeTo(500, 0);
    $('#contactAdress').fadeTo(500, 0);
    $('#contactPhone').fadeTo(500, 0);
    $('#contactMail').fadeTo(500, 0);
    $('#contactFacebook').fadeTo(500, 0);
    $('#contactGithub').fadeTo(500, 0);
    $('#contactCv').fadeTo(500, 0);
}

function hideProjects(){
    var i;
    for(i=2;i<=bannerNo;i++){
        var currBanner = "#banner".concat(i);
        $(currBanner).fadeTo(0,0);
        var currDesc = "#desc".concat(i);
        $(currDesc).fadeTo(0,0);
        var currTitle = "#title".concat(i);
        $(currTitle).fadeTo(0,0);
    }
}

function nextProject() {
    var currBanner = "#banner".concat(bannerVis);
    var currDesc = "#desc".concat(bannerVis);
    var currTitle = "#title".concat(bannerVis);
    $(currBanner).fadeTo(500, 0);
    $(currDesc).fadeTo(500, 0);
    $(currTitle).fadeTo(500, 0);
    if(bannerVis<bannerNo) {
        var nextBanner = "#banner".concat(bannerVis + 1);
        var nextDesc = "#desc".concat(bannerVis + 1);
        var nextTitle = "#title".concat(bannerVis + 1);
        bannerVis++;
    }else{
        var nextBanner = "#banner".concat("1");
        var nextDesc = "#desc".concat("1");
        var nextTitle = "#title".concat("1");
        bannerVis = 1;
    }
    $(nextBanner).fadeTo(500, 1);
    $(nextDesc).fadeTo(500, 1);
    $(nextTitle).fadeTo(500, 1);
}

function prevProject() {
    var currBanner = "#banner".concat(bannerVis);
    var currDesc = "#desc".concat(bannerVis);
    var currTitle = "#title".concat(bannerVis);
    $(currBanner).fadeTo(500, 0);
    $(currDesc).fadeTo(500, 0);
    $(currTitle).fadeTo(500, 0);
    if(bannerVis>1) {
        var nextBanner = "#banner".concat(bannerVis - 1);
        var nextDesc = "#desc".concat(bannerVis - 1);
        var nextTitle = "#title".concat(bannerVis - 1);
        bannerVis--;
    }else{
        var nextBanner = "#banner".concat(bannerNo);
        var nextDesc = "#desc".concat(bannerNo);
        var nextTitle = "#title".concat(bannerNo);
        bannerVis = bannerNo;
    }
    $(nextBanner).fadeTo(500, 1);
    $(nextDesc).fadeTo(500, 1);
    $(nextTitle).fadeTo(500, 1);
}