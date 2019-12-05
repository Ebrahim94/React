import { useState, useEffect} from 'react'
import api from '../api'

const useResources = (resource) =>{
    
    const [resources, setResources] = useState([])

    useEffect(()=>{
        (async (resource) => {
            const response = await api.get(`/${resource}`)
            setResources(response.data)})(resource)
    }, [resource])

    return resources
}

export default useResources