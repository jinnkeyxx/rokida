export const TimeSale = 'December 30, 2020 20:00:00'
let interval
export const StartTime = (h , m , s ) => {
    const countDownDate = new Date(TimeSale).getTime()
    interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now
        // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const Hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
        const minutes = Math.floor((distance % ( 1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if(distance < 0 ){
            clearInterval(interval.current)
        }
        else {
            h(Hours)
            m(minutes)
            s(seconds)
        }
    },1000)
}