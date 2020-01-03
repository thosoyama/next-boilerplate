import { createContext, useMemo, useReducer } from "react"

// states
type AppStateT = {
  count: number
}

const initialAppState: AppStateT = {
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

type ActionT = ReturnType<typeof increment> | ReturnType<typeof decrement>

// dispatchers
type DispacherFuncT = () => void
type DispatcherT = {
  [key in typeof INCREMENT | typeof DECREMENT]?: DispacherFuncT
}

// reducer
const appReducer = (state: AppStateT, action: ActionT): AppStateT => {
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
export const AppContext = createContext<AppStateT>(initialAppState)
export const DispatcherContext = createContext<DispatcherT>({})

// hooks
export const useAppContext = (): [AppStateT, Required<DispatcherT>] => {
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
