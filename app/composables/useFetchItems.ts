import type { Ref } from 'vue'

interface Item {
  id: number
  name: string
  descripcion: string
}

export function useFetchItems() {
  const items: Ref<Item[]> = ref([])
  const loading = ref(false)
  const errorItem = ref<string | null>(null)

  const fetchItems = async () => {
    loading.value = true
    errorItem.value = null
    try {
      const res = await fetch('/data.json')
      const data = await res.json()
      items.value = data.items
    } catch (err) {
        errorItem.value = 'Error al cargar los items'
    } finally {
      loading.value = false
    }
  }

  return { items, loading, errorItem, fetchItems }
}
