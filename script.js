// DOM selecting
let time = document.getElementById("time");
let date = document.getElementById("date");

//Get current Working Clock
setInterval(() => {
  today(); //this function get the time, month and year
}, 1000);

// Get current date and time
function today() {
  const today = new Date();

  const CurrentTime = `${
    today.getHours() <= 9 ? "0" + today.getHours() : today.getHours()
  } : ${
    today.getMinutes() <= 9 ? "0" + today.getMinutes() : today.getMinutes()
  } : ${
    today.getSeconds() <= 9 ? "0" + today.getSeconds() : today.getSeconds()
  }`;

  time.innerHTML = CurrentTime;

  const Months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Augt",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = ["Sat", "Sun", "Mon", "Tues", "Wed", "Thur", "Fri"];

  const currentDate = `${days[today.getDay() + 1]} , ${
    Months[today.getMonth()]
  } , ${today.getFullYear()}`;

  date.innerHTML = currentDate;
}
