import {MarvelComponent} from "../core/MarvelComponent";
import {renderFieldTable} from "./renderFieldTable";



const exampleArr = [
    {
        name: 'Captain Marvel',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQohu73PI3w-oxlnNHoG_Ba5kqX-gcvEe32tQ&usqp=CAU",
        price: '12',

    },
    {
        name: 'Captain America',
        img: "https://i.pinimg.com/originals/d5/81/79/d58179ac3e5781037d0fbf2bf3a97cdc.jpg  ",
        price: '23',

    },
    {
        name: 'Spider Man',
        img: "https://upload.wikimedia.org/wikipedia/en/0/02/Spider-Man_2_Poster.jpg",
        price: '145',

    }
]




export class MarvelShop extends MarvelComponent{



    render() {
        return `
        <div class="marvel_shop">
        <table>
            <thead>
            <tr class="table_header">
                <th>
                    Image
                </th>
                <th>
                    Name
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Price
                </th>
                <th>
                    Summary
                </th>
                <th></th>
                <th></th>
                <th></th>

            </tr>
            </thead>
            <tbody>
                ${renderFieldTable(exampleArr)}
            </tbody>
            <tfoot>
            <tr class="table_tfoot">
                <td></td>
                <td></td>
                <td></td>
                <td>Total: </td>
                <td>Infinity</td>
                <td></td>
                <td></td>
                <td></td>

            </tr>
            </tfoot>
        </table>
    </div>
`
    }
}