const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

const imlecSaat = document.querySelector(".hour");
const imlecDakika = document.querySelector(".minute");
const imlecSaniye = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const circle = document.querySelector(".circle");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let interval = setInterval(() => {
  const d = new Date();
  var saat = d.getHours() * 30 + "deg";
  var dakika = d.getMinutes() * 6 + "deg";
  var saniye = d.getSeconds() * 6 + "deg";
  var ampm = d.getHours() >= 12 ? "pm" : "am";

  imlecSaat.style.transform = ` translate(-50%, -100%) rotate(${saat})`;
  imlecDakika.style.transform = ` translate(-50%, -100%) rotate(${dakika})`;
  imlecSaniye.style.transform = ` translate(-50%, -100%) rotate(${saniye})`;

  time.textContent = (d.getHours() % 12) + ":" + d.getMinutes() + " " + ampm;

  imlecSaat.style.transition = `${
    d.getHours() === 0 ? "none" : "all 0.4s ease-in"
  }`;

  imlecDakika.style.transition = `${
    d.getMinutes() === 0 ? "none" : "all 0.4s ease-in"
  }`;

  imlecSaniye.style.transition = `${
    d.getSeconds() === 0 ? "none" : "all 0.4s ease-in"
  }`;

  date.innerHTML = `
  ${days[d.getDay()] + ", " + month[d.getMonth()]}
  <span class="circle">
  ${d.getDate()}
  </span>
  `;
}, 1);
