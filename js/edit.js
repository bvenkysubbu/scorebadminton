document.oncontextmenu = function () {
    return false;
}
var currentScore1 = 0;
var currentScore2 = 0;
var currentSet1 = 0;
var currentSet2 = 0;
var person1 = "Player 1";
var person2 = "Player 2";
var uidFromMyJson = '';
postToMyJson();

function resetScores() {
    currentScore1 = 0;
    currentScore2 = 0;
    currentSet1 = 0;
    currentSet2 = 0;
    document.getElementById("score1").innerHTML = currentScore1;
    document.getElementById("score2").innerHTML = currentScore2;
    document.getElementById("set1").innerHTML = currentSet1;
    document.getElementById("set2").innerHTML = currentSet2;
    postToMyJson();
}

function increaseScore1() {
    currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    currentScore1++;
    document.getElementById("score1").innerHTML = currentScore1;
    postToMyJson();
}
function decreaseScore1() {
    currentScore1 = parseInt(document.getElementById("score1").innerHTML);
    currentScore1--;
    document.getElementById("score1").innerHTML = currentScore1;
    postToMyJson();
}
function increaseScore2() {
    currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    currentScore2++;
    document.getElementById("score2").innerHTML = currentScore2;
    postToMyJson();
}
function decreaseScore2() {
    currentScore2 = parseInt(document.getElementById("score2").innerHTML);
    currentScore2--;
    document.getElementById("score2").innerHTML = currentScore2;
    postToMyJson();
}
function increaseSet1() {
    currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    currentSet1++;
    currentScore1 = 0;
    currentScore2 = 0;
    document.getElementById("set1").innerHTML = currentSet1;
    document.getElementById("score1").innerHTML = currentScore1;
    document.getElementById("score2").innerHTML = currentScore2;
    postToMyJson();
}
function decreaseSet1() {
    currentSet1 = parseInt(document.getElementById("set1").innerHTML);
    currentSet1--;
    document.getElementById("set1").innerHTML = currentSet1;
    postToMyJson();
}
function increaseSet2() {
    currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    currentSet2++;
    currentScore1 = 0;
    currentScore2 = 0;
    document.getElementById("set2").innerHTML = currentSet2;
    document.getElementById("score1").innerHTML = currentScore1;
    document.getElementById("score2").innerHTML = currentScore2;
    postToMyJson();
}
function decreaseSet2() {
    currentSet2 = parseInt(document.getElementById("set2").innerHTML);
    currentSet2--;
    document.getElementById("set2").innerHTML = currentSet2;
    postToMyJson();
}
$(document).ready(function () {
    $("#person1").on("DOMSubtreeModified", function () {
        person1 = document.getElementById("person1").innerHTML;
        postToMyJson();
    });
    $("#person2").on("DOMSubtreeModified", function () {
        person2 = document.getElementById("person2").innerHTML;
        postToMyJson();
    });
});
function postToMyJson() {
    if (uidFromMyJson != '') {
        // Update
        var obj = {
            "person1": person1,
            "person2": person2,
            "score1": currentScore1,
            "score2": currentScore2,
            "set1": currentSet1,
            "set2": currentSet2
        };
        var data = JSON.stringify(obj);
        $.ajax({
            url: "https://api.myjson.com/bins/" + uidFromMyJson,
            type: "PUT",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                // Should I do something here?
                updateShareURL();
            }
        });

    } else {
        // Create new My Json post and update the uidFromMyJson
        var obj = {
            "person1": person1,
            "person2": person2,
            "score1": currentScore1,
            "score2": currentScore2,
            "set1": currentSet1,
            "set2": currentSet2
        };
        var data = JSON.stringify(obj);
        var unique_id = 'scorebadminton_12345';
        $.ajax({
            url: "https://jsonbox.io/" + unique_id,
            type: "POST",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                var json = JSON.stringify(data);
                var jsonObj = JSON.parse(json);
                // uidFromMyJson = jsonObj.uri.substr(28);
                console.log(json);
                // updateShareURL();
            }
        });
    }
}

function updateShareURL() {
    document.getElementById("shareurl").href = "https://scorebaddy.drumstic.com/view.html?i=" + uidFromMyJson
}