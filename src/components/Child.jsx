import { MoneyContext } from "./MoneyContext";
import { useContext } from "react";
function Child() {
  const money = useContext(MoneyContext);
  return (
    <>
      <h3>자식이 받은 물려받은 재산은 {money}억입니다.</h3>
    </>
  );
}

export default Child;
