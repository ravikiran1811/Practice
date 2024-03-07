import DetailsComponent from "../DetailsComponent/DetailsComponent"
import HeadingComponent from "../HeadingComponent/HeadingComponent"
import s2 from './Section2.module.scss'
const Section2=()=>{
    return(
        <div className={s2.section2}>
            <HeadingComponent heading={"Get Started"} />
            <DetailsComponent />
        </div>
    )
}
export default Section2;