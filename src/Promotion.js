import './Promotion.css';
function Promotion () {
    return (
        <div className='promotion-wrapper'>

            <div className="promotion__announcement">
            <a href='https://form.jotform.com/211015635575149'>
                <p className="promotion__title">THE FIRST 25 BARS TO SIGN UP FOR EARLY ACCESS WILL GET THE FREE BarBets&trade; BANNER SHOWN BELOW!</p>
                </a>
            </div>
            <div className="promotion__image-wrapper">
                <img className='promotion__images__banner' src='./assets/bannerNet.png' />
            </div>
            <div className="promotion__image-wrapper">
                <img className='promotion__images' src='./assets/qr__code.png' />
            </div>
            <div className="barbets__email">
                <p>Email us at  <a href='https://form.jotform.com/211015635575149'>BarBets@gmail.com</a></p>
            </div>
            
        </div>
    )
}

export default Promotion
