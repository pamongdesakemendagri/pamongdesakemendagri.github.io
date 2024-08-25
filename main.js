import {get} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.0.4/api.js";

get("https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/phone/all",runafterGet);

function runafterGet(result){
    // Mendapatkan elemen HTML dengan id 'phoneList'
    let phoneListElement = document.getElementById('listnomorbot');

    // Iterasi melalui phonelist dan buat elemen <li> untuk setiap nomor telepon
    result.phonelist.forEach(function(phone) {
        let li = document.createElement('li'); // Membuat elemen <li>
        li.textContent = phone; // Mengisi <li> dengan nomor telepon
        phoneListElement.appendChild(li); // Menambahkan <li> ke dalam elemen <ul> atau <ol> dengan id 'phoneList'
    });

}