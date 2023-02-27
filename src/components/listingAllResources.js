//import React and connect
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import action
import { fetchPosts } from './redux/action/action';
import { deletePost } from './redux/action/action';
import DeletePost from './deleteResources';
import { updatePost } from './redux/action/action';
import UpdatePost from './updateResources';

//create component
export const ListResource = (props) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const [perpage, setPerpage] = useState([]);

  useEffect(() => {
    props.fetchPosts(offset, limit);
  }, [offset, limit]);

  const { loading, error, posts, totalPages } = props;
  console.log(totalPages, "totalPages")

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <div className="users" style={{ backgroundColor: '#f5ecec' }}>
        {
          posts.map(post => (
            <div key={post.id} className="userCard">
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
              <div style={{ display: "flex", columnGap: "10px", justifyContent: "flex-end" }}>
                <button className="btn">
                  <Link to="/edit" postId={post.id} title={post.title} body={post.body} > Edit </Link>
                </button>
                <DeletePost postId={post.id} />
              </div>
            </div>
          ))
        }
      </div>
      <div className='btnCard'>
        <button className='btn' onClick={() => setOffset(offset - 5)}>Previous</button>
        <button className='btn' onClick={() => setOffset(offset + 5)}>Next</button>
      </div>

      <div style={{margin: "20px 0px 20px 0px"}}>
        <button className="btn">
          <Link to="/add"> Add Post</Link>
        </button>
      </div>
    </div>
  )
}



//mapStateToProps
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading,
    error: state.error,
    totalPages: state.totalPages
  }
}


//mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (offset, limit) => dispatch(fetchPosts(offset, limit))
  }
}

//connect and export
export default connect(mapStateToProps, mapDispatchToProps)(ListResource);