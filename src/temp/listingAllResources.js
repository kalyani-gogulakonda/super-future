import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getListResource } from './redux/actions/action';

const ListResource = ({ listResource, getListResource }) => {

    const [page, setPage] = useState(1);
    const limit = 5;
  useEffect(() => {
    getListResource(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * limit}&_limit=${limit}`);
  }, [getListResource]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <div className='users'>
      {listResource.map(resource => (
        <div className="userCard" key={resource.id}>
            <h3>{resource.id}. {resource.title}</h3>
            <p>{resource.body}</p>
        </div>
      ))}
       <div className='btnCard'>
        <button onClick={handlePrevPage}>Prev Page</button>
        <button onClick={handleNextPage}>Next Page</button>
       </div>
    </div>

  );
};

const mapStateToProps = state => ({
  listResource: state.listResource
});

const mapDispatchToProps = dispatch => ({
  getListResource: url => dispatch(getListResource(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListResource);