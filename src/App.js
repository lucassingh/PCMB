import Navbar from './components/navbar/Navbar';
import Home from './screens/Home';
import WhatIs from './screens/WhatIs';
import History from './screens/History';
import Cronology from './screens/Cronology';
import Objetives from './screens/Objetives';
import StudyPlan from './screens/StudyPlan';
import Subjects from './screens/Subjects';
import Host from './screens/Host';
// eslint-disable-next-line
import Items from './components/items/Items';
// eslint-disable-next-line
import Book from './screens/Book';
// eslint-disable-next-line
import Documentary from './screens/Cronology';
// eslint-disable-next-line
import Evolution from './screens/Evolution';
// eslint-disable-next-line
import Exibition from './screens/History';
// eslint-disable-next-line
import Offer from './screens/Offer';
// eslint-disable-next-line
import Tour from './screens/Tour';
import Prefooter from './components/footer/Prefooter';
import Footer from './components/footer/Footer';
import Locations from './screens/Locations';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <WhatIs />
            <History />
            <Cronology />
            <Objetives />
            <StudyPlan />
            <Subjects />
            <Host />
            <Items />
            <Locations />
            {/* <Tour />
            <Evolution />
            <Exibition />
            <Documentary />
            <Book />
            
            <Proposal />
            <Offer /> */}
            <Prefooter /> 
            <Footer />
        </>
    );
}

export default App;
