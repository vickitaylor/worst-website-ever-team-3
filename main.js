import { getGifs } from "./database.js";

const allGifs = getGifs()

const parentHTMLElement = document.querySelector(".gif")

parentHTMLElement.innerHTML = allGifs