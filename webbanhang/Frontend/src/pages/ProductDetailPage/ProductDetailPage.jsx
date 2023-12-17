import React from 'react'
import ProductDetailComponent from '../../components/ProductDetailComponent/ProductDetailComponent'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'

const ProductDetailPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  return (
    <div>
    <div style={{ padding: '0 120px', background: '#efefef' }}>
      <h4>
        <span style={{cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {navigate('/')}}>Trang chủ</span> - Chi tiết sản phẩm
      </h4>
      <ProductDetailComponent productId = {id}/>
    </div>
    <div style={{ padding: '50px 120px' }}>
      <Footer>

      </Footer>
    </div>
    </div>
  )
}

export default ProductDetailPage