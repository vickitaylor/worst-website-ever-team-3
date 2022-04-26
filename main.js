import { gifHtmlString } from "./database.js";

// const allGifs = getGifs()
const gifString= gifHtmlString()

const parentHTMLElement = document.querySelector(".gifContainer")

parentHTMLElement.innerHTML = gifString