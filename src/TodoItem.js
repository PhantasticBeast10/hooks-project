import {
    Checkbox,
    IconButton,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function TodoItem(props) {
    const { id, task, completed, toggleCompleted, removeTodo, updateTodo } =
        props;
    const [isEditing, toggle] = useToggleState();
    return (
        <ListItem>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    updateTodo={updateTodo}
                    toggleEditForm={toggle}
                />
            ) : (
                <>
                    <Checkbox
                        checked={completed}
                        onClick={() => {
                            toggleCompleted(id);
                        }}
                    />
                    <ListItemText
                        style={{ textDecoration: completed && "line-through" }}
                    >
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => removeTodo(id)}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={toggle}>
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default TodoItem;
