import { MoneyContext } from "./MoneyContext";
import { useContext } from "react";

function useMoney() {
  return useContext(MoneyContext);
}

export { useMoney };
