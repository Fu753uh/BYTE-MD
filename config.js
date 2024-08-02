
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUV5RmFTL3Q4Zlc1bDN0SjZrOXRQSnNYdTIzV2JnbUh4ejd3WkpsUGFHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmhXMDY1b0I3RWlDYytvVnlIK3kvMGpCWkgrSG5QVUswR2tNZUVQTDdXUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R0FBQjZyL2oyMVRIOWFzbHFJS0ppaS9UaWpRWFh1eG94K0JxbjhYOTBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYV0toRzdJNUtORFZqd2ZkT3V5bVJIUUVDc1pveWtBYzcwZHFvQ25SU2djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklMNXZUWWNtVlBQM3haVXl6QWxnZUMwTm1WK2tRc29oR2JKV01MWnVZMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJTRGZnZEdUSmlMZER1VzhucTFsT01ueHloancyb3krenpCOGZmbE1wREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUxlN3pMT01yc0tDcDYwS09SZnhHeEdpNTFqYTZrVDhTMFMvUnQrWVVFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXJRUktldEpYb1BrdzQvbGdGTSs5K1NnR2dhZWZETy9NSzM1UkEvOFNCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI2ejQyVk43WWNHdUlwOVFQYmphVTlaVDM4cFZPUkRpQWE0WHBxVWhMRDVwVkVSZGJtNWM1R2dIUmxucHpFQnVOaHEvbyt6NkJSS3Q1QjRWYjVNR2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJiblF4OTZVSFByK0JUT0s5QTFCMC9KcUJqaUdOaUlxOWdZSThXdk1uV0xzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzQsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozNCwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtcnFIb3RkR1MybUtraldnNkVnSjlRIiwicGhvbmVJZCI6IjMyYzZkYTlhLTZlYTAtNDEzMS1hZDAwLTE3MmIyNWU3OTA1NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuVHdpQ2hjMnlTZ09OSXdzVTFDeVZtRVN6bnc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhzbGlvZ1dKVm1RZ3FEczNrZVY1VGVZdWlRRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xDbXNQQUJFTURNdExVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlovbFNtY3JiM1pnOE5mZ3NqV0xUSXFiOTlybURrelQwS1JXQ0RJT1hsa0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImVnTGJjak1TS2laOFozUTV0TmRVZHh2czE5YnFQTndycm45SGZLc0l1RzkweWVGRXJLQmtIZFEySDJRQWJDSE14SXFoU3VUMXpENXY2azJGZWRLakF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtYytZa0pOQm9HSDVoL0NYRzhhZFlXQWVuMDZqalFucVh6OHJuMmVYdDdhWlB3ZEJpclNpSEVoM001QS9VVGZyNjM0RnZVNjNnM1ZPM2lzY2RRZGppZz09In0sIm1lIjp7ImlkIjoiOTIzMzQ5OTQ3OTg5OjZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzQ5OTQ3OTg5OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV2Y1VXBuSzI5MllQRFg0TEkxaTB5S20vZmE1ZzVNMDlDa1ZnZ3lEbDVaQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjYyMzU2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEbmgifQ==" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
