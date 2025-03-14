const hari = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const bulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const desk = document.querySelector(".deskripsi h3");
const kotak = document.querySelectorAll(".kotak h3");

// Ubah tanggalnya disini
const date = new Date(2025, 09, 31, 23, 59, 59);

const day1 = date.getDate();
const month = bulan[date.getMonth()];
const year = date.getFullYear();
const weekday = hari[date.getDay()];

desk.textContent = `Hacktoberfest will end on ${weekday}, ${day1} ${month} ${year}`;

const deadline = date.getTime();

function time() {
  let t = deadline - new Date().getTime();

  let satuHari = 24 * 60 * 60 * 1000;
  let satuJam = 60 * 60 * 1000;
  let satuMenit = 60 * 1000;
  let satuDetik = 1000;

  let day = Math.floor(t / satuHari);
  let hour = Math.floor((t % satuHari) / satuJam);
  let minute = Math.floor((t % satuJam) / satuMenit);
  let second = Math.floor((t % satuMenit) / satuDetik);

  function format(jam) {
    if (jam < 10) {
      jam = `0${jam}`;
    }
    return jam;
  }

  const values = [day, hour, minute, second];

  kotak.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    kotak.forEach((item) => {
      item.innerHTML = "00";
    });
    desk.textContent = "Hacktoberfest has ended!";
  }
} const countdown = setInterval(time, 1000);
