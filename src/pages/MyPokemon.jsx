import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";

const MyPokemon = () => {
  return (
    <Layout>
      <h2 className="text-white m-3 text-lg font-medium">My Pokemon List</h2>
        <div className="ml-3 text-slate-500">
          Pokemon Not Found
        </div>
    </Layout>
  );
}

export default WithRouter(MyPokemon);
