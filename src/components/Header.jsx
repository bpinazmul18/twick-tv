import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="ui secondary  menu">
      <Link to="/" class="item">
        TWICK-TV
      </Link>
      <Link to="/" class="item">
        Streams
      </Link>
      <div class="right menu">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <Link to="/logout" class="ui item">
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Header
