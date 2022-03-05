import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'
const Cartpage = () => {
  return (
    <>
    <MainLayout>
      <InnerLayout>
       <Title title={'Cart'} span={'Cart'} />
      </InnerLayout>
    </MainLayout>
    </>
  )
}

export default Cartpage