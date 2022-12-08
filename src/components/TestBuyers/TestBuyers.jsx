import React from "react";

import testbuyers from "../../store/testbuyers";
import {observer} from "mobx-react-lite"



const TestBuyers = observer(() => {
    

    return (
        <>
        <div>
            <div>
               {testbuyers.companies.map(t =>
                <div className="company" key={t.id}>
                    {t.name}
                </div>)} 
            </div>
        </div>
        </>
    )
}
)
export default TestBuyers;