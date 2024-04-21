import axios from 'axios'

const BASE_URL = 'http://localhost:8080/wrapit'
const VENUE = BASE_URL + '/venue'
const PAYMENT = BASE_URL + '/payment'
const EVENT = BASE_URL + '/event'
const BOOKING = BASE_URL + '/booking'
const AUTH = BASE_URL + '/auth'


const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})


export default class Api {
    // Set access token method
    static setAccessToken(token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    // Clear access token method
    static clearAccessToken() {
        delete api.defaults.headers.common["Authorization"];
    }

    // VENUE
    static venueAll = async () => await api.get(VENUE + '/all')
    static venueGet = async (id) => await api.get(VENUE + `/${id}`)
    static venueAdd = async (venue) => await api.post(VENUE + '/add', venue)
    
    // PAYMENT
    static paymentAll = async () => await api.get(PAYMENT + '/all')
    static paymentAdd = async (payment) => await api.post(PAYMENT + '/add', payment)
    static paymentPatch = async (payment) => await api.patch(PAYMENT + '/patch', payment)
    
    // EVENT
    static eventAll = async () => await api.get(EVENT + '/all')
    static eventAdd = async (event) => await api.post(EVENT + '/add', event)
    
    // BOOKING
    static bookingAll = async () => await api.get(BOOKING + '/all')
    static bookingAdd = async (event) => await api.post(BOOKING + '/add', event)
 
    // AUTH
    static login = async (creds) => await api.post(AUTH + '/login', creds)
    static register = async (creds) => await api.post(AUTH + '/sign-up', creds)
    static verify = async (token) => await api.post(AUTH + `/verify-account?token=${token}`)
    static forgotPassword = async(creds) => await api.post(AUTH + '/forgot-password', creds)
    static resetPassword = async (token) => await api.post(AUTH + `/reset-password?token=${token}`)
}