import React, { Component } from "react";
import "../styles/Posts.css";
import FlatList from "flatlist-react";
import Wall from "../assets/wall.jpeg";
import Wall2 from "../assets/wall2.jpeg";
import Wall3 from "../assets/wall3.webp";

class PostsComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderPerson = (person, idx) => {
    return (
      <div class="pstContain">
        <div class="post">
          <img src={person.img} class="postImage" />
        </div>
        <div class="dataContainer">
          <span class="postTitle">{person.title}</span>
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
      <div class="postContainer">
        <div class="postHeader">
          <h6 class="heading">RECENT POSTS</h6>
          <div>
            <input class="inputPost" />
          </div>
        </div>
        <div class="wrapPost">
          <FlatList list={people} renderItem={this.renderPerson} />
        </div>
      </div>
    );
  }
}

export default PostsComponent;
