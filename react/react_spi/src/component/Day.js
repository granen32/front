// 특정 날짜를 클릭하면 데이터가 나오게 하기
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';
const Day = () => {
    const {day} = useParams();
    // 숫자가 아니라 문자가 들어옴 그러니까 뭐다? 숫자 내놔라 ㅍㅍ아
    // 파라매터는 매개변수인데 여기서 url에 대한 값을 얻기 위해서는 useParms를 써서 가져온다
    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Day
