//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU84YzhtdmdVb2NPeW1NdWFyZmRhZmNGZitCWURyVTA3S3VZTThWdVZuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFlGbkErR1ZITWJhRHJhcytLRFhQK0pycVUrbXFCM3RIUGtkalI1ejZncz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTGVENXhqa2ZQa3ZrWVZBTlRobXNSTUU3NmxISVZnYjJkUENJSDlDZTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRlEvS29VZHZwaWdmKy9aZmttSFhoaytaSDlqMGkrek5sMWVVMXBkcVFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBMR0FHYVBJeUlHeFRpbXorOXJYcS9uMlJRQnBnVFhrVzdiSzRIczJYa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdRNGF1R0VmQU1wZVB2MzlMY3E5TTBqT0dHZ0lVN01MM0FWazJOUWlObDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Nnb01CV0haWW5aSU9oUHVKRTZTa3J6SEQ3RDRUSWRBbVlLSERRbUZFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1BkRG9sbndZemNMNjVmMU1JT3NFVnJ5dGxPc3Jha0kwREk0R3VmaytRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxLWW1Ia2JWbkVpUlZSUENXM2VsSXdFaWd6aEVjNDJCS1AwSlhmckVrbk9EL3A5aEpYSFVtQUtLVHZFUDcrSEF3RW5IblcwRUlWaEZNTEZLT2JDOEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IkJvQ2VuaEV1cFVZMjJobml1MDBLWjVvZGg2L3NvSUFYRE5FU0IzeFlyNTA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik43WXhHbHNGU0ZHT1BsTXVMNFVIanciLCJwaG9uZUlkIjoiNmRiOTk2YmYtZmE5Yi00NTExLWEzZGYtOTdmYTdmNjg2YWZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZWb0tUekZlU1hHbVVJSVYxcUV2U083YnlhQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0cnkzSTUrOGVST3pab2dESWwybUVQUUVWNFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjhHRkY4VEwiLCJtZSI6eyJpZCI6Ijk0NzQzNTk3NjcwOjI4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuychOuIhSDquYAg7KO87JuQIiwibGlkIjoiMTMzOTc3NzEzMTkzMTEyOjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmpBcHFRRkVQMzE5TUlHR0J3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNVRpZlR5S2ZLRk5MNWhBVzhnbEZPaWVReVlJMFA0ZmVlN3JxWkE0V0NUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidkVMY05WeDd1clZIbkxSdHgvNkJUdGhXZkw5NUNKcVVvSnpSR3psRlpLUmxrNDdqdjRJZ05wazNoUERuV2RVeXlCSW4veHBzd2NHVHRSVXNNVkptQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkQxTXRmVFJuRFExVkxwNkxteDRud2lKYmZtaEFHdzRreElFQlg1aDYxUHltOTJyM0hUdFM0R0VkY0lMZ0U5bGdUQjZ4WUkzNVgwM2FYMmpzU1FkM0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDM1OTc2NzA6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVU0bjA4aW55aFRTK1lRRnZJSlJUb25rTW1DTkQrSDNudTY2bVFPRmdrMSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwOTQwNDI3LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBYZCJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "+94743597670",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
