console.log(window);
console.log(document);
console.log(navigator);

let $p = document.querySelector("p");
console.log($p);

console.log($p.style);
$p.style.fontSize = "24px"
$p.style.color = "rgb(255, 75, 145)"
$p.style.backgroundColor = "rgb(255, 205, 75)";
$p.style.padding = "2rem";

let $h1 = document.querySelector("h1");
console.log($h1);

console.log($h1.style);
$h1.style.color = "rgb(8, 2, 163)";
$h1.style.backgroundColor = "rgb(255, 118, 118)";
$h1.style.fontSize = "48px"

let $img = document.querySelector("img");
console.log($img);

console.log($img.style);
$img.style.borderRadius = "30%"
$img.style.height = "1800px";
$img.style.width = "1800px";

let $ol = document.querySelector("ol");
console.log($ol);

console.log($ol.style);
$ol.style.color = "rgb(8, 2, 163)";
$ol.style.backgroundColor = "rgb(255, 205, 75)";
$ol.style.fontSize = "24px"

let $ul = document.querySelector("ul");
console.log($ul);

console.log($ul.style);
$ul.style.color = "rgb(8, 2, 163)";
$ul.style.backgroundColor = "rgb(255, 205, 75)";
$ul.style.fontSize = "24px"

let $h2 = document.querySelector("h2");
console.log($h2);

console.log($h2.style);
$h2.style.color = "rgb(8, 2, 163)";
$h2.style.backgroundColor = "rgb(255, 118, 118)";
$h2.style.fontSize = "36px"

function darkmode()
{
    document.body.style.backgroundColor = "rgb(32, 32, 32)";
}

const btnPush = document.querySelector("button");
btnPush.addEventListener("click", darkmode)

function lightmode()
{
    document.body.style.backgroundColor = "white";
}

const btnPush2 = document.getElementById("btnPush2");
btnPush2.addEventListener("click", lightmode);

function deactivateDrk()
{
    $ul.style.backgroundColor = "rgb(32, 32, 32)";
    $ol.style.backgroundColor = "rgb(32, 32, 32)";
    $h1.style.backgroundColor = "rgb(32, 32, 32)";
    $h2.style.backgroundColor = "rgb(32, 32, 32)";
    $p.style.backgroundColor = "rgb(32, 32, 32";
}

//const RedPage = document.getElementById("redPage");
//RedPage.addEventListener("click", deactivateDrk);
const redPage= document.getElementsByClassName("redPage");
Array.prototype.forEach.call(redPage, function(el) {
    // Do stuff here
    el.addEventListener("click", deactivateDrk);
});

function deactivateLgt()
{
    $ul.style.backgroundColor = "white";
    $ol.style.backgroundColor = "white";
    $h1.style.backgroundColor = "white";
    $h2.style.backgroundColor = "white";
    $p.style.backgroundColor = "white";
}

//const WhitePage = document.querySelector(".whitePage");
//WhitePage.addEventListener("click", deactivateLgt);

const whitePage = document.getElementsByClassName("WhitePage");
Array.prototype.forEach.call(whitePage, function(el) {
    // Do stuff here
    el.addEventListener("click", deactivateLgt);
});