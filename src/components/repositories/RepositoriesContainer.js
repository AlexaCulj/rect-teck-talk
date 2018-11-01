import React from "react";
import { connect } from "react-redux";

import Repositories from "./Repositories";

class RepositoriesContainer extends React.Component {
  componentDidMount() {
    fetch(`https://api.github.com/users/kitdemonio/repos`)
      .then(response => response.text())
      .then(repos => {
        console.log("repos fetched: ", repos);
      });
  }

  render() {
    return <Repositories repositories={this.props.repositories} />;
  }
}

const mapStateToProps = ({ repositories }) => ({ repositories });

export default connect(mapStateToProps)(RepositoriesContainer);
