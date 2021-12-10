import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
  margin-top: -10rem;

  .card {
    background: ${props => props.theme.colors.cardBg}; 
    position: relative;
    border-radius: 3px;
   
 cursor: pointer;
 &:hover{
   filter: contrast(95%) ;
 }
  }

.card::before {
  content: '';
  display: block;
  height: 4px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.card.facebook::before {
  background: var(--facebook);
}
.card.twitter::before {
  background: var(--twitter);
}
.card.instagram::before {
  background-image: var(--instagram);
}
.card.youtube::before {
  background: var(--youTube);
}


  header{
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   color: ${props => props.theme.colors.textSecondary};
   padding: 1rem 0 1rem 0;
   
 }

section{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 1rem 0;

  strong{
    color: ${props => props.theme.colors.textPrimary};
    font-size: 3.2rem;
  }
  p{
    color: ${props => props.theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: .2rem;
    
  }
}

footer{
  padding: 1rem 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--green);
}

`;