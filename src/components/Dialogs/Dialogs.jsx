import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogsItem = (props) => {
  return (
    <NavLink to={"/dialogs/" + props.id} className={s.dialog + " " + s.active}>
      {props.name}
    </NavLink>
  );
};
const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {

  

let dialogElement = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} />);
let messageElement = props.state.messages.map( m => <Message message={m.message} />);
 let newMessage = React.createRef();
 let send = ()=>{
  let sendMessage = newMessage.current.value;
   alert(sendMessage);
 }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogElement }
      </div>
      <div className={s.messages}>
        {messageElement}
       <div><textarea ref={newMessage}></textarea>
       <button onClick={send}>Send</button></div> 
      </div>
    </div>
  );
};

export default Dialogs;
