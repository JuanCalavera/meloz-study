import Menu from '../../components/Menu/Menu';
import styles from './AddContent.module.css';
import styleDefault from '../../Default.module.css';
import { useState } from 'react';
import { addData } from '../../data';

const AddContent = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const add = () => {
        addData(name, description);
    }

    return <div>
        <div className={styles.form}>
            <label htmlFor="name">Nome</label>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} id="name" />
            <p>Descrição</p>
            <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} cols="30" rows="10"></textarea>
            <div className={styles.button} onClick={add}>Adicionar +</div>
        </div>
    </div>
}

export default AddContent;