import React from 'react';
import ReactDOM from 'react-dom/client'

//react element
const Heading = (
    <h1 className="head" tabIndex = "5">
        Namaste react using jsx
    </h1>    
)

//react component
const FirstFun = ()=>
    <h1>Iam a small react component</h1>


const ReactHeading = ()=>{
return <div>
{Heading}
<FirstFun/>
<h2>I am a React Heading</h2>
</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactHeading/>);

