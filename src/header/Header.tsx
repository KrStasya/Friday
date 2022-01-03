import { NavLink} from "react-router-dom";
import s from "./Header.module.css"


function Header (){
    return (
        <div className={s.header}>
            <div className={s.navigate}>
                <NavLink to="registration" className={s.Linktopage}>registration</NavLink>
                <NavLink to={"login"} className={s.Linktopage}>login</NavLink>
                <NavLink to={"profile"} className={s.Linktopage}>profile</NavLink>
                <NavLink to={"/404"} className={s.Linktopage}>404</NavLink>
                <NavLink to={"password_recovery"} className={s.Linktopage}>password recovery</NavLink>
                <NavLink to={"new_password"} className={s.Linktopage}>new password</NavLink>
                <NavLink to={"test_page"} className={s.Linktopage}>test page</NavLink>
            </div>
        </div>
    )
}

//className?: string | ((props: { isActive: boolean; }) => string);

export default Header