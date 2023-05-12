import React from "react";
import { List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const { todos, toggleCompleted, removeTodo, updateTodo } = props;
    if (todos.length > 0) {
        return (
            <Paper elevation={3}>
                <List>
                    {todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                            task={todo.task}
                            toggleCompleted={toggleCompleted}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    ))}
                </List>
            </Paper>
        );
    }
    return null;
}

export default TodoList;
