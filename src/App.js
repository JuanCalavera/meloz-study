import { useState } from 'react';
import styles from './App.module.css';
import logo from './logo.svg';
import AddContent from './pages/AddContent/AddContent';
import Home from "./pages/Home/Home";

function App() {
  const [change, setChange] = useState(false);

  return (
    <div>
      <div className={styles.menu}>
        <p onClick={() => { setChange(false) }}>Home</p>
        <p onClick={() => { setChange(true) }}>Add</p>
      </div>
      <div className={styles.space}>
        {!change && <Home />}
        {change && <AddContent />}
      </div>
    </div>
  );
}

export default App;
