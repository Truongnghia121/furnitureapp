import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer, Footer } from "./components";

import classNames from "classnames/bind";
import styles from "./App.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <>
      <AnimatePresence>
        <div className={cx("container")}>
          <Header />
          <div className={cx("main")}>
            <Routes>
              <Route path="/*" element={<MainContainer />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
