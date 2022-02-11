case 'foto':
const imagen = fs.readFileSync('dirección')
client.sendMessage(from, imagen, MessageType.image)
break 

case 'video':
const video = fs.readFileSync('dirección')
client.sendMessage(from, video, MessageType.video)
break 

case 'audio':
const audio = fs.readFileSync('dirección')
client.sendMessage(from, audio, MessageType.audio)
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
"documentMessage": { "title": "texto", 'jpegThumbnail': fs.readFileSync('dirección')}}
}}

/*Recuerda suscribirte a mi canal de YouTube, no te cuesta nada y ami me ayudas bastante*/


//https://youtube.com/channel/UCHD4T8Pfcv5PFVzsAbfAPZA