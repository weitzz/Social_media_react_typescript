import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props =>props.theme.colors.veryPaleBlue};
  height: 200px;
  color: ${props => props.theme.colors.veryDarkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

`