exports.run = (client) => {
    var now = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", timeZoneName: "short", weekday: "short", month: "long", day: "2-digit", year: "numeric", hour: '2-digit', minute:'2-digit'});
  
    client.user.setActivity("for .help", {type: 'WATCHING'});
    client.channels.find("id", "670883524902912002").send(`🔄 AutoMod has restarted @ ${now}`);
  
    console.log(`Bot is ready @ ${now}`);
};