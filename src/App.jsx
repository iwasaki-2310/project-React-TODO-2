import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setincompleteTodos] = useState([
    'あああ', 'いいい'
  ]);

  const [completeTodos, setcompleteTodos] = useState(['ううう']);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncopleteTodos = [...incompleteTodos];
    newIncopleteTodos.splice(index, 1);
    setincompleteTodos(newTodos);

    const newTodos = [...completeTodos];

  }

  return (
    <>
      <div className="area input-area">
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="area incomplete-area">
        <p className="title-area">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) =>{
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={ () => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="area complete-area">
        <p className="title-area">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return(
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};