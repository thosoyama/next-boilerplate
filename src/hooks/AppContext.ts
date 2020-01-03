import { createContext, useMemo, useReducer } from "react"

// states
type TAppState = {
  count: number
}

const initialAppState: TAppState = {
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

type TAction = ReturnType<typeof increment> | ReturnType<typeof decrement>

// dispatchers
type DispacherFuncT = () => void
type TDispatcher = {
  [key in typeof INCREMENT | typeof DECREMENT]?: DispacherFuncT
}

// reducer
const appReducer = (state: TAppState, action: TAction): TAppState => {
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
export const StateContext = createContext<TAppState>(initialAppState)
export const DispatcherContext = createContext<TDispatcher>({})

// hooks
export const useAppContext = (): [TAppState, Required<TDispatcher>] => {
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
