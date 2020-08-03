import {MarvelComponent} from "../core/MarvelComponent";
import {renderCollections} from "./renderCollections";



export class MarvelCollections extends MarvelComponent{

    collectionCards = [
       'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU'
    ]


    render() {
        return`
            <div class="marvel_collections">
                    <div class="marvel_collections_promo">
                        <div class="collections_promo_search">
                            <input class="collections_promo_search--input" type="text" placeholder="Type the name your hero">
                            <div class="promo_search_result">
                                <img class="search_result--img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU" alt="M.Marvel" title="M.Marvel">
                            </div>
                        </div>
                        
                    </div>
                <div class="marvel_collections_cards">
                    <div class="collections_cards_items">
                        <div class="row row-cols-1 row-cols-2 row-cols-4">
                            ${ renderCollections(this.collectionCards) }
                        </div>
                    </div>
                </div>
        
            </div>  
        `
    }
}



