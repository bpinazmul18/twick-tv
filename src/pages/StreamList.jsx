import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchStreams } from '../store/streams'

const StreamList = (props) => {
  useEffect(() => {
    props.fetchStreams()
  }, [])
  return <div>StreamList</div>
}

export default connect(null, { fetchStreams })(StreamList)
