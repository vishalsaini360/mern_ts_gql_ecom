import React from 'react'
import { Wrapper,Container,Row,Col3,Col6,AnnouncementWrapper,AnnouncementText,Text,TextBlack,
    Seperator,CurrencyWrapper,Button,FlagImg,FontIcon,CurrencyDropdown,NavLink } from './TopNavbar.style'

export default function TopNavbar() {
  return (
    <Wrapper>
        <Container>
            <Row>
                <Col3>
                    <AnnouncementText>Call: +1 078 2376</AnnouncementText>
                </Col3>
                <Col6>
                    <AnnouncementWrapper>
                        <AnnouncementText as="p">New year sale - 30% off</AnnouncementText>
                    </AnnouncementWrapper>
                </Col6>
                <Col3>
                    <AnnouncementWrapper>
                        <Seperator>
                            <AnnouncementText>
                                <FontIcon className="fa fa-user"></FontIcon>
                                <Text>
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                </Text>
                            </AnnouncementText>
                        </Seperator>
                        <CurrencyWrapper>
                            <Button as="button">
                                <FlagImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/flag/usd.jpg" alt="img"/>
                                <Text>USD</Text>
                                <Text>
                                    <FontIcon className='fa fa-angle-down'></FontIcon>
                                </Text>
                            </Button>
                            <CurrencyDropdown>
                                <Button as="button">
                                    <FlagImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/flag/usd.jpg" alt="img"/>
                                    <TextBlack>USD</TextBlack>
                                </Button><hr/>
                                <Button as="button">
                                    <FlagImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/flag/cad.jpg" alt="img"/>
                                    <TextBlack>CAD</TextBlack>
                                </Button><hr/>
                                <Button as="button">
                                    <FlagImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/flag/eur.jpg" alt="img"/>
                                    <TextBlack>EUR</TextBlack>
                                </Button>
                            </CurrencyDropdown>
                        </CurrencyWrapper>
                    </AnnouncementWrapper>
                </Col3>
            </Row>
        </Container>
    </Wrapper>
  )
}
