let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  submitButton.textContent = "submitted succesfully";
});

const text = document.getElementById("about-us");
text.style.fontSize = "30px";
text.style.alignItems = "center";
text.style.fontWeight = "bold";
