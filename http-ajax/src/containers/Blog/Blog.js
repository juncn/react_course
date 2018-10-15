import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';


class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{
                pathname: '/new-post',
                hash: '#submit',
                search: '?quick-submit=true'
              }}>New post</Link></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={Posts} />
        <Route exact path="/new-post" component={NewPost} />
        // TODO: remove
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
