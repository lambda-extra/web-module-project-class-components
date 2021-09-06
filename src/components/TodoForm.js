import React from 'react';
import { TextField, Button } from '@material-ui/core';

class TodoForm extends React.Component {
    state = {
        input: ''
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    };

    handleAddClick = e => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
    }

    handleClearClick = e => {
        e.preventDefault();
        this.props.handleClear();
    }

    render() {
        return (
            <div className="todo-form">
                <form>
                    <div className="form-options">
                        <TextField id="outlined-basic" label="Enter task..." variant="outlined" size="small" fullWidth="true" onChange={this.handleChanges} />
                        <Button onClick={this.handleAddClick}>Add</Button>
                        <Button onClick={this.handleClearClick}>Clear</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;