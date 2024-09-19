import { useContext, useState } from "react";
import Navbar from "./navbar";
import Generatecakes from "./generatecakes";
import { OrderContext } from "./orderContext";
const MainContent = () => {
  const {cakes,err} = useContext(OrderContext);
  const [flavor, setFlavor] = useState("all");

  return (
    <main>
      <Navbar setFlav={setFlavor} />
      {err && <div>{err}</div>}
      {cakes && <Generatecakes loopCake={cakes} selectedFlavor={flavor} />}
    </main>
  );
};

export default MainContent;
