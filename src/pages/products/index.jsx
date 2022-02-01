import {Link, Outlet} from 'react-router-dom'

export function Products() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <Link to="featured">Featured products</Link>
        <Link to="new">New products</Link>
      </nav>
      <Outlet />
    </>
  )
}
