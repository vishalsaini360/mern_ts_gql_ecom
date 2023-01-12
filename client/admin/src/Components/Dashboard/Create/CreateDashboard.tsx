import {Column, Wrapper,Row, H1, P, P2, Font} from './CreateDashboard.styled'


function CreateDashboard() {
  return (
    <>
      <Wrapper>
          <Column>
              <Row>
                <H1>Total Order</H1>
                <P>40,876</P>
                <Font className='fa fa-shopping-cart'></Font>
                <P2>up from today</P2>
               
              </Row>
          </Column>
          <Column>
              <Row>
                <H1>Total Sales</H1>
                <P>38,876</P>
                <Font className='fa fa-shopping-cart'></Font>
                <P2>up from today</P2>
               
              </Row>
          </Column>
          <Column>
              <Row>
                <H1>Total Profit</H1>
                <P>$12,86</P>
                <Font className='fa fa-shopping-cart'></Font>
                <P2>up from today</P2>
               
              </Row>
          </Column>
          <Column>
              <Row>
                <H1>Total Return</H1>
                <P>11,086</P>
                <Font className='fa fa-shopping-cart'></Font>
                <P2>up from today</P2>
               
              </Row>
          </Column>   
      </Wrapper>
    </>
  )
}

export default CreateDashboard