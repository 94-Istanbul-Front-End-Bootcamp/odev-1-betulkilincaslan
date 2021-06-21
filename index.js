/* Show my Info */
let infoButton = document.querySelector("#getInfo");
let nameSurnameArea = document.querySelector("#nameSurname");
let ageArea = document.querySelector("#age");
let name = "Betül";
let surname = "KILINÇASLAN";
let age = 27;
infoButton.addEventListener("click", () => {
  nameSurnameArea.innerText = `${name} ${surname}`;
  ageArea.innerText = `${age}`;
  infoButton.style.display = "none";
});
/* Show my Info */

/* Redirect to linkedin and github pages */
let linkedIn = document.querySelector("#linkedinUrl");
linkedIn.onclick = () => {
  linkedIn.setAttribute(
    "href",
    "https://www.linkedin.com/in/betulkilincaslan/"
  );
};
let github = document.querySelector("#githubUrl");
github.onclick = () => {
  github.setAttribute("href", "https://github.com/betulkilincaslan");
};
/* Redirect to github and linkedin pages */
