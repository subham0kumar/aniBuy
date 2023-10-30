import React from 'react'
import { useParams } from 'react-router-dom'
import ProductViewer from '../Components1/ProductPageComponents/ProductViewer';

const ProductPage = () => {
    const { index } = useParams();
  return (
    <div>
      <ProductViewer />
    </div>
  )
}

export default ProductPage