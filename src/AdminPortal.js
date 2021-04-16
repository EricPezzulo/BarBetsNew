import './AdminPortal.css';
import React from 'react'

function AdminPortal() {
    return (
        <div className='adminPortal'>
            <h3 className='adminPortal__title'>The Administrative Portal</h3>
            <p className='adminPortal__description'>BarBets also provides an easy to use backend for business owners and managers. After setting up an account for your establishment in the Administrative Portal, login and click "Create Promotion" to get started!</p>
            <div className="adminPortal__grid">
                <img className='adminPortal__pic' src='./assets/adminportal/adminfirst.png'/>
                <img className='adminPortal__pic' src='./assets/adminportal/adminsecond.png'/>
                <img className='adminPortal__pic' src='./assets/adminportal/adminthird.png'/>
                <img className='adminPortal__pic' src='./assets/adminportal/adminfourth.png'/>
            </div>
        </div>
    )
}

export default AdminPortal
