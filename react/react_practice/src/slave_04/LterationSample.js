import {useState} from 'react';

const LterationSample = () => {
    const [names, setNames] = useState([
        {id:1, text:'눈사람1'},
        {id:2, text:'눈사람2'},
        {id:3, text:'눈사람3'},
        {id:4, text:'눈사람4'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange =e => setInputText(e.target.value);
    const onClick = ()=>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText('');
    }

    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => <li key={name.id}onDoubleClick={()=> onRemove(name.id)} >{name.text}</li>);
    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>  
                {nameList} 
            </ul> 
        </> 
    ) 
    
}

export default LterationSample
