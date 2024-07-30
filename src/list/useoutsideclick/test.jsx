import { useRef, useState } from "react";
import UseOnClickOutside from "./index.jsx";
import "../../styles.css"



export default function UseOnClickOutsideTest(){
    const [showContent, setShowContent] = useState(false);

    const ref = useRef();
    UseOnClickOutside(ref, () => setShowContent(false))

    return(
        <div className="UseOnClickOutsideTest">
            {showContent ? (<div ref = {ref}>
                <h1>
                    This is random
                </h1>
                <h3>
                    Please click outside to close it
                </h3>
            </div>)
            :
            (<button onClick={ () => setShowContent(true)} > Show Content </button>)
            }
        </div>
    )
 }