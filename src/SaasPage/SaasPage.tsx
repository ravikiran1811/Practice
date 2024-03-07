
import Details2Component from "../components/Details2Component/Details2Component";
import Section3 from "../components/Section3/Section3";
import Section2 from "../components/Section2/Section2";
import Section4 from "../components/Section4/Section4";
import SaasStyles from './SaasPage.module.scss';
import Section1 from "../components/Section1/Section1";
const SaasPage=()=>{
    return(
        <div className={SaasStyles.page}>
            <Section1 />
           <Section2 />
           <Section3 />
           <Section4 />
        </div>
    )
}
export default SaasPage;