import { gifHtmlString } from "./database.js";

// const allGifs = getGifs()
const gifString= gifHtmlString()

const parentHTMLElement = document.querySelector(".gif")

parentHTMLElement.innerHTML = gifString

