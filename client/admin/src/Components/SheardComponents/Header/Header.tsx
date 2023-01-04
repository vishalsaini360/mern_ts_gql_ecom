import { TopBar, Toggle, TopBar1,HeaderLink,H1,DropdownContent ,LoginLink,LoginP} from './Header.style'

function Header() {
    return (
        <div>
            <TopBar>
                <Toggle>
                </Toggle>
                <HeaderLink>
                    <i className="fa fa-user text-dark"></i>Admin
                    <DropdownContent>
                        <LoginP>
                            <LoginLink to="/">Logout</LoginLink>
                        </LoginP>
                    </DropdownContent>
                </HeaderLink>
            </TopBar>
            <TopBar1>
            <Toggle>
                    <H1>Dashboard</H1>
                </Toggle>
            </TopBar1>
        </div>
    )
}

export default Header
