import React from 'react'

type PropsType = {
    dataList:any[],
    colList:{key:string,label:string,type:string,displayField?:any}[]
}


const Table = (props:PropsType) => {
    const {dataList,colList} = props;
    console.log(dataList);
    
  return (
    <>
      <table>
        <thead>
            {colList.map((col,i) =><th key={i}>{col.label}</th>)}
        </thead>
        <tbody>
            {dataList.map((dataList,i) =>
                <tr>
                    {colList.map((col,i) =><td key={i}>{col.displayField?col.displayField(dataList):dataList[col.key]}</td>)}
                    
                </tr>
            )}
        </tbody>
      </table>
    </>
  )
}

export default Table
