import Child from "./Child";
import { MoneyContext } from "../context/MoneyContext";
import { useContext } from "react";

function Parent() {
  const money = useContext(MoneyContext);
  return (
    <>
      <h2>부모님이 자식에게 {money}억</h2>
      <Child money={money} />
    </>
  );
}

export default Parent;
