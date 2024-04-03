import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import routes, { renderRoutes } from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <React.Fragment>
      <Router basename={"test"}>
          <Toaster position="top-center" reverseOrder={false} />
          {renderRoutes(routes)}
      </Router>
    </React.Fragment>
  );
};

export default App;
