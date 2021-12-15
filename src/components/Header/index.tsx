import { useContext } from 'react'
import { Container ,Content} from './style'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void
}
const Header = ({ toggleTheme }: Props) => {

  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
     <Content>
       <div>
          <h1>Social Media Dashboard</h1>
          <span>Total</span>
       </div>
          <Switch
            checked={title === 'dark'}
            onChange={toggleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
          />

       </Content>
     

    </Container>
  )
}

export default Header
