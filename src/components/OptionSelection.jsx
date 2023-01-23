import React from "react";
import { arrayItems } from "../AIOptions";

export default function OptionSelection(){
    return (
    <>
        <h1>React API App</h1>
        <div className="grid-main">
            {arrayItems.map((item) => {
                return (<>
                    <div className="grid-child">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>
                </>
                );
            }
            )}
        </div>
    </>
    )
}