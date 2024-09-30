

export function Greeting({ tittle, name = "User " }) {
   console.log(tittle)
   return <h1>
      {tittle} dice {name}
   </h1>
}


export function UserCard({ name, amount, married, address }) {
   console.log(name, amount, married, address);
   return (
      <div>
      
             <h1> {name}  </h1> 
            <p> {amount}  </p>
            <p>  {married ? "married" : "single"}   </p>
            <ul>
               <li> city:  {address.city} </li>
               <li> address: {address.street} </li>
            </ul>
      
      </div>
   );
   }
