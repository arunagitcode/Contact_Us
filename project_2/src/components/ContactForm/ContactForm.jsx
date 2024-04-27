import Button from "../Botton/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btns}>
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button icon={<BsTelephoneFill fontSize="24px" />} text="VIA CALL" />
        </div>
        <Button
          isSecondbtn={true}
          icon={<MdAttachEmail fontSize="24px" />}
          text="VIA EMAIL FORM"
        />
        <form className={styles.form}>
          <fieldset>
            <legend>Form</legend>
            <div className={styles.input}>
              <label>NAME</label>
              <input type="text"></input>
            </div>

            <div className={styles.input}>
              <label>E-MAIL</label>
              <input type="email"></input>
            </div>
            <div className={styles.input}>
              <label className={styles.label}>TEXT</label>
              <textarea name="text" rows="5"></textarea>
            </div>
          </fieldset>
          <div className={styles.submit_btn}>
            <Button text="SUBMIT" />
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img
          src="/images/contact-us.jpg"
          alt="picture"
          width="400px"
          height="330px"
        />
        {/* <img src="/images/Contact_us_2.png" alt="picture"  width="400px" height="330px"/> */}
      </div>
    </section>
  );
};
export default ContactForm;
