import api from './apiConfig'


export const getAllBookings = async () => {
  const res = await api.get('/bookings')
  return res.data
}

export const getOneBooking = async (bookingID) => {
  const res = await api.get(`/booking/${bookingID}`)
  return res.data
}

export const createBooking = async (bookingData) => {
  const res = await api.post('/booking', { booking: bookingData })
  return res.data
}

export const updateBooking = async (bookingID, bookingData) => {
  const res = await api.put(`/booking/${ bookingID }`, { booking: bookingData})
  return res.data
}

export const deleteBooking = async (bookingID) => {
  const res = await api.delete(`/booking/${ bookingID }`)
  return res.data
}