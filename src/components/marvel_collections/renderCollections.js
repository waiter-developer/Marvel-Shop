

export function renderCollections(arr = []) {

    return arr.map(elem => {

        return`
            <div class="collections_cards_item col" data-hero-name="Wonder Women">
                <img class="cards_item--img" src="${elem}" alt="Marvel Hero">
            </div>
        `
    }).join('')

}
