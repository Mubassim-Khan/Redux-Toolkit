import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../features/user/userSlice'

export const UserView = () => {
    // useDispatch hook to dispatch an action
    const dispatch = useDispatch();
    // dispatch an async action
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    // To select the state from redux store use 'useSelector' hook
    const user = useSelector((state) => state.user);

    return (
        <div>
            <h2>List of Users</h2>
            {/* Some conditions when rendering the jsx  */}
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    )
}
