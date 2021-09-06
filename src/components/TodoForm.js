import React from 'react';

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
                    <div className="form-input">
                        <input type="text" name="todo" placeholder="Enter task..." onChange={this.handleChanges} />
                    </div>
                    <div className="form-buttons">
                        <button onClick={this.handleAddClick}>Add</button>
                        <button onClick={this.handleClearClick}>Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm;