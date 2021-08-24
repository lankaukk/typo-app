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

    document.getElementById('char1').innerHTML = "";
    document.getElementById('char2').innerHTML = "";
    document.getElementById('char3').innerHTML = "";
    document.getElementById('char4').innerHTML = "";
    document.getElementById('char5').innerHTML = "";
    document.getElementById('char6').innerHTML = "";
    document.getElementById('char7').innerHTML = "";

    document.getElementById('save-button').style.display = "block";
    document.getElementById('artist').style.display = "block";

    makeColors()
    makeCharacters()
    makeTypeface()

    let color1 = document.getElementById('block1').style.backgroundColor;
    console.log(color1);
    let color2 = document.getElementById('block2').style.backgroundColor;
    console.log(color2);
    let color3 = document.getElementById('block3').style.backgroundColor;
    console.log(color3);
    let color4 = document.getElementById('block4').style.backgroundColor;
    console.log(color4);
    let color5 = document.getElementById('block5').style.backgroundColor;
    console.log(color5);

    document.getElementById('canvas').style.color = color1;

    // const chars = document.getElementById('canvas').innerText
    // const charsArray = chars.split('')

    // const char2 = charsArray[2]
    // char2.style.color = color3;


    // console.log(charsArray[2]);

    // placeOnCanvas()

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
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()+=?;:{}<>,."

    const characterArray = []
    for (var i=1; i < 8; i++) {
        randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
        characterArray.push(randomCharacter)
        document.querySelector("#char" + i).innerHTML = randomCharacter
        // debugger
    }
        

    console.log(characterArray);
    characters = characterArray.join(" ");
    console.log(characters);

    // puts characters on side panel
    document.getElementById('characters').insertAdjacentHTML('beforeend', characters);

    // place characters on canvas
    // document.getElementById('canvas').insertAdjacentHTML('beforeend', characters);

    // document.getElementById('char1').innerText = characterString[1]
    
}

function makeTypeface() {
    const possibleTypefaces = ['Helvetica', 'Courier','Courier Neue', 'Times', 'Times New Roman', 'Impact', 'Roboto', 'Arial', 'Georgia', 'Cambria']
    const randomChoice = Math.floor(Math.random() * possibleTypefaces.length);
    const typeface = possibleTypefaces[randomChoice];

    document.getElementById('typeface').innerHTML = typeface;
    document.getElementById('typeface').style.fontFamily = typeface;

    // change typeface of characters on canvas
    document.getElementById('canvas').style.fontFamily = typeface;
}

// function placeOnCanvas() {
// }

function makeTodaysDate() {
    const d = new Date();

    var month = d.toLocaleString('en-US', { month: 'long' }) //months from 1-12
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();

    newdate = month + " " + day + ", " + year ;

    document.getElementById('date').innerHTML = newdate;
}