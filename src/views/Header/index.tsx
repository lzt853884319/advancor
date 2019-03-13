import * as React from 'react';
import './style.scss'

export default class extends React.Component {
    public render() {
        const navList =['消费级产品', '专业级产品', '行业应用', '系统模块', '探索精彩', '服务与支持']
        return (
            <div className="header">
                <ul className="nav">
                    {
                        navList.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <div>
                    <div className="searchBtn"></div>
                    <div className="userhBtn"></div>
                </div>
            </div>
        )
    }
}
