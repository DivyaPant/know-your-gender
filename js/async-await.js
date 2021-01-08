// Using async-await for fetching data from API

async function receiveData(input) {
  try {
    const response = await fetch(`https://api.genderize.io/?name=${input}`);
    const data = await response.json();

    if (!data.gender) {
      throw new Error(`${data.name} is not a valid name`);
    }
    dataOutput(data);
    document.querySelector(".load").style.display = "none";
  } catch (err) {
    document.querySelector(".load").style.display = "none";
    dataOutput(err);
    document.querySelector(
      ".result h4"
    ).innerHTML = `Something is  not right <br>  ${err} <br>`;
  }
}
