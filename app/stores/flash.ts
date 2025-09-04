import { defineStore } from 'pinia'

export const useFlashStore = defineStore('flash', {
  state: () => ({
    message: '' as string,
  }),
  actions: {
    setMessage(msg: string) {
      this.message = msg
      setTimeout(() => {
        this.message = ''
      }, 10000) // el mensaje se borra a los 3s
    },
  },
})
