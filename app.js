{/* <div id = "parent">
    <div id = "child">
        <h1>i am hi</h1>
        <h2>i am h2</h2>
    </div>
    <div id = "child2">
        <h1>i am hi</h1>
        <h2>i am h2</h2>
    </div>
</div> */}


const heading = React.createElement(
    'div',
    {id:"parent"},
    React.createElement(
        'div',
        {id:"child"},
        [React.createElement(
            'h1',
            {id:"parent"},
            "Hello, I am h1"),
            React.createElement(
                'h2',
                {id:"parent"},
                "Hello, I am h2")]
),
React.createElement(
    'div',
    {id:"child"},
    [React.createElement(
        'h1',
        {id:"parent"},
        "Hello, I am h1"),
        React.createElement(
            'h2',
            {id:"parent"},
            "Hello, I am h2")]
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//just checking