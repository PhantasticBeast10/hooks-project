import { TextField } from "@mui/material";
import React from "react";
import useInputState from "./hooks/useInputState";

function EditTodoForm(props) {
    const { id, task, updateTodo, toggleEditForm } = props;
    const [updatedTask, setUpdatedTask, reset] = useInputState(task);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                updateTodo(id, updatedTask);
                reset();
                toggleEditForm();
            }}
        >
            <TextField
                fullWidth
                variant="standard"
                value={updatedTask}
                onChange={setUpdatedTask}
            />
        </form>
    );
}

export default EditTodoForm;
