import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";


const MainLayout = ({ children }) => {
    return (
        <div className="bg-primary  text-primary_text font-zen">
            <Navbar />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    );
};

export default MainLayout;