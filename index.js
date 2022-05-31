/*
const toner =
["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"]

const keyC = {
    prim : toner[0],
    sekund: toner[2],
    ters: toner[4],
    kvart: toner[5],
    kvint: toner[7],
    sekst: toner[9],
    septim: toner[11],
}*/

function reset(){
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "black";
	}
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "black";
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "black";
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "black";
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "black";
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "whitesmoke";
	}
}

function noteNavnAv(){
	var elements = document.getElementsByClassName('noteNavn'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "none";
	}
}

function noteNavnPa(){
	var elements = document.getElementsByClassName('noteNavn'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = "grey";
	}
}

const prim ="#254057";
const sekund="#315873";
const ters="#3c728f";
const kvart="#478eab";
const kvint ="#53aac6";
const sekst="#5fc7e1";
const septim="#6ee5fa";


function cDur(){

    reset();

    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
}
function gDur(){

    reset();
    
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
}
function dDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
}
function aDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
}
function eDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
}
function bDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
}
function fsDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('b'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
}
function csDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('fs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
}
function gsDur(){

    reset();
    
    var elements = document.getElementsByClassName('cs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
}
function dsDur(){

    reset();
    
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('gs'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
}
function asDur(){

    reset();
    
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('ds'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
}
function fDur(){

    reset();
    
    var elements = document.getElementsByClassName('d'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekst;
	}
    var elements = document.getElementsByClassName('e'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = septim;
	}
    var elements = document.getElementsByClassName('f'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = prim;
	}
    var elements = document.getElementsByClassName('g'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = sekund;
	}
    var elements = document.getElementsByClassName('a'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = ters;
	}
    var elements = document.getElementsByClassName('as'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvart;
	}
    var elements = document.getElementsByClassName('c'); 
	for(var i = 0; i < elements.length; i++){
		elements[i].style.fill = kvint;
	}
}