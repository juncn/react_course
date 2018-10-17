import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
    submitted: false
  };

  postDataHandler = () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };

    axios
      .post('/posts', data)
      .then(response => {
        console.log(response);
        // this.setState({submitted: true});
        // ? Alternative way of redirect
        // ? 'replace' does not push a new page to history stack
        // ? thus, user cannot go back to NewPosts by clicking the back button in the browser
        this.props.history.replace('/posts');
      });
  };

  render() {
    const redirect = this.state.submitted ? <Redirect to="/posts" /> : null;
    return (
      <div className="NewPost">
        {redirect}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
