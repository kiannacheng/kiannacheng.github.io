function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');

    document.getElementById(lightboxID).classList.remove('hidden');

}


function unhideLightbox1() {
	unhideLightbox('wash');
}

document.getElementById("picture-1").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox('white');
}

document.getElementById("picture-2").onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox('fire');
}

document.getElementById("picture-3").onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox('road');
}

document.getElementById("picture-4").onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox('horse');
}

document.getElementById("picture-5").onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox('work');
}

document.getElementById("picture-6").onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox('tate');
}

document.getElementById("picture-7").onclick = unhideLightbox7;

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');

    document.getElementById(lightboxID).classList.add('hidden');

}



function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');

	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;

