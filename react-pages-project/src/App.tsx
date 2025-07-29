import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Main_Header from './components/headers/header_main/header_main'
import Main_PartialHome from './components/partials/main/partial_home/partial_home'
import Main_Partial404Page from './components/partials/main/partial_404_page/partial_404_page'
import Main_PartialHelloWorld from './components/partials/main/partial_hello_world/partial_hello_world'

import Crocopark_PageBody from './components/pages/page_crocopark_body/page_crocopark_body'
import Crocopark_PartialHome from './components/partials/crocopark/partial_home/partial_home'
import Crocopark_PartialTickets from './components/partials/crocopark/partial_tickets/partial_tickets'
import Crocopark_PartialContact from './components/partials/crocopark/partial_contact/partial_contact'
import Crocopark_PartialAttractions from './components/partials/crocopark/partial_attractions/partial_attractions'

import Page_PageTesting from './components/pages/expressjs_testing/expressjs_testing'

function App() {
  return (
    <BrowserRouter basename="/deprecated">
      <Routes>
        <Route path="/" element={<Main_Header />}>
          <Route index element={<Main_PartialHome />} />
          <Route path="helloworld" element={<Main_PartialHelloWorld />} />
          <Route path="*" element={<Main_Partial404Page />} />
        </Route>

        <Route path="/crocopark/" element={<Crocopark_PageBody />}>
          <Route index element={<Crocopark_PartialHome />} />
          <Route path="/crocopark/tickets" element={<Crocopark_PartialTickets />} />
          <Route path="/crocopark/contact" element={<Crocopark_PartialContact />} />
          <Route path="/crocopark/attractions" element={<Crocopark_PartialAttractions />} />
        </Route>

        <Route path="/page_testing" element={<Page_PageTesting />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App