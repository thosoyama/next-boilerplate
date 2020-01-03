import { createContext, useMemo, useReducer } from "react"

// states
type AppState = {
  count: number
}

const initialAppState: AppState = {
  count: 0
}

// actions
const INCREMENT = "increment" as const
const DECREMENT = "decrement" as const

const increment = () => {
  return {
    type: INCREMENT
  }
}

const decrement = () => {
  return {
    type: DECREMENT
  }
}

type AppAction = ReturnType<typeof increment> | ReturnType<typeof decrement>

// dispatchers
type AppDispatcher = {
  [key in typeof INCREMENT | typeof DECREMENT]?: () => void
}

// reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case INCREMENT: {
      const count = state.count + 1
      return { ...state, count }
    }
    case DECREMENT: {
      const count = state.count - 1
      return { ...state, count }
    }
    default: {
      return state
    }
  }
}

// contexts
export const AppStateContext = createContext<AppState>(initialAppState)
export const AppDispatcherContext = createContext<AppDispatcher>({})

// hooks
export const useAppContext = (): [AppState, Required<AppDispatcher>] => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  const dispatcher = useMemo(
    () => ({
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
    }),
    [dispatch]
  )

  return [state, dispatcher]
}
