import 'react'
import { createContext, useCallback, useContext, useState } from 'react'

export type HomeScreenContextProps = {
  isOpenedSettings: boolean
  getServices: (id?: number) => undefined
}

const defaultValue: HomeScreenContextProps = {
  isOpenedSettings: false,
  getServices: () => {
    return undefined
  },
}

export const HomeScreenContext = createContext(defaultValue)

export function HomeScreenContextProvider(props: {
  children?: React.ReactNode
}) {
  const { children } = props

  const [isOpenedSettings, setIsOpenedSettings] = useState(false)
  const getServices = useCallback((serviceId?: number) => {
    return undefined
  }, [])

  return (
    <HomeScreenContext.Provider value={{ isOpenedSettings, getServices }}>
      {children}
    </HomeScreenContext.Provider>
  )
}

export const useHomeScreenContext = () => useContext(HomeScreenContext)
