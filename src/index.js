
import './sass/index.sass'


import MarvelService from "./MarvelService";

const SpiderMan = new MarvelService()
SpiderMan.getDataMarvel('https://gateway.marvel.com/v1/public/stories')
    .then(( { data } ) => {
        const { results:res } = data
        console.log(res)
    })





