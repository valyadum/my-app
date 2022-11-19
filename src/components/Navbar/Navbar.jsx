import s from './Navbar.module.css';

const Navbar = ()=>{
    return(
      <nav className={s.nav}>
          <div className={s.items}>
          <a href='/profile'>Profile</a>
          </div>
          <div className={s.items}>
          <a href='/dialogs'>Messages</a>
          </div>
          <div className={s.items}>
          <a>News</a>
          </div>
          <div className={s.items}>
          <a>Music</a>
          </div>
          <div className={s.items}>
          <a>Setting</a>
          </div>
      </nav>
    );
}

export default Navbar;