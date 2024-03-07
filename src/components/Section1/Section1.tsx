import section1Styles from './Section1.module.scss'
const Section1=()=>{
    return(
        <div className={section1Styles.bgimage}>
            <div>
                <p className={section1Styles.head1}>Empowering your SaaS journey </p>
                <p className={section1Styles.head2}>with collective wisdom</p>
                <button>register</button>
                <p className={section1Styles.head3}>On Sat, 06 Jan 2024, from 4 to 8:30 PM at T-Hub, Hyderabad </p>
            </div>
        </div>
    )
}
export default Section1;