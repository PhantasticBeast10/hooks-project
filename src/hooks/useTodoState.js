import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid } from "uuid";

function useTodoState(initialTodos) {
    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,

        addTodo: (task) => {
            const newTodo = { id: uuid(), task: task, completed: false };
            setTodos([...todos, newTodo]);
        },

        toggleCompleted: (todoId) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            setTodos(updatedTodos);
        },

        removeTodo: (todoId) => {
            const updatedTodos = todos.filter((todo) => todo.id !== todoId);
            setTodos(updatedTodos);
        },

        updateTodo: (todoId, updatedTask) => {
            const updatedTodos = todos.map((todo) =>
                todo.id === todoId ? { ...todo, task: updatedTask } : todo
            );
            setTodos(updatedTodos);
        },
    };
}

export default useTodoState;
