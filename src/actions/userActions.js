export let addUserId = userID => {
  return({
    type: "ADD_USER",
    userID
  })
}
const BASE_URL = "http://localhost:3000/api/v1/"

export const signUp = (body) => {
  return(dispatch) => {
    return fetch(BASE_URL+"users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json =>
      {dispatch({type: "ADD_USER", userData: json})}
    )
    // .catch(err => dispatch({ })
    //to catch the errors

  }
}

export const logIn = (body) => {
  return(dispatch) => {
    return fetch(BASE_URL + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(json => dispatch({type: "ADD_USER", userData: json}))
  }
}

export const profileSetUp = (body) => {
  return(dispatch) => {
    return fetch(BASE_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(res => res.json())
      .then(json => dispatch({type: ""}))
  }
}
