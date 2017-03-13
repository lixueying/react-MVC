import React from 'react';

const InputBox = (props) => (
    <div>
        <input type="text" onChange={props.onChange} value={props.value}/>
        <button onClick={props.onClick}>+</button>
    </div>
);

const TodoList = (props) => (
    <ul>
        {
            Object.keys(props.todos)
                .map(key => (<li>
                    {props.todos[key]}
                    <button onClick={() => props.onClick(key)}>-</button>
                </li>))
        }

    </ul>
);

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: undefined
        };
    }

    render() {
        return (
            <div>
                <InputBox
                    value={this.state.value}
                    onChange={(e) => this.setState({value: e.target.value})}
                    onClick={(e) => this.setState((preState) => ({
                        todos: [...preState.todos, this.state.value],
                        value: ''
                    }))}
                />
                <TodoList todos={this.state.todos} onClick={(index) => this.setState((preState) => {
                    preState.todos.splice(index, 1);
                    return {todos: preState.todos}
                })}/>
            </div>
        );
    }
}

export default TodoApp;