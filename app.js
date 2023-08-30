import React from 'react';
import ReactDOM from 'react-dom/client'



const Header = ()=>{
return(
<div className="header">
  <div className="logoContainer">
    <img className="logo" src ="https://dynamic.brandcrowd.com/asset/logo/b424bc79-c41f-4974-b882-b8464f85ad8f/logo-search-grid-1x?logoTemplateVersion=1&v=637704031370270000"/>
   
  </div>
  <div className="navItems">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Cart</li>
        <li>Search</li>
    </ul>
  </div>
</div>
);
}

const ResCards = ()=>{
  return(
    <div className="res-cards">
     <img
     className="reslogo"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkzYops_BDPA4zpikXtB7O73q9qRkjNYWSw&usqp=CA"/>
     <h3>Hungry</h3>
     <h4>vegetarian</h4>
     <h4>4.5 stars</h4>
    </div>
  );
}

const Body = ()=>{
return(
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
        <ResCards/>
    </div>

  </div>
);
}


const AppLayout = ()=>{
  return (
  <div className ="app">
    <Header/>
   <Body/>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

