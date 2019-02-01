import React, {Component} from 'react';
import './App.css';
import mainTitlePicture from './../../resources/images/tt.jpg';
import partyRoom from './../../resources/images/party.jpg';
import oysters from './../../resources/images/oyseters.jpg';
import lobsterPasta from './../../resources/images/pasta-lobster.jpg';
import {Card} from "primereact/card";

class App extends Component {
    render() {
        return (
            <div className={"App"}>
                <header className={"App-header"}>
                    <img src={mainTitlePicture} alt={"main"} />
                </header>
                <div className={"main-text"}>
                    Trattoria Toscana was presented with the "Restaurateur of the Year 2013"
                    award by the South County Chamber of Commerce.
                </div>

                <div className={"App-header catering-room-container"}>
                    <Card header={'View Our Menu'} className={'catering-card'}>
                        Lunch and Dinner Catering is also available.  Call for details.
                    </Card>
                    <img src={lobsterPasta} className={'catering-room'} alt={'cateringRoom'} />
                </div>

                <div className={"App-header party-room-container"}>
                    <Card header={'Host Your Next Event'} className={'party-card'}>
                        Trattoria Toscana is the perfect choice for small wedding receptions,
                        bridal showers, corporate parties, meetings, anniversaries, birthdays or any special event
                    </Card>
                    <img src={partyRoom} className={'party-room'} alt={'partyRoom'} />
                </div>

                <div className={"App-header catering-room-container"}>
                    <Card header={'Host Your Next Event'} className={'catering-card'}>
                        Lunch and Dinner Catering is also available.  Call for details.
                    </Card>
                    <img src={oysters} className={'catering-room'} alt={'cateringRoom'} />
                </div>

            </div>
        );
    }
}

export default App;
