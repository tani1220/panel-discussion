export type ModalInputType = {
  values: {
    name: string
    text: string
  }
  hundleChange: () => void
  hundleAdd: () => void
  closeModal: () => void
  openModal: () => void
  isOpen: boolean
}

export type UserData = {
  id: string
  name: string
  question: string
}
