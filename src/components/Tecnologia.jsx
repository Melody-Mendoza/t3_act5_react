import { useState } from 'react';
import styles from './Tecnologia.module.css';

function Tecnologia({ nombre, categoria }) {
    const [votos, setVotos] = useState(0);

    const manejarVoto = () => {
        setVotos(votos + 1);
    };

    return (
        <div className={styles.tarjeta}>
            <div className={styles.info}>
                <h3>{nombre}</h3>
                <span className={styles.etiqueta}>{categoria}</span>
            </div>
            <div className={styles.votacion}>
                <p>Votos: {votos}</p>
                <button onClick={manejarVoto}>+1 Me gusta</button>
            </div>
        </div>
    );
}

export default Tecnologia;