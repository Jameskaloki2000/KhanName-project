// let username = document.querySelector(".username").value;
// document.querySelector(".date").value;
// document.querySelector(".month").value;

// console.log(username);
document.querySelector(".button").addEventListener("click", function () {
  let date = Number(document.querySelector(".date").value);
  let month = Number(document.querySelector(".month").value);
  let yearCalc = document.querySelector(".year").value;
  let gender = document.querySelector(".gender").value;
  let centuryCalc = yearCalc / 100;
  let century = Math.trunc(centuryCalc);
  let year = yearCalc[(string.length - 1, string.length - 2)];

  console.log(date, month, century, year);
  function akanDate(dd, mm, cc, yy) {
    return (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
  }
  const day = akanDate(date, month, century, year).toFixed();
  console.log(day);
  const males = [
    "Sunday: Kwasi",
    "Monday: Kwadwo",
    "Tuesday: Kwabena",
    "Wednesday: Kwaku",
    "Thursday:  Yaw",
    "Friday: Kofi",
    "Saturday: Kwame",
  ];
  const females = [
    "Sunday: Akosua",
    "Monday: Adwoa",
    "Tuesday: Abenaa",
    "Wednesay: Akua",
    "Thursday: Yaa",
    "Friday: Afua",
    "Saturday: Ama",
  ];
  if (gender == "male" && day == 0) {
    alert(males[0]);
  } else if (gender == "male" && day == 1) {
    alert(males[1]);
  } else if (gender == "male" && day == 2) {
    alert(males[2]);
  } else if (gender == "male" && day == 3) {
    alert(males[3]);
  } else if (gender == "male" && day == 4) {
    alert(males[4]);
  } else if (gender == "male" && day == 5) {
    alert(males[5]);
  } else if (gender == "male" && day == 6) {
    alert(males[6]);
  } else if (gender == "female" && day == 0) {
    alert(females[0]);
  } else if (gender == "female" && day == 1) {
    alert(females[1]);
  } else if (gender == "female" && day == 2) {
    alert(females[2]);
  } else if (gender == "female" && day == 3) {
    alert(females[3]);
  } else if (gender == "female" && day == 4) {
    alert(females[4]);
  } else if (gender == "female" && day == 5) {
    alert(females[5]);
  } else if (gender == "female" && day == 6) {
    alert(females[6]);
  } else {
    alert("null");
  }
});
