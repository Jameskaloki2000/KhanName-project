document.querySelector(".button").addEventListener("click", function () {
  let date = document.querySelector(".date").value;
  let gender = document.querySelector(".gender").value;
  let date2 = new Date(date);
  let day = date2.getDay();

  console.log(date);
  console.log(date2);
  console.log(day);
  console.log(gender);

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
