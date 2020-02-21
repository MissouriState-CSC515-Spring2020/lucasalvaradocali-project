import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Recent Photographs</h2>
			<img src="photos/Roses/rose1.jpg" width="350" height="350"/>
			<img src="photos/Roses/rose2.jpg" width="350" height="350"/>
			<img src="photos/Fossils/fossil3.jpg" width="350" height="350"/>
      </div>
    );
  }
}
 
export default Home;