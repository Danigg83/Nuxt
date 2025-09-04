import { defineStore } from 'pinia'

type FlashType = 'success' | 'error' | 'warning'

interface FlashMessage {
  id: number
  text: string
  type: FlashType
}

export const useFlashStore = defineStore('flash', {
  state: () => ({
    messages: [] as FlashMessage[],
  }),
  actions: {
    addMessage(text: string, type: FlashType = 'success') {
      const id = Date.now()
      this.messages.push({ id, text, type })

      // borrar automáticamente después de 10s
      setTimeout(() => {
        this.removeMessage(id)
      }, 10000)
    },
    removeMessage(id: number) {
      this.messages = this.messages.filter(m => m.id !== id)
    },
  },
})
