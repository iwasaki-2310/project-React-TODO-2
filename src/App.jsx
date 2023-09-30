import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="area input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="area incomplete-area">
        <p className="title-area">未完了のTODO</p>
        <ul>
          <li className="list-row">
            <p>ああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="list-row">
            <p>ああああ</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="area complete-area">
        <p className="title-area">完了のTODO</p>
        <ul>
          <li className="list-row">
            <p>ああああ</p>
            <button>戻す</button>
          </li>
          <li className="list-row">
            <p>ああああ</p>
            <button>削除</button>
          </li>
        </ul>
      </div>
    </>
  );
};