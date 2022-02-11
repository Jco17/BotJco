const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '.'

async function iniciar () { 
        const client = new WAConnection()

        client.logger.level = 'warn'

        client.on('qr', () => {
        })

        fs.existsSync('./Jco17.json') && client.loadAuthInfo('./Jco17.json')

        client.on('connecting', () => {
        console.log('Conectando')
        })

        client.on('open', () => {
        console.log('Conectado exitosamente :D By J.C.O')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Jco17.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (jco) => {
try {	  
if (!jco.hasNewMessage) return
if (!jco.messages) return
if (jco.key && jco.key.remoteJid == 'status@broadcast') return

jco = jco.messages.all()[0]
if (!jco.message) return
global.blocked
jco.message = (Object.keys(jco.message)[0] === 'ephemeralMessage') ? jco.message.ephemeralMessage.message : jco.message
const from = jco.key.remoteJid
const type = Object.keys(jco.message)[0]        
const quoted = type == 'extendedTextMessage' && jco.message.extendedTextMessage.contextInfo != null ? jco.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(jco.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = jco.message.conversation || jco.message[type].caption || jco.message[type].text || ""
chats = (type === 'conversation') ? jco.message.conversation : (type === 'extendedTextMessage') ? jco.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && jco.message.conversation.startsWith(prefix)) ? jco.message.conversation : (type == 'imageMessage') && jco.message.imageMessage.caption.startsWith(prefix) ? jco.message.imageMessage.caption : (type == 'videoMessage') && jco.message.videoMessage.caption.startsWith(prefix) ? jco.message.videoMessage.caption : (type == 'extendedTextMessage') && jco.message.extendedTextMessage.text.startsWith(prefix) ? jco.message.extendedTextMessage.text : ''

if (prefix != ".") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['########@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = jco.key.fromMe ? client.user.jid : isGroup ? jco.participant : jco.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = jco.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = jco.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

switch (command) {

case 'bot':
client.sendMessage(from, 'Hola,felicidades, has logrado enviar un mensaje mediante un servidor externo😚', text, {quoted : jco})
break

case 'menu':
const imagen = fs.readFileSync('media/logo.jpg')
client.sendMessage(from, imagen, MessageType.image, {quoted: { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"documentMessage": { "title": "By 𝕵.𝕮.𝕺", 'jpegThumbnail': fs.readFileSync('media/logo.jpg)}}
}})
break 

               
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
