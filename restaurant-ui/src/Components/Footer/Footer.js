import React, { Component} from 'react';
import './css/foot.css';
import FaceBookImage from '../../resources/images/facebook.png';
import Instagram from '../../resources/images/instagram.png';
import Twitter from '../../resources/images/twitter.png';

export default class Footer extends Component{
    render(){
        return(
            <div className={'footer-container p-grid p-nogutter'}>
                <div className={'footer-image-container p-col'}>
                    <span className={'footer-image'}>
                        <a href={'https://www.facebook.com/toscanastl/'}>
                            <img src={FaceBookImage} alt={'facebookImage'}/>
                        </a>
                        </span>
                    <span className={'footer-image'}>
                        <a href={'https://www.instagram.com/trattoria_toscanastl/?hl=en'}>
                            <img src={Instagram} alt={'instagramImage'}/>
                        </a>
                    </span>
                    <span className={'footer-image'}>
                        <a href={'https://twitter.com/toscanastl'}>
                            <img src={Twitter} alt={'instagramImage'}/>
                        </a>
                    </span>
                </div>
            </div>
        )
    };
};