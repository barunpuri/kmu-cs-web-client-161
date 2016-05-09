console.log("hello homework3");

function stringToInt(input){
	return parseInt(input);
}

function maskNumber(input){
    var maskNumber='';
    for(var i=0; i<input.length-4; ++i)
	maskNumber = maskNumber.concat(input[i]);
    for(var i=input.length-4; i<input.length; ++i)
	maskNumber = maskNumber.concat('*');

	return maskNumber;
}

function getAverage(input_array){
    var avg=0;
    for(var i=0; i<input_array.length; ++i)
        avg = avg + input_array[i];
	return avg/input_array.length;
}

function isMultipleSeven(input){
    if( input % 7 == 0 )
        return true;
    else   
        return false;
    
}

function operation(type, a, b){
    switch(type){
        case "add":
            return a+b;
        case "substract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
        
    }
    console.log("Not Supported");
    return ;
}


function triangleMtn(input) {
	for(var i=1; i<=input; ++i)
	{
        var res="";
		for(var j=0; j<i; ++j)
			res = res + "*";
	console.log(res);		
	}	
}
