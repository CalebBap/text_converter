import React from 'react';
import dlImage from './downloadedIcon.png';

class downloadedComponent extends React.Component {

    componentDidMount() {
        const hrefElement = document.createElement("a");
        const textFile = new Blob([global.scannedText.replace(/\n/g, "\r\n")], { type: 'text/plain' });
        hrefElement.href = URL.createObjectURL(textFile);
        hrefElement.download = "Scanned Text.txt";
        document.body.appendChild(hrefElement);
        hrefElement.click();
    }

    render() {
        return (
            <div>
                <img className="dlImage" src={dlImage} alt="" />
                <p className="dlText">The scanned text will be downloaded to your computer.</p>
            </div>
        );
    }
}

export default downloadedComponent