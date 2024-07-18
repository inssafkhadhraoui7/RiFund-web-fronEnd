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
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9de2e31631462faf5e15c00a51f84165975988b6320056304b78ce9671a444?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="Login icon" className={styles.loginIcon} />
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
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/60443e042c8146f417d7db9c3622be4ec45d6304f2d212cdd9c900a72b3350f2?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="" className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.visuallyHidden}>Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="Mot de passe"
            className={styles.inputField}
          />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4bb2e8e74caa5373bd2732dfefe863f65e91da4e11c6c7d68368df7aaf05568?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="" className={styles.inputIcon} />
        </div>
        <button type="submit" className={styles.submitButton}>Se connecter</button>
      </form>
      <button onClick={handleForgotPasswordClick} className={styles.forgotPassword}>Mot de passe oublié?</button>
      <div className={styles.divider}>
        <span className={styles.dividerText}>Ou</span>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fe9ea94155845a049c7249fd9492955e011b20995c14ae1de6693302e8b50af?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="Social login options" className={styles.socialLoginOptions} />
      <div className={styles.signupPrompt}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/095e310ca586a55a914594b49534f142f8a107520821bc29b3860a7e1871f663?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="" className={styles.promptIcon} />
        <p className={styles.promptText}>Vous n'avez pas du compte</p>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f04784f427e8b9ea157b68a0ecb093e83964ffd9e96018a7aa3fd328a7aa386?apiKey=020fffa760da4a3f892552f6ac11e7d9&" alt="" className={styles.promptIcon} />
        <button onClick={handleSignupClick} className={styles.signupLink}>S'inscrire</button>
      </div>
    </section>
  );
}

export default LoginForm;
