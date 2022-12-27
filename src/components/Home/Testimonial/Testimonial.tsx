import ShoeProduct from '../ShoeProduct/ShoeProduct'
import {Wrapper,TestimonialDiv,TestimonialImg,TestimonialH1,TestimonialP,TestimonialA,
    TestimonialDiv2,TestimonialDiv3,Testimonial2Img,Testimonial2P,Testimonial2Input,
    Testimonia2Button,Testimonial3Wrapper,Testimonia3Div,Testimonia3Img,Testimonia3Img2} from './Testimonial.style'

export default function Testimonial() {
  return (
    <>
        <Wrapper>
            <TestimonialImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/single-banner.jpg" />
            <TestimonialDiv>
                <TestimonialH1>Climb up tp the 
                    <br/>mountain with NIK
                </TestimonialH1>
                <TestimonialP>Free shipping and no hassle returns. NIK
                    <br/>Running shoes for men & women
                </TestimonialP>
               <TestimonialA>SHOP NOW</TestimonialA> 
            </TestimonialDiv>

            <TestimonialDiv2>
                <Testimonial2Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/newsletter/2.jpg" />
                <TestimonialDiv3>
                    <Testimonial2P>News Letter</Testimonial2P>
                    <TestimonialH1>Subscribe To our
                        <br/>Newsletter
                    </TestimonialH1>
                    <Testimonial2Input />
                    <Testimonia2Button><i className="fa fa-arrow-right"></i></Testimonia2Button>
                </TestimonialDiv3>
            </TestimonialDiv2>

            <ShoeProduct/>

            <Testimonial3Wrapper>
                <Testimonia3Div>
                    <Testimonia3Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/1.png" />
                </Testimonia3Div>
                <Testimonia3Div>
                    <Testimonia3Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/2.png" />
                </Testimonia3Div>
                <Testimonia3Div>
                    <Testimonia3Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/3.png" />
                </Testimonia3Div>
                <Testimonia3Div>
                    <Testimonia3Img2 src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/4.png" />
                </Testimonia3Div>
                <Testimonia3Div>
                    <Testimonia3Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/5.png" />
                </Testimonia3Div>
                <Testimonia3Div>
                    <Testimonia3Img src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/6.png" />
                </Testimonia3Div>
            </Testimonial3Wrapper>
        </Wrapper>
    </>
  )
}
