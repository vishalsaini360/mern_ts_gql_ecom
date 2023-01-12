import {Wrapper,Table,Th,Tr,Td, Img, Button,Td1} from './DashboardList.style'

export default function DashboardList() {
  return (
    <>
    <Wrapper>
       <Table >
        <Tr>
          <Th>Name</Th>
          <Th>Image</Th>
          <Th>Status</Th>
          <Th>created At</Th>
          <Th>Action</Th>
        </Tr>
        <Tr>
          <Td>T-Shirt</Td>
          <Td><Img  src="https://www.w3schools.com/w3images/jeans3.jpg" /></Td>
          <Td1>1</Td1>
          <Td>18778686868</Td>
          <Td>
            <Button><i className="fa fa-edit"></i></Button>
            <Button><i className="fa fa-trash"></i></Button>
          </Td>
        </Tr>
       
        <Tr>
          <Td>T-Shirt</Td>
          <Td><Img  src="https://www.w3schools.com/w3images/jeans3.jpg" /></Td>
          <Td1>1</Td1>
          <Td>18778686868</Td>
          <Td>
            <Button><i className="fa fa-edit"></i></Button>
            <Button><i className="fa fa-trash"></i></Button>
          </Td>
        </Tr>
        <Tr>
          <Td>T-Shirt</Td>
          <Td><Img  src="https://www.w3schools.com/w3images/jeans3.jpg" /></Td>
          <Td1>1</Td1>
          <Td>18778686868</Td>
          <Td>
            <Button><i className="fa fa-edit"></i></Button>
            <Button><i className="fa fa-trash"></i></Button>
          </Td>
        </Tr>
        <Tr>
          <Td>T-Shirt</Td>
          <Td><Img  src="https://www.w3schools.com/w3images/jeans3.jpg" /></Td>
          <Td1>1</Td1>
          <Td>18778686868</Td>
          <Td>
            <Button><i className="fa fa-edit"></i></Button>
            <Button><i className="fa fa-trash"></i></Button>
          </Td>
        </Tr>
       </Table>
    </Wrapper>
    </>
  )
}
