//import React and connect
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import action
import { fetchPosts } from './redux/action/action';

//create component
export const ListResource = (props) => {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);
  const[perpage, setPerpage] = useState([]);

  useEffect(() => {
    props.fetchPosts(offset, limit);
  }, [offset, limit]);

  const { loading, error, posts, totalPages } = props;
  console.log(totalPages,"totalPages")

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  // let pageNumbers = []
  // for (let i = 1; i < Math.ceil(posts.length / 5) + 1; i++) {
  //     pageNumbers.push(i);
  // }
  // console.log(posts.length, "pgNO")

  // const pageHandler = (pageNumber) => {
  //   setPerpage(posts.slice((pageNumber*5)-5,pageNumber*5)) 
  // }

  return (
    <div>
      <div className="users" style={{ backgroundColor: '#f5ecec' }}>
        {
          posts.map(post => (
            <div key={post.id} className="userCard" >
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
      <div className='btnCard'>
        <button className='btn' onClick={() => setOffset(offset - 5)}>Previous</button>
        {/* {
          Array.from(Array(totalPages).keys()).map(pageNumber => (
            <button className={`btn ${offset / limit === pageNumber ? 'selected' : ''}`} key={pageNumber} onClick={() => setOffset(pageNumber * 5)}>{pageNumber + 1}</button>
          ))
        } */}
          {/* {pageNumbers.map((page,index) => <div className="pageBtn" key={index} onClick={() => pageHandler(page)}>{page}</div>)} */}
        <button className='btn' onClick={() => setOffset(offset + 5)}>Next</button>
      </div>

      <div>
        <Link to="/add"> Add New Resource</Link>
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