import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import { Header, MainContainer } from "./components";
import { DataItems } from "./components/Main/DataItems";
import classNames from "classnames/bind";
import styles from "./App.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <>
      <AnimatePresence>
        <div className="">
          <Header />
          <main className={cx("main")}>
            <Routes>
              <Route path="/*" element={<MainContainer slides={DataItems} />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
