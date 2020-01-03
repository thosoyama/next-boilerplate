import { createContext, useCallback, useMemo, useReducer } from "react"

type AppStateT = {
  count: number
}

const initialAppState: AppStateT = {
  count: 0
}

const appReducer = (state: AppStateT, action: { type: string }): AppStateT => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

type DispatcherFuncT = () => void
type DispatcherT = {
  increment?: DispatcherFuncT
  decrement?: DispatcherFuncT
}

export const AppContext = createContext<AppStateT>(initialAppState)
export const DispatcherContext = createContext<DispatcherT>({})

export const useAppContext = (): [AppStateT, Required<DispatcherT>] => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  const increment = useCallback(() => dispatch({ type: "increment" }), [dispatch])
  const decrement = useCallback(() => dispatch({ type: "decrement" }), [dispatch])

  const dispatcher = useMemo(
    () => ({
      increment,
      decrement
    }),
    [increment, decrement]
  )

  return [state, dispatcher]
}
