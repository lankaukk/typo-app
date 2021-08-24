const endPoint = "http://localhost:3000/api/v1/elements"

document.addEventListener('DOMContentLoaded', () => {
    getElements()
    
})

function getElements() {
    fetch(endPoint)
    .then(response => response.json())
    .then(elements => {
        elements.data.forEach(elements => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            // debugger
            // let newElements = new Elements(elements, elements.attributes)
            
            const elementsMarkup = `
            <div data-id=${elements.id}>
                <h1>${elements.attributes.characters}<h1>
                <h3>${elements.attributes.placements}</h3>
                <h3>${elements.attributes.colors}</h3>
                <h3>${elements.attributes.font_family}</h3>
                <p>Created by ${elements.attributes.composition.artist}</p>
                <p>On ${elements.attributes.composition.created_at}</p>
            </div>
            <br><br>`;

            document.querySelector('#gallery').innerHTML += elementsMarkup
        })
    })
}

function makeComposition() {
    document.getElementById('characters').innerHTML = "";
    document.getElementById('save-button').style.display = "block";
    document.getElementById('artist').style.display = "block";

    makeColors()
    makeCharacters()
    makeTypeface()

    makeTodaysDate()

}

function makeColors() {
    const blocks = document.getElementsByClassName('color-block');
    // console.log(blocks);

    // document.body.style.background = bgColor;

    for (var i=0; i < blocks.length; i++) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        blocks[i].style.backgroundColor = bgColor;
    }
}

function makeCharacters() {
    

    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()+=?;:{}<>,."

    const characterString = []

    for (var i=0; i < 7; i++) {
        randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
        characterString.push(randomCharacter)
    }

    characters = characterString.join(" ");
    console.log(characters);

    
    document.getElementById('characters').insertAdjacentHTML('beforeend', characters);
    
}

function makeTypeface() {

    const possibleTypefaces = ['Helvetica', 'Courier','Courier Neue', 'Times', 'Times New Roman', 'Impact', 'Roboto', 'Arial', 'Georgia', 'Cambria']
    const randomChoice = Math.floor(Math.random() * possibleTypefaces.length);
    const typeface = possibleTypefaces[randomChoice];

    document.getElementById('typeface').innerHTML = typeface;
    document.getElementById('typeface').style.fontFamily = typeface;
}

function makeTodaysDate() {
    const d = new Date();

    var month = d.toLocaleString('en-US', { month: 'long' }) //months from 1-12
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();

    newdate = month + " " + day + ", " + year ;

    document.getElementById('date').innerHTML = newdate;
}