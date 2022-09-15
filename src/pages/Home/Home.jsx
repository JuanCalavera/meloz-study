import styles from './Home.module.css';
import styleDefault from '../../Default.module.css';
import Menu from '../../components/Menu/Menu';
import Card from '../../components/Card/Card';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import { data } from '../../data';


const Home = () => {

    return (
        <>
            {data.map((singleData, key) => {
                return <Card
                    title={singleData.name}
                    id={key + 1}
                    description={singleData.description}
                />
            })}
            <FloatingButton />
        </>
    );
}

export default Home;