import React from 'react';

class aboutComponent extends React.Component {

    render() {
        return (
            <div className="aboutWrapper" >
                <h1 className="aboutHeader">About This App</h1>
                <p className="aboutText">This app uses your device's camera to scan handwritten or printed text so that you can use the text digitally.
                    <br /><br/>Simply click the "Scan Text" button in the menu in order to take pictures of the text that you would like to scan.
                    <br /><br />As your text is scanned it will be added to the "View Text" page.
                    <br /><br />Use the "View Text" page to view, edit or copy your text. You can now copy-paste the text from this page so that it can be used digitally.</p>
            </div>
        );
    }
}

export default aboutComponent