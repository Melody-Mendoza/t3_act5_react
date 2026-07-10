import Cabecera from './components/Cabecera';
import Tecnologia from './components/Tecnologia';
import PiePagina from './components/PiePagina';
import styles from './App.module.css';

function App() {
  const listaTecnologias = [
    { id: 1, nombre: 'React', categoria: 'Frontend' },
    { id: 2, nombre: 'Java', categoria: 'Backend' },
    { id: 3, nombre: 'Phyton', categoria: 'Backend' },
    { id: 4, nombre: 'MongoDB', categoria: 'Base de Datos' }
  ];

  return (
    <div className={styles.contenedor}>
      <Cabecera 
        titulo="Votación de Tecnologías" 
        descripcion="Vota por tus herramientas favoritas del stack de desarrollo."
      />
      
      <main className={styles.cuadricula}>
        {listaTecnologias.map((tech) => (
          <Tecnologia 
            key={tech.id} 
            nombre={tech.nombre} 
            categoria={tech.categoria} 
          />
        ))}
      </main>

      <PiePagina />
    </div>
  );
}

export default App;