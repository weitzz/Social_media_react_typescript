
import { ThemeProvider,DefaultTheme } from 'styled-components';
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import Global from './style/Global';
import light from './style/themes/light';
import dark from './style/themes/dark';
import usePersistedState from './utils/usePersistedState';


function App() {
  const [theme ,setTheme] = usePersistedState <DefaultTheme>('theme',light)

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header toggleTheme={toggleTheme}/>
      <Dashboard />
      </ThemeProvider>
  );
}

export default App;
