import React, { Component } from "react";
import Title from "./Title";
import Posts from "./Posts";
import Single from "./Single";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";

class Main extends Component {
  state = { loading: true };

  constructor(props) {
    super();
    this.posts = props.posts;
  }

  componentDidMount() {
    this.props.fetchPostsFromDb().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <Posts {...this.props} />
            </div>
          )}
        />
        <Route
          path="/addPhoto"
          render={({ history }) => (
            <AddPhoto
              onSavePost={addedPost => {
                this.props.addPostToDb(addedPost);
              }}
              {...this.props}
            />
          )}
        />
        <Route
          path="/single/:id"
          render={params => (
            <div>
              <Title title="Photowall" />
              <Single
                loading={this.state.loading}
                {...this.props}
                {...params}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
