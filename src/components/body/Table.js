import React, {useState} from 'react'
import {AiOutlineUpload} from 'react-icons/ai'
import {BsChevronExpand} from 'react-icons/bs'
import Myrow from './Myrow'
function Table() {
    const [checked,setChecked] = useState(false);
    const [tab,setTab] = useState("left");

    const data = [
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Pending",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        }



    ];

    const handleClick = () => {
        if(checked===false)
        {setChecked(true);}
        else
        {setChecked(false);}
    }

    const setright = () => {
        setTab("right");
    }
    const setleft = () => {
        setTab("left");
    }

    return (
        <div className="table">
            <div className="table_header">
                <div className="heading"><b>Recent Transactions</b></div>
                <button className="button"><AiOutlineUpload/> Export</button>
            </div>
            <div className="tabs">
                <button className={`${ tab === "left" ? "ontab" : "tab" }`} onClick={() => setleft()}>Incoming</button>
                <button className={`${ tab === "right" ? "ontab" : "tab" }`} onClick={() => setright()}>Invoices</button>
            </div>
            <div className="headline">
                <input type="checkbox" onClick={() => handleClick()} ></input>
                <div className="invoice">Invoice Id<BsChevronExpand className="table_icon"/></div>
                <div className="date">Date<BsChevronExpand className="table_icon"/></div>
                <div className="description">Description<BsChevronExpand className="table_icon"/></div>
                <div className="status">Status<BsChevronExpand className="table_icon"/></div>
                <div className="billing">Amount<BsChevronExpand className="table_icon"/></div>
            </div>
            {data.map((entry,index) => (<Myrow props={entry} isChecked={checked} ndx={index}/>))}
            
        </div>
    )
}

export default Table


/*import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
]; 

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  /*{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}

export default Table

/*import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import './table.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Table() {
    const data = [
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        },
        {
            InvoiceId : "RISHI18117082",
            Date : [8,4,2021],
            Description : "CODE 1234565412",
            Status : "Completed",
            Billing : 2500
        }



    ];

    const columns = [
        {
            Header : "Invoice ID", field : "InvoiceId", checkboxSelection: true, headerCheckboxSelection: true
        },
        {
            Header : "Date", field : "Date"
        },
        {
            Header : "Description", field : "Description"
        },
        {
            Header : "Status", field : "Status"
        },
        {
            Header : "Total Price", field : "Billing"
        },

    ];

    //const col = useMemo(() => {columns},[]);
    //const dat = useMemo(() => data, []);

    const tableInstance = useTable({
        col : columns, dt: data
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <table {...getTableProps}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody {...getTableBodyProps}>
                {
                    rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps}>{cell.render('cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}


*/