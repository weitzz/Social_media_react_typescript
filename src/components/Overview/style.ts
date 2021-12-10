import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
  margin-top: 4rem;


`;
export const Title = styled.h2`
display: flex;
color:${props => props.theme.colors.textPrimary};
margin-top: 5rem;

`;
  

export const Content = styled.div`
 background: ${props => props.theme.colors.cardBg}; 
 cursor: pointer;
 border-radius: 3px;

 &:hover{
   filter: contrast(95%) ;
 }

 div{
  display: flex;
  align-items: center;

  
   img{
    margin-right: 0.3em;
   }
 }

 header{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
   color: ${props => props.theme.colors.textSecondary};
   padding: 1rem 0 1rem 0;
 }

 section{
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 0;
  justify-content: space-around;

  strong{
    color: ${props => props.theme.colors.textPrimary};
    font-size: 2rem;
  
  }
  p{
    color: ${props => props.theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: .2rem;
    
  }
}
`