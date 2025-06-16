import { ref } from 'vue'

export function useToast() {
  const show = ref(false)
  const message = ref('')
  const type = ref('success') // 'success' or 'error'

  const showToast = (msg: string, toastType = 'success') => {
  console.log('Toast triggered:', msg, toastType) // ✅ check if this logs
  show.value = false
  setTimeout(() => {
    message.value = msg
    type.value = toastType
    show.value = true

    setTimeout(() => {
      show.value = false
    }, 3000)
  }, 50)
}

  return {
    show,
    message,
    type,
    showToast
  }
}
