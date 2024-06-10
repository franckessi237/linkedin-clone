import React from 'react'
import { Space, Spin } from 'antd';


export default function Loader() {
    return(
    <div className="loader">
        <p>loading..Please Wait..</p>
        <Space size="middle" />
        <Spin size= "large" />
    </div>
    );
}