//돈 이담겨있는 context
import { MoneyContext } from "../context/MoneyContext";

//context를 사용할려면 필요한 hooks
import { useContext } from "react";

function Child() {
  const money = useContext(MoneyContext)
  return (
    <>
      <h3>제가 물려받은 재산은 {money}억입니다.</h3>
    </>
  );
}

export default Child;
