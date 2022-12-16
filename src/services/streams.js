import http from './http'

export const addStream = (strem) => http.post('/streams', strem)
export const getAllStreams = () => http.get('/streams')
export const getAllStream = (id) => http.get(`/streams/${id}`)
export const updateStream = (id, stream) => http.patch(`/streams/${id}`, stream)
export const removeStream = (id) => http.delete(`/streams/${id}`)
