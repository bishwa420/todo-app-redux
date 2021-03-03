import Todo from "./Todo";
import {connect} from "react-redux";
import {getTodosByVisibilityFilter} from "../redux/reducers/selectors";

const TodoList = ({todos}) => (

    <ul>
        {
            todos && todos.length
                ? todos.map((todo, index) => <Todo key={`todo-${todo.id}`} todo={todo}/>)
                : "No todos"
        }
    </ul>
);

const mapStateToProps = state => {

    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
}

export default connect(mapStateToProps)(TodoList);