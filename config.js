/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6288292024190


   * Follow https://github.com/DikaArdnt


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other

global.namabot = 'BetaBotz MD' //nama bot lu

global.namaowner = 'LannOfc'

global.myweb = 'https://api-betabot.herokuapp.com' //nama web lu bebas


global.owner = [ '6285803583481' ] //nomor lu atau bot lu


global.premium = ['6285803583481'] //nomor lu ato bot lu


global.packname = 'BetaBotz By Lann' //buat swm


global.author = 'WhatsApp Bot'


global.sessionName = 'session'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: '✓ Success', //ganti semau lu


    admin: 'Fitur Khusus Admin Group!', //ganti semau lu


    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!', //ganti semau lu


    owner: 'Fitur Khusus Owner Bot', //ganti semau lu ye


    group: 'Fitur Digunakan Hanya Untuk Group!',//ganti semau lu


    private: 'Fitur Digunakan Hanya Untuk Private Chat!', //ganti aja semau lu


    bot: 'Fitur Khusus Pengguna Nomor Bot', //ganti semau lu


    wait: '*TUNGGU SEBENTAR*⏳', //ganti semau lu


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 100000


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')



global.chatDB = JSON.parse(fs.readFileSync('./chatsDB.js'))


let file = require.resolve(__filename)




fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
