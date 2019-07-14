import React from 'react';
import hamButton from './hamButton.png';
import crossButton from './crossButton.png';

class menuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.ham_button_ref = React.createRef();
        this.cross_button_ref = React.createRef();
        this.menu_ref = React.createRef();
    }

    showHamButton = () => {
        const hamNode = this.ham_button_ref.current;
        const menuNode = this.menu_ref.current;
        hamNode.style.visibility = "visible";
        menuNode.style.visibility = "hidden";
        this.forceUpdate();
    }

    showMenu = () => {
        const hamNode = this.ham_button_ref.current;
        const menuNode = this.menu_ref.current;
        hamNode.style.visibility = "hidden";
        menuNode.style.visibility = "visible";
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <img ref={this.ham_button_ref} className="hamImage" src={hamButton} onClick={this.showMenu} alt="" />
                <div ref={this.menu_ref} className="menu">
                    <img ref={this.cross_button_ref} className="crossImage" src={crossButton} onClick={this.showHamButton} alt="" />
                    <p className="menuText" id="menuOne" onClick={() => this.props.changeScreen(1)}>Scan Text</p>
                    <p className="menuText" onClick={() => this.props.changeScreen(0)}>View Text</p>
                    <p className="menuText" onClick={() => this.props.changeScreen(2)}>About</p>
                </div>
            </div>
        );
    }
}

export default menuComponent