document.getElementsByTagName("button")[1].onclick = function onclick(event) { answer_2() }
document.getElementsByTagName("button")[2].onclick = function onclick(event) { answer_3() }
document.getElementsByTagName("button")[3].onclick = function onclick(event) { answer_4() }

$('div').children('a').click( function() {$(this).text("Answer5")} )
$('div').children('.item').click( function() {$(this).attr('style','font-size : 3em')} )
$('div').children('div.demo').dblclick( function() {$(this).attr('style','color : blue')} )

function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}
function answer_2() {
  document.getElementById("q2-answer").innerHTML = "<ul><li>Javascript can	add	or	remove	existing	elements	and	attributes</li><li>Javascript can	react	to	events	happening	in	a	page	(ex.	Button	click)</li></ul>";
}
function answer_3() {
  document.getElementsByClassName("q34-answer")[0].innerHTML = "<ul><li>Parent	node : A	node	directly	above	a	node</li><li>Child	nodes : Nodes	one	level	directly	below</li><li>Sibling	nodes : Nodes	at	the	same	level	(same	parent	node)</li><li>Descendant	nodes : A	set	of	nodes	any	number	of	levels	below	another	node</li><li>Ancestor	nodes : A	set	of	nodes	above	a	node	in	a	tree</li></ul>";
}
function answer_4() {
  document.getElementsByClassName("q34-answer")[1].innerHTML = "<ul><li>document.getElementById() : Returns	an	element	with	a	given	ID_NAME</li><li>document.getElementsByClassName() : Get	a	list	of	elements	based	on	the	class	name</li><li>document.getElementsByName() : Get	a	list	of	elements	based	on	the	name</li><li>document.getElementsByTagName() : Get	a	list	of	elements	with	the	input	tag	name</li><li>only document.getElementById() return one element and others return many element</li></ul>";
}


