import React from 'react'
import dummyData from '../data'
import Card from './Card'
import {Data} from '../typings'
import axios from 'axios'

interface Props {
  meetups: Data[]
}


export default function MeetupsList({meetups} : Props) {
  return (
    <div>
       {
            meetups?.map((meetup) => {
                return (
                    <Card
                        key={meetup._id}
                        meetup={meetup}
                    />
                )
            })
       }

    </div>
  )
}



