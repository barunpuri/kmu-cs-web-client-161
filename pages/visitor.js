function check_pw(pw, pw_conf, div1, div2) {
    if ((pw.value.length == 0) || (pw.value != pw_conf.value))
        alert("비밀번호를 확인해 주세요")
    else
        hide_div(div1, div2);

}

function hide_div(div1, div2) {
    //alert("shit");
    //alert(div1.style.display);
    div1.style.display = "none";
    div2.style.display = "block";
    //alert(div1.style.display);
}

function go_prev_page() {
    window.location.href = "../index.html";
}