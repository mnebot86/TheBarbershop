import api from "./apiConfig"

export const getAllServices = async () => {
  const res = await api.get("/services")
  return res.data
}

export const getOneService = async (serviceID) => {
  const res = await api.get(`/services/${serviceID}`)
  return res.data
}