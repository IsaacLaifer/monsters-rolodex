import { Component } from "react";

import './card-list.style.css'

class CardList extends Component{

    render(){
        console.log(this.props.monsters);
        console.log('render from cardlist');
        const { monsters } = this.props; 
     
       return(
           
           <div className="card-list">
            {monsters.map((monster) => {
                const { name, email, id} = monster;
                return(
                <div className="card-container" key={id}>
                    <img alt={`monster ${monster.name}`} src={`https://robohash.org/${id}?set=set3&size=180x180`}/>
                    <h2>{monster.name}</h2>
                    <p>{monster.email}</p>
                </div>
            )})}
           </div>
       )
    }
}

export default CardList;