import { useRef } from "react";
import Config from "../../config";

function Form(props) {
	const newTodo = useRef();

	const addTodo = (event) => {
		event.preventDefault();

		const { setTodos, setError } = props;
		const baseApiUrl = Config.apiUrl;
		const todo = newTodo.current.value;
		newTodo.current.value = '';

		setError(null);

		fetch(`${baseApiUrl}/todos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({todo})
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
	};

	return (
		<form onSubmit={addTodo}>
			<input ref={newTodo} required />
			<input type='submit' value='Add Todo' />
		</form>
	);
}

export { Form };
