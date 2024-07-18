import React from 'react';
import styles from './RegistrationForm.module.css';

function RegistrationForm() {
  const handleSignupClick = () => {
    // Handle signup click
  };

  return (
    <section className={styles.registrationFormSection}>
      <img src="logo.png" alt="Registration icon" className={styles.registrationIcon} />
      <h1 className={styles.registrationFormTitle}>Créer un compte</h1>
      <p className={styles.registrationInstructions}>
        Veuillez remplir les champs pour créer un compte.
      </p>
      <form className={styles.registrationForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="lastName" className={styles.visuallyHidden}>Nom</label>
          <input
            type="text"
            id="lastName"
            placeholder="Nom"
            className={styles.inputField}
          />
          <img src="user2.png" alt="" className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.visuallyHidden}>Prénom</label>
          <input
            type="text"
            id="firstName"
            placeholder="Prénom"
            className={styles.inputField}
          />
          <img src="user2.png" alt="" className={styles.inputIcon} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.visuallyHidden}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={styles.inputField}
          />
          <img src="email.png" alt="" className={styles.inputIcon} />
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
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.visuallyHidden}>Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmer le mot de passe"
            className={styles.inputField}
          />
          <img src="password.png" alt="" className={styles.inputIcon} />
        </div>
        <button type="submit" className={styles.submitButton}>Créer un compte</button>
      </form>
      <div className={styles.signupPrompt}>
        <div className={styles.promptIcons}>
          <img src="face.png" alt="" className={styles.promptIcon} />
          <img src="gmail.png" alt="" className={styles.promptIcon} />
        </div>
        <p className={styles.promptText}>Vous avez déjà un compte?</p>
        <button onClick={handleSignupClick} className={styles.signupLink}>Se connecter</button>
      </div>
    </section>
  );
}

export default RegistrationForm;
