function check_pw(id, pw, pw_conf, div1, div2) {
    if ($("#id").val().length == 0)
        alert("ID 를 확인해 주세요");
    else if ((pw.value.length == 0) || (pw.value != pw_conf.value))
        alert("비밀번호를 확인해 주세요");
    else {
        hide_div(div1, div2);
    }
}

function hide_div(div1, div2) {
    div1.style.display = "none";
    div2.style.display = "block";
}

function go_prev_page() {
    window.location.href = "login.html";
}

$('#titleimg').click(go_prev_page);

$('#last').click(function () {
    var pair = new Object;
    pair.id = $('#id').val();
    pair.pw = $('#pw').val();
    $('#id_out').text(pair.id);
    $('#pw_out').text(pair.pw);

    var inform = JSON.stringify(pair);
    //id_pw.txt 파일에 저장  

});