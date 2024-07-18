import React from 'react';
import styles from './LoginForm.module.css';

function LoginForm() {
  const handleForgotPasswordClick = () => {
    // Handle forgot password click
  };

  const handleSignupClick = () => {
    // Handle signup click
  };

  return (
    <section className={styles.loginFormSection}>
      <img src="logo.png" alt="Login icon" className={styles.loginIcon} />
      <p className={styles.loginInstructions}>
        veuillez entrer vos coordonnées pour vous connecter.
      </p>
      <form className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.visuallyHidden}>Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            placeholder="Nom d'utilisateur"
            className={styles.inputField}
          />
          <img src="user2.png" alt="" className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.visuallyHidden}>Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className={styles.inputField}
          />
          <img src="password.png" alt="" className={styles.inputIcon} />
        </div>
        <button type="submit" className={styles.submitButton}>Se connecter</button>
      </form>
      <button onClick={handleForgotPasswordClick} className={styles.forgotPassword}>Mot de passe oublié?</button>
      <div className={styles.divider}>
        <span className={styles.dividerText}>Ou</span>
      </div>
   
      <div className={styles.signupPrompt}>
  <div className={styles.promptIcons}>
    <img src="face.png" alt="" className={styles.promptIcon} />
    <img src="gmail.png" alt="" className={styles.promptIcon} />
  </div>
  <p className={styles.promptText}>Vous n'avez pas du compte</p>
  <button onClick={handleSignupClick} className={styles.signupLink}>S'inscrire</button>
</div>

    </section>
  );
}

export default LoginForm;
