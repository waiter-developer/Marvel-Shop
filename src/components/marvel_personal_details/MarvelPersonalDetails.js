import {MarvelComponent} from "../core/MarvelComponent";

export class MarvelPersonalDetails extends MarvelComponent{






    render() {
        return `
            <div class="marvel_personal_details">
        <h2 class="marvel_personal_details--title">You should choose own the dream team !</h2>
        <div class="row">
            <div class="col-4 personal_details_image">
                <img class="details_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU" alt="Marvel Hero" title="Marvel Hero">
            </div>
            <div class="col-8 personal_details_introduction">
                <ul class="details_introduction_property">
                    <li>
                        <span class="intro_list--title" >Name:</span>  <span>
                                                TOR
                                          </span>
                    </li>
                    <li>
                        <span class="intro_list--title" >Description:</span>   <span>
                                                        He was born Kal-El on the planet Krypton, before being rocketed to
                                                        Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...
                                                    </span>
                    </li>   
                    <li>
                        <span class="intro_list--title" > Superpowers:</span> <span>
                                                        Solar energy absorption and healing factor, solar flare and heat vision,
                                                        solar invulnerability, flight
                                                    </span>
                    </li>
                    <li>
                        <span class="intro_list--title" >Catchphrase: </span>  <span>
                                                        “Look, up in the sky, it's a bird, it's a plane, it's Superman!”
                                                    </span>
                    </li>

                </ul>
                <div class="details_introduction_options">
                    <button class="btn btn-danger btn-lg" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-archive-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM6 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                        </svg>
                        Trash
                    </button>
                    <button class="btn btn-success btn-lg" >
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
        `
    }
}