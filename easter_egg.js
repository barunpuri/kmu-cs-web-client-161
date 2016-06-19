var status = 0;

$('#easter_egg').fadeOut(0);


$('#infonav').click(function() {
    if( status == 0 || status == 2 || status == 3)
        status = parseInt(status) + 1;
    else 
        status = 0;
}) ;
$('#detailnav').click(function() {
    if( status == 1 || status == 4 )
        status = parseInt(status) + 1;
    else 
        status = 0;
}) ;
$('#topnav').click(function() {
    if( status == 5)
        $('#easter_egg').fadeIn(3000);
    else
        status = 0;
}) ;

$('#easter_egg').children().click(function() {
    for(var i=50; i>=0; --i)
        alert(i + "_easter_egg!!!!");
    for(var i=0; i<55; ++i)
        alert(i+"_i can't stop!!!!");
    while(true)
        alert("ha_ha_ha_you can't get out of here");
});