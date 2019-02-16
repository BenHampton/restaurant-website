import React, { Component} from 'react';
import './css/foot.css';
import FaceBookImage from '../../resources/images/facebook.PNG';
import Instagram from '../../resources/images/instagram.PNG';

export default class Footer extends Component{
    render(){
        return(
            <div className={'footer-container p-grid p-nogutter'}>
                <div className={'footer-image-container p-col'}>
                    <span className={'footer-image'}><img src={FaceBookImage} alt={'facebookImage'}/></span>
                    <span className={'footer-image'}><img src={Instagram} alt={'instagramImage'}/></span>
                </div>
            </div>
        )
    };
};