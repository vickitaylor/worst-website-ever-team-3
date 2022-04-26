const gifDatabase = [
        {   id: 1,
            name: "Windmill", 
            Url: "https://media1.giphy.com/media/37WZHpaXJRcxa/200w.webp?cid=ecf05e47nlwlmlgcflh6omrmy3ml990a7bhtwg8vscydk52n&rid=200w.webp&ct=g",
            hovertext:""
        },

        {   id: 2,
            name: "Lucy Drinking",
            Url: "https://media1.giphy.com/media/DOCfegc5Ybok0/200w.webp?cid=ecf05e47scgvqkvbj09mqw447xmzpzqs8qquyu9czlvkx8gx&rid=200w.webp&ct=g",
            hovertext:"",
        },

        {   id: 3,
            name: "Cops Array",
            Url: "https://media0.giphy.com/media/RYjnzPS8u0jAs/200.webp?cid=ecf05e47nnlfrvpc169wtxhq254xi5b3muibwa0b9k4sz1nm&rid=200.webp&ct=g",
            hovertext:"",
        },

        {   id: 4,
            name: "Facts of the Law",
            Url: "https://media4.giphy.com/media/hqsLzE91N19WftPYUF/giphy.gif?cid=ecf05e471kzbnfew8ubi57ee2nzx7fq180a0yzj58qs2whzb&rid=giphy.gif&ct=g",
            hovertext:"",
        },

        {   id: 5,
            name: "loading spiral 1",
            Url: "https://giphy.com/gifs/foosball-y1ZBcOGOOtlpC",
            hovertext:"",
        },
        
        {   id: 6,
            name: "loading bubble bar orange",
            Url: "https://media1.giphy.com/media/ZO9b1ntYVJmjZlsWlm/200.webp",
            hovertext:"",
        },
        
        {   id: 7,
            name: "Blue Screen of Death",
            Url: "https://media2.giphy.com/media/YDj8Ot6mIbJYs/giphy.gif?cid=ecf05e47320sn05e37ayh2elvqtymt1a6e5nyrii5l678ks0&rid=giphy.gif&ct=g",
            hovertext:"",
        },

        {   id: 8,
            name: "Thank you (Rose)",
            Url: "https://media0.giphy.com/media/lrUU99mair7hf75Eb0/200w.webp?cid=ecf05e47da0zg57lz4qm0sigyoil6kqhri8l2xzpb8h737t9&rid=200w.webp&ct=g",
            hovertext:"",
        },

]


export const gifHtmlString = () => {
    let htmlString = ""
        for (const gif of gifDatabase) {
            htmlString += `<div class="gifPics">
            <a href="https://www.google.com"><img class="gifImage" src= ${gif.Url} alt="Fun Guy">
            </a> </div>`
        }
        
        return htmlString
}



export const getGifs = () => {
    return gifDatabase.gifs.map(gif => ({ ...gif }))
}