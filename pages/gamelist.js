$('#boxhead').parent().next().hide();
$('#ageofwar').parent().next().hide();
$('#metalslug3').parent().next().hide();
$('#metalslugx').parent().next().hide();
$('#dadnme').parent().next().hide();
$('#flashman').parent().next().hide();
$('#mutantfightingcup').parent().next().hide();

$('#ageofwar').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#ageofwar').parent().next().children('img').click(function () {
    window.open("games/ageofwar.html");
});

$('#boxhead').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#boxhead').parent().next().children('img').click(function () {
    window.open("games/boxhead2.html");
});

$('#metalslug3').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#metalslug3').parent().next().children('img').click(function () {
    window.open("http://www.neogeofun.com/game.php?id=434&server=33e2875e9355fee0130ac8488793725d0b59542ee1b65d3e95397dd760eef783");
});

$('#metalslugx').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#metalslugx').parent().next().children('img').click(function () {
    window.open("http://en.gameslol.net/metal-slug-x-957.html");
});

$('#dadnme').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#dadnme').parent().next().children('img').click(function () {
    window.open("games/dadnme.html");
});

$('#flashman').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#flashman').parent().next().children('img').click(function () {
    window.open("games/flashman.html");
});

$('#mutantfightingcup').click(function () {
    $(this).parent().next().toggle(1000);
});
$('#mutantfightingcup').parent().next().children('img').click(function () {
    window.open("games/mutant.html");
});