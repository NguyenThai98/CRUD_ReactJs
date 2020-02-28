import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h3 className="display-3">Project Quản lý thành viên bằng ReactJS</h3>
                    <p className="lead">Với Dữ liệu JSON</p>
                </div>
            </div>
        );
    }
}

export default Header;