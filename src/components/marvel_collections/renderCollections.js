

export function renderCollections(arr = []) {

    return arr.map(elem => {

        return`
            <div class="collections_cards_item col">
                <img src="${elem}" alt="Marvel Hero" title="Marvel Hero">
            </div>
        `

    }).join('')

}
