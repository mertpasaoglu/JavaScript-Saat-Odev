let userName = prompt("Lütfen Isminizi Giriniz")

const userNameDOM = document.getElementById("myName")
userNameDOM.innerHTML = userName


function tarihSaat() {
    var day = "Perşembe"
    var date = new Date().toLocaleTimeString(); // tarih saati al
    document.getElementById("myClock").innerHTML = date;   // zaman id'li elemente yazdır
    document.getElementById("myDay").innerHTML = day; 
    
}
setInterval(tarihSaat, 1000);





setInterval

