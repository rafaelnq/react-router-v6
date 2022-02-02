import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './contexts/auth-context'
import {Navbar} from './components/navbar'
import {HomePage} from './pages/home'
// import {AboutPage} from './pages/about'
import {OrderSummaryPage} from './pages/order-summary'
import {Products} from './pages/products'
import {FeaturedProducts} from './pages/products/featured-products'
import {RequireAuth} from './components/require-auth'
import {NewProducts} from './pages/products/new-products'
import {Users} from './pages/users'
import {UserDetails} from './pages/users/details'
import {Admin} from './pages/admin'
import {Profile} from './pages/profile'
import {Login} from './pages/login'
import {NotFoundPage} from './pages/404'
const LazyAbout = React.lazy(() => import('./pages/about'))

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<OrderSummaryPage />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
