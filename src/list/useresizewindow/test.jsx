
import UseWindowResize from "./index.jsx";
import "../../styles.css"


export default function UseWindowResizeTest(){

    const windowSize = UseWindowResize();
    const{width, height} = windowSize;
    return<div className="UseWindowResizeTest">
        <h1>resize hook</h1>
        <p> width: {width}</p>
        <p> height: {height}</p>
    </div>
}
