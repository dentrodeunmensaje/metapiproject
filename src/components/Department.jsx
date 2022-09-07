import React from 'react'
import { useSelector } from 'react-redux'
import { rosFavoritesByDepartment } from './rosFavoritesByDepartment'
import {Link} from 'react-router-dom'

function Department(props) {
  const departments = useSelector((state) => state.departments)
  const thisDepartment = departments.departments.find( department => department.departmentId == props.match.params.id)

  return (
    <div>
       <h3>{thisDepartment.displayName}</h3> 
        {/* <p>Se está renderizando un dept</p>
       {console.log ({thisDepartment})} 
       {console.log ({departments})} 
       {console.log (props.match.params.id)} */}
    </div>
  )
}

export default Department