import styles from './FloatingButton.module.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

const FloatingButton = () => {
    return (
        <div className={styles.icon}>
            <BsFillPlusCircleFill size={70}/>
        </div>
    );
}

export default FloatingButton;