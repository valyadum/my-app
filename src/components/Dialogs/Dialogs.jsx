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
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sasha" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I'm fine thanks"},
    { id: 4, message: "yo" },
    { id: 5, message: "yo" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id} />

      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
        <Message message={messagesData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
