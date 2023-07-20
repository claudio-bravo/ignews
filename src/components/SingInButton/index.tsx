import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export interface ISessionProps {
    expires: string
    user: {
        email: string;
        image: string;
        name: string;
    }

}

export function SingInButton() {
    let session: ISessionProps;
    const { data } = useSession()

    if (data?.session) {
        session = data.session as ISessionProps
    }


    return session ? (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signOut()}
        >
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.singInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sing in with Github
        </button>
    );
}