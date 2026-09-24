const fs = require("node:fs");
const path = require("node:path");
const { SlashCommandBuilder } = require("discord.js");

const DATA_FILE = path.join(__dirname, "..", "keuangan.json");

function loadData() {
  if (!fs.existsSync(DATA_FILE)) {
    return {};
  }

  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName("keuangan")
    .setDescription("Kelola catatan keuangan")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("masuk")
        .setDescription("Catat pemasukan")
        .addIntegerOption((option) =>
          option
            .setName("jumlah")
            .setDescription("Jumlah uang")
            .setRequired(true)
            .setMinValue(1)
        )
        .addStringOption((option) =>
          option
            .setName("keterangan")
            .setDescription("Keterangan pemasukan")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("keluar")
        .setDescription("Catat pengeluaran")
        .addIntegerOption((option) =>
          option
            .setName("jumlah")
            .setDescription("Jumlah uang")
            .setRequired(true)
            .setMinValue(1)
        )
        .addStringOption((option) =>
          option
            .setName("keterangan")
            .setDescription("Keterangan pengeluaran")
            .setRequired(true)
        )
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("saldo")
        .setDescription("Lihat saldo")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("riwayat")
        .setDescription("Lihat 10 transaksi terakhir")
    ),

  async execute(interaction) {
    const data = loadData();
    const userId = interaction.user.id;

    if (!data[userId]) {
      data[userId] = {
        masuk: 0,
        keluar: 0,
        transaksi: [],
      };
    }

    const akun = data[userId];
    const subcommand = interaction.options.getSubcommand();

    if (subcommand === "masuk") {
      const jumlah = interaction.options.getInteger("jumlah");
      const keterangan = interaction.options.getString("keterangan");

      akun.masuk += jumlah;

      akun.transaksi.push({
        tipe: "masuk",
        jumlah,
        keterangan,
        waktu: new Date().toISOString(),
      });

      saveData(data);

      return interaction.reply(
        `Pemasukan berhasil dicatat.\n**+${rupiah(jumlah)}** — ${keterangan}`
      );
    }

    if (subcommand === "keluar") {
      const jumlah = interaction.options.getInteger("jumlah");
      const keterangan = interaction.options.getString("keterangan");

      akun.keluar += jumlah;

      akun.transaksi.push({
        tipe: "keluar",
        jumlah,
        keterangan,
        waktu: new Date().toISOString(),
      });

      saveData(data);

      return interaction.reply(
        `Pengeluaran berhasil dicatat.\n**-${rupiah(jumlah)}** — ${keterangan}`
      );
    }

    if (subcommand === "saldo") {
      const saldo = akun.masuk - akun.keluar;

      return interaction.reply(
        `**Ringkasan Keuangan**\n` +
        `Pemasukan: ${rupiah(akun.masuk)}\n` +
        `Pengeluaran: ${rupiah(akun.keluar)}\n` +
        `Saldo: **${rupiah(saldo)}**`
      );
    }

    if (subcommand === "riwayat") {
      if (akun.transaksi.length === 0) {
        return interaction.reply("Belum ada transaksi.");
      }

      const transaksi = akun.transaksi.slice(-10).reverse();

      const hasil = transaksi.map((item, index) => {
        const tanda = item.tipe === "masuk" ? "+" : "-";

        return `${index + 1}. ${tanda}${rupiah(item.jumlah)} — ${item.keterangan}`;
      });

      return interaction.reply(
        `**10 Transaksi Terakhir**\n${hasil.join("\n")}`
      );
    }
  },
};
