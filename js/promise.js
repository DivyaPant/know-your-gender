// Fetching an API with promises
// Error handling with throw and catch
function receiveData(input) {
  fetch(`https://api.genderize.io/?name=${input}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!data.gender) {
        throw new Error(`${data.name} is not a valid name `);
      }
      dataOutput(data);
      document.querySelector(".load").style.display = "none";
    })
    .catch((err) => {
      document.querySelector(".load").style.display = "none";
      dataOutput(err);
      document.querySelector(
        ".result h4"
      ).innerHTML = `Something is  not right <br>  ${err} <br>`;
    });
}
