import Header from "../Header/Searchbar";
import Footer from "../Footer/Foot";
import Main from "../Main/Main";

export default function DashboardLayout({ children }) {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "Space-Between",
            height: "100vh",
        }}> <Header /> <Main>{children}</Main>  <Footer /> </div>

    );
}

