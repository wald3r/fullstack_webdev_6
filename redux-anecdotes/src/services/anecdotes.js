import axios from 'axios'
import { asObject } from '../helpers/anecdoteHelper'
const baseUrl = 'http://localhost:3001/anecdotes'


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async content => {
    const anecdote = asObject(content)
    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const update = async object => {
    const response = await axios.put(`${baseUrl}/${object.id}`, object)
    return response.data
}

export default { getAll, createNew, update }