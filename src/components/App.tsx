import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h1 className={styles.title}>Hello Aston</h1>
      <p className={styles.count}>{count}</p>
      <div className={styles.container}>
        <button className={styles.button} onClick={increment}>
          inc
        </button>
        <button className={styles.button} onClick={decrement}>
          dec
        </button>
      </div>
    </div>
  );
};
