const API_BASE_URL = "https://restcountries.com/v3.1";
const elCountriesList = document.querySelector(".countries-list");

export const searchCountries = async (name = "uzb") => {
  try {
    const res = await fetch(`${API_BASE_URL}/name/${name}`);

    if (!res.ok) {
      throw new Error("Xatolik");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const displayCountries = (countries) => {
  if (!countries.length) return;

  let countriesStr = "";

  countries.forEach((el) => {
    countriesStr += `<li class="list-style-none">
                        <div class="card" style="width: 18rem">
                        <img src="${el.flags.png}" class="card-img-top" alt="${el.flags.alt}" />
                        <div class="card-body">
                            <h5 class="card-title">${el.name.common}</h5>
                        </div>
                        </div>
                    </li>`;
  });

  elCountriesList.innerHTML = countriesStr;
};
