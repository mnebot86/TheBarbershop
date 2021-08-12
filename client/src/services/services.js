import api from "./apiConfig"

export const getAllServices = async () => {
  const res = await api.get("/services")
  return res.data
}