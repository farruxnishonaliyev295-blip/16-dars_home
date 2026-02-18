"use strict";

import { displayCountries, searchCountries } from "./functions.js";

const elForm = document.querySelector(".my-form");

elForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const val = e.target.search.value;

  const countries = await searchCountries(val);
  console.log(countries);

  displayCountries(countries);
});
