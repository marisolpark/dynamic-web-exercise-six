import styles from "./components.module.css"

const LoginForm = () => {
    return(
        <div>
            <h2>LoginForm</h2>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                 
                <button type="submit">Create User</button>
            </form>
        </div>
    );
};

export default LoginForm;