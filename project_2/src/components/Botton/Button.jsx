import styles from "./Button.module.css";
const Button = (props) => {
  const { isSecondbtn, text, icon } = props;
  return (
    <div className={isSecondbtn ? styles.secondary_btn : styles.primary_btn}>
      {icon}
      {text}
    </div>
  );
};
export default Button;
