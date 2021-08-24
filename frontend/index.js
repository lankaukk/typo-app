const endPoint = "http://localhost:3000/api/v1/compositions"

document.addEventListener('DOMContentLoaded', () => {
    getCompositions()
    
})

function getCompositions() {
    fetch(endPoint)
    .then(response => response.json())
    .then(compositions => {
        compositions.data.forEach(compositions => {
            // double check how your data is nested in the console so you can successfully access the attributes of each individual object
            
            const compositionsMarkup = `
            <div data-id=${compositions.id} class="gallery-items">
                <h1 class="characters">${compositions.attributes.characters}</h1>
                <h4>Created by ${compositions.attributes.artist.name}</h4>
                <h4>${compositions.attributes.created_at}</h4>
            </div>
            <br><br>`;

            document.querySelector('#gallery').innerHTML += compositionsMarkup
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
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()+=?;:{}<>,."

    const characterArray = []
    for (var i=1; i < 8; i++) {
        randomCharacter = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
        characterArray.push(randomCharacter)
        document.querySelector("#char" + i).innerHTML = randomCharacter
    }
        

    console.log(characterArray);
    characters = characterArray.join(" ");
    console.log(characters);

    // puts characters on side panel
    document.getElementById('characters').insertAdjacentHTML('beforeend', characters);
    
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


function makeTodaysDate() {
    const d = new Date();

    var month = d.toLocaleString('en-US', { month: 'long' }) //months from 1-12
    var day = d.getUTCDate();
    var year = d.getUTCFullYear();

    newdate = month + " " + day + ", " + year ;

    document.getElementById('date').innerHTML = newdate;
}