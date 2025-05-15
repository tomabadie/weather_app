import { Outlet } from "react-router-dom";

import "./App.css";

import Header from "../shared/components/Header/Header";
import Footer from "../shared/components/Footer/Footer";

import { navigationList } from "../shared/components/Header/data/navData";

function App() {

  return (
    <>
    <Header navList={navigationList} />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;
