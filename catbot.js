const Discord = require("discord.js");
const axios = require("axios");
const bot = new Discord.Client();

bot.login(process.env.TOKEN);

const getCatImage = async () => {
  const res = await axios.get("https://api.thecatapi.com/v1/images/search");
  const { url } = res.data[0];
  return url;
};

bot.on("message", async (msg) => {
  if (msg.content === "|cat" && msg.guild.id === "744439118968127519") {
    const catImage = await getCatImage();
    msg.channel.send(catImage);
  }
});