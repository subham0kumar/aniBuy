import React from 'react'
import { useParams } from 'react-router-dom'
import ProductViewer from '../Components1/ProductPageComponents/ProductViewer';
import ProSidebar from '../Components1/Utility/ProSidebar';

const ProductPage = () => {
    const { index } = useParams();
  return (
    <div>
      <ProductViewer />
    </div>
  )
}

export default ProductPage