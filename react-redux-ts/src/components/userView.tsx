import React, { useEffect } from 'react'
import { fetchUsers } from '../features/user/userSlice';
// useAppSelector hook is used to get hold of any state that is mantained in Redux Store. 
// Using 'useAppDispatch' in place of 'useDispatch' same for "useAppSelector"
import { useAppDispatch, useAppSelector } from '../app/hooks';

export const UserView = () => {
    // useDispatch hook to dispatch an action
    const dispatch = useAppDispatch();
    // dispatch an async action
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    // To select the state from redux store use 'useSelector' hook
    const user = useAppSelector((state) => state.user);

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
