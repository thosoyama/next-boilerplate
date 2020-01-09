import React, { createContext, useContext, useReducer } from "react"

// actions
const INCREMENT = "increment" as const
const DECREMENT = "decrement" as const

const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })

type AppAction = ReturnType<typeof increment> | ReturnType<typeof decrement>

export const actions = {
  increment,
  decrement
} as const

// states
type AppState = {
  count: number
}

const initialState: Readonly<AppState> = {
  count: 0
}

// reducer
const appReducer: React.Reducer<AppState, AppAction> = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, count: state.count + 1 }
    }
    case DECREMENT: {
      return { ...state, count: state.count - 1 }
    }
    default: {
      return state
    }
  }
}

// dispacher
type AppDispatch = React.Dispatch<AppAction>

const initialDispatch: AppDispatch = () => {
  throw new TypeError("Context not provided.")
}

// contexts
const AppContext = createContext<[AppState, AppDispatch]>([initialState, initialDispatch])

export const useAppContext = () => {
  return useContext(AppContext)
}

export const AppProvidor: React.FC = props => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  return <AppContext.Provider value={[state, dispatch]}>{props?.children}</AppContext.Provider>
}
