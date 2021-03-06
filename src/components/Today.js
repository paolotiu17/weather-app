import React, { useState, useEffect } from 'react'
import './css/Today.css'
const Today = (props) => {
    const [symbol, setSymbol] = useState()

    const [svg, setSvg] = useState({
        clouds:
            'https://www.flaticon.com/svg/static/icons/svg/3571/3571294.svg',
        rain: 'https://www.flaticon.com/svg/static/icons/svg/3313/3313996.svg',
        sun: 'https://www.flaticon.com/svg/static/icons/svg/979/979585.svg',
        wind: 'https://www.flaticon.com/svg/static/icons/svg/777/777597.svg',
        snow: 'https://www.flaticon.com/svg/static/icons/svg/777/777629.svg',
        clear: 'https://www.flaticon.com/svg/static/icons/svg/979/979585.svg',
        thunderstorm:
            'https://www.flaticon.com/svg/static/icons/svg/3026/3026371.svg',
    })

    useEffect(() => {
        setSymbol(props.unit === 'metric' ? '°C' : '°F')
    }, [props.unit])

    if (props.weather) {
        //destructure props
        let {
            main,
            time,
            dayNum,
            year,
            day,
            month,
            temp,
            feel,
            description,
        } = props.weather
        let loading = props.loading

        return (
            <div className="today-container">
                {loading ? (
                    <p>loading ...</p>
                ) : (
                    <>
                        <h3 style={{ opacity: '0.6', color: ' #6FCF97' }}>
                            Today
                        </h3>
                        <p className="today-day">
                            {day} | {month} {dayNum}, {year} | {time}
                        </p>
                        <hr />
                        <p className="today-description">
                            {description} &nbsp;{' '}
                            <img
                                className="svg"
                                src={main ? svg[main.toLowerCase()] : null}
                                alt=""
                            />
                        </p>

                        <p className="today-temp">
                            Temp: {temp} {symbol}
                        </p>
                        <p className="today-feel">
                            Feels Like: {feel} {symbol}{' '}
                        </p>
                    </>
                )}
            </div>
        )
    } else if (props.stats) {
        const { humidity, pressure, sunrise, sunset } = props.stats
        return (
            <div className="today-container">
                <h3 style={{ opacity: '0.6', color: ' #6FCF97' }}>Stats</h3>
                <hr />
                <p>Humidity: {humidity}%</p>
                <p>Pressure: {pressure} hPa</p>
                <p>
                    Sunrise:{' '}
                    {sunrise
                        ? sunrise.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                          })
                        : null}
                </p>
                <p>
                    Sunset:{' '}
                    {sunset
                        ? sunset.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                          })
                        : null}
                </p>
            </div>
        )
    } else {
        return null
    }
}

export default Today
