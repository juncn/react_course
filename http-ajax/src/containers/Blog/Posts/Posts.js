import React, { Component } from 'react';
import axios from '../../../axios';
import { Route } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Max'
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        // this.setState({ error: true });
        console.log(error);
      });
  }

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id });
    this.props.history.push('/posts/' + id);
    // this.props.history.push({pathname: '/' + id});
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return(
      <div>
        <section className="Posts">{posts}</section>
        <Route exact path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
      
    );
  }
}

export default Posts;


