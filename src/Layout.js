import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';


const Layout = ({ search, setSearch }) => {
    const {width} = useWindowSize();
    return (
        <div className="App">
            <Header title="The Scholars' ITech Blog"/>
            <Nav/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;