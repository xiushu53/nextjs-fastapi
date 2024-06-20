import {type FC, useEffect} from 'react'
import { getNow } from '../_components/getNow'

const NowPage = async () => {
    const now = await getNow()

    return (
        <div>
            <p>{now}</p>
        </div>
    )
}


export default NowPage