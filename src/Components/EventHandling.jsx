import "./EV.css";
export const EventHandling =()=>{
function handlerButtonClick(event){
    console.log(event);
    
    alert("I am onClick.")
}

const handlerWelcomeClick = (user)=>{
  alert("I am onClick."+user)
}

    return(<>
    <button onClick={handlerButtonClick}>Click me</button>
    <br/>
    <button onClick={()=>handlerWelcomeClick("Parth")}>Click From Arraw function</button>
    <br/>
    <button onClick={()=>alert("Hello i am from function")}>Click alert</button>
    </>)


}
