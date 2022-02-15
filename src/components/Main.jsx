import React, { useEffect } from 'react'
import styles from "./main.module.scss";
import Sidebar from './Sidebar/Sidebar'
import MainTickets from './Tickets/MainTickets'
import { useDispatch, useSelector } from 'react-redux'
import { loadId, loadTickets } from '../redux/actions'

function Main (props) {
  const dispatch = useDispatch();
  const searchId = useSelector(state => state.id.searchId.searchId);

  useEffect(() => {
    dispatch(loadId())
  },[dispatch])

  useEffect(() => {
    if (searchId) {
      dispatch(loadTickets(searchId))
    }
  }, [dispatch, searchId]);

  return (
    <div className={styles.container}>
      <Sidebar />
      <MainTickets />
    </div>
  )
}

export default Main;