import React from 'react'

const AppointmentModalProperty = ({keyTag, valueTag}) => {
    return (
      <div className="row">
        <div className="col-3 text-start">{keyTag}:</div>
        <div className="col-9 text-start">{valueTag}</div>
      </div>
    );
}

export default AppointmentModalProperty
