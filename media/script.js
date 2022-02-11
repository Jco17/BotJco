case 'menu':
const imagen = fs.readFileSync('media/logo.jpg')
client.sendMessage(from, imagen, MessageType.image, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "By 𝕵.𝕮.𝕺", 'jpegThumbnail': fs.readFileSync('media/logo.jpg)}}
}})
break 

case 'video':
const video = fs.readFileSync('dirección')
client.sendMessage(from, video, MessageType.video)
break 

case 'menu':
const audio = fs.readFileSync('media/audio.mp3')
client.sendMessage(from, audio, MessageType.audio, {quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "By 𝕵.𝕮.𝕺", 'jpegThumbnail': fs.readFileSync('media/logo.jpg)}}
}})
break 

/*utiliza quoted para que los mensajes respondan o etiqueten el mensaje de la otra persona que envía el comando por whatsapp*/


//para enviar nota de voz
ptt: true


//Envío con Ephermeral

sendEphemeral: true

//Con etiqueta de enviado muchas veces

contextInfo: {"forwardingScore": 999, "isForwarded": true}


//poner verificación


{quoted: { key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"documentMessage": { "title": "By 𝕵.𝕮.𝕺", 'jpegThumbnail': fs.readFileSync('media/logo.jpg)}}
}}

/*Recuerda suscribirte a mi canal de YouTube, no te cuesta nada y ami me ayudas bastante*/


//https://youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA
