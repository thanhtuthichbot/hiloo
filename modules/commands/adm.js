 module.exports.config = {
   name: "adm",
     version: "1.0.0",
       hasPermssion: 0,
         credits: "CallmeSun",
           description: "Kiểm tra thông tin admin bot.",
             commandCategory: "config",
               usages: "",
                 cooldowns: 5,
                   dependencies: {
                       "request":"",
                           "fs-extra":"",
                               "axios":""
                                 }
                                 };

           module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
                const axios = global.nodemodule["axios"];
                const request = global.nodemodule["request"];
                const fs = global.nodemodule["fs-extra"];
                var link = [
"https://media3.giphy.com/media/DlAKiO46ALu1pQkXU7/giphy.gif?cid=6c09b95271aff5fa5bc9280f10655c1837e5f809328e474b&rid=giphy.gif&ct=g"
];
                var callback = () => api.sendMessage({body:`\n» Info người vận hành bot «\n\n👤FB: Nguyễn Thanh Tú \n- Inbox: https://www.facebook.com/profile.php?id=100047919797594\n- Giới tính: Nam ( ͡° ͜ʖ ͡°)\n- Mối quan hệ: Độc thân\n- SN: 2007\n-\n💳VCB: 9999999\n📲MoMo: 0902553519`,attachment: fs.createReadStream(__dirname + "/cache/ngohoaihuy.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ngohoaihuy.png")); 
                                             return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ngohoaihuy.png")).on("close",() => callback());
                                                };
