import React, { useState } from "react";
import Button from './Button';

function Todos() {

    const [pendingTodos, changePendingTodos] = useState([]);
    const [completedTodos, changeCompletedTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const addTodo = () => {
        if (todoInput.trim()) {
            changePendingTodos([...pendingTodos, todoInput]);
            setTodoInput('');
        }
    };

    const completeTodo = (index) => {
        const todoToComplete = pendingTodos[index];
        changePendingTodos(pendingTodos.filter((_, i) => i !== index));
        changeCompletedTodos([...completedTodos, todoToComplete]);
    };

    const deleteTodo = (index, isCompleted) => {
        if (isCompleted) {
            changeCompletedTodos(completedTodos.filter((_, i) => i !== index));
        } else {
            changePendingTodos(pendingTodos.filter((_, i) => i !== index));
        }
    };

    return (
        <>
            <div className="todo-form">
                <h1>Add Todo</h1>
                <input 
                    type="text" 
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} 
                    placeholder="type todo" 
                />
             
                <div className="todo-form-buttons">
                    <Button className='add-btn' handleClick={addTodo} btnText='ADD' />
                    <Button className='cancel-btn' handleClick={() => setTodoInput('')} btnText='Cancel' />
                </div>
            </div>

            <div className="todo-section">
                {/* Pending Todos */}
                <div className="todo-left">
                    <h1>PENDING TODOS({pendingTodos.length}) 
                        <Button className='add-btn' handleClick={() => changePendingTodos([])} btnText='Clear' /> 
                    </h1>
                    {
                        pendingTodos.map((todo, index) => (
                            <div key={index} className="todo-item">
                                <div className="todo-item-text">({index + 1}) {todo}</div>
                                <div className="todo-form-buttons">
                                    <Button className='complete-btn' handleClick={() => completeTodo(index)} btnText='Complete' />
                                    <Button className='delete-btn' handleClick={() => deleteTodo(index, false)} btnText='Delete' />
                                </div>
                            </div>
                        ))
                    }
                </div>

                {/* Completed Todos */}
                <div className="todo-right">
                    <h1>COMPLETED TODOS({completedTodos.length}) 
                        <Button className='add-btn' handleClick={() => changeCompletedTodos([])} btnText='Clear' /> 
                    </h1>
                    {
                        completedTodos.map((todo, index) => (
                            <div key={index} className="todo-item">
                                <div className="todo-item-text">({index + 1}) {todo}</div>
                                <div className="todo-form-buttons">
                                    <Button className='delete-btn' handleClick={() => deleteTodo(index, true)} btnText='Delete' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Todos;
