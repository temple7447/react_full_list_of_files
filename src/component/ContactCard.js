import React from 'react';
import user from '../images/backend1.JPG'

function ContactCard(props) {
    const {username,message,} = props;
    return (
        <div className='row justify-content-center align-item-center my-3'>
        <div className='col d-flex text-center'>
            <div className='card'>
            <img src={user} className='bg-red h-25 w-25' alt='the' />
                <div className='card-header align-'>
                    {username}
                    <div className='card-title'>
                    <h6 className='muted text-grey'>by {username}</h6>
                    </div>
                </div>
                <div className='card-body'>
                    {message}
                </div>
            </div>
        </div>
     </div>
      );
}

export default ContactCard;