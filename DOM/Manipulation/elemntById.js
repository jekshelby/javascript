function changeColor(newColor) { //function changeColor with prameter newColor
    const elem = document.getElementById("para"); // get element html with ID para
    elem.style.color = newColor; //elem.style.color = styling (color)
}

// Mendapatkan elemen-elemen dengan class "paragraf"
const elements = document.getElementsByClassName('paragraf');

// Iterasi melalui semua elemen yang memiliki class "paragraf"
for (let i = 0; i < elements.length; i++) {
    // Mengubah teks elemen menjadi "SIP"
    elements[i].innerText = "sip";
}

