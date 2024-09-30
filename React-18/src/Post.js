import { GiAbstract035 } from "react-icons/gi";

export const Post = () => {
    return <button onClick={() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>

    <GiAbstract035/> treaer datos

    </button>
}