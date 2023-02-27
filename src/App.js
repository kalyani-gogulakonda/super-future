import logo from './logo.svg';
import './App.css';
import ListResource from './components/listingAllResources';
import CreatePost from './components/creatingResources';
import UpdatePost from './components/updateResources';
import DeletePost from './components/deleteResources';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <ListResource />
        <Routes>
          <Route path="/edit" exact component={UpdatePost} />
          <Route path="/add" exact component={CreatePost} />
        </Routes>
      </Router>
      {/* <ListResource /> */}
    </div>
  );
}

export default App;
