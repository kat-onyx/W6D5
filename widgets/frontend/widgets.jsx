import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  ReactDOM.render(
    <Root />,
    root
  );
});

//react component
function Root () {
  const tabsInfo = [
    {title: "one", content: "I am the first"}, 
    {title: "two", content: "I am the second"}, 
    {title: "three", content: "I am the third"}
  ];
return (
    <div> 
      <Clock />
      <Tab tabsInfo={tabsInfo}/>
    </div>
  );
}