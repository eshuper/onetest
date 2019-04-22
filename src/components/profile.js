import React from 'react';


const Profile = ({auth}) => {
    return (
        <>
          {auth ? <div>yes</div> : <div>no</div>} 
        </>
    )
}

export default Profile;