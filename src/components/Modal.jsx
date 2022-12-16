import React from 'react'
import ReactDOM from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'

const Modal = (props) => {
  const navigate = useNavigate()

  return ReactDOM.createPortal(
    <div
      onClick={() => navigate('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          <p>Are you sure?</p>
        </div>
        <div className="actions">
          <div className="ui button primary">Delete</div>
          <Link to={'/'} className="ui cancel button">
            Cancel
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
