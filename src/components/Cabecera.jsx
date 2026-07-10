import styles from './Cabecera.module.css';
function Cabecera({ titulo, descripcion }) {
  return (
    <header className={styles.cabeceraPrincipal}>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </header>
  );
}
export default Cabecera;