import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/navbar'
import {HomePage} from './pages/home'
import {AboutPage} from './pages/about'
import {OrderSummaryPage} from './pages/order-summary'
import {Products} from './pages/products'
import {FeaturedProducts} from './pages/products/featured-products'
import {NewProducts} from './pages/products/new-products'
import {NotFoundPage} from './pages/404'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="order-summary" element={<OrderSummaryPage />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
