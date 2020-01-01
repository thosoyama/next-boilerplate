import { useCallback, useReducer, useMemo, createContext } from "react"

type AppStateType = {
  count: number
}

const initialAppState: AppStateType = {
  count: 0
}

const appReducer = (state: AppStateType, action: { type: string }): AppStateType => {
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

type DispatcherType = {
  increment: () => void
  decrement: () => void
}

export const AppContext = createContext<AppStateType>(initialAppState)
export const DispatcherContext = createContext<DispatcherType>({} as DispatcherType)

export const useAppContext = (): [AppStateType, DispatcherType] => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  const increment = useCallback(() => {
    dispatch({ type: "increment" })
  }, [])

  const decrement = useCallback(() => {
    dispatch({ type: "decrement" })
  }, [])

  const dispatcher = useMemo(() => {
    return {
      increment,
      decrement
    }
  }, [increment, decrement])

  return [state, dispatcher]
}
