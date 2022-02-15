import React, { useState } from 'react'
import styles from "./tickets.module.scss";
import Tickets from './Tickets'
import { useSelector } from 'react-redux'

function MainTickets (props) {
  const [cheap, setCheap] = useState(false);
  const tickets = useSelector(state => state.tickets.tickets);

  const handleClickCheap = () => {
    setCheap(!cheap);
    if (!cheap) {
      tickets.tickets.sort(function(a, b){
        return a.price-b.price
      })
      // сортировка по возрастанию цены
    } else {
      tickets.tickets.sort(function(){
        return Math.random() - 0.5;
      });
      //сортировка в случайном порядке
    }
  }

  const [fast, setFast] = useState(false);

  const handleClickFast = () => {
    setFast(!fast);
    if (!fast) {
      tickets.tickets.sort(function(a,b){
        return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
      })
      // сортировка по возрастанию времени в полете
    } else {
      tickets.tickets.sort(function(){
        return Math.random() - 0.5;
      });
      //сортировка в случайном порядке
    }
  }

  return (
    <div>
      <div className={styles.button}>
        <button className={cheap ? styles.button_select : ''} onClick={handleClickCheap}>
          <p>
            самый дешевый
          </p>
        </button>
        <button className={fast ? styles.button_select : ''} onClick={handleClickFast}>
          <p>
            самый быстрый
          </p>
        </button>
      </div>
      <Tickets />
    </div>
  )
}

export default MainTickets;