import './UserExperience.css';

function UserExperience() {
    return (
        <div className='userExperience'>
            <h3 className='userExperience__title'>The User Experience</h3>
            <p className='userEperience__description'>BarBets provides a user friendly experience for all It's users. Download the app, make an account, and start winning promotions at your favorite bars and restaurants! Coming soon to the App Store and Google Play Store.</p>
            <div className='userExperience__grid'>
                <img className='userExperience__pic' src='./assets/userexperience/Judge_Barbet.png' />
                <img className='userExperience__pic' src='./assets/userexperience/Barbet2_cut_arrow.png' />
                <img className='userExperience__pic' src='./assets/userexperience/Barbet4_cut_arrow.png' />
                <img className='userExperience__pic' src='./assets/userexperience/Barbet3_cut_arrow.png' />
                <img className='userExperience__pic' src='./assets/userexperience/Barbet1_cut_arrow.png' />
            </div>
        </div>
    )
}

export default UserExperience
