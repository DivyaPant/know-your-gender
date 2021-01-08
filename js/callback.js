// AJAX call: XMLHttpRequest to get API

function receiveData(input) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://api.genderize.io/?name=${input}`);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    if (!data.gender) {
      error(data.name);
    } else {
      dataOutput(data);
      document.querySelector(".load").style.display = "none";
    }
  });
}

//Function for error handling
function error(err) {
  document.querySelector(".load").style.display = "none";
  dataOutput(err);
  document.querySelector(".result h4").innerHTML = `Something is not right 1 <br>
  ${err} is not a valid name`;
}
