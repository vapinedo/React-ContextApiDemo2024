import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "../userContext";

class ComponentE extends Component {

  static contextType = UserContext
  
  render() {
    return (
      <article>
        Component E context {this.context.firstname}
        <ComponentF />
      </article>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE