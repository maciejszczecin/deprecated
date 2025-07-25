import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import HeaderMain from './components/headers/header_main/header_main'
import PartialHome from './components/partials/partial_home/partial_home'
import Partial404Page from './components/partials/partial_404_page/partial_404_page'
import PageTesting from './components/pages/page_testing/page_testing'
import PartialHelloWorld from './components/partials/partial_hello_world/partial_hello_world'
import PartialCrocoParkHome from './components/partials/partial_crocopark_home/partial_crocopark_home'
import PartialCrocoParkAttractionsAndSpecies from './components/partials/partial_crocopark_attractions_and_species/partial_crocopark_attractions_and_species'
import PartialCrocoParkTickets from './components/partials/partial_crocopark_tickets/partial_crocopark_tickets'
import PartialCrocoParkContact from './components/partials/partial_crocopark_contact/partial_crocopark_contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/deprecated" element={<HeaderMain />}>
          <Route index element={<PartialHome />} />
          <Route path="/deprecated/helloworld" element={<PartialHelloWorld />} />
          <Route path="/deprecated/crocopark/home" element={<PartialCrocoParkHome />} />
          <Route path="/deprecated/crocopark/attractions_and_species" element={<PartialCrocoParkAttractionsAndSpecies />} />
          <Route path="/deprecated/crocopark/information" element={<PartialCrocoParkContact />} />
          <Route path="/deprecated/crocopark/tickets" element={<PartialCrocoParkTickets />} />
          <Route path="/deprecated/*" element={<Partial404Page />} />
        </Route>
        <Route path="/deprecated/page_testing" element={<PageTesting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App