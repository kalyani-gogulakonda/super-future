//import react and connect 
import React, { useState } from 'react'; 
import { connect } from 'react-redux'; 

//import action 
import { createPost } from './redux/action/action'; 
import { Link } from 'react-router-dom';

//create component 
const CreatePost = (props) => { 
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    const post = { 
      title, 
      body 
    } 
    props.createPost(post); 
  } 

  // const { loading, error } = props; 

  // if (loading) { 
  //   return <div>Loading...</div> 
  // } 

  // if (error) { 
  //   return <div>Error: {error}</div> 
  // } 

  return ( 
    <form onSubmit={handleSubmit}> 
      <h3>Create Post</h3> 
      <div> 
        <label>Title: </label> 
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /> 
      </div> 
      <div> 
        <label>Body: </label> 
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} /> 
      </div> 
      <div style={{ display: "flex", columnGap: "10px", justifyContent: "center", margin: "20px 0px 20px 0px" }}> 
        <input className="btn" type="submit" value="Create Post"/> 
        <button className="btn">
          <Link to="/"> Cancel </Link>
        </button>
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
    createPost: (post) => dispatch(createPost(post)) 
  } 
} 

//connect and export 
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);