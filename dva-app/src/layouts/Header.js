import styles from './index.less';
import Link from 'umi/link';

function Header() {
    return (
        <div className={styles.header}>
            <div className="wrap">
                <Link to="/" className="logo dib pt10"><img src={ require('../assets/logo.png') } alt="贴乎"/></Link>
                <div className={styles.fr}>
                    <Link to="/login">登录</Link>
                    <Link to="/login">注册</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;