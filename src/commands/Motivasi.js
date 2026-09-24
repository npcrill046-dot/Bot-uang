const { SlashCommandBuilder } = require("discord.js");

const quotes = [
  "Kalau terus menunggu mood, banyak hal tidak akan pernah dimulai.",
  "Istirahat itu boleh. Menyerah bukan satu-satunya pilihan.",
  "Kesalahan bukan akhir, tapi jangan ulangi kesalahan yang sama tanpa belajar.",
  "Kamu tidak harus cepat. Yang penting jangan berhenti bergerak.",
  "Waktu tetap berjalan meskipun kamu belum siap.",
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("motivasi")
    .setDescription("Dapatkan kata-kata motivasi"),

  async execute(interaction) {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    await interaction.reply(`> ${quote}`);
  },
};
