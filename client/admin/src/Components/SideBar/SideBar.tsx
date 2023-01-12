import React from 'react'
import { Navigation, Ul, Li,H1, Anchor, Icon, LogoDiv, LogoImg, Title } from './SideBar.style';
function SideBar() {
    return (
        <div>
            <Navigation className="navigation">
                <Ul>
                    <Li>
                        <Anchor to="/">
                            <Icon>
                                <LogoDiv>
                                    <H1>Bisum</H1>
                                </LogoDiv>
                            </Icon>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Anchor to="/admin/dashboard"><Title>Dashboard</Title></Anchor>
                        </Anchor>
                    </Li>

                    {/* <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Anchor to="/admin/danner"><Title>Banner</Title></Anchor>
                        </Anchor>
                    </Li> */}
                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Anchor to="/admin/category"><Title>Category</Title></Anchor>
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Anchor to="/admin/subCategory"><Title>Sub Category</Title></Anchor>
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Anchor to="/admin/product"><Title>Products</Title></Anchor>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Title>Messages</Title>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Title>Help</Title>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Title>Settings</Title>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Title>Password</Title>
                        </Anchor>
                    </Li>

                    <Li>
                        <Anchor to="/">
                            <Icon >
                            </Icon>
                            <Title>Sign Out</Title>
                        </Anchor>
                    </Li>
                </Ul>
            </Navigation>
        </div>
    )
}

export default SideBar