import { useState, useEffect } from "react";
import { Header, TodoList, Form } from './components'
import Config from "./config";
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseApiUrl = Config.apiUrl;

  useEffect(() => {
    fetch(`${baseApiUrl}/todos`)
      .then(function (response) {
        return response.json();
      })
      .then(function (fetchedTodos) {
        setTodos(fetchedTodos);
        setLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
      });
}, [setTodos, setError, baseApiUrl]);

  if (loading && !error) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} setError={setError} />
      <Form setTodos={setTodos} setError={setError} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
