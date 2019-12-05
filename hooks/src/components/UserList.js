import React from 'react'
import useResources from './useResources'

const UserList = () => {
    const resources = useResources('users')

    return (
        <div>
            <ul>
                {
                    resources.map(resource =>{
                        return <li key={resource.id}>{resource.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UserList