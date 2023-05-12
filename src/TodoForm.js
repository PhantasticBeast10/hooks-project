import { Paper, TextField } from "@mui/material";
import React from "react";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
    const [newTask, setNewTask, resetTask] = useInputState("");

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.addTodo(newTask);
                    resetTask();
                }}
            >
                <TextField
                    margin="normal"
                    style={{ width: "50%" }}
                    variant="filled"
                    label="New Task"
                    value={newTask}
                    onChange={setNewTask}
                />
            </form>
        </Paper>
    );
}

export default TodoForm;
