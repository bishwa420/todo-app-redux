import logo from './logo.svg';
import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilters/>
    </div>
  );
}

export default App;
