import React from 'react'
import { Wrapper,HeaderBottom,Container,Row,Col3,Col6,Logo,LogoImg,
    Ul,Li,MegaMenuHeader,MegaMenuText,MegaMenuSpan,Dropdown,DropdownUl,DropdownLi,
    Dropdown2,DropdownDiv,DropdownUl2,DropdownLi2 } from './MainNavbar.style'

export default function MainNavbar() {
  return (
    <Wrapper>
        <HeaderBottom>
            <Container>
                <Row>
                    <Col3>
                        <Logo>
                            <LogoImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/logo.png"/>
                        </Logo>
                    </Col3>
                    <Col6>
                        <Ul>
                            <Li>
                                <MegaMenuHeader>
                                    <MegaMenuText>
                                        Home 
                                        <Dropdown>
                                            <DropdownUl>
                                                <DropdownLi>HOME 1</DropdownLi>
                                                <DropdownLi>HOME 2</DropdownLi>
                                                <DropdownLi>HOME 3</DropdownLi>
                                                <DropdownLi>HOME 4</DropdownLi>
                                            </DropdownUl>
                                        </Dropdown>
                                    </MegaMenuText>
                                    <MegaMenuSpan>
                                        <i className='fa fa-angle-down'></i>
                                    </MegaMenuSpan>
                                </MegaMenuHeader>
                            </Li>
                            <Li>
                                <MegaMenuHeader>
                                    <MegaMenuText>
                                        Shop 
                                        <Dropdown2>
                                            <DropdownDiv>
                                                <DropdownUl2>
                                                        <DropdownLi><b>CATEGORY PAGES</b></DropdownLi>
                                                        <DropdownLi>With Left Sidebar</DropdownLi>
                                                        <DropdownLi>With Right Sidebar</DropdownLi>
                                                        <DropdownLi>3 Column Layout</DropdownLi>
                                                        <DropdownLi>4 Column Layout</DropdownLi>
                                                        <DropdownLi>Without Slidebar</DropdownLi>
                                                    </DropdownUl2>
                                                    <DropdownUl2>
                                                        <DropdownLi><b>PRODUCT PAGES</b></DropdownLi>
                                                        <DropdownLi>Simple Product</DropdownLi>
                                                        <DropdownLi>Variable Product</DropdownLi>
                                                        <DropdownLi>Sale Product</DropdownLi>
                                                        <DropdownLi>Feature & on Sale</DropdownLi>
                                                        <DropdownLi>Tab Inside</DropdownLi>
                                                    </DropdownUl2>
                                                    <DropdownUl2>
                                                        <DropdownLi><b>PRTODUCT LAYOUTS</b></DropdownLi>
                                                        <DropdownLi>Grid Images</DropdownLi>
                                                        <DropdownLi>Vertical Thumb</DropdownLi>
                                                        <DropdownLi>Gallery type</DropdownLi>
                                                        <DropdownLi>Product Width Layout</DropdownLi>
                                                        <DropdownLi>Sticky Gallery</DropdownLi>
                                                    </DropdownUl2>
                                                    <DropdownUl2>
                                                    <LogoImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/menu/1.jpg"/>
                                                        <DropdownLi><b>Feature Collection</b></DropdownLi>
                                                        <DropdownLi>Discover <i className='fa fa-arrow-right'></i></DropdownLi>
                                                    </DropdownUl2>
                                            </DropdownDiv>
                                        </Dropdown2>
                                    </MegaMenuText>
                                    <MegaMenuSpan>
                                        <i className='fa fa-angle-down'></i>
                                    </MegaMenuSpan>
                                </MegaMenuHeader>
                            </Li>
                            <Li>
                                <MegaMenuHeader>
                                    <MegaMenuText>
                                        Blog 
                                        <Dropdown>
                                            <DropdownUl>
                                                <DropdownLi>Blog</DropdownLi>
                                                <DropdownLi>Blog Detail</DropdownLi>
                                            </DropdownUl>
                                        </Dropdown>
                                    </MegaMenuText>
                                    <MegaMenuSpan>
                                        <i className='fa fa-angle-down'></i>
                                    </MegaMenuSpan>
                                </MegaMenuHeader>
                            </Li>
                            <Li>
                                <MegaMenuHeader>
                                    <MegaMenuText>
                                        Pages 
                                        <Dropdown>
                                            <DropdownUl>
                                                <DropdownLi>About Us</DropdownLi>
                                                <DropdownLi>Contact</DropdownLi>
                                                <DropdownLi>FAQ</DropdownLi>
                                                <DropdownLi>404 Page</DropdownLi>
                                                <DropdownLi>Login</DropdownLi>
                                                <DropdownLi>Register</DropdownLi>
                                                <DropdownLi>Whislist</DropdownLi>
                                                <DropdownLi>Cart</DropdownLi>
                                                <DropdownLi>Checkout</DropdownLi>
                                            </DropdownUl>
                                        </Dropdown>
                                    </MegaMenuText>
                                    <MegaMenuSpan>
                                        <i className='fa fa-angle-down'></i>
                                    </MegaMenuSpan>
                                </MegaMenuHeader>
                            </Li>
                            <Li>
                                <MegaMenuHeader>
                                    <MegaMenuText>
                                        Contact 
                                    </MegaMenuText>
                                </MegaMenuHeader>
                            </Li>
                        </Ul>
                    </Col6>
                    <Col3>

                    </Col3>
                </Row>
            </Container>
        </HeaderBottom>
    </Wrapper>
  )
}
