import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [inCompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力内容取得処理
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  // 追加処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...inCompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  // 削除処理
  const onClickDelete = (index) => {
    const newTodos = [...inCompleteTodos];
    newTodos.splice(index, 1);//[1]取り除きたい要素のindex番号, [2]そのindex番号から何個取り除きたいか（指定のない場合は第一引数以降の要素が全て取り除かれる）
    setIncompleteTodos(newTodos);
  }

  // 完了処理
  const onClickComplete = (index) => {
    const newIncopleteTodos = [...inCompleteTodos];
    newIncopleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, inCompleteTodos[index]];
    setIncompleteTodos(newIncopleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  // 戻す処理
  const onClickRemove = (index) => {
    const newCompleteTodos = [...completeTodos];//現在の完了リストを取得
    newCompleteTodos.splice(index, 1);//完了リストから押下したTODOの削除

    const newInCompleteTodos = [...inCompleteTodos, completeTodos[index]];//未完了リストの配列に押下したindex番号のTODOを追加

    setCompleteTodos(newCompleteTodos);//完了リストを更新
    setIncompleteTodos(newInCompleteTodos);//未完了リストを更新
  }

  return (
    <>
      {/* 入力エリア */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={inCompleteTodos.length >= 5}
      />
      {inCompleteTodos.length >= 5 && ( 
        <p style={{ color: 'red' }}>
          登録できるtodoは5個までだよ〜。消化しろ〜。
        </p>
      )}


      {/* 未完了エリア */}
      <IncompleteTodos
        todos={inCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      {/* 完了エリア */}
      <CompleteTodos
        todos={completeTodos}
        onClickRemove={onClickRemove}
      />
    </>
  );
};