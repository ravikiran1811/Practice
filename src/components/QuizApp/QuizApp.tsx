import { useRef, useState } from "react";
import quizQuestions from "../../DummyData/QuizData";
import '../../App'
const QuizApp = () => {
  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [marks, setMarks] = useState(0);
  const [flag,setFlag]=useState(false)
  const selectedOption1 = useRef<HTMLParagraphElement | null>(null);
  const selectedOption2 = useRef<HTMLParagraphElement | null>(null);
  const selectedOption3 = useRef<HTMLParagraphElement | null>(null);
  const selectedOption4 = useRef<HTMLParagraphElement | null>(null);
  let optionsArray=[selectedOption1,selectedOption2,selectedOption3, selectedOption4]
  const handleAnswer = (e:any,option: string,idx:number) => {
    const correctOptionIdx = quizQuestions[index].options.findIndex(opt => opt === quizQuestions[index].answer);
    if(index===9){
      setFlag(true)
    }
    if (!lock){
      if (quizQuestions[index].answer === option) {
        setMarks((marks) => marks + 1);
        e.target.classList.add('correct')
      }
      else{
        e.target.classList.add('wrong')
        if (optionsArray[correctOptionIdx].current) {
          optionsArray[correctOptionIdx].current?.classList.add('correct');
        }
      }
      setLock(true);
    }
  };

  const handleNext = () => {
    setIndex((index) => index + 1);
    setLock(false);
    console.log(selectedOption1.current)
    selectedOption1.current?.classList.remove('correct','wrong')
    selectedOption2.current?.classList.remove('correct','wrong')
    selectedOption3.current?.classList.remove('correct','wrong')
    selectedOption4.current?.classList.remove('correct','wrong')
  };

  return (
    <div>
      <p>Question No. {index + 1}</p>
      <p>{quizQuestions[index].question}</p>
      <div>
        {quizQuestions[index].options.map((option, idx) => (
          <p className="options"
            key={idx}
            onClick={(e) => handleAnswer(e,option,idx)}
            ref={idx === 0 ? selectedOption1 : idx === 1 ? selectedOption2 : idx === 2 ? selectedOption3 : idx === 3 ? selectedOption4 : null}
            
          >
            {option}
          </p>
        ))}
      </div>
      <button onClick={handleNext}>{index < 9 ? 'Next' : 'Submit'}</button>
      {flag&&(
         <div> Total Marks You Gained: {marks}</div>
      )}
     
    </div>
  );
};

export default QuizApp;
