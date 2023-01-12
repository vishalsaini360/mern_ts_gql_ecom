import { Wrapper, Table, Th, Tr, Td, Img, Button, Td1 } from './Product.style'

import { useQuery, useMutation } from '@apollo/client'
import { GET_ALL_PRODUCTS } from '../../../gqlOperations/queries'
import { DELETE_PRODUCT } from '../../../gqlOperations/mutations'

export default function ProductList() {
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS)
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [
      `getProducts`
    ]
  })

  if (loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message)
  }
  if (data.getProducts.length === 0) {
    return <h4>No Posts Available...</h4>
  }

  const deleteData = (data: any) => {
    const choice = window.confirm(
      "Are you sure you want to delete?"
    )
    if (choice) {
      // console.log(data)
      deleteProduct({
        variables: {
          productId: data._id
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
            <Th>Image</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
          {
            data.getProducts.map((item: any, index: any) => {
              return (
                <Tr key={index}>
                  <Td>{item.name}</Td>
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
