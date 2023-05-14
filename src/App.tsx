import React from 'react';
import './App.css';
import Home from "./pages/home";
import {Provider} from "react-redux";
import {store} from "./store";
import {Routes, Route} from "react-router-dom";
import Teams from "./pages/Teams";
function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Route path="/" element={<Home />}>
                  {/*<Route path="*" element={<PageNotFound />}/>*/}
                  <Route path="/teams" element={<Teams />}/>
              </Route>
          </Routes>
      </Provider>
  );
}

export default App;
