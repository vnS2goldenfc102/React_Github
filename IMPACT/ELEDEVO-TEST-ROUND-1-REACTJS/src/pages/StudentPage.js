import React, { Component } from 'react';
import ItemPageContainers from '../containers/ItemPageContainers';

export default class StudentPage extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>HELLO BẠN - DỮ LIỆU CỦA BẠN SẼ Ở ĐÂY</h1>
                <ItemPageContainers />
            </div>
        );
    }
}
