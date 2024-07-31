import { Header } from './components/Header';
import { Body } from './components/Body';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Body />
      </main>
    </div>
  )
}

export default App
