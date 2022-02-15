import React, { useState } from 'react'
import styles from "./sidebar.module.scss";
import { NavLink } from 'react-router-dom'

function Input (props) {
  const [zero, setZero] = useState(false)
  const [all, setAll] = useState(false)
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  const inZero = document.querySelector('#inZero');
  const inAll = document.querySelector('#inAll');
  const inOne = document.querySelector('#inOne');
  const inTwo = document.querySelector('#inTwo');
  const inThree = document.querySelector('#inThree');

  inZero.addEventListener('click', () => {
    setZero(true)
    setAll(false)
    setOne(false)
    setTwo(false)
    setThree(false)
  })
  inAll.addEventListener('click', () => {
    setZero(false)
    setAll(true)
    setOne(false)
    setTwo(false)
    setThree(false)
  })
  inOne.addEventListener('click', () => {
    setZero(false)
    setAll(false)
    setOne(true)
    setTwo(false)
    setThree(false)
  })
  inTwo.addEventListener('click', () => {
    setZero(false)
    setAll(false)
    setOne(false)
    setTwo(true)
    setThree(false)
  })
  inThree.addEventListener('click', () => {
    setZero(false)
    setAll(false)
    setOne(false)
    setTwo(false)
    setThree(true)
  })

  return (
    <div>
      <NavLink to='/'>
        <div className={zero ? styles.input_active : styles.input} id='inZero'>
            <input
              type='checkbox'
              checked={zero}
              readOnly
            />
            <p>
              все
            </p>
        </div>
      </NavLink>
      <NavLink to='/zero'>
        <div className={all ? styles.input_active : styles.input} id='inAll'>
          <input
            type='checkbox'
            checked={all}
            readOnly
          />
          <p>
            Без пересадок
          </p>
        </div>
      </NavLink>
      <NavLink to='/one'>
        <div className={one ? styles.input_active : styles.input} id='inOne'>
          <input
            type='checkbox'
            checked={one}
            readOnly
          />
          <p>
            1 пересадка
          </p>
        </div>
      </NavLink>
      <NavLink to='/two'>
        <div className={two ? styles.input_active : styles.input} id='inTwo'>
          <input
            type='checkbox'
            checked={two}
            readOnly
          />
          <p>
            2 пересадки
          </p>
        </div>
      </NavLink>
      <NavLink to='/three'>
        <div className={three ? styles.input_active : styles.input} id='inThree'>
          <input
            type='checkbox'
            checked={three}
            readOnly
          />
          <p>
            3 пересадки
          </p>
        </div>
      </NavLink>
    </div>
  )
}

export default Input