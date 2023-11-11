import React from 'react'
import { useParams } from 'react-router-dom'


const FilteredPage = () => {
  const {page} = useParams();
  return (
    <div>FilteredPage {page}
    </div>
  )
}

export default FilteredPage