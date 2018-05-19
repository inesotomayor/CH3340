import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Card from './Card'

class App extends Component {

    static defaultProps = {
        name: 'Jose'
    }

    state = {
        title: 'Camada #3340',
        cards: [
            {id: 1, title: 'Mi Card #1', description: 'My description Card #1'},
            {id: 2, title: 'Mi Card #2', description: 'My description Card #2'},
            {id: 3, title: 'Mi Card #3', description: 'My description Card #3'},
            {id: 4, title: 'Mi Card #4', description: 'My description Card #4'},
            {id: 5, title: 'Mi Card #5', description: 'My description Card #5'},
        ]
    };

    editCard() {
        console.log('EDIT BUTTON CLICKED');
    }

    deleteCard(cardId) {

        let cardsSinEliminada = this.state.cards.filter(card => card.id !== cardId)

        this.setState({
            cards: cardsSinEliminada
        })
        
    }

    // MySetState(newState) {
    //     this.state = {
    //         ...this.state,
    //         ...newState
    //     };
    //     this.render();
    // }

    getCards() {
        return this.state.cards.map((card, index) => {
            return (
                <div className="card">
                    < Card 
                        card={card} 
                        key={card.id} 
                    />
                    <div className="actions">
                        <button onClick={this.editCard}>Edit</button>
                        <button onClick={() => this.deleteCard(card.id)}>Delete</button>
                    </div>
                </div>
            )
        });
    }

    addCard() {
        console.log('ADD CARD', this);
        const newCard = {
            id: 9999,
            title: 'New Card Title',
            description: 'New Card Description',
        };

        // const newCards = [...this.state.cards];
        // newCards.push(newCard);

        const newCards = [
            ...this.state.cards,
            newCard
        ];

        this.setState({
            cards: newCards
        });
    }

    addNewCardButton() {
        return (
            <button className="addCard" onClick={() => this.addCard()}>Add Card</button>
        );
    }

    render() {
        //React.createElement('div', {className:'App'}, 'head')
        const getTitle = () => this.state.title
        return (
            <div className="container">
                <span>{getTitle()}</span>
                <div className="App">
                    {this.getCards()}
                </div>
                {this.addNewCardButton()}
            </div>
        );
    }
}

/*App.defaultProps = {
    name: 'Stranger'
};*/

App.propTypes = {
    name: PropTypes.string
};
  

export default App;