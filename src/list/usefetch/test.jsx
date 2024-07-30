import UseFetch from "./index.jsx"
import "../../styles.css"

export default function UseFetchHookCheck(){
    const {data, error, pending} = UseFetch('https://dummyjson.com/products',{});
    console.log(data,error,pending);
    return(
        <div className="UseFetchHookCheck">
            <h1>Using fetch hook</h1>
            {
                pending ? <h3>PEnmding !!! please wait </h3> : null
            }

            {error ? <h3>{error}</h3> : null}

            {
                data && data.products && data.products.length 
            ? 
                data.products.map( (productItem) =>(<p key = {productItem.key}>{productItem.title}</p>))
            :
                null
            }
        </div>
    )
}
