import {Wrapper,BannerImgWrapper,BannerImg} from './Slider.styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
      <Wrapper>
      <Slider {...settings}>
      <BannerImgWrapper>
            <BannerImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/slideshow/s1.jpg" />
        </BannerImgWrapper>
        <BannerImgWrapper>
            <BannerImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/slideshow/s2.jpg" />
        </BannerImgWrapper>
        <BannerImgWrapper>
            <BannerImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/slideshow/s3.jpg" />
        </BannerImgWrapper>
        </Slider>
      </Wrapper>
    </>
  )
}
