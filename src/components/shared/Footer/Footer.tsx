import React from 'react'
import {
  Wrapper, Div, Div1, Heading, Ul, Li, Img,Input, Button, Menu2, FontAwsome, P, P1,Span} from './Footer.style'

export default function Footer() {
  return (
    <Wrapper>
        <Div>
          <Div1>
            <Heading>About</Heading>
            <Ul>
              <Li>About us</Li>
              <Li>Press center</Li>
              <Li>Press center</Li>
              <Li>Our group</Li>
              <Li>Work with us</Li>
            </Ul>
          </Div1>
          <Div1>
            <Heading>Shopping</Heading>
            <Ul>
              <Li>Brand catalog</Li>
              <Li>Discount codes</Li>
              <Li>Furniture</Li>
              <Li>Sofa</Li>
              <Li>Chair</Li>
            </Ul>
          </Div1>
          <Div1>
            <Heading>Help</Heading>
            <Ul>
              <Li>Chair</Li>
              <Li>Privacy policy</Li>
              <Li>Support</Li>
              <Li>Contact</Li>
            </Ul>
          </Div1>
          <Div1>
            <Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/logo-white.png" />
            <Menu2>Stay up to date with all the news.</Menu2>
            <Input />
            <Button>SIGN UP</Button><br />
            <FontAwsome className="fa fa-twitter"></FontAwsome>
            <FontAwsome className="fa fa-facebook"></FontAwsome>
            <FontAwsome className="fa fa-instagram"></FontAwsome>
            <FontAwsome className="fab fa-tiktok"></FontAwsome>
            <FontAwsome className="fa fa-youtube-play"></FontAwsome>
          </Div1>
        </Div>
        <P>Privacy policy <Span>Terms & Conditions</Span></P>
        <P1> © Spree Themes.</P1>
      </Wrapper>
  )
}
