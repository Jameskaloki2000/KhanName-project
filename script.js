document.querySelector(".button").addEventListener("click", function () {
  let date = document.querySelector(".date").value;

  let genderMale = document.querySelector(".gender-male").checked;
  let genderFemale = document.querySelector(".gender-female").checked;

  let date2 = new Date(date);
  let day = date2.getDay();

  console.log(date);
  console.log(date2);
  console.log(day);
  console.log(genderMale, genderFemale, typeof day);
  const males = [
    " Kwasi",
    "Kwadwo",
    " Kwabena",
    " Kwaku",
    "  Yaw",
    "Kofi",
    " Kwame",
  ];
  const females = [
    " Akosua",
    " Adwoa",
    " Abenaa",
    " Akua",
    " Yaa",
    " Afua",
    " Ama",
  ];
  const daysOfWeek = [
    "Sunday: ",
    "Monday: ",
    "Tuesday:",
    "Wednesay:",
    "Thursday: ",
    "Friday: ",
    "Saturday: ",
  ];

  if (genderMale) {
    alert(
      `Your AKan name is ${males[day]} You were born on a ${daysOfWeek[day]}`
    );
    document.querySelector(
      ".text-info"
    ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.`;
  } else if (genderFemale) {
    alert(
      `Your AKan name is ${females[day]} You were born on a ${daysOfWeek[day]}`
    );
    document.querySelector(
      ".text-info"
    ).textContent = `The Akan people of Ghana frequently name their children after the day of the week they were born and the order in which they were born. These 'day' 'names' have further meanings concerning the soul and character of the person.`;
  } else {
    alert("Please fill  in the whole form to get back your akan name");
  }
});
