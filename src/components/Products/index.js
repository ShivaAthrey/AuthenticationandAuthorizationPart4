import PrimedealsSection from '../PrimeDealsSection'
import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimedealsSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
