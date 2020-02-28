import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.getTextEditUser.id,
            name: this.props.getTextEditUser.name,
            tel: this.props.getTextEditUser.tel,
            permisstion: this.props.getTextEditUser.permisstion
        }
    }
    isChangeEditUser = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    saveButton = () =>{
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permisstion = this.state.permisstion;
        this.props.changeStatusFormEdit()
        this.props.getObjectNewEdit(item);
    } 
    render() {
        return (
            <div className="row mb-3">
                <div className="col">
                    <form method="post">
                        <div className="card border-primary bg-warning " >
                            <div className="card-header text-center">Sửa Thông Tin User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input  type="text" onChange={(e) => this.isChangeEditUser(e)} defaultValue={this.state.name} name="name" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.state.tel} onChange={(e) => this.isChangeEditUser(e)}  type="number" name="tel" className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" defaultValue={this.state.permisstion} onChange={(e) => this.isChangeEditUser(e)} name="permisstion" required>
                                        <option value>Chọn Quyền Mặc Định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger"  onClick={() => this.saveButton()} value="Lưu" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;