import { useStorage } from '@vueuse/core'

export const useDialogContact = () => {
  const dialogContactStorage = useStorage('dialog-contact', {
    isOpen: false,
  });

  const isOpen = computed(() => {
    return dialogContactStorage.value.isOpen
  })

  const close = (): void => {
    dialogContactStorage.value.isOpen = false
  }

  const open = (): void => {
    dialogContactStorage.value.isOpen = true
  }

  const toggle = (): void => {
    dialogContactStorage.value.isOpen = !dialogContactStorage.value.isOpen
  }

  return {
    isOpen,
    close,
    open,
    toggle,
  }
}
