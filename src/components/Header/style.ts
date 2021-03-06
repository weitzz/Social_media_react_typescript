import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.colors.topBg}; 
  
  color: ${props => props.theme.colors.textPrimary};

`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem 12rem;


`