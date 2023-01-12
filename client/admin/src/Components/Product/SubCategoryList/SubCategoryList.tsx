import { Option } from './SubCategoryList.style'

import { useQuery } from '@apollo/client'
import { GET_ALL_SUBCATEGORIES } from '../../../gqlOperations/queries'

export default function SubCategoryList() {

  const {loading,data} = useQuery(GET_ALL_SUBCATEGORIES)
  if(loading) return <h1>Loading</h1>
  
  return (
    <>
      {
        data.getSubCategories.map((item:any,index:any)=>{
            return(
              <Option value={item._id} key={index}>{item.name}</Option>
            )
        })
      }
    </>
  )
}
