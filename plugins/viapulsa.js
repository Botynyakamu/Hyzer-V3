
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Dana
╠➥ *085828764046*
╠➥ Chat Owner:
║- wa.me/6285828764046
╠═〘 ROZI 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viaumobile']
handler.tags = ['info']
handler.command = /^viaumobile$/i

module.exports = handler
