import React from 'react'
import Overview from '../Overview'
import Summary from '../Summary'
import { Container } from './style'

const Dashboard = () => {
  return (
    <Container>
      <Summary/>
      <Overview/>
    </Container>
  )
}

export default Dashboard
