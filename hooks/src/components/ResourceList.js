import React from 'react'
import useResources from './useResources'
import UserList from './UserList'

const ResourceList = (props) =>{



    const resources = useResources(props.resource)

    return (
    <div>
        <UserList />
        <ul>
            {resources.map(data => {
            return<li key= {data.id}>{data.title}</li>
            })}
        </ul>
    </div>
    )
}

export default ResourceList