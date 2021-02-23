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

  if (gender == "male") {
    alert(males[day]);
    document.querySelector(
      ".text-info"
    ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.Yours is ${males[day]}`;
  } else if (gender == "female") {
    alert(females[day]);
    document.querySelector(
      ".text-info"
    ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.Yours is ${females[day]}`;
  } else {
    alert("Please put in the correct information in the form");
  }
});
