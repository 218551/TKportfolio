<?php

function pageSettings() {
    echo '<!DOCTYPE HTML>
             <html lang="pl">
          <head>
             <meta charset="utf-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
             <title>Tomasz Kubat Portfolio</title>
             <link rel="stylesheet" href="style.css" type="text/css" />
             <script src="jquery-3.4.1.min.js"></script>
          </head>';
}

function generateBar(){
    echo '
        <body>
            <script src="effects.js"></script>
            <div id="menubar">
                <ul id="menulist">
                    <li id="startTab"><a> START </a></li>
                    <li id="aboutTab">O MNIE</li>
                    <li id="careerTab">KARIERA</li>
                    <li id="skilsTab">UMIEJĘTNOŚCI</li>
                    <li id="projectsTab">PROJEKTY</li>
                    <li id="contactTab">KONTAKT</li>
                </ul>
            </div>
    ';
}

function generateFooter(){
    echo '
            <div id="footer">Tomasz Kubat Portfolio 2020 &reg</div>
        </body>
    ';
}

function generateContentStart(){
    echo '
        <div id="contentStart">
            <div id="moustache1"><b>{</b></div>
            <div id="welcome1"><b>CZEŚĆ,</b></div>
            <div id="welcome2">JESTEM</div>
            <div id="welcome3">TOMASZ KUBAT</div>
            <div id="moustache2"><b>}</b></div>
            <div id="myphoto"><img src ="img/myphoto.png"></div>
            <div id="quote">
                <div id="quotetxt"><p><span style="display:inline-block; width: 3vw;"></span><q id="qtxt    ">Zawsze pisz kod tak, jakby gość, który ma się nim zajmować był agresywnym psychopatą, który wie, gdzie mieszkasz</q></p></div>
                <cite id="sign">Martin Golding</cite>
            </div>
        </div>
    ';
}

function generateContentAbout(){
    echo '
        <div id="contentAbout">
            <div id="aboutLeft1"></div>
            <div id="aboutLeft2"></div>
            <div id="aboutLeft3"></div>
            <div id="aboutRight1"></div>   
            <div id="aboutRight2"></div> 
            <div id="aboutRight3"></div> 
            <div id="aboutRight4"></div>             
        </div>
    ';
}

function generateContentCareer(){
    echo '
        <div id="contentCareer">
            <div id="careerRight1"></div>
            <div id="careerRight2"></div>
            <div id="careerRight3"></div>
            <div id="careerPic"><img src="img/myphoto.png"/></div>         
        </div>
    ';
}

function generateContentSkils(){
    echo '
        <div id="contentSkils">
            <div id="skilsLeft1"></div>
            <div id="skilsLeft2"></div>
            <div id="skilsLeft3"></div>
           <div id="skilsRight1"></div>       
           <div id="skilsRight2"></div>       
           <div id="skilsRight3"></div>       
        </div>
    ';
}

function generateContentProjects(){
    echo '
        <div id="contentProjects">
            <div id="projectsTitleBar">
                <div id="projectsTitle">
                    <div id="title1" class="layerElement">111111</div>
                    <div id="title2" class="layerElement">22222</div>
                    <div id="title3" class="layerElement">33333</div> 
                </div>
            </div>
            <div id="projectsDescription">
                <div id="desc1" class="layerElement"> DESC1 DESC1 DESC1</div>
                <div id="desc2" class="layerElement"> DESC2 DESC2 DESC2</div>
                <div id="desc3" class="layerElement"> DESC3 DESC3 DESC3</div>
            </div>
            <div id="projectsSlider">   
                <div  id="slider">
                    <a id="rightArrow" class="control_next">></a>
                    <a id="leftArrow" class="control_prev"><</a>
                    <div id="bannerlist">
                        <article id="banner1" class="element"><img src="img/MyGuardianSlide.jpg" /></article>
                        <article id="banner2" class="element"><img src="img/MocnePlSlide.jpg" /></article>
                        <article id="banner3" class="element"><img src="img/IQnotepadSlide.jpg" /></article>
                    </div>
                </div>
		    </div>    
        </div>
    ';
}

function generateContentContact(){
    echo '
        <div id="contentContact">
            <div id="contactName"></div>
            <div id="contactAdress"></div>
            <div id="contactPhone"></div>
            <div id="contactMail"></div>
            <div id="contactFacebook"></div>
            <div id="contactGithub"></div>
            <div id="contactCv"></div>
        </div>
    ';
}
