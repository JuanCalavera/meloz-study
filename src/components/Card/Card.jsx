import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.d_flex}>
                <h2>{props.title}</h2>
                <p>COD.{props.id}</p>
            </div>
            <h3>Descrição</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;