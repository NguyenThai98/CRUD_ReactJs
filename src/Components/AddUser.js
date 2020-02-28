import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
            permisstion: "",
        }
    }
    
    isChangeFormAddUser = (e) =>{
        const name = e.target.name;
        const value = e.target.value; 
        this.setState({
            [name]: value
        });
    }
    checkForm = () => {
        if (this.props.hienThiForm === true) {
            return <div className="col">
                <form>
                    <div className="card border-primary">
                        <div className="card-header text-center">Thêm Mới User Vào Hệ Thống</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" name="name" onChange={(e) => this.isChangeFormAddUser(e)} className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="number" name="tel"  onChange={(e) => this.isChangeFormAddUser(e)} className="form-control" placeholder="Điện Thoại" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <select className="custom-select"  onChange={(e) => this.isChangeFormAddUser(e)} name="permisstion" required>
                                    <option value>Chọn Quyền Mặc Định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permisstion) => this.props.AddUserNew(this.state.name, this.state.tel, this.state.permisstion)} value="Thêm Mới" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        }
    }
    render() {
        // console.log(this.state);
        return (
            <div>
                {this.checkForm()}
            </div>
        );
    }
}

export default AddUser;