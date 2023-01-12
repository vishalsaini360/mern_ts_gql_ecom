import { Option } from './CategoryList.style'

import { useQuery } from '@apollo/client'
import { GET_ALL_CATEGORIES } from '../../../gqlOperations/queries'

export default function CategoryList() {

  const {loading,data} = useQuery(GET_ALL_CATEGORIES)
  if(loading) return <h1>Loading</h1>
  
  return (
    <>
      {
        data.getCategories.map((item:any,index:any)=>{
            return(
              <Option value={item._id} key={index}>{item.name}</Option>
            )
        })
      }
    </>
  )
}
