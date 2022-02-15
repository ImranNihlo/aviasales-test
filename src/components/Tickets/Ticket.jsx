import React from 'react'
import styles from "./tickets.module.scss";
import logo from "../../Images/air-logo.png";

function Ticket (props) {
  const price = props.ticket.price;
  const departureStops = props.ticket.segments[0].stops.join(', ');
  const arrivalStops = props.ticket.segments[1].stops.join(', ');
  const duration = props.ticket.segments[0].duration;
  const duration1 = props.ticket.segments[1].duration;
  const dateDeparture = props.ticket.segments[0].date.substr(11, 5);
  const dateDeparture1 = props.ticket.segments[1].date.substr(11, 5);

  // рассчет времени прибытия
  const newDate1 = dateDeparture.substr(0,2) * 60 + parseInt(dateDeparture.substr(3,2));
  const newDate2 = dateDeparture1.substr(0,2) * 60 + parseInt(dateDeparture1.substr(3,2));

  const dateArrival = newDate1 + duration;
  const dateArrival1 = newDate2 + duration1;

  // перевод минут в часы
  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  // перевод минут в часы с проверкой для определенных условий
  function getTimeFromMinsArrival(mins) {
    const hours = Math.trunc(mins/60);
    const minutes = mins % 60;
    if (hours > 24 && hours < 48 || hours === 24) {
      return (hours - 24) + ':' + minutes;
    } else if (hours > 48 || hours === 48) {
      return (hours - 48) + ':' + minutes;
    }
    return hours + ':' + minutes;
  };

  // const arr = getTimeFromMinsArrival(dateArrival);
  // const newArr = arr.split(':');

  return (
    <div className={styles.ticket}>
      <div className={styles.ticket__header}>
        <div>
          <h2>{price} Р</h2>
        </div>
        <div>
          <img src={logo} alt={'logo'}/>
        </div>
      </div>
      <div className={styles.ticket__content}>
        <div className={styles.ticket__content__group}>
          <div>
            <p className={styles.p_gray}>{props.ticket.segments[0].origin} - {props.ticket.segments[0].destination}</p>
            <p className={styles.p_black}>{dateDeparture} - {getTimeFromMinsArrival(dateArrival)}</p>
          </div>
          <div>
            <p className={styles.p_gray}>{props.ticket.segments[1].origin} - {props.ticket.segments[1].destination}</p>
            <p className={styles.p_black}>{dateDeparture1} - {getTimeFromMinsArrival(dateArrival1)}</p>
          </div>
        </div>
        <div className={styles.ticket__content__group}>
          <div>
            <p className={styles.p_gray}>в пути</p>
            <p className={styles.p_black}>{getTimeFromMins(duration)}</p>
          </div>
          <div>
            <p className={styles.p_gray}>в пути</p>
            <p className={styles.p_black}>{getTimeFromMins(duration1)}</p>
          </div>
        </div>
        <div className={styles.ticket__content__group}>
          <div>
            <p className={styles.p_gray}>{departureStops.length === 0 ? 'без пересадок' : false}
              {departureStops.length === 3 ? '1 пересадка' : false}
              {departureStops.length === 8 ? '2 пересадки'  : false}
              {departureStops.length > 8 ? '3 пересадки' : false}</p>
            <p className={styles.p_black}>{departureStops}</p>
          </div>
          <div>
            <p className={styles.p_gray}>{arrivalStops.length === 0 ? 'без пересадок' : false}
              {arrivalStops.length === 3 ? '1 пересадка' : false}
              {arrivalStops.length === 8 ? '2 пересадки'  : false}
              {arrivalStops.length > 8 ? '3 пересадки' : false}</p>
            <p className={styles.p_black}>{arrivalStops}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket