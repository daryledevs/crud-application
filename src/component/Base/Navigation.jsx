import React from 'react'
import AdminNavigation from './AdminNavigation';
import UserNavigation from './UserNavigation';
import { useSelector } from 'react-redux';
import {selectAllMode} from '../../redux file/features/SwitchMode'

const Navigation = () => {
  const mode = useSelector(selectAllMode);
  
  return (
    <div>
      {mode.isUserModeOn ? <AdminNavigation/> : <UserNavigation/>}
    </div>
  )
}

export default Navigation