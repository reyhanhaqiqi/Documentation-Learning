const firstname = prompt("Siapa Nama Kamu?");
const nickname = prompt("Apa nama Panggilan Kamu?");
const yourage = prompt("Berapa Usiamu Sekarang");
const language = prompt("Bahasa apa yyang sekarang kamu gunakkan?");

const user = {

    name: {
        first: firstname,
        nick: nickname,
    },
    yourage: yourage,
    language: language,
};

if (user.yourage === 20) {
    alert("Halo, Selamat Siang " + user.nama.first + " Kamu biasa dipanggil " + user.nama.nick + " Ya !!!");
    alert("Kamu bisa bahasa " + user.language);
} else if (user.yourage === 19) {
    alert("Konichiwa " + user.name.first + " Kamu biasa dipanggil " + user.name.nick + " Ya !!!");
    alert("Kamu bisa bahasa " + user.language);
} else {
    alert("Ohayou " + user.name.first + "Kamu Biasa dipanggil " + user.name.nick + "Ya !!!");
    alert("Kamu bisa Bahasa " + user.language);
}