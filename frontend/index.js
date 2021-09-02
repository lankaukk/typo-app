const endPoint = "http://localhost:3000/api/v1/compositions"

document.addEventListener('DOMContentLoaded', () => {
    getCompositions()
    
    const saveForm = document.getElementById('save-form')
    saveForm.addEventListener("submit", (e) => createFormHandler(e))
})

function createFormHandler(e) {
    e.preventDefault()
   
    const artistInput = document.querySelector("#artist").value
    const date = document.querySelector('#date').innerText
    const typeface = document.querySelector('#typeface').innerText
    const characters = document.querySelector('#characters').innerText
    const color1 = document.querySelector('#block1').style.backgroundColor
    const color2 = document.querySelector('#block2').style.backgroundColor
    const color3 = document.querySelector('#block3').style.backgroundColor
    const color4 = document.querySelector('#block4').style.backgroundColor
    const color5 = document.querySelector('#block5').style.backgroundColor
    const colors = color1 + ", " + color2 + ", " + color3 + ", " + color4 + ", " + color5

    const composition = { 
        characters: characters,
        colors: colors,
        artist_name: artistInput,
        font_family: typeface,
        created_at: date
    }
    postFetch(composition);
}

function postFetch(composition) {
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({composition: composition})
    })
    .then(response => response.json()) 
    .then(composition => {
        const compositionData = composition.data
        let newComposition = new Composition(compositionData, compositionData.attributes)
        document.querySelector('#gallery').innerHTML += newComposition.renderCompositionCard();  

        const galleryItems = document.getElementsByClassName('gallery-items');
    const galleryItemsArray = Array.prototype.slice.call(galleryItems);

    galleryItemsArray.forEach(item => {
        item.addEventListener("click", () => {
            document.getElementById('char1').innerHTML = "";
            document.getElementById('char2').innerHTML = "";
            document.getElementById('char3').innerHTML = "";
            document.getElementById('char4').innerHTML = "";
            document.getElementById('char5').innerHTML = "";
            document.getElementById('char6').innerHTML = "";
            document.getElementById('char7').innerHTML = "";
            document.getElementById('save-button').style.display = "none";
            document.getElementById('artist').style.display = "none";
            document.getElementById('artist-signature').style.display = "block";
            document.getElementById('color-scheme').style.display = "none";
            document.getElementById('typeface').style.display = "none";

            let itemID = item.dataset.id
            showCompositions(itemID)
            })
        }) 
    })
    

     
}

function getCompositions() {
    fetch(endPoint)
    .then(response => response.json())
    .then(compositions => {
        compositions.data.forEach(composition => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            let newComposition = new Composition(composition, composition.attributes)

            document.querySelector('#gallery').innerHTML += newComposition.renderCompositionCard();  
        })

    const galleryItems = document.getElementsByClassName('gallery-items');
    const galleryItemsArray = Array.prototype.slice.call(galleryItems);

    galleryItemsArray.forEach(item => {
        item.addEventListener("click", () => {
            document.getElementById('char1').innerHTML = "";
            document.getElementById('char2').innerHTML = "";
            document.getElementById('char3').innerHTML = "";
            document.getElementById('char4').innerHTML = "";
            document.getElementById('char5').innerHTML = "";
            document.getElementById('char6').innerHTML = "";
            document.getElementById('char7').innerHTML = "";
            document.getElementById('save-button').style.display = "none";
            document.getElementById('artist').style.display = "none";
            document.getElementById('artist-signature').style.display = "block";
            document.getElementById('color-scheme').style.display = "none";
            document.getElementById('typeface').style.display = "none";

            let itemID = item.dataset.id
            showCompositions(itemID)
            })
        })  

    })
}

function showCompositions(itemID) {
    fetch(endPoint + "/" + itemID)
    .then(response => response.json())
    .then(item => {
        const itemData = item.data.attributes
        const artist_name = itemData.artist.name
        const date = itemData.created_at
        const charactersString = itemData.characters
        const typeface = itemData.font_family

        const colorString = itemData.colors
        const wavyString = colorString.replaceAll(/\),/g,")~")
        const bestString = wavyString.split("~")

        const char1 = itemData.characters[0]
        const char2 = itemData.characters[1]
        const char3 = itemData.characters[2]
        const char4 = itemData.characters[3]
        const char5 = itemData.characters[4]
        const char6 = itemData.characters[5]
        const char7 = itemData.characters[6]
        document.getElementById('char1').innerHTML = char1;
        document.getElementById('char2').innerHTML = char2;
        document.getElementById('char3').innerHTML = char3;
        document.getElementById('char4').innerHTML = char4;
        document.getElementById('char5').innerHTML = char5;
        document.getElementById('char6').innerHTML = char6;
        document.getElementById('char7').innerHTML = char7;

        const color1 = bestString[0]
        const color2 = bestString[1]
        const color3 = bestString[2]
        const color4 = bestString[3]
        const color5 = bestString[4]

        document.getElementById('char1').style.color = color1;
        document.getElementById('char2').style.color = color3;
        document.getElementById('char3').style.color = color5;
        document.getElementById('char4').style.color = color2;
        document.getElementById('char5').style.color = color4;
        document.getElementById('char6').style.color = color1;
        document.getElementById('char7').style.color = color3;

        document.getElementById('canvas').style.fontFamily = typeface;

        document.getElementById('characters').innerHTML = charactersString;
        document.getElementById('date').innerHTML = "On " + date;
        document.getElementById('artist-signature').innerHTML = "Created by " + artist_name;
        
    })
    
}

function makeComposition() {
    document.getElementById('characters').innerHTML = "";

    document.getElementById('char1').innerHTML = "";
    document.getElementById('char2').innerHTML = "";
    document.getElementById('char3').innerHTML = "";
    document.getElementById('char4').innerHTML = "";
    document.getElementById('char5').innerHTML = "";
    document.getElementById('char6').innerHTML = "";
    document.getElementById('char7').innerHTML = "";

    document.getElementById('save-button').style.display = "block";
    document.getElementById('artist').style.display = "block";
    document.getElementById('color-scheme').style.display = "block";
    document.getElementById('artist-signature').style.display = "none";

    makeColors()
    makeCharacters()
    makeTypeface()

    let color1 = document.getElementById('block1').style.backgroundColor;
    let color2 = document.getElementById('block2').style.backgroundColor;
    let color3 = document.getElementById('block3').style.backgroundColor;
    let color4 = document.getElementById('block4').style.backgroundColor;
    let color5 = document.getElementById('block5').style.backgroundColor;

    document.getElementById('char1').style.color = color1;
    document.getElementById('char2').style.color = color3;
    document.getElementById('char3').style.color = color5;
    document.getElementById('char4').style.color = color2;
    document.getElementById('char5').style.color = color4;
    document.getElementById('char6').style.color = color1;
    document.getElementById('char7').style.color = color3;

    makeTodaysDate()

}

function makeColors() {
    const blocks = document.getElementsByClassName('color-block');

    for (var i=0; i < blocks.length; i++) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        blocks[i].style.backgroundColor = bgColor;
    }
}

function makeCharacters() {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&****()+=?;:{}<>,."

    const characterArray = []
    for (var i=1; i < 8; i++) {
        randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
        characterArray.push(randomCharacter)
        document.querySelector("#char" + i).innerHTML = randomCharacter
    }
    
    characters = characterArray.join("");

    // puts characters on side panel
    document.getElementById('characters').insertAdjacentHTML('beforeend', characters);
    
}

function makeTypeface() {
    const possibleTypefaces = ['Helvetica', 'Courier','Courier Neue', 'Times', 'Times New Roman', 'Impact', 'Roboto', 'Arial', 'Georgia', 'Cambria', 'Palette Mosaic', 'Freckle Face', 'Grenze Gotisch', 'Limelight', 'Macondo Swash Caps', 'Modak', 'Nosifer', 'Plaster', 'Rammetto One', 'Slackey', 'Montserrat', 'Source Code Pro']
    const randomChoice = Math.floor(Math.random() * possibleTypefaces.length);
    const typeface = possibleTypefaces[randomChoice];

    document.getElementById('typeface').innerHTML = typeface;
    document.getElementById('typeface').style.fontFamily = typeface;

    // change typeface of characters on canvas
    document.getElementById('canvas').style.fontFamily = typeface;
}

function makeTodaysDate() {
    const d = new Date();

    var month = d.toLocaleString('en-US', { month: 'long' }) //months from 1-12
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();

    newdate = month + " " + day + ", " + year ;

    document.getElementById('date').innerHTML = newdate;
}

function highlightGallery() {
    const gallery = document.getElementById('gallery')
    console.log(gallery)
    gallery.classList.add("highlight");
}