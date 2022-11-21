import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>Dimich</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Andrew</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Victor</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi!</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>I'm fine, thanks.</div>
      </div>
    </div>
  );
};

export default Dialogs;
