import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
const ProductPage = () => {
  return (
    <>
    <MainLayout>
      <InnerLayout>
       <Title title={'About me'} span={'About me'} />
      </InnerLayout>
    </MainLayout>
    </>
  )
}

export default ProductPage
