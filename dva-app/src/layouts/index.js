import React from 'react';
import styles from './index.less';
import withRouter from 'umi/withRouter';
import Header from './Header';

function Layout({ location, children }) {
    function layoutRender() {
        if (location.pathname === '/login') {
            return (
                <>
                    {children}
                </>
            )
        }
        else {
            return (
                <>
                    <Header />
                    <div className="main-container">
                        {children}
                    </div>
                </>
            )
        }
    }
    return (
        <div className={styles.app}>
            {
                layoutRender()
            }
        </div>
    )
};

export default withRouter(Layout);