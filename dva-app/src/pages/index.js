import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import ForumItem from '../components/ForumItem';
import styles from './index.css';


function IndexPage({ dispatch, articleList }) {

  return (
    <div className={styles.normal}>
      <div className="wrap mt20 main-container">
        <Row>
          <Col span={17}>
            <div className="timeline-list-entry bde">
              <div className="timeline-header bbe pl20">
                <span className="mr10 blue">热门</span>
                <span className="mr10">最新</span>
                <span className="mr10">评论</span>
              </div>
              <div className="timeline-list">
                {
                  (
                    articleList.map(item => {
                      return (<ForumItem key={item.id} item={item} />)
                    })
                  )
                }
              </div>
            </div>
          </Col>
          <Col span={6} offset={1}>
            {/* <Aside user={this.props.user} className="bde" /> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
  
};


function mapStateToProps(state) {
  const { articleList } = state.index;
  return {
    articleList
  }
}

export default connect(mapStateToProps)(IndexPage);
