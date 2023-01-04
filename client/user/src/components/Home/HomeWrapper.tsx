import FreeShiping from './FreeShipping/FreeShiping'
import PopularProduct from './PopularProduct/PopularProduct'
import Banner from './Banner/Banner'
import Slider from './Slider/Slider'
import Testimonial from './Testimonial/Testimonial'

export default function HomeWrapper() {
  return (
    <>
      <Slider/>
      <FreeShiping/>
      <PopularProduct/>
      <Banner/>
      <Testimonial/>
    </>
  )
}
