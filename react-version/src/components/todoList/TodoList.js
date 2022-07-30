import { TodoItem } from "../todoItem";

function TodoList(props) {
	const { todos, setTodos, setError } = props;

	return (
		<ul>{todos.map((todo, index) => <TodoItem key={index} todo={todo} id={index} setTodos={setTodos} setError={setError} />)}</ul>
	);
}

export { TodoList };