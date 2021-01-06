import React from 'react'

const Tablefield = ({fieldName,settingfield,removebook,editbook}) => {
    return (
        <div className="tableField">
            {fieldName}
            {settingfield &&
             <>
            <i className="fas fa-edit" onClick={editbook}></i>
            <i className="fas fa-trash-alt" onClick={removebook}></i>
            </>
            }
        </div>
    )
}

export default Tablefield
