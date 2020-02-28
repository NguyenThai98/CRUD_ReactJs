import React from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import dl from './Data';
import AddUser from './AddUser';
import { v1 as uuidv1 } from 'uuid';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dl,
      hienThiForm: false,
      valueSearch: "",
      editUser: false,
      objectUser: {}
    }
  }
  
  componentWillMount() {
    // kiểm tra xem thử có localStorage nào chưa.
    console.log();
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData',JSON.stringify(dl));
    }else{
      var tempData = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: tempData
      });
    }
  }
  


  changeStatusForm = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }
  changeStatusFormEdit = () => {
    this.setState({
      editUser: !this.state.editUser
    });
  }
  getTextSearch = (e) => {
   this.setState({
     valueSearch: e
   });   
  }
  AddUserNew = (name,tel,permisstion) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permisstion = permisstion;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }
  getTextEditUser = (user) => {
   this.setState({
     objectUser: user
   });
    
  }
  getObjectNewEdit = (newUserEdit) => {
   this.state.data.forEach((value, key) => {
     if(value.id === newUserEdit.id){
       value.name = newUserEdit.name;
       value.tel = newUserEdit.tel;
       value.permisstion = newUserEdit.permisstion;
     }
   })
   localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  delUser = (idUserDel) => {
    var tempData = this.state.data.filter(item => item.id !== idUserDel);
    this.setState({
     data: tempData
   });
   localStorage.setItem('userData',JSON.stringify(tempData));
  }
  render() {
    var arrItems = [];
    var dataSearch = this.state.data;
    dataSearch.forEach((value, key) => {
      if(value.name.indexOf(this.state.valueSearch) !== -1){
        arrItems.push(value);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search getObjectNewEdit={(newUserEdit) => this.getObjectNewEdit(newUserEdit)} getTextEditUser={this.state.objectUser} changeStatusFormEdit={() => this.changeStatusFormEdit()} editUser={this.state.editUser} getTextSearch={(e) => this.getTextSearch(e)} changeStatusForm={() => this.changeStatusForm()} hienThiForm={this.state.hienThiForm}></Search>
              <TableData delUser={(idUserDel) => this.delUser(idUserDel)} getTextEditUser={(user) => this.getTextEditUser(user)} changeStatusFormEdit={() => this.changeStatusFormEdit()} data = {arrItems}></TableData>
              <AddUser AddUserNew={(name,tel,permisstion) => this.AddUserNew(name,tel,permisstion)}  hienThiForm={this.state.hienThiForm}></AddUser>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
