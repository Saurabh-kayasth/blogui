import React, { Component } from "react";
import PostsComponent from "../components/postsComponent";
import TitlesComponent from "../components/titlesComponent";
import PopularComponent from "../components/popularComponent";
import "../styles/HomeScreen.css";

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <div style={styles.container}>
        {/* <div class="banner"></div> */}
        <PopularComponent />
        <div style={styles.innerContainer}>
          <PostsComponent />
          <TitlesComponent />
        </div>
      </div>
    );
  }
}

export default HomeScreen;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  innerContainer: {
    display: "flex"
  }
};
