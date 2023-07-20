import { SingInButton } from '../SingInButton/index';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/imagens/logo.svg" alt="ig.news"/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SingInButton />
            </div>
        </header>
    );
}