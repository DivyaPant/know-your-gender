//Using API for getting gender probability for a name
//Made by Divya


const containerClass = document.querySelector(".container");

const inputName = document.querySelector(".user-input");
const genderInput = document.querySelector(".gender-input");

//Adding eventListener on click of submit button
document.querySelector(".submit-btn").addEventListener("click", function () {
  if (
    inputName.value !== " " &&
    inputName.value.length > 2 &&
    inputName.value.length < 16
  ) {
    setTimeout(receiveData, 3000, inputName.value);
    setDisplay();
  } else {
    alert("Name should be 3 to 15 characters!");
    inputName.value = "";
  }
});

//function for display of input and output
function setDisplay() {
  genderInput.style.display = "none";
  const loader = ` <article class="load">
  <img src= "../assets/loader.gif" alt="loading">
  <p class= "text">Ready</p>
  </article>`;
  containerClass.insertAdjacentHTML("beforeend", loader);
  setTimeout(function () {
    document.querySelector(".text ").innerHTML = "Set";
  }, 1000);
  setTimeout(function () {
    document.querySelector(".text ").innerHTML = "Go!";
  }, 2000);
}

// Function for output Data
function dataOutput(data) {
  const htmlOutput = `<article class="result">
  <h4>Name: ${data.name} <br><br>
  Gender: ${data.gender} <br><br>
  Probability: ${(+data.probability * 100).toFixed(2)}% </h4><br><br>
  <button class="try-another btn">Try Another</button>
  </article>`;
  containerClass.insertAdjacentHTML("beforeend", htmlOutput);

  document.querySelector(".try-another").addEventListener("click", function () {
    //location.reload();
    const result = document.querySelector(".result");
    const loading = document.querySelector(".load");
    const form = document.querySelector(".form");
    if (form.hasChildNodes()) {
      form.reset();
      result.parentNode.removeChild(result);
      loading.parentNode.removeChild(loading);
      genderInput.style.display = "flex";
    }
  });
}
