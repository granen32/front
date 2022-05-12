import { useEffect,useState } from "react";

export default function useFetch(url) {
    // 주소를 이부분에서 받아와서
    const [data, setData] = useState([]);
    // 네이밍 변경
    useEffect(() =>{
        console.log('클릭했다');

        fetch(url)
        .then(res => {
            return res.json();

        })
        .then(data =>{
            setData(data);
        });
    }, [url]);

    return data;
}


