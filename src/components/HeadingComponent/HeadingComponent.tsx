import HeadingStyls from './HeadingComponent.module.scss'
interface IheadingProps{
    heading:string
}

const HeadingComponent: React.FC<IheadingProps>=({heading})=>{
    return(
        <div>
            <p className={HeadingStyls.heading}>{heading}</p>
        </div>
    )
}
export default HeadingComponent;