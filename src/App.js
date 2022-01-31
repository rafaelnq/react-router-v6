import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/navbar'
import {HomePage} from './pages/home'
import {AboutPage} from './pages/about'
import {OrderSummaryPage} from './pages/order-summary'
import {NotFoundPage} from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
