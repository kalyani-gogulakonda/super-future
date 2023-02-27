//import react and connect 
import React, { useState } from 'react'; 
import { connect } from 'react-redux'; 

//import action 
import { deletePost } from './redux/action/action'; 
import { fetchPosts } from './redux/action/action';

//create component 
const DeletePost = (props) => { 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    props.deletePost(props.postId); 
  } 

  const { loading, error } = props; 

  if (loading) { 
    return <div>Loading...</div> 
  } 

  if (error) { 
    return <div>Error: {error}</div> 
  } 

  return ( 
    <form onSubmit={handleSubmit}> 
      {/* <h3>Delete Post</h3>  */}
      <div> 
        <input className="btn" type="submit" value="Delete Post"/> 
      </div> 
    </form> 
  ) 
} 

//mapStateToProps 
const mapStateToProps = (state) => { 
  return { 
    loading: state.loading, 
    error: state.error 
  } 
} 

//mapDispatchToProps 
const mapDispatchToProps = (dispatch) => { 
  return { 
    deletePost: (postId) => dispatch(deletePost(postId)) 
  } 
} 

//connect and export 
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);