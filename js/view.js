var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getFromMyJSON() {
    $.get("https://api.myjson.com/bins/" + uidFromMyJson, function (data, textStatus, jqXHR) {
        var json = JSON.stringify(data);
        document.getElementById("person1").innerHTML = data.person1;
        document.getElementById("person2").innerHTML = data.person2;
        document.getElementById("score1").innerHTML = data.score1;
        document.getElementById("score2").innerHTML = data.score2;
        document.getElementById("set1").innerHTML = data.set1;
        document.getElementById("set2").innerHTML = data.set2;
    });
}

var uidFromMyJson = getUrlParameter('i');
getFromMyJSON();
window.setInterval(function () {
    getFromMyJSON();
}, 30000);
