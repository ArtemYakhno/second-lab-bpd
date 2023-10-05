import Card from '../UI/Card'
import style from './Header.module.css'
const Header = (props)=>{
    return(
        <Card cssClass={style.header}>
            <p>{props.text}</p>
            <p>Артем Яхно</p>
        </Card>
    )
}
export default Header