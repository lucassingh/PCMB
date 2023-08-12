import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Prefooter from './components/footer/Prefooter';
import Home from './screens/Home';
// eslint-disable-next-line
import Items from './components/items/Items';
import About from './screens/About';
// eslint-disable-next-line
import Book from './screens/Book';
// eslint-disable-next-line
import Documentary from './screens/Documentary';
// eslint-disable-next-line
import Evolution from './screens/Evolution';
// eslint-disable-next-line
import Exibition from './screens/Exibition';
// eslint-disable-next-line
import Offer from './screens/Offer';
import Proposal from './screens/Proposal';
// eslint-disable-next-line
import Tour from './screens/Tour';
import Who from './screens/Who';
import AboutHistory from './screens/HistoryAbout';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Proposal />
            <About />
            <AboutHistory />
            <Who />
            {/* <Tour />
            <Evolution />
            <Exibition />
            <Documentary />
            <Book />
            <Items />
            <Proposal />
            <Offer /> */}
            <Prefooter /> 
            <Footer />
        </>
    );
}

export default App;
