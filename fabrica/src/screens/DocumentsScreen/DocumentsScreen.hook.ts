import { useState, useMemo } from 'react'
import { MOCK_SERVICES, Servicos } from '../../types/defensoriasLocation'

function useDocumentsScreen() {
  const [searchText, setSearchText] = useState('')

  const filteredServices = useMemo(
    () =>
      MOCK_SERVICES.filter((service) =>
        service.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    [searchText]
  )

  return {
    searchText,
    setSearchText,
    filteredServices,
  }
}

export default useDocumentsScreen
