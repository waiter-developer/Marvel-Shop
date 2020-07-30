import {MarvelBox} from "./components/marvel_box/MarvelBox"
import {MarvelCollections} from "./components/marvel_collections/MarvelCollections";
import {MarvelPersonalDetails} from "./components/marvel_personal_details/MarvelPersonalDetails";
import {MarvelShop} from "./components/marvel_shop/MarvelShope";

import './sass/index.sass'
import {renderCollections} from "./components/marvel_collections/renderCollections";



const box = new MarvelBox( '.root', {
    components: [MarvelCollections, MarvelPersonalDetails, MarvelShop]
})
box.render()


