import Header from "./components/Header/Searchbar";
import Footer from "./components/Footer/Foot";

export function App() {
  
    return <div style={{
      display: "flex",
      flexDirection: "Column",
      justifyContent: "centr",
      height: "100vh" 
    }}><Header /> <Footer /></div>;
  }
