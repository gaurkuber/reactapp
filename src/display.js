import React from 'react';

const Display = (props)=>{
    console.log(props);

    const listDocs = ({userdata})=>{
        return userdata.map((item,index)=>{
            let loc = "file:/" + item.docLocation;
            return(
                <tr key={item._id}>
                    <td>{item.partyName}</td>
                    <td>{item.dept}</td>
                    <td>{item.docType}</td>
                    <td>{item.vpo}</td>
                    <td>{item.tehsil}</td>
                    <td>{item.pinCode}</td>
                    <td><a href={loc}>Click to Open</a></td>
                </tr>
            )
        })

    }

    return(
        <div>
            <table id="userData" border="1px solid black">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Dept</th>
                    <th>Doc Type</th>
                    <th>VPO</th>
                    <th>Tehsil</th>
                    <th>PIN</th>
                    <th>Document Link</th>
                </tr>
                </thead>
                <tbody>
                    {listDocs(props)}
                </tbody>
            </table>
        </div>
    )
}

export default Display;