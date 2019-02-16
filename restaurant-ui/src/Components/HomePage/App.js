import React, {Component} from 'react';
import './css/App.css';
import MainTitlePicture from './../../resources/images/tt.jpg';
import PartyRoom from './../../resources/images/party.jpg';
import LobsterPasta from './../../resources/images/pasta-lobster.jpg';
import PastaScallops from './../../resources/images/pasta-rig.jpg';
import {Card} from 'primereact/card';

class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={MainTitlePicture} className={'home-image-container'} alt={"main"} />
                </header>
                <div className={"main-text"}>
                    Trattoria Toscana was presented with the "Restaurateur of the Year 2013"
                    award by the South County Chamber of Commerce.
                </div>

                <div className={'parallax-home-page'}>
                </div>

                <div className={"App-header menu-container"}>
                    <Card header={'View Our Menu'} className={'menu-card'}>
                        Lunch and Dinner Catering is also available.  Call for details.
                    </Card>
                    <img src={LobsterPasta} className={'menu-image'} alt={'cateringRoom'} />
                </div>

                <div className={"App-header party-room-container"}>
                    <Card header={'Host Your Next Event'} className={'party-card'}>
                        Trattoria Toscana is the perfect choice for small wedding receptions,
                        bridal showers, corporate parties, meetings, anniversaries, birthdays or any special event
                    </Card>
                    <img src={PartyRoom} className={'party-room-image'} alt={'partyRoom'} />
                </div>

                <div className={"App-header lunch-card-container"}>
                    <Card header={'Host Your Next Event'} className={'lunch-card'}>
                        Lunch and Dinner Catering is also available.  Call for details.
                    </Card>
                    <img src={PastaScallops} className={'lunch-image'} alt={'cateringRoom'} />
                </div>

            </div>
        );
    }
}

export default App;
