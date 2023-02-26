import logo from './logo.svg';
import './App.css';
import ListResource from './components/listingAllResources';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route path="/" component={ListResource} />
      </Router> */}
      <ListResource />
    </div>
  );
}

export default App;
