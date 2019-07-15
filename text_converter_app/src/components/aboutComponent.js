import React from 'react';

class aboutComponent extends React.Component {

    render() {
        return (
            <div className="aboutWrapper" >
                <h1 className="aboutHeader">About This App</h1>
                <ul className="aboutText">
                    <li>This app uses your device's camera to scan handwritten or printed text (e.g. from lecture notes) so that you can use and store the text digitally.</li>
                    <li>Simply go to the "Scan Text" page from the menu in order to take pictures of the text that you would like to scan.</li>
                    <li>As your text is scanned it will be added to the "View Text" page. Use the "View Text" page to view, edit or copy your text.</li>
                    <li>By copying the scanned text, or by using the "Export Text" button in the menu, the text can be used digitally.</li >
                </ul>
            </div>
        );
    }
}

export default aboutComponent