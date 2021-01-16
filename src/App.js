import React, {useState, useEffect} from 'react';
import {Route, withRouter} from 'react-router-dom';
import request from 'then-jsonp';
import './App.css';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import {Row, Col} from 'antd';
import 'antd/dist/antd.css';

const App = React.memo(() => {

    console.log('app')


    return (
        <div className="appWrapper">
            <Row>
                <Header />
            </Row>
            <Row className="profileInfo">
                <Col span={18} offset={4}>
                    <Route path='/:userId?' render={() => <ProfileInfo />} />
                </Col>
            </Row>
            <Row>
                <Col span={18} offset={4} className={'content'}>
                    <Route path='/:userId/friends' render={() => <Friends />} />
                    <Route exact path='/:userId' render={() => <Profile />} />
                </Col>
            </Row>
            <Row>
                <Col span={24} className={'footer'}>Footer</Col>
            </Row>
        </div>
    );
})

export default withRouter(App);

