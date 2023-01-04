import {Wrapper,BannerDiv,BannerDiv2,BannerImg,BannerP,BannerH1} from "./Banner.style"

export default function Banner() {
  return (
    <>
<Wrapper>
  <BannerDiv>
    <BannerDiv2>
      <BannerImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/shoe-1.jpg" />
      <BannerP>Sports Shoes</BannerP>
      <BannerH1>25% off for
        <br/>sports men
      </BannerH1>
    </BannerDiv2>
    <BannerDiv2>
      <BannerImg src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/shoe-2.jpg" />
      <BannerP>Sports Shoes</BannerP>
      <BannerH1>25% off for
        <br/>sports women
      </BannerH1>
    </BannerDiv2>
  </BannerDiv>
</Wrapper>
    </>
  )
}
