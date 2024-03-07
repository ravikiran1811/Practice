import DetailsStyles from './DetailsComponent.module.scss'
const DetailsComponent=()=>{
    return(
        <div className={DetailsStyles.Details}>
            <p className={DetailsStyles.paragraph}>SaaSmosphere is an exclusive event in collaboration with T-hub, with the mission to inspire and equip founders with actionable strategies for scaling SaaS businesses. This gathering is our way of expressing gratitude and contributing back to the vibrant community that has fueled Divami’s growth over the past 15 years.
Our goal is to foster genuine community support and provide real-world insights from those who have walked the path. Learn from your peers and experienced SaaS founders and share your stories of trials, triumphs and the wisdom gained.</p>
        </div>
    )
}
export default DetailsComponent;