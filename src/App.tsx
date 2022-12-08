import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Array from "./page/Array";
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
          <Route path={"page2"} element={<Array />} />
          <Route path={"page3"} element={<Array />} />
          <Route path={"page4"} element={<Array />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
