const reducer = (state = { message: "", type: "" }, action) => {
  switch (action.type) {
    case "SET_NOT":
      return action.data
    case "REMOVE_NOT":
      return { message: "", type: "" }
    default:
      return state
  }
}

export const makeNotification = (message, type, duration = 3) => {
  return async dispatch => {
    const nowTimer = window.localStorage.getItem("nowTimer")
    if (nowTimer) clearTimeout(Number(nowTimer))
    dispatch({
      type: "SET_NOT",
      data: { message, type },
    })
    const newTimer = setTimeout(
      () => dispatch({ type: "REMOVE_NOT" }),
      duration * 1000
    )
    window.localStorage.setItem("nowTimer", newTimer)
  }
}

export default reducer
