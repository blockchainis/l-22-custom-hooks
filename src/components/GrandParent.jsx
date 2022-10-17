import Parent from "./Parent";
import { useState } from "react";

function GrandParent() {
  const [money, setMoney] = useState(1);
  return (
    <>
      <button onClick={() => setMoney((m) => m + 1)}> 재산 추가</button>
      <h1>조부모님이 부모님에게 {money}억</h1>
      <Parent />
    </>
  );
}

export default GrandParent;
