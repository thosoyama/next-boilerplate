import { createContext, useCallback, useMemo, useReducer } from "react"

type AppStateT = {
  count: number
}

const initialAppState: AppStateT = {
  count: 0
}

enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement"
}

const appReducer = (state: AppStateT, action: { type: string }): AppStateT => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

type DispatcherT = {
  [key in ActionType]?: () => void
}

export const AppContext = createContext<AppStateT>(initialAppState)
export const DispatcherContext = createContext<DispatcherT>({})

export const useAppContext = (): [AppStateT, Required<DispatcherT>] => {
  const [state, dispatch] = useReducer(appReducer, initialAppState)

  const increment = useCallback(() => dispatch({ type: ActionType.INCREMENT }), [dispatch])
  const decrement = useCallback(() => dispatch({ type: ActionType.DECREMENT }), [dispatch])

  const dispatcher = useMemo(
    () => ({
      increment,
      decrement
    }),
    [increment, decrement]
  )

  return [state, dispatcher]
}
