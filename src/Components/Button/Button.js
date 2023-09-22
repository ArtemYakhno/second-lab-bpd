import style from "./Button.module.css";
const Button = (props) => {
  
  return (
    <button className={style.button} type={props.type || "button"} onClick={props.onClick} name={props.nameButton}>
      {props.children}
    </button>
  );
};
export default Button;
