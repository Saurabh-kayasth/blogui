import React, { Component } from "react";
import "../styles/Popular.css";
import FlatList from "flatlist-react";
import Wall from "../assets/wall.jpeg";
import Wall2 from "../assets/wall2.jpeg";
import Wall3 from "../assets/wall3.webp";

class PopularComponent extends Component {
  constructor() {
    super();
  }

  renderPerson = (person, idx) => {
    return (
      <div class="pstContainP">
        <div class="postP">
          <img src={person.img} class="postImageP" />
        </div>
        <div class="dataContainerP">
          <span class="postTitle">{person.title}</span>
          <div class="descriptionP">
            This is a chat based application developed using react native....
          </div>
          <span class="descriptionP">05 Jan 2020 12:45 PM</span>
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
      <div class="popularContainer">
        <div class="popularHeader">
          <h6 class="heading">POPULAR POSTS</h6>
        </div>
        <div class="wrapPostPopular">
          <FlatList list={people} renderItem={this.renderPerson} />
        </div>
      </div>
    );
  }
}

export default PopularComponent;
