import React from 'react';
import detailIcon from "../../assets/visibility_24px.svg";
import deleteIcon from "../../assets/delete_24px.svg";
import updateIcon from "../../assets/create_24px.svg";
import '../../styles/components/_tablelist.scss'
// TableList Component
const TableList = ({ data, columns, handleClickDelete, handleClickDetail, handleClickUpdate }) => {
  return (
    <table className='table-list'>
      <thead>
        <tr>
          <th>id</th>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
            <td>
                  <img
                    src={detailIcon}
                    alt=""
                    onClick={handleClickDetail(row._id)}
                  />
                  <img
                    src={updateIcon}
                    alt=""
                    onClick={handleClickUpdate(row._id)}
                  />
                  <img
                    src={deleteIcon}
                    alt=""
                    onClick={handleClickDelete}  
                  />
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
