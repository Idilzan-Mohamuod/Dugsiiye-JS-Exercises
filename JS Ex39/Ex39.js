

const languages = {
  en: "English",
  so: "Somali",
  es: "Spanish",
  fr: "French",
  de: "German",
  ar: "Arabic",
  it: "Italian",
  pt: "Portuguese",
  ru: "Russian",
  tr: "Turkish",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  hi: "Hindi"
};


//  Language Dropdowns


const populateLanguageOptions = () => {

  const fromSelect = document.querySelector("#from-lang");
  const toSelect = document.querySelector("#to-lang");

  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";

  Object.entries(languages).forEach(([code, name]) => {

    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = name;

    const option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);

  });

  fromSelect.value = "en";
  toSelect.value = "so";

};

// Translate Function

const translateText = async (from, to, text) => {

  const url =
`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    const result = await response.json();

    if (result.responseData) {
      return result.responseData.translatedText;
    }

    return "Translation unavailable.";

  } catch (error) {

    console.error(error);

    return "Translation failed.";

  }

};


// Translation Button code

document
.querySelector("#translate-btn")
.addEventListener("click", async () => {

  const text =
  document.querySelector("#source-text").value.trim();

  const from =
  document.querySelector("#from-lang").value;

  const to =
  document.querySelector("#to-lang").value;

  const output =
  document.querySelector("#translated-text");

  if (text === "") {

    output.textContent = "Please enter text.";

    return;

  }

  output.textContent = "Translating...";

  const translated =
  await translateText(from, to, text);

  output.textContent = translated;

});


// Initialize


document.addEventListener("DOMContentLoaded", () => {

  populateLanguageOptions();

});