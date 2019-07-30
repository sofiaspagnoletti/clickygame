import React from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import pets from "./pets.json";
import "./App.css";
// import { finished } from "stream";

class App extends React.Component {
  state = { 
    pets,
    clicked: [],
    score: 0,
    highScore: 0,
  }

  imgClicked = (petId) => {
    
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky game</h1>
        {this.state.pets.map(pet => (
          <ImgCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            image={pet.image}
            onClick={this.imgClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;