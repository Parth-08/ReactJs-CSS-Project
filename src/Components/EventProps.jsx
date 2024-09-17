import "./EV.css";
export const EventProps =()=>{

const HandleWelcomeUser =(user)=>{
    alert(`Hey ${user} this is onClick.`)
}

const handleHover =()=>{
    alert(`Hey this is Hover.`)
}

    return (
        <>
         <WelcomeUser myClick ={()=>HandleWelcomeUser("Jai")} MyHover = {handleHover}/>  
        </>
    )
}

const WelcomeUser =(props)=>{

    let {myClick,MyHover} = props;
    const handleGreeting =()=>{
     myClick()
    }

    return (
    <>
    <button onClick={myClick}>Click Me</button>
    <button onMouseEnter = {MyHover}>Hover Me</button>
    <button onClick={handleGreeting}> Click handle</button>
    </>
    )
}