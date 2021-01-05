import React from "react"
import "./App.css"

function Table(props) {
  let {userDetails}=props;

  if(userDetails.length===0){
      return(<p>No data Available</p>)
  }else{
    return (
       <div>

            <table className="table" >
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {userDetails.map(item=>{
                        return(<tr>
                            <td>{item.userName}</td>
                            <td>{item.date}</td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>
           
        </div>
      );
  }
  
}

export default Table;
