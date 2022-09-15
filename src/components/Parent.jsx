import { useContext } from "react";
import Child from "./Child";

import { MoneyContext } from "./MoneyContext";
function Parent() {
  const money = useContext(MoneyContext);
  return (
    <>
      <h2>부모님이 자식에게 {money}억</h2>
      <Child />
    </>
  );
}

export default Parent;
