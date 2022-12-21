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

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogElement }
      </div>
      <div className={s.messages}>
        {messageElement}
      </div>
    </div>
  );
};

export default Dialogs;
