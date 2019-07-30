import React from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import pets from "./pets.json";
import "./App.css";
// import { finished } from "stream";

class App extends React.Component {
  state = { pets }

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
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;