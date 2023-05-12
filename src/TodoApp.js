import React from "react";
import useTodoState from "./hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { AppBar, Toolbar, Typography, Paper, Grid } from "@mui/material";

function TodoApp() {
    const initialTodos = []
    // const initialTodos = [
    //     { id: 1, task: "Feed Dog", completed: false },
    //     { id: 2, task: "Grocery Shopping", completed: false },
    //     { id: 3, task: "Trim Beard", completed: false },
    // ];
    const { todos, addTodo, toggleCompleted, removeTodo, updateTodo } =
        useTodoState(initialTodos);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa",
            }}
        >
            <AppBar
                color="primary"
                position="static"
                style={{ height: "64px" }}
            >
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>

            <Grid
                container
                justifyContent="center"
                style={{ marginTop: "1rem" }}
            >
                <Grid item xs={12} md={8} lg={6}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList
                        todos={todos}
                        toggleCompleted={toggleCompleted}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;
