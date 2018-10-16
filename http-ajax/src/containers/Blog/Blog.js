import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
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
              <li>
                <NavLink 
                  exact 
                  to="/"
                  activeClassName="my-active"
                  activeStyle={{
                    color: "red",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>
                  New post
              </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route exact path="/:id" component={FullPost} />
        </Switch>
        {/* TODO: remove */}
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
