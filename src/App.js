import React from "react";
import ImgCard from "./components/ImgCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
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

  shuffleArray = (pets) => {
    let i = pets.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pets[i];
      pets[i] = pets[j];
      pets[j] = temp;
    }
    return pets;
  }

  imgClicked = (petId) => {
    this.setState({ pets: this.shuffleArray(this.state.pets.slice(0)) });
    if (this.state.clicked.indexOf(petId) === -1) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ clicked: this.state.clicked.concat([petId])});
    } else {
      this.setState({ clicked: [] });
      if (this.state.score > this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }
      this.setState({ score: 0 });
    }
  }


  render () {
    return (
      <div className="container">
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.pets.map((pet, index) => (
            <ImgCard
              key={index}
              id={pet.id}
              name={pet.name}
              image={pet.image}
              onClick={this.imgClicked}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;