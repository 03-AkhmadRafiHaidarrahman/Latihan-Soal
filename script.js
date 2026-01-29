const prompt = require('prompt-sync')()

let user = prompt(`
    Menu :
    1. Predikat Nilai 
    2. DaftarSiswa `)

function nilai(n){
for (let i = 0; i < n.length; i++) {
    const element = n[i];
    if(element >= 90){
        console.log(element + " A")
    }else if(element >= 70){
        console.log(element + " B")
    }else{
        console.log(element + " C")
    }
    }
}

let daftarSiswa = {
    nama: "rafi",
    kelas: "XIPPLG3",
    umur: 17    
}


switch (user) {
    case "1":
    nilai([90,80,70,60,50])
    break;
    case "2":
    for (const element in daftarSiswa) {
    console.log(element, daftarSiswa[element])
    }
    break;
}
