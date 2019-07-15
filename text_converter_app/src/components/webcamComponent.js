import React from 'react';
import Webcam from "react-webcam";

class webcamComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    // setRef is used to create a reference to the webcam DOM node so that it can be accessed directly
    setRef = webcam => {
        this.webcam = webcam;
    }

    captureImage = () => {
        const image = this.webcam.getScreenshot();
        const imageArray = this.convertToByteArray(image);
        this.fetchData(imageArray);
    }

    // this function converts base64 encoded string representation of image into an array of binary data
    convertToByteArray = (image) => {
        const base64 = require('base64-js');
        const base64string = image.split(',')[1];
        return base64.toByteArray(base64string)
    }

    fetchData = (imageArray) => {
        const apiKey = '062522cd19d548218826e12756809e84';
        const apiEndpoint = 'https://australiaeast.api.cognitive.microsoft.com/vision/v2.0/ocr?language=en';
        fetch(apiEndpoint, {
            body: imageArray,
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey, 'Content-Type': 'application/octet-stream'
            },
            method: 'POST'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    if (data.regions.length > 0) {
                        if (global.scannedTextState === false) {
                            global.scannedText = '';
                            global.scannedTextState = true;
                        } else {
                            global.scannedText += '\n';
                        }
                        for (const contents of data.regions[0].lines) {
                            for (const text of contents.words) {
                                global.scannedText += text.text + " ";

                            }
                            global.scannedText += '\n';
                        }
                    } else {
                        window.confirm("No text was detected. Please try again.");
                    }
                });
            }
        });
    }

    render() {
        const videoConstraints = {
            width: 1920,
            height: 1080,
            facingMode: "user"	
        }

        return (
            <div>
                <button className="takePicButton" variant="primary" onClick={this.captureImage}>Capture Image</button>
                <div className="webcamVideo">
                    <Webcam
                        audio={false}
                        height={this.state.height}
                        width={this.state.width}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        screenshotQuality={1}
                        videoConstraints={videoConstraints}
                    />
                </div>
            </div >
        );
    }
}

export default webcamComponent