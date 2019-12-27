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
                    <li id="carrerTab">KARIERA</li>
                    <li id="skilsTab">UMIEJĘTNOŚCI</li>
                    <li id="projectsTab">PROJEKTY</li>
                    <li id="contactTab">KONTAKT</li>
                </ul>
            </div>
    ';
}

function generateContent(){
    echo '
            <div class="contentLeft">DIV LEFT</div>
            <div class="contentRight">DIV RIGHT</div>
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
        </div>
    ';
}

function generateContentAbout(){
    echo '
        <div id="contentAbout">
            <div id="leftAbout">
                <div class="contentLeft">
                    <div id="aboutLeft1">
                        ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    </div>
                    <div id="aboutLeft2">
                        ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    </div>
                    <div id="aboutLeft3">
                        ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                    </div>
                </div>
                <div class="contentRight">
                    ABOUT2 ABOUT2 ABOUT2 ABOUT2 ABOUT2 ABOUT2 ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
                </div>
            </div>
        </div>
    ';
}

