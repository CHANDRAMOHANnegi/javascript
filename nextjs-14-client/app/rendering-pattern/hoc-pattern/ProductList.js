import { withFetchData } from "./withFetchData"
import { withStyles } from "./withStyles"

export const ProductList = ({ data, style }) => {
    return data.map(e => (
        <div key={e.id} className="product-item border" style={style}>
            <h2>Item : {e.title}</h2>
        </div>
    ))
}


const Todos = withFetchData(withStyles(ProductList), "https://jsonplaceholder.typicode.com/todos")
const Photos = withFetchData(withStyles(ProductList), "https://jsonplaceholder.typicode.com/photos")
const Albums = withFetchData(withStyles(ProductList), "https://jsonplaceholder.typicode.com/albums")



export { Todos, Photos, Albums }