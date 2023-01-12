import { Wrapper, Table, Th, Tr, Td, Img, Button, Td1 } from './SubCategoryList.style'

import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_SUBCATEGORIES } from '../../../gqlOperations/queries'
import { DELETE_SUBCATEGORY } from '../../../gqlOperations/mutations'

export default function SubCategoryList() {
  const { loading, error, data } = useQuery(GET_ALL_SUBCATEGORIES)
  const [deleteSubCategory] = useMutation(DELETE_SUBCATEGORY, {
    refetchQueries: [
      `getSubCategories`
    ]
  })

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }
  if (data.getSubCategories.length === 0) {
    return <h4>No Posts Available...</h4>
  }

  const deleteData = (data: any) => {
    const choice = window.confirm(
      "Are you sure you want to delete?"
    )
    if (choice) {
      // console.log(data)
      deleteSubCategory({
        variables: {
          subCategoryId: data._id
        }
      })
    }
  }

  return (
    <>
      <Wrapper>
        <Table >
          <Tr>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Image</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
          {
            data.getSubCategories.map((item: any, index: any) => {
              return (
                <Tr key={index}>
                  <Td>{item.name}</Td>
                  <Td>{item.category_info.name}</Td>
                  <Td><Img src={item.image} /></Td>
                  <Td1>{(item.status === "1") ? "Active" : "Block"}</Td1>
                  <Td>
                    {/* <Button><i className="fa fa-edit"></i></Button> */}
                    <Button onClick={() => deleteData(item)}><i className="fa fa-trash"></i></Button>
                  </Td>
                </Tr>
              )
            })
          }

        </Table>
      </Wrapper>
    </>
  )
}
