import {Wrapper,Table,Th,Tr,Td, Img, Button,Td1,Thead} from './CreateList.style'

import { useQuery,useMutation } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../../gqlOperations/queries'
import { DELETE_CATEGORY } from '../../../gqlOperations/mutations'


function CategoryList() {
  const {loading,error,data} = useQuery(GET_ALL_CATEGORIES)
  console.log('data',data)
  const [deleteCategory] = useMutation(DELETE_CATEGORY,{
    refetchQueries:[
      `getCategories`
    ]
  })

  if(loading) return <h1>Loading</h1>
    if(error) {
        console.log(error.message)
    }
    if(data.getCategories.length===0){
        return <h4>No Posts Available...</h4>
    }

    const deleteData=(data:any)=>{
        const choice = window.confirm(
          "Are you sure you want to delete?"
        )
        if (choice) {
          // console.log(data)
          deleteCategory({
            variables:{
              categoryId:data._id
            }
        })
        }
    }
  return (
    <>
    <Wrapper>
       <Table >
        <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Image</Th>
          <Th>Status</Th>
          <Th>created At</Th>
          <Th>Action</Th>
        </Tr>
        </Thead>
        <tbody>
        {
          data.getCategories.map((item:any,index:any)=>{
              return (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td><Img  src={item.image} /></Td>
                    <Td1>{item.status}</Td1>
                    <Td>{item.createdAt}</Td>
                    <Td>
                      {/* <Button><i className="fa fa-edit"></i></Button> */}
                      <Button onClick={() => deleteData(item)}><i className="fa fa-trash"></i></Button>
                    </Td>
                  </Tr>
                )
            })
        }
        </tbody>
       </Table>
    </Wrapper>
    </>
  )
}

export default CategoryList