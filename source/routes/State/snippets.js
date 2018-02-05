export const state = `{
  users: [
    { name: 'John' },
    { name: 'Jane' },
    { name: 'Janet' }
  ]
}`

export const action = `const addUser = (name) => ({
  type: 'ADD_USER',
  payload: { name }
})`

export const reducer = `const reducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_USER':
      return {
        users: [
          ...state.users,
          { name: payload.name }
        ]
      }
    default:
      return state
  }
}`

export const thunk = `const addUser = (name) => (dispatch) => {
  dispatch({ type: 'ADDING_USER '})

  axios.post('https://example.com/api/users', { name })
    .then((response) => {
      dispatch({
        type: 'ADD_USER',
        payload: 'name'
      })
    })
    .catch((err) => {
      dispatch({ type: 'ADD_USER_FAILED' })
      return Promise.reject(err)
    })
}`

export const connect = `import React from 'react'
import { connect } from 'react-redux'
import { addUser } from 'path/to/our/store'

const Users = ({
  addUser,
  users = []
}) => (
  <div>
    <ul>
      {users.map((user) => <li>{user}</li>)}
    </ul>
    <button onClick={() => addUser('Joe')}>Add Joe</button>
  </div>
)

const mapStateToProps = (state) => ({ users: state.users })
const mapDispatchToProps = { addUser }

export default connect(mapStateToProps, mapDispatchToProps)(Users)`
