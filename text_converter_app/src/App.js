import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import './components/stylesheet.css';
import WebcamComponent from './components/webcamComponent'
import AboutComponent from './components/aboutComponent'
import DisplayText from './components/displayText'
import MenuComponent from './components/menuComponent'
import DownloadedComponent from './components/downloadedComponent'


class App extends Component {

    constructor(props) {
        super(props);
        this.screen = 0;
    }

    changeScreen = (screenNum) => {
        this.screen = screenNum;
        this.forceUpdate();
    }

    getScreen = () => {
        return this.screen;
    }

    displayReturnedText(postReturnedText) {
        this.setState(state => ({
            posts: [postReturnedText]
        }))
    }

    render() {
        const screen = this.getScreen();

        if (screen === 0) {
            return (
                <div >
                    <MetaTags>
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <title>View Text - Notes Converter</title>
                    </MetaTags>
                    <DisplayText scannedTextFromApp={this.scannedText}/>
                    <MenuComponent ref={this.menu_ref} changeScreen={this.changeScreen} />
                </div >
            );
        }
        else if (screen === 1) {
            return (
                <div >
                    <MetaTags>
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <title>Scan Text - Notes Converter</title>
                    </MetaTags>
                    <MenuComponent ref={this.menu_ref} onBlur={this.closeMenu} changeScreen={this.changeScreen} />
                    <div className="webcamContainer" visibility="visible" >
                        <WebcamComponent />
                    </div>
                </div >
            );
        }
        else if (screen === 2) {
            return (
                <div>
                    <MetaTags>
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <title>About - Notes Converter</title>
                    </MetaTags>
                    <MenuComponent ref={this.menu_ref} onBlur={this.closeMenu} changeScreen={this.changeScreen} />
                    <AboutComponent />
                </div>
            );
        }
        else if (screen === 3) {
            return (
                <div >
                    <MetaTags>
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <title>Export Text - Notes Converter</title>
                    </MetaTags>
                    <MenuComponent ref={this.menu_ref} onBlur={this.closeMenu} changeScreen={this.changeScreen} />
                    <DownloadedComponent/>
                </div >
            );
        }
    }
}

export default App;
