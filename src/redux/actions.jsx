export const loadId = () => {
  return dispatch => {
    dispatch ({
      type: 'load/id/start'
    })
    fetch('https://front-test.beta.aviasales.ru/search')
      .then(response => response.json())
      .then(json => {
        dispatch ({
          type: 'load/id/success',
          payload: json
        })
      })
  }
}

export const loadTickets = (id) => {
  return dispatch => {
    dispatch ({
      type: 'load/tickets/start'
    })
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch ({
          type: 'load/tickets/success',
          payload: json
        })
      })
  }
}

