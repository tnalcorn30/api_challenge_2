const apiKey = "9Oe9z20KHqQ04lr3gI1XFb1ZvTCTog5n"

//const baseURL = 'https://api.giphy.com/v1/gifs/search?api_key=9Oe9z20KHqQ04lr3gI1XFb1ZvTCTog5n&q=lilo&and&stitch&limit=1&offset=&rating=g&lang=en'

let randomURL = ('https://api.giphy.com/v1/gifs/search?api_key=9Oe9z20KHqQ04lr3gI1XFb1ZvTCTog5n&q=lilo&and&stitch&limit=1&offset=' + random1() + "&rating=g&lang=en")

function random1(min, max) {
    min = Math.ceil(1);
    max = Math.floor(164);
    return Math.floor(Math.random() * (164 - 1) + 1);
};
console.log(randomURL);

const getLiloandStitch = () => { 
    fetch(randomURL)
        .then(res => res.json())
        .then(json => {
            console.log(json.data[0])
            showLiloandStitch(json)
        })
}

document.getElementById("generate").addEventListener("click", getLiloandStitch)

function showLiloandStitch(json) {
    // Grab the container
    const wrapper = document.getElementById("stitches")

    // Create the div and iframe
    let div = document.createElement('div')
    let iFr = document.createElement('iframe') // trying to use an 'img' tag kept giving issues with CORB

    // Assign classes
    div.className = "col-md text-center embed-responsive"
    iFr.className = "responsive-iframe"

    // Give the iframe a gif!
    iFr.src = json.data[0].embed_url

    // Add the iframe to the div
    div.appendChild(iFr)

    // Add the div to the wrapper div
    wrapper.appendChild(div)
    
}

