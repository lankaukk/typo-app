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