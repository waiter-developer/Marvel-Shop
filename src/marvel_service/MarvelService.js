

export default class MarvelService {

    _PRIV_KEY = 'cbd89c31bf8a3499a0edbcda6cfed342d7c2b713'
    _PUBLIC_KEY = '205e292fb006041028f90bf5030122db'

    async getDataMarvel(url) {

        const response = await fetch(`${url}?apikey=${this._PUBLIC_KEY}`)

        if(!response.ok) {
            throw new Error(`Something went wrong ${response.status}`)
        }

        return await response.json()
    }

}
