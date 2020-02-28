import React, { Component } from 'react';

class TableDataRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            tel: this.props.tel,
            permisstion: this.props.permisstion,
        }
    }
    
    userType = () => {
        if(this.props.permisstion === 1){
            return "Admin";
        }else if(this.props.permisstion === 2){
            return "User";
        }else{
            return "Nomal User";
        }
    }
    getTextEditUser = () => {
        this.props.getTextEditUser();
        this.props.changeStatusFormEdit()
    }
    render() {
        return (
            <tr>
                <td >{this.props.userId + 1}</td>
                <td> {this.props.name} </td>
                <td> {this.props.tel} </td>
                <td>{this.userType()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"  onClick={() =>this.getTextEditUser()} >
                            <i className="fa fa-edit">Sửa</i>
                        </div>
                        <div className="btn btn-danger xoa"  onClick ={() => this.props.delUser(this.props.id)} >
                            <i className="fa fa-delete">Xóa</i>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;