import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { MainLayout , InnerLayout } from '../styles/Layout'

const ContactPage = () => {
  return (
    <>
    <MainLayout>
      <InnerLayout>
       <Title title={'Contact'} span={'Contact'} />
      </InnerLayout>
    </MainLayout>
    </>
  )
}

export default ContactPage