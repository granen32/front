import React, {useState} from 'react'
import UserName from '../component/UserName';
const Hello = (props) => {
    console.log(props);
    const [name, setName] = useState('Mike');
    const [age, setAge] = useState(props.age)
    const changeName = (e) =>{
        setName(name === "Mike" ? "jane" : "Mike")
        setAge(age + 1);
    }

    return (
        <div>
            <h2 id='name'>{name}({props.age})</h2>
            <UserName name={name}></UserName>
            <button onClick={changeName}>
                Change
            </button>
        </div>
    )
}

export default Hello
