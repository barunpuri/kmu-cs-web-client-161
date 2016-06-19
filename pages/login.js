$('#find').next().hide();

var pair = new Object();
jQuery.get('id_pw.txt', function (data) {
    for (var i = 0; i < data.split('\n').length; ++i) {
        data_pair = JSON.parse(data.split('\n')[i]);
        pair[data_pair.id] = data_pair.pw;
    }
});

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