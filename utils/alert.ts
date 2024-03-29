import { toast } from "react-toastify"

export const info = (message: string) => {
    toast.dismiss()
    toast.info(message)
}

export const accepted = (message: string) => {
    toast.dismiss()
    toast.success(message)
}

export const rejected = (message: string) => {
    toast.dismiss()
    toast.error(message)
}
