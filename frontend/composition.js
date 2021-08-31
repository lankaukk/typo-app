class Composition {

    constructor(composition, compositionAttributes) {
        this.id = composition.id
        this.characters = compositionAttributes.characters
        this.colors = compositionAttributes.colors
        this.font_family = compositionAttributes.font_family
        this.artist_name = compositionAttributes.artist.name
        this.date = compositionAttributes.created_at
        Composition.all.push(this);
        
    }

    renderCompositionCard() {
        return `
            <div data-id=${this.id} class="gallery-items">
                <h1 class="characters">${this.characters}</h1>
                <h4>Created by ${this.artist_name}</h4>
                <h4>${this.date}</h4>
            </div>
            <br><br>`;   
    }

}

Composition.all = [];