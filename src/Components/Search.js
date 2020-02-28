import React, { Component } from 'react';
import EditUser from './EditUser';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: ""
        }
    }
    showEditUser = () => {
        if(this.props.editUser === true){
            return <EditUser getObjectNewEdit={(newUserEdit) => this.props.getObjectNewEdit(newUserEdit)} getTextEditUser={this.props.getTextEditUser} changeStatusFormEdit={() => this.props.changeStatusFormEdit()}></EditUser>
        }
    }
    isChangeSearch = (e) => {
        var value = e.target.value;
        this.setState({
            tempValue: value
        });
        this.props.getTextSearch(this.state.tempValue)
    }
    showButtonAddUser = () => {
        if (this.props.hienThiForm === true)
        {
            return <div className="btn btn-block btn-outline-secondary mb-3" onClick={() => this.props.changeStatusForm()} >Đóng Lại</div>
        } 
        else {
            return <div className="btn btn-block btn-outline-primary mb-3" onClick={() => this.props.changeStatusForm()} >Thêm Mới</div>
        }   
    }
    render() {
        return (
            <div className="col-12">
                {this.showEditUser()}
                <div className="form-group">
                    <div className="btn-group" style={{ width: '100%' }}>
                        <input type="text"  className="form-control" aria-describedby="helpId" placeholder="Nhập Tên Cần Tìm" onChange={(e) => this.isChangeSearch(e)}/>
                        <div className="btn btn-info" onClick={(e) => this.props.getTextSearch(this.state.tempValue)} style={{ width: '20%' }}>Tìm</div>
                    </div>
                </div>
                <hr></hr>
                {this.showButtonAddUser()}
            </div>
        );
    }
}

export default Search;