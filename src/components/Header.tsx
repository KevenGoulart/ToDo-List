import styles from './Header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <h1>to<span>do</span></h1>
        </header>
    )
}