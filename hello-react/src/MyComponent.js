import React, { Component } from 'react';
import PropTypes from 'prop-types';

// function components
/*const MyComponent = ({ name, favoritNumber, children }) => {
    return (
        <div>
            <div>안녕하세요, 제 이름은 {name}입니다.</div>
            <div>children 값은 {children}이죠!</div>
            <div>제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.</div>
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본값'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};*/

class MyComponent extends Component {
    static defaultProps = { name: '기본이름' };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                <div>안녕하세요, 제 이름은 {name}입니다.</div>
                <div>children 값은 {children}이죠!</div>
                <div>제가 가장 좋아하는 숫자는 {favoriteNumber} 입니다.</div>
            </div>
        );
    }
}

export default MyComponent; /* 다른 파일에서 이 파일을 import 할 수 있도록 내보내기 설정 */