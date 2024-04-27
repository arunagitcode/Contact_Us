import styles from "./ContactHeader.module.css"

const ContactHeader = () => {
  return (
    <div className={`${styles.header} container`}>
      <h1>CONTACT US</h1>
      <p>
        This contact form template includes common fields like name, email
        address, and a paragraph box for a brief message. However, it also
        includes a file submission option. A customer or site visitor can upload
        a visual of a problem they are having so your team can spring into action
        quickly and find a resolution.This contact form template includes common fields like name, email
        address, and a paragraph box for a brief message. However, it also
        includes a file submission option. A customer or site visitor can upload
        a visual of a problem they are having so your team can spring into action
        quickly and find a resolution.
      </p>
    </div>
  );
};
export default ContactHeader;
