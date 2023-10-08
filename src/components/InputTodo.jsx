import React from 'react';

const style = {
  margin: '15px 0 0',
  padding: '15px',
  borderRadius: '10px',
  background: 'rgb(188, 222, 240)'
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style} className="area input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
}