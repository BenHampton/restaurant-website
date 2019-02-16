import React from 'react';
import CopyRightImage from '../../resources/images/COPYRIGHT-ben-hampton.png'
import './css/CopyRightView.css';

const CopyRightView = props => {
    return(
        <div className={'g-grid p-nogutter'}>
            <div className={'copy-rights-image-container'} >
                <img src={CopyRightImage} alt={"COPY-RIGHTS-OF-BENJAMIN-HAMPTON-2019"} className={'copy-right-image'}/>
            </div>
        </div>
    );
};
export default CopyRightView;