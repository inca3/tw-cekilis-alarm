const params = new URLSearchParams(window.location.search);
var kanaladi = prompt("Çekiliş bulmak istediğiniz twitch kanalını girin.");
var alarm = new Audio('coffin.mp3'); 
const channel = params.get('channel') || kanaladi ;
var kanaladi2 = 'http://twitch.tv/'+kanaladi ;
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: [channel], //çekiliş kontrol etmesini istediğiniz kanalı girin
});

client.connect().then(() => {
  document.getElementById("kanal").textContent = channel ;
  document.getElementById("kanal1").textContent = channel + " için aktif" ;
  document.getElementById("kanal2").href = kanaladi2 ;
  
});

let mesaj = {};
var mesajlar = [];
var mesajlar1 = mesajlar.sort();

client.on("message", (channel, tags, message, self) => {
  //console.log(`${tags['display-name']}: ${message}`);
  if (self) return;

 
  mesajlar.unshift(message);
  //console.log(mesajlar);
  // console.log(mesajlar1);
  document.getElementById("mesajlar").textContent = mesajlar ;
  //mesajlar.toString();
  if (mesajlar.length >20 && mesajlar[5] == mesajlar[6] && mesajlar[6] == mesajlar[7] && mesajlar[7] == mesajlar[8] && mesajlar[8] == mesajlar[9] && mesajlar[9] == mesajlar[10]) {
    alarm.play(); 
    
   
  }
  
  if (mesajlar.length >50 ) {
    mesajlar = [];
  }
});

//&& mesajlar[5] == mesajlar[6] && mesajlar[6] == mesajlar[7] && mesajlar[7] == mesajlar[8] && mesajlar[8] == mesajlar[9] && mesajlar[9] == mesajlar[10]
//inca3 tarafından yazıldı :*