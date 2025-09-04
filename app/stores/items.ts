import { defineStore } from 'pinia'

interface Item {
  id: number
  name: string
  descripcion: string
}

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [] as Item[],
  }),
  actions: {
    // Traer todos los items
    async fetchItems() {
      const res = await fetch('/data.json')
      const data: { items: Item[] } = await res.json()
      this.items = data.items
    },

    // Traer un item específico por ID
    async fetchItemById(id: number) {
      console.log('Fetching item with ID:', id);
      
      const res = await fetch('/data.json')
      const data: { items: Item[] } = await res.json()
      const item = data.items.find((i: Item) => i.id === id)
      return item || null
    }
  }
})
