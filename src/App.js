import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    selectedImage:'https://s3.amazonaws.com/ionic-marketplace/image-upload/icon.png'
  }

  imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({selectedImage: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    const {selectedImage} = this.state
    return (
      <div className="App">
        <div className="container">
          <h1 className="heading">Add your image</h1>
          <div className="img-holder">
            <img src={selectedImage} alt="" id="" className="" />
          </div>
          <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} />
          <div className="label">
            <label htmlFor="input" className="image-upload">
              <i className="material-icons">add_photo_alternate</i>
              Choose Image
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
