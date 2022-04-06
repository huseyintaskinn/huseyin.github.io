const kisiseldiv = document.getElementById('kisisel');
const egitimdiv = document.getElementById('egitim');
const isdiv = document.getElementById('is');
const projediv = document.getElementById('proje');


function kisiselgoster() {
    
    if(kisiseldiv.style.display == "none"){
        kisiseldiv.style.display = "flex";
    }
    if(egitimdiv.style.display == "flex"){
        egitimdiv.style.display = "none";
    }
    if(isdiv.style.display == "flex"){
        isdiv.style.display = "none";
    }
    if(projediv.style.display == "flex"){
        projediv.style.display = "none";
    } 
    
}
function egitimgoster() {
    if(egitimdiv.style.display == "none"){
        egitimdiv.style.display = "flex";
    }
    if(kisiseldiv.style.display == "flex"){
        kisiseldiv.style.display = "none";
    }
    if(isdiv.style.display == "flex"){
        isdiv.style.display = "none";
    }
    if(projediv.style.display == "flex"){
        projediv.style.display = "none";
    } 
}
function isgoster() {
    if(isdiv.style.display == "none"){
        isdiv.style.display = "flex";
    }
    if(egitimdiv.style.display == "flex"){
        egitimdiv.style.display = "none";
    }
    if(kisiseldiv.style.display == "flex"){
        kisiseldiv.style.display = "none";
    }
    if(projediv.style.display == "flex"){
        projediv.style.display = "none";
    } 
}
function projegoster() {
    console.log(projediv.style.display);
    console.log(kisiseldiv.style.display);
    console.log(isdiv.style.display);
    console.log(egitimdiv.style.display);

    if(projediv.style.display == "none"){
        projediv.style.display = "flex";
    }
    if(egitimdiv.style.display == "flex"){
        egitimdiv.style.display = "none";
    }
    if(isdiv.style.display == "flex"){
        isdiv.style.display = "none";
    }
    if(kisiseldiv.style.display == "flex"){
        console.log("girdi");
        kisiseldiv.style.display = "none";
    } 
}


const button1 = document.getElementById('kisiselbuton');
button1.addEventListener('click', kisiselgoster);

const button2 = document.getElementById('egitimbuton');
button2.addEventListener('click', egitimgoster);

const button3 = document.getElementById('isbuton');
button3.addEventListener('click', isgoster);

const button4 = document.getElementById('projebuton');
button4.addEventListener('click', projegoster);

