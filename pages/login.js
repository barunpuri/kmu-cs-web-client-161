$('#find').next().hide();

pair={barunpuri:"20153235", test:"test"};

$('#button').click(function () {
    var id = $('#identify').val();
    var pw = $('#password').val();

    if (pair[id] == pw) {
        window.location.href = "gamelist.html";
    } else {
        alert("wrong user data");
    }

});

$('#find').click(function () {
    $(this).next().empty();
    for (var i in pair) {
        var str = "<tr><td>";

        str = str + "id : " + i + "<br>pw : " + pair[i];

        str = str + "</td></tr>"
        $(this).next().append(str)
    }


    $(this).next().toggle();
})