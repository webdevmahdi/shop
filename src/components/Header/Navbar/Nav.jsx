import React from 'react'

function Nav(props) {
    let {name, link} = props.page;
  return (
    <div>
        <li className='list-none mr-16'>
            <a link={link}>{name}</a>
        </li>
    </div>
  )
}

export default Nav