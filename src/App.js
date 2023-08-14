import Navbar from './components/navbar/Navbar';
import Home from './screens/Home';
import WhatIs from './screens/WhatIs';
import History from './screens/History';
import Cronology from './screens/Cronology';
import Objetives from './screens/Objetives';
import StudyPlan from './screens/StudyPlan';
import Features from './screens/Features';
import Subjects from './screens/Subjects';
import Host from './screens/Host';
import Items from './components/items/Items';
import Locations from './screens/Locations';
import Offer from './screens/Offer';
import Prefooter from './components/footer/Prefooter';
import Footer from './components/footer/Footer';

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
            <Features />
            <Subjects />
            <Host />
            <Items />
            <Locations />
            <Offer />
            <Prefooter /> 
            <Footer />
        </>
    );
}

export default App;
