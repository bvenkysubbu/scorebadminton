var uidFromMyJson = "t4oyi";
getFromMyJSON();
function getFromMyJSON() {
    $.get("https://api.myjson.com/bins/" + uidFromMyJson, function(data, textStatus, jqXHR) {
        var json = JSON.stringify(data);
        $("#person1").val(json);
});
}