"use client"
import {type FC, useEffect, useState} from 'react'
import { getNow } from '../_components/getNow'

const NowPage = () => {

    const [timeNow, setTimeNow] = useState<string | Promise<string>>('')

    useEffect(()=>{
        const getNowFunc = async():Promise<string>=>{
            const now = await getNow().then(d=>d)
            return now
        }
        const timeNow_ = getNowFunc()
        setTimeNow(timeNow_)
    },[])

    return (
        <div>
            <p>{timeNow}</p>
        </div>
    )
}


export default NowPage