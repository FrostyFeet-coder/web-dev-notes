import React, { memo, useState } from 'react'

function Memo() {

    let [title, setTitle] = useState("web dev")
    function HandleClick() {
        setTitle(Math.floor(Math.random()*10))
    }
        return (
          <div>
            <ChotaMemo title={title} />
            <button onClick={HandleClick}>Click me</button>
            <ChotaMemo title="web dev" />
            <ChotaMemo title="ml dev" />
          </div>
        );
}



let ChotaMemo = memo(function ({ title }) {
    return <div>
        Title : {title}
    </div>
})
export default Memo