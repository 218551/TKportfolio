<?php

function pageSettings() {
    echo '<!DOCTYPE HTML>
             <html lang="pl">
          <head>
             <meta charset="utf-8" />
             <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
             <title>Tomasz Kubat Portfolio</title>
             <link rel="shortcut icon" type="image/x-icon" href="images/fsico.png" />
             <link rel="stylesheet" href="style.css" type="text/css" />
             <link href="css/fontello.css" rel="stylesheet" type="text/css" />
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