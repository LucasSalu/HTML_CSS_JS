var jogador1 = "jogador1"
var jogador2 = "jogador2"
var campo = new Array("","","","","","","","","");
var vez = jogador1;
var bool = true;
var contador = 0

function marcaX(id){

    if(bool){

		if (document.getElementById(id).getElementsByClassName("campos")[0].getAttribute("src") == "Imagens/branco.png"){

			if(vez == "jogador1"){
				document.getElementById(id).getElementsByClassName("campos")[0].setAttribute("src", "Imagens/X.png ");
				vez = jogador2;
				campo[id.split("-")[1]] = "x";
				document.getElementById("teste").innerText = "vez do O"	
				contador=contador+1
				
			}else{
				
				document.getElementById(id).getElementsByClassName("campos")[0].setAttribute("src", "Imagens/O.png");
				vez = jogador1;		
				campo[id.split("-")[1]] = "O";
				document.getElementById("teste").innerText = "vez do X"	

				contador=contador+1	
		}
	}

	if((campo[0]==campo[1] && campo[2] == campo[1]) && campo[0] !== "" && campo[1] !== "" && campo[2] !== ""){
		document.getElementById("teste").innerText = campo[0] +"- É o Vencedor";
		bool = false;
		return 0;
	}
	if((campo[3]==campo[4] && campo[4] == campo[5]) && campo[3] !== "" && campo[4] !== "" && campo[5] !== ""){
		document.getElementById("teste").innerText = campo[5] +"- É o Vencedor";
		bool = false;
		return 0;
	}
	if((campo[6]==campo[7] && campo[7] == campo[8]) && campo[6] !== "" && campo[7] !== "" && campo[8] !== ""){
		document.getElementById("teste").innerText = campo[4] +"- É o Vencedor";
		bool = false;
		return 0;
	}
	if((campo[0]==campo[3] && campo[3] == campo[6]) && campo[0] !== "" && campo[3] !== "" && campo[6] !== ""){
		document.getElementById("teste").innerText = campo[3] +"- É o Vencedor";
		bool = false;
		return 0;
	}
	if((campo[1]==campo[4] && campo[4] == campo[7]) && campo[1] !== "" && campo[4] !== "" && campo[7] !== ""){
		document.getElementById("teste").innerText =  campo[4] +"- É o Vencedor";
		bool = false;
		return 0;
	}
	if((campo[2]==campo[5] && campo[5] == campo[8]) && campo[2] !== "" && campo[5] !== "" && campo[8] !== ""){
		document.getElementById("teste").innerText = campo[4] +"- É o Vencedor";
		bool = false;
		return 0;
	}

	if((campo[0]==campo[4] && campo[4] == campo[8]) && campo[0] !== "" && campo[4] !== "" && campo[8] !== ""){
		document.getElementById("teste").innerText = campo[0] +"- É o Vencedor";
		bool = false;
		return 0;

	}if((campo[2]==campo[4] && campo[4] == campo[6]) && campo[2] !== "" && campo[4] !== "" && campo[6] !== ""){
		document.getElementById("teste").innerText = campo[6] +" - É o Vencedor" ;
		bool = false;
		return 0;
	}
	if(contador == 9){
		document.getElementById("teste").innerText = "Deu Velha";

	}
}   
}