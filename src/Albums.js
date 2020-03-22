import React, { Component } from "react";
 
class Albums extends Component {
  render() {
    return (
      <div class="container-fluid">
        <h2>Roses</h2>
        <p>
			<img src="photos/Roses/rose1.jpg" width="350" height="350"/>
			<img src="photos/Roses/rose2.jpg" width="350" height="350"/>
			<img src="photos/Roses/rose3.jpg" width="350" height="350"/> 
		</p>
		
		<h2>Fossils</h2>
		<p>
			<img src="photos/Fossils/fossil1.jpg" width="350" height="350"/>
			<img src="photos/Fossils/fossil2.jpg" width="350" height="350"/>
			<img src="photos/Fossils/fossil3.jpg" width="350" height="350"/>
		</p>
		
      </div>
    );
  }
}
 
export default Albums;