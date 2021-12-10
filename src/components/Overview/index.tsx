import React from 'react'
import { Container, Content, Title } from './style'
import facebook from '../../assets/social-media-dashboard/images/icon-facebook.svg'
import instagram from '../../assets/social-media-dashboard/images/icon-instagram.svg'
import twitter from '../../assets/social-media-dashboard/images/icon-twitter.svg'
import youtube from '../../assets/social-media-dashboard/images/icon-youtube.svg'
import up from '../../assets/social-media-dashboard/images/icon-up.svg'

const Overview = () => {
  return (
    <>
      <Title className='title'>
        <h2>Overview - Today</h2>
      </Title>
      <Container>
        <Content>
          <header>
            <p>Pages views</p>
            <img src={facebook} alt="" />
          </header>
          <section>
            <strong>100</strong>
            <div>
            <img src={up} alt="" />
            <p>3%</p>
            </div>

          </section>
        </Content>
        <Content>
          <header>
            <p>Pages views</p>
            <img src={instagram} alt="" />
          </header>
          <section>
            <strong>100</strong>
              <div>
            <img src={up} alt="" />
            <p>3%</p>
              </div>

          </section>
        </Content>
        <Content>
          <header>
            <p>Pages views</p>
            <img src={youtube} alt="" />
          </header>
          <section>
            <strong>100</strong>
            <div>
            <img src={up} alt="" />
            <p>3%</p>
            </div>
          </section>
        </Content>
        <Content>
          <header>
            <p>Pages views</p>
            <img src={twitter} alt="" />
          </header>
          <section>
            <strong>100</strong>
            <div>
            <img src={up} alt="" />
            <p>3%</p>
            </div>
          </section>
        </Content>

      </Container>
    </>
  )
}

export default Overview
