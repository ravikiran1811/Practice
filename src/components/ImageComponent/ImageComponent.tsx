import { ImageData } from "../../DummyData/ImageData";
import ImageStyles from './ImageCompoenent.module.scss'
const ImageComponent = () => {
  return (
    <div>
      {ImageData.map((e) => (
        <div className={ImageStyles.card}>
        <div className={ e.id %2 ===0 ? ImageStyles.cardEven : ImageStyles.cardOdd}>
            <div>
                <div className={ImageStyles.cardPart2}>
          <div className={ImageStyles.cardImage}>
            <img src={e.image} alt="founder" />
          </div>
          <div className={ImageStyles.cardFounder}>
            <p>{e.name}</p>
          </div>
          <div className={ImageStyles.cardDesignation}>
            <p>{e.designation}</p>
          </div>
          </div>
         </div>
          <div className={ImageStyles.cardContent}>
            <p>{e.content}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};
export default ImageComponent;
