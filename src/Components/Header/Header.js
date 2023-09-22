import Card from '../UI/Card'
import style from './Header.module.css'
const Header = ()=>{
    return(
        <Card cssClass={style.header}>
            <p>Калькулятор класів залишків</p>
            <p>Артем Яхно</p>
        </Card>
    )
}
export default Header