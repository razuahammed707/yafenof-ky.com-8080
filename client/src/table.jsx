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
                        <th>תאריך</th>
                        <th>מתנדב 1</th>
                        <th>מתנדב 2</th>
                        <th>מתנדב 3</th>
                        <th>מתנדב 4</th>
                        <th>מתנדב 5</th>

                    </tr>
                </thead>
                <tbody>
                
                    {userDetails.map(item=>{
                        return(<tr>
                            <td>{item._id}</td>
                            <td>{(item.data[0]!==undefined?item.data[0].userName:" ")}</td>
                            <td>{(item.data[1]!==undefined?item.data[1].userName:" ")}</td>
                            <td>{(item.data[2]!==undefined?item.data[1].userName:" ")}</td>
                            <td>{(item.data[3]!==undefined?item.data[1].userName:" ")}</td>
                            <td>{(item.data[4]!==undefined?item.data[1].userName:" ")}</td>


                        </tr>)
                    })}
                
                    
                </tbody>
            </table>
           
        </div>
      );
  }
  
}

export default Table;
