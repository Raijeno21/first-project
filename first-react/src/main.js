import { useState } from "react";
import Navbar from "./navbar";
import Generatecakes from "./generatecakes";
import useFetch from "./useFetch";
const MainContent = () => {

  const { cakes, err } = useFetch("http://localhost:7000/cakes");
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
