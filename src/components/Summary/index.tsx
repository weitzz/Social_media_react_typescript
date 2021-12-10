import React from 'react'
import { Container} from './style'
import facebook from '../../assets/social-media-dashboard/images/icon-facebook.svg'
import instagram from '../../assets/social-media-dashboard/images/icon-instagram.svg'
import twitter from '../../assets/social-media-dashboard/images/icon-twitter.svg'
import youtube from '../../assets/social-media-dashboard/images/icon-youtube.svg'
import up from '../../assets/social-media-dashboard/images/icon-up.svg'

const Summary = () => {
  return (
    <Container>
      <div className='card facebook'>
        <header >
          <img src={facebook} alt="facebook" />
          <p>Facebook</p>
        </header>
        <section>
          <strong>1987</strong>
          <p>Followers</p>
        </section>
        <footer>
          <img src={up} alt="" />
          <p>Today</p>
        </footer>
      </div>
      <div  className='card instagram'>
        <header >
          <img src={instagram} alt="instagram" />
          <p>Instagram</p>
        </header>
        <section>
          <strong>1987</strong>
          <p>Followers</p>
        </section>
        <footer>
          <img src={up} alt="" />
          <p>Today</p>
        </footer>
      </div>
      <div className='card twitter'>
        <header >
          <img src={twitter} alt="twitter" />
          <p>Twitter</p>
        </header>
        <section>
          <strong>1987</strong>
          <p>Followers</p>
        </section>
        <footer>
          <img src={up} alt="" />
          <p>Today</p>
        </footer>
      </div>
      <div className='card youtube' >
        <header >
          <img src={youtube} alt="youtube" />
          <p>Youtube</p>
        </header>
        <section>
          <strong>1987</strong>
          <p>Followers</p>
        </section>
        <footer>
          <img src={up} alt="" />
          <p>Today</p>
        </footer>
      </div>
     
    </Container>
  )
}

export default Summary
