document.oncontextmenu = function() {
    return false;
}
var currentScore1;
var currentScore2;
var currentSet1;
var currentSet2;

function increaseScore1() {
    currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    currentScore1++;
    document.getElementById("score1").innerHTML = currentScore1;
}
function decreaseScore1() {
    currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    currentScore1--;
    document.getElementById("score1").innerHTML = currentScore1;
}
function increaseScore2() {
    currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    currentScore2++;
    document.getElementById("score2").innerHTML = currentScore2;
}
function decreaseScore2() {
    currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    currentScore2--;
    document.getElementById("score2").innerHTML = currentScore2;
}
function increaseSet1() {
    currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    currentSet1++;
    document.getElementById("set1").innerHTML = currentSet1;
}
function decreaseSet1() {
    currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    currentSet1--;
    document.getElementById("set1").innerHTML = currentSet1;
}
function increaseSet2() {
    currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    currentSet2++;
    document.getElementById("set2").innerHTML = currentSet2;
}
function decreaseSet2() {
    currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    currentSet2--;
    document.getElementById("set2").innerHTML = currentSet2;
}