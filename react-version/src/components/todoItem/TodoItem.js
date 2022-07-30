import Config from "../../config";

function TodoItem(props) {
	const { id, todo, setTodos, setError } = props;

	const deleteTodo = () => {
		const baseApiUrl = Config.apiUrl;

		setError(null);

		fetch(`${baseApiUrl}/todos/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (todos) {
			setTodos(todos);
		})
		.catch(function (error) {
			setError(error.message);
		});
}

	return <li onClick={deleteTodo}>{todo}</li>;
}

export { TodoItem };
