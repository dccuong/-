import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Array from "./page/Array/Array";
import Audiopage from "./page/Audio/Audio";
import Calculator from "./page/Calculator/Calculator";
import Profile from "./page/Profile";
import Stringg from "./page/String";
type Props = {};

const App = (props: Props) => {
  const nav: any = []
  for (let index = 0; index <= 4; index++) {
    const element = "page" + `${index}`
    console.log(element)
    nav.push(element)
  }
  return (
    <Fragment>
      <Routes>
        <Route path="" element={<Layout nav={nav} />}>
          <Route index element={<Profile />} />
          <Route path={"page0"} element={<Stringg />} />
          <Route path={"page1"} element={<Array />} />
          <Route path={"page2"} element={<Audiopage />} />
          <Route path={"page3"} element={<Calculator />} />
          <Route path={"page4"} element={<Array />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
