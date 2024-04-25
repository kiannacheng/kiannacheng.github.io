// s1 outfit
function hideAllOutfits() {
	let outfits = document.getElementsByClassName('outfit');
	for (let i = 0; i < outfits.length; i++) {
	  outfits[i].style.display = 'none';
	}
  }
let s1 = document.getElementById('s1');
/* the process: */
s1.onclick = function(){
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o1').style.display = 'block';
}

let s2 = document.getElementById('s2');
/* the process: */
s2.onclick = function(){
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o2').style.display = 'block';
}

let s3 = document.getElementById('s3');
/* the process: */
s3.onclick = function(){
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o3').style.display = 'block';
}

let s4 = document.getElementById('s4');
/* the process: */
s4.onclick = function(){
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o4').style.display = 'block';
}

let s5 = document.getElementById('s5');
/* the process: */
s5.onclick = function(){
	document.getElementById('body').style.display = 'none';
	hideAllOutfits();
	document.getElementById('o5').style.display = 'block';
}

// strip outfit
let strip = document.getElementById('strip-button');
strip.onclick = function() {
	document.getElementById('body').style.display = 'block';
	hideAllOutfits(); 
}