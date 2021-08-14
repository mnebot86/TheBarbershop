import api from './apiConfig'


export const getAllBookings = async () => {
  const res = await api.get('/bookings')
  return res.data
}

export const getOneBooking = async (bookingID) => {
  const res = await api.get(`/bookings/${bookingID}`)
  return res.data
}

export const createBooking = async (bookingData) => {
  const res = await api.post('/bookings', { booking: bookingData })
  return res.data
}

export const updateBooking = async (id, bookingData) => {
  const res = await api.put(`/booking/${ id }`, { booking: bookingData})
  return res.data
}

export const deleteBooking = async (bookingID) => {
  const res = await api.delete(`/bookings/${ bookingID }`)
  return res.data
}