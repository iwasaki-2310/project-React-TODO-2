import React from 'react';

export const CompleteTodos = (props) => {
  const { todos, onClickRemove } = props;
  return (
    <div className="area complete-area">
      <p className="title-area">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p>{todo}</p>
              <button onClick={() => onClickRemove(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};