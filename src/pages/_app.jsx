import Header from "../components/header/Header";
import CanvasBG from "../components/canvasBg/CanvasBG";
import Home from "./index";

import "../styles/index.css";
import Layout from "../components/layout/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
