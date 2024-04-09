import React from "react";

import { Link } from "react-router-dom";
import Greeting from "./Greeting";
import Form from "./Form";
import Counter from "./Counter";

function Menu() {
  return (
    <div> 
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Hello,React!</h1>
        <Form />
        <Counter />
        <Greeting name="John" />
      </div>
    </div>
   );
}

export default Menu;