/* Show my Info */
let infoButton = document.querySelector("#getInfo");
let nameSurname = document.querySelector("#nameSurname");
let age = document.querySelector("#age");
infoButton.addEventListener("click", () => {
  nameSurname.innerText = "Betül KILINÇASLAN";
  age.innerText = "27";
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
