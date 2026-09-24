const { SlashCommandBuilder } = require("discord.js");

const quotes = [
  // KEMALASAN
  {
    tema: "kemalasan",
    teks: "Kadang yang menghalangimu bukan kurangnya kemampuan, tapi kebiasaan menunda sampai kesempatan itu lewat."
  },
  {
    tema: "kemalasan",
    teks: "Kamu boleh malas sesekali. Tapi kalau malas sudah menjadi kebiasaan, jangan heran kalau hidupmu ikut berhenti."
  },
  {
    tema: "kemalasan",
    teks: "Menunggu mood untuk mulai adalah cara yang nyaman untuk tidak pernah mulai."
  },
  {
    tema: "kemalasan",
    teks: "Setiap kali kamu berkata 'nanti', kamu sedang memindahkan masalah hari ini kepada dirimu di masa depan."
  },
  {
    tema: "kemalasan",
    teks: "Tidak melakukan apa-apa memang terasa nyaman sekarang, tapi sering kali membuatmu membayar lebih mahal nanti."
  },

  // DISIPLIN
  {
    tema: "disiplin",
    teks: "Kamu tidak selalu membutuhkan motivasi. Kadang kamu hanya perlu melakukan apa yang sudah kamu putuskan."
  },
  {
    tema: "disiplin",
    teks: "Disiplin bukan melakukan sesuatu saat ingin. Disiplin adalah tetap melakukannya ketika rasa ingin itu hilang."
  },
  {
    tema: "disiplin",
    teks: "Kemajuan kecil yang dilakukan terus-menerus lebih nyata daripada rencana besar yang tidak pernah dimulai."
  },
  {
    tema: "disiplin",
    teks: "Kalau kamu hanya bekerja ketika sedang semangat, hasilmu juga akan bergantung pada seberapa sering kamu merasa semangat."
  },
  {
    tema: "disiplin",
    teks: "Kebiasaan kecil yang kamu ulang setiap hari akhirnya menjadi arah hidupmu."
  },

  // UANG
  {
    tema: "uang",
    teks: "Uang yang sedikit tetap perlu dihargai, tetapi jangan sampai rasa takut kehilangan uang membuatmu takut menjalani hidup."
  },
  {
    tema: "uang",
    teks: "Membeli sesuatu bukan selalu pemborosan. Yang penting kamu tahu apakah kamu membeli karena kebutuhan atau karena dorongan sesaat."
  },
  {
    tema: "uang",
    teks: "Kesalahan menghabiskan uang bisa diperbaiki. Yang berbahaya adalah tidak pernah belajar dari kesalahan yang sama."
  },
  {
    tema: "uang",
    teks: "Jangan hanya belajar cara mendapatkan uang. Belajarlah juga cara menggunakannya dengan sadar."
  },
  {
    tema: "uang",
    teks: "Kaya bukan sekadar punya banyak uang. Kamu juga perlu tahu ke mana uangmu pergi."
  },

  // KEGAGALAN
  {
    tema: "kegagalan",
    teks: "Gagal sekali tidak membuktikan bahwa kamu tidak mampu. Itu hanya membuktikan bahwa cara yang kamu coba belum berhasil."
  },
  {
    tema: "kegagalan",
    teks: "Kesalahan akan terasa lebih menyakitkan kalau kamu hanya menyesalinya tanpa mengambil pelajaran darinya."
  },
  {
    tema: "kegagalan",
    teks: "Tidak semua usaha akan berhasil. Tapi setiap usaha bisa memberimu pengalaman kalau kamu mau memperhatikannya."
  },
  {
    tema: "kegagalan",
    teks: "Kamu tidak perlu menghapus kegagalan dari masa lalu. Kamu hanya perlu berhenti membiarkannya menentukan langkah berikutnya."
  },
  {
    tema: "kegagalan",
    teks: "Kadang kegagalan bukan akhir dari rencana. Kadang itu informasi bahwa caramu perlu diubah."
  },

  // BELAJAR
  {
    tema: "belajar",
    teks: "Tidak paham hari ini bukan berarti kamu bodoh. Itu berarti masih ada sesuatu yang belum kamu pahami."
  },
  {
    tema: "belajar",
    teks: "Bertanya bukan tanda kamu tidak pintar. Justru kamu tidak bisa belajar sesuatu yang tidak berani kamu tanyakan."
  },
  {
    tema: "belajar",
    teks: "Jangan malu menjadi pemula. Semua orang yang ahli pernah berada di titik ketika mereka tidak tahu apa-apa."
  },
  {
    tema: "belajar",
    teks: "Belajar sedikit setiap hari mungkin terasa tidak berarti, sampai kamu melihat hasilnya beberapa bulan kemudian."
  },
  {
    tema: "belajar",
    teks: "Kalau kamu belum bisa, jangan langsung menyimpulkan bahwa kamu tidak bisa. Bedakan antara belum dan tidak."
  },

  // WAKTU
  {
    tema: "waktu",
    teks: "Waktu yang sudah lewat tidak bisa dibeli kembali, jadi jangan habiskan terlalu banyak waktu untuk menyesalinya."
  },
  {
    tema: "waktu",
    teks: "Satu jam yang kamu buang hari ini mungkin terlihat kecil. Masalahnya adalah ketika satu jam itu terus berulang setiap hari."
  },
  {
    tema: "waktu",
    teks: "Kamu tidak perlu mengisi setiap menit dengan produktivitas. Tapi sadarilah ke mana sebagian besar waktumu pergi."
  },
  {
    tema: "waktu",
    teks: "Masa depan dibentuk oleh banyak keputusan kecil yang sering terasa tidak penting ketika sedang dilakukan."
  },
  {
    tema: "waktu",
    teks: "Jangan menunggu hidup berubah sambil terus melakukan hal yang sama setiap hari."
  },

  // USAHA
  {
    tema: "usaha",
    teks: "Usaha tidak menjamin hasil yang kamu inginkan, tetapi tanpa usaha kemungkinan hasil itu datang menjadi jauh lebih kecil."
  },
  {
    tema: "usaha",
    teks: "Kalau langkahmu kecil, tidak masalah. Yang penting langkah itu benar-benar bergerak."
  },
  {
    tema: "usaha",
    teks: "Tidak semua kemajuan terlihat dari luar. Kadang bertahan dan mencoba lagi sudah merupakan kemajuan."
  },
  {
    tema: "usaha",
    teks: "Jangan membandingkan bab pertama hidupmu dengan bab terakhir milik orang lain."
  },
  {
    tema: "usaha",
    teks: "Hasil besar sering terlihat tiba-tiba, padahal biasanya dibangun dari usaha kecil yang tidak terlihat."
  },

  // KEPERCAYAAN DIRI
  {
    tema: "percaya_diri",
    teks: "Kamu tidak harus yakin seratus persen sebelum mencoba. Sedikit keberanian sudah cukup untuk mengambil langkah pertama."
  },
  {
    tema: "percaya_diri",
    teks: "Takut dinilai orang lain tidak akan pernah benar-benar hilang. Yang bisa berubah adalah seberapa besar kamu membiarkannya mengendalikanmu."
  },
  {
    tema: "percaya_diri",
    teks: "Kamu tidak perlu menjadi seperti orang lain untuk membuktikan bahwa dirimu berharga."
  },
  {
    tema: "percaya_diri",
    teks: "Kesalahan saat mencoba lebih berguna daripada kesempurnaan yang hanya ada di pikiran."
  },
  {
    tema: "percaya_diri",
    teks: "Jangan menunggu merasa siap. Kadang rasa siap baru muncul setelah kamu mulai."
  },

  // PENYESALAN
  {
    tema: "penyesalan",
    teks: "Penyesalan tidak bisa mengubah kemarin. Tapi pelajaran dari penyesalan bisa mengubah keputusanmu besok."
  },
  {
    tema: "penyesalan",
    teks: "Jangan menghukum dirimu berkali-kali untuk satu kesalahan. Perbaiki, pelajari, lalu lanjutkan."
  },
  {
    tema: "penyesalan",
    teks: "Kamu tidak bisa mengulang masa lalu, tetapi kamu masih punya kesempatan untuk membuat keputusan berikutnya lebih baik."
  },
  {
    tema: "penyesalan",
    teks: "Kesalahan masa lalu adalah bagian dari ceritamu, bukan seluruh identitasmu."
  },
  {
    tema: "penyesalan",
    teks: "Kadang yang paling kamu butuhkan bukan kesempatan kedua, tetapi keberanian untuk menggunakan kesempatan yang masih ada."
  },

  // ISTIRAHAT
  {
    tema: "istirahat",
    teks: "Berhenti sebentar bukan berarti menyerah. Bahkan mesin pun perlu berhenti agar tidak rusak."
  },
  {
    tema: "istirahat",
    teks: "Kamu tidak harus produktif setiap saat. Istirahat juga bagian dari menjaga kemampuanmu untuk terus berjalan."
  },
  {
    tema: "istirahat",
    teks: "Jangan merasa bersalah karena lelah. Yang penting adalah jangan menjadikan lelah sebagai alasan untuk berhenti selamanya."
  },
  {
    tema: "istirahat",
    teks: "Ada hari untuk berlari dan ada hari untuk berjalan pelan. Keduanya tetap bagian dari perjalanan."
  },
  {
    tema: "istirahat",
    teks: "Kalau tubuh dan pikiranmu meminta jeda, dengarkan. Istirahat yang cukup bisa membuat langkah berikutnya lebih baik."
  }
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("motivasi")
    .setDescription("Dapatkan kata-kata yang bisa membuatmu berpikir")
    .addStringOption(option =>
      option
        .setName("tentang")
        .setDescription("Tema motivasi, misalnya kemalasan, uang, belajar")
        .setRequired(false)
    ),

  async execute(interaction) {
    const temaInput = interaction.options.getString("tentang");

    let pilihan = quotes;

    if (temaInput) {
      const tema = temaInput.toLowerCase().trim();

      const hasil = quotes.filter(q =>
        q.tema.toLowerCase().includes(tema)
      );

      if (hasil.length === 0) {
        return interaction.reply(
          `Tema "${temaInput}" belum tersedia.\n\nTema yang tersedia: kemalasan, disiplin, uang, kegagalan, belajar, waktu, usaha, percaya_diri, penyesalan, istirahat.`
        );
      }

      pilihan = hasil;
    }

    const randomQuote =
      pilihan[Math.floor(Math.random() * pilihan.length)];

    await interaction.reply(
      `**${randomQuote.tema.replace("_", " ").toUpperCase()}**\n\n> ${randomQuote.teks}`
    );
  },
};
