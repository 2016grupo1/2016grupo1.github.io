function farea(){
	document.getElementById("darea").innerHTML = "";	
	
	var b = document.getElementById("base").value;
	var b = Number(b);
	
	var a = document.getElementById("altura").value;
	var a = Number(a);
		
	if(b <= 0 || a<=0){
		window.alert("N�O EXISTE TRI�NGULO COM BASE OU ALTURA MENOR OU IGUAL A ZERO. DIGITE UM VALOR V�LIDO!");	
	}
	else{	
	var area = (b*a)/2;
	document.getElementById("darea").innerHTML = area;
	}
}
