document.oncontextmenu = function() {
    return false;
}
function increaseScore1() {
    var currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    document.getElementById("score1").innerHTML = currentScore1 + 1;
}
function decreaseScore1() {
    var currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    document.getElementById("score1").innerHTML = currentScore1 - 1;
}
function increaseScore2() {
    var currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    document.getElementById("score2").innerHTML = currentScore2 + 1;
}
function decreaseScore2() {
    var currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    document.getElementById("score2").innerHTML = currentScore2 - 1;
}
function increaseSet1() {
    var currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    document.getElementById("set1").innerHTML = currentSet1 + 1;
}
function decreaseSet1() {
    var currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    document.getElementById("set1").innerHTML = currentSet1 - 1;
}
function increaseSet2() {
    var currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    document.getElementById("set2").innerHTML = currentSet2 + 1;
}
function decreaseSet2() {
    var currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    document.getElementById("set2").innerHTML = currentSet2 - 1;
}