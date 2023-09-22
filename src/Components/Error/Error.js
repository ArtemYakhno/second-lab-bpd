import style from "./Error.module.css"
const Error = (props) =>{
    return (<div className={style.error}>
        <p>{props.errorMessage}</p>
    </div>)
}
export default Error