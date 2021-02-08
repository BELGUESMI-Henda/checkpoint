import React from 'react'

export default function ProfileComponent(props){

    function handelClick(event){
        alert(`name of profile user is ${props.name}`);
    }
    return(
        <div className="container">
            <p className="well well-lg" >
                THE FULL NAME :
                <span > {props.name}</span>
            </p>
            <p className="well well-lg"> 
                THE BIO :
                <span> {props.bio}</span>
            </p>
            <p className="well well-lg">
                Profession:
                <span> {props.profession}</span>
            </p>
            <p className="well well-lg">
                <img className="img-circle" width="50%" height="500px" src="imageProfile.jpeg"/>{props.children}
            </p>
            <button className="alert alert-success" onClick={handelClick}>
               <strong> Click here </strong>
            </button>
             </div>

    )
}
