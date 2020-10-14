import React from 'react';
import { BrowserRouter as Router,Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo-list.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todo-list.component";
import logo from "./logo.png";

function App() {
  return (
    <Router>
    <div className = "container">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src ={logo} width ="50" height="50"/>
          </a>
          <Link to="/" className="navbar-brand">🆃🅾🅳🅾 🅰🅿🅿</Link>
          <div className="collapse navbar-collapse">
            <ul className=" navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to = "/" className="nav-link">𝐓𝐎𝐃𝐎</Link>
              </li>
              <li className="navbar-item">
                <Link to = "/create" className="nav-link">𝐂𝐑𝐄𝐀𝐓𝐄</Link>
              </li>
            </ul>
            </div>
      </nav>
      <Route path ="/" exact component = {TodosList} />
      <Route path = "/edit/:id" component ={EditTodo} />
      <Route path ="/create" component = {CreateTodo}/>
    </div>
    </Router>
  );
}

export default App;
