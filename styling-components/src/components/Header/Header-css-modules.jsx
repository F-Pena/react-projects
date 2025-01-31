import logo from '../../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="A canvas" className={classes.logo} />
      <h1 className={classes.title}>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
