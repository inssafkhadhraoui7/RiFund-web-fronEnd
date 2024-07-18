import React from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.formIntro}>
        <h2 className={styles.formTitle}>NOUS-CONTACTER</h2>
        <div className={styles.verticalLine}></div>
        <p className={styles.formDescription}>
          Si vous avez des questions, remplissez simplement le formulaire de contact et nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <p className={styles.thankYouNote}>
            Nous apprécions votre intérêt et nous vous répondrons rapidement.
          </p>
          <p className={styles.followUs}>
            Suivez-nous sur les réseaux sociaux:
          </p>
          <div className={styles.socialIcons}>
          <a href="https://www.facebook.com">
        <img src="facebook.png" alt="Facebook" className={styles.socialIcon} />
            </a>
           <a href="mailto:rhgrouperif@gmail.com">
        <img src="email.png" alt="Email" className={styles.socialIcon} />
         </a>
            <a href="https://www.rifund.com">
        <img src="site.png" alt="Site" className={styles.socialIcon} />
          </a>
           <a href="https://www.instagram.com">
           <img src="instagram.png" alt="Instagram" className={styles.socialIcon} />
         </a>
          </div>
           </div>
            <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.formLabel}>Nom</label>
              <input type="text" id="lastName" className={styles.formInput} placeholder="Jane" />
            </div>
            <div className={styles.spacer}></div>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.formLabel}>Prénom</label>
              <input type="text" id="firstName" className={styles.formInput} placeholder="Smitherton" />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Adresse e-mail</label>
            <input type="email" id="email" className={styles.formInput} placeholder="email@janesfakedomain.net" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Votre message</label>
            <textarea id="message" className={styles.formTextarea} placeholder="Entrez votre question ou message"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
