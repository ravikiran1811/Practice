import UseFetch from "../CustomHooks/useFetch"
import HeadingComponent from "../HeadingComponent/HeadingComponent"
import ImageComponent from "../ImageComponent/ImageComponent"
import s4 from './Section4.module.scss'
const Section4=()=>{
  const data=UseFetch('https://mocki.io/v1/c47fac4d-95e0-4516-8f76-7911875b238f')
  console.log(data)
    return(
      <div className={s4.section4}>
        <HeadingComponent heading={"Speakers at SaaSmosphere"} />
        <ImageComponent />
        <div>
          git playing with us
        </div>
      </div>  
    )
}
export default Section4;