import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Greeting, UserCard } from "./Greeting"
import Product, { Navbar } from './Greeting'
// import {Buttom} from './button'
// import {TaskCard} from './task'
// import { Saludo } from './Saludar';
// import {Post} from './Post'

const root = ReactDOM.createRoot(document.getElementById('root'))





createRoot.render 

<h1>Hello World</h1>
// const handleChange = (event) => {
//     console.log(event.target.value + '...');

// }

const user = [
    {
    id:1,
    name: "Pato avila",
    Image: ' https://robohash.org/Duck'
},
{

    id:2,
    name: "maicol",
    Image:'https://robohash.org/Ducking'
},
{

    id:3,
    name: "Isaias",
    Image:'https://robohash.org/Duckinging'
},

]
root.render(
    <>
        {user.map((user, i) => {
            return (
                <div key={i}>
                    <div>
                        <h1>{user.name}</h1>
                        <img src={user.Image} alt={user.name} />
                    </div>
                </div> // Agregar la etiqueta de cierre </div> aquí
            );
        })}
    </>
);



      /*  
        {/* <TaskCard  ready={false}/>
          <Saludo/> 
        <Buttom text= 'Pagar'/> 
        

{/* 
    <Buttom text= 'Pagar'/>
    <Buttom text= 'Comprar'/>
    <Buttom text= 'Hello world' name = 'Erika'/>


        <form onSubmit={(Event) => {
        Event.preventDefault()
        alert('enviado')
        }}>
            <h1> Registro de usuario </h1>
            <button> Send </button>
            </form>
 

            {/* <Post/> 

        {/* <UserCard



            name="Pato avila"
            amount={3000}
            married={true}
            points={[99, 33, 3, 22.2]}
            address={{
                street: '123 Main street',
                city: "San Francisco"
            }}
            greet={function () { alert("hello") }}
 


        // />

        // <UserCard
        //     name={"Maicol avila"}
        //     amount={1000}
        //     married={false}
        //     points={[329, 213]}
        //     address={{
        //         street: "Sav some 143",
        //         city: "new york" 
        //     }}
        // /> 
        */
