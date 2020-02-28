import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    render() {
        return (
            <div className="col">
                <table className="table table-hover table-striped table-border">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((value, index) => {
                                return <TableDataRow delUser={(idUserDel) => this.props.delUser(idUserDel)} getTextEditUser={(user) => this.props.getTextEditUser(value)}  changeStatusFormEdit={() => this.props.changeStatusFormEdit()} id={value.id} name={value.name} tel={value.tel} userId = {index} key={index} permisstion={value.permisstion}></TableDataRow>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;