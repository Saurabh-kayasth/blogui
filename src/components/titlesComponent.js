import React, { Component } from "react";
import "../styles/Titles.css";
import FlatList from "flatlist-react";
import Wall from "../assets/wall.jpeg";
import Wall2 from "../assets/wall2.jpeg";
import Wall3 from "../assets/wall3.webp";

class TitlesComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderPOST = (person, idx) => {
    return (
      <div class="titleContain">
        <img src={person.img} class="titleImage" />
        <div class="titleData">
          <span class="titleHeading">{person.title}</span>
          <span class="description">
            This is a chat based application developed using react native....
          </span>
          <span class="description">05 Jan 2020 12:45 PM</span>
        </div>
      </div>
    );
  };

  render() {
    let people = [
      {
        title: "React Native Gifted Chat",
        img: Wall
      },
      {
        title: "React Navigation",
        img: Wall2
      },
      {
        title: "React Navigation Stack",
        img: Wall3
      },
      {
        title: "React Native Linear Gradient",
        img: Wall2
      },
      {
        title: "React Navigation Stack",
        img: Wall3
      },
      {
        title: "React Native Linear Gradient",
        img: Wall2
      },
      {
        title: "React Native Gifted Chat",
        img: Wall
      },
      {
        title: "React Native Gifted Chat",
        img: Wall2
      },
      {
        title: "React Navigation Stack",
        img: Wall3
      },
      {
        title: "React Native Linear Gradient",
        img: Wall
      },
      {
        title: "React Native Gifted Chat",
        img: Wall3
      },
      {
        title: "React Native Linear Gradient",
        img: Wall2
      },
      {
        title: "React Navigation Stack",
        img: Wall3
      }
    ];

    return (
      <div class="titleContainer">
        <div class="titlesHeader">
          <h6 class="heading">PREVIOUS POSTS</h6>
        </div>
        <div class="wrapPost">
          <FlatList list={people} renderItem={this.renderPOST} />
        </div>
      </div>
    );
  }
}

export default TitlesComponent;
