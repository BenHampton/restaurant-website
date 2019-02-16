import React, {Component} from 'react';
import './css/App.css';
import MainTitlePicture from './../../resources/images/tt.jpg';
import PartyRoom from './../../resources/images/party.jpg';
import LobsterPasta from './../../resources/images/pasta-lobster.jpg';
import PastaScallops from './../../resources/images/pasta-rig.jpg';
import {Card} from 'primereact/card';
import {Link} from "react-router-dom";

class App extends Component {

    render() {

        const renderCardLink = (path, text) => {
            return (
                <div>
                    <Link
                        to={{
                            pathname: path
                        }} >
                        <div className={'card-link'}>
                            {text}
                        </div>
                    </Link>
                </div>
            )
        };

        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={MainTitlePicture} className={'home-image-container'} alt={"main"} />
                </header>
                <div className={"main-text"}>
                    A delightful dining experience awaits you at Trattoria Toscana fine Italian dining.
                    <br />
                    We are honored to have the culinary expertise of Chef Tiak, one of the finest chefs in the St. Louis area.
                    <br />
                    It has been said that Chef Tika cooks not with his hands but rather his heart.
                </div>

                <div className={'parallax-home-page'}>
                </div>

                <div className={"App-header menu-container"}>
                    <Card header={'View Our Menu'} className={'menu-card'}>
                        Specialties include Veal Milanese, Penne Bolognese, Chicken Al Vino Bianco & more.
                        Enjoy lunch & dinner in our casual, intimate dining room.
                        Let our highly skilled staff provide you with excellent food & service for a memorable dining experience.
                        <div className={'menu-link-container'}>
                            {renderCardLink('menu', 'VIEW MENU')}
                        </div>
                    </Card>
                    <img src={LobsterPasta} className={'menu-image'} alt={'cateringRoom'} />
                </div>

                <div className={"App-header party-room-container"}>
                    <Card header={'Host Your Next Event'} className={'party-card'}>
                        Trattoria Toscana is the perfect choice for small wedding receptions,
                        bridal showers, corporate parties, meetings, anniversaries, birthdays or any special event
                        <div className={'party-link-container'}>
                            {renderCardLink('menu', 'LEARN MORE')}
                        </div>
                    </Card>
                    <img src={PartyRoom} className={'party-room-image'} alt={'partyRoom'} />
                </div>

                <div className={"App-header catering-card-container"}>
                    <Card header={'Catering'} className={'catering-card'}>
                        Whether you are looking for a special lunch to reward your team for its hard work,
                        or to impress an important client with a perfect dinner in your home,
                        Trattoria Toscana can cater events from 5 to 500 guests.
                        <br />
                        <br />
                        Call of details regarding catering.
                        <div className={'carting-link-container'}>
                            {renderCardLink('menu', 'BOOK NOW')}
                        </div>
                    </Card>
                    <img src={PastaScallops} className={'catering-image'} alt={'cateringRoom'} />
                </div>

            </div>
        );
    }
}

export default App;
