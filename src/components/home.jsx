import React from 'react'

import AnnouncementListWrapper from './announcement/announcementListWrapper'

import './home.css'
import EventListUpcoming from './event/EventListUpcoming'
import EventListCurrent from './event/eventListCurrent'
import { CountdownGauge } from './extra/countdownGuage'

export const Home = props => (
  <div className="home-wrapper">
    <div className="home-announcements">
      <AnnouncementListWrapper />
    </div>
    <div className="home-event-category">
      <CountdownGauge />
      <EventListCurrent />
      <EventListUpcoming />
    </div>
  </div>
)