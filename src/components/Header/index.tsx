import {useContext} from 'react'
import { Container } from './style'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'


interface Props {
  toggleTheme(): void
}
const Header = ({toggleTheme}: Props) => {

  const {colors,title} = useContext(ThemeContext)
  return (
    <Container>
      <h1>Social Media Dashboard</h1>

      <Switch
      checked={title === 'dark'}
      onChange={toggleTheme}
      checkedIcon={false}
      uncheckedIcon={false}
      onColor={colors.veryDarkBlue}
      />
      
    </Container>
  )
}

export default Header
