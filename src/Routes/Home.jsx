import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme === "light" ? "home-dark" : "home-light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentists &&
          state.dentists.map((d) => {
            return (
              <Card key={d.id} name={d.name} username={d.username} id={d.id} />
            );
          })}
      </div>
    </main>
  );
};

export default Home;
