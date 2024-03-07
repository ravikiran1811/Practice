import HeadingComponent from "../HeadingComponent/HeadingComponent";
import Details2Component from "../Details2Component/Details2Component";
import s3 from './Section3.module.scss'
const Section3=()=>{
    return(
        <div className={s3.section3}>
            <HeadingComponent heading={"Must attend event for founders"} />
            <Details2Component />
            <div>
                hii git bro do we get conflits now
            </div>
        </div>
    )
}
export default Section3;