import styles from './index.less'
function Header() {
    return (
        <div className={styles.header}>
            <div className="wrap">
                <a to="/main" className="logo dib pt10"><img src={ require('../assets/logo.png') } /></a>
            </div>
        </div>
    )
}

export default Header;