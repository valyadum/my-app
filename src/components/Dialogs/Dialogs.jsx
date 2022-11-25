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

const Dialogs = () => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" },
  ];
  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine thanks"},
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ];

let dialogElement = dialogs.map( d => <DialogsItem name={d.name} id={d.id} />);
let messageElement = messages.map( m => <Message message={m.message} />);

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
