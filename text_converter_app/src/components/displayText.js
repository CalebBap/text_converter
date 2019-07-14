import React from 'react';

class displayText extends React.Component {

    constructor(props) {
        super(props);
        this.text_ref = React.createRef();
        this.text = "Open the menu to scan and add some text...";
    }

    lostFocus = () => {
        const textNode = this.text_ref.current;
        if (textNode.textContent != global.scannedText) {
            global.scannedText = textNode.textContent;
            global.scannedTextState = true;
        }
        if (textNode.textContent == "") {
            global.scannedText = "Open the menu to scan and add some text...";
            textNode.textContent = global.scannedText;
        }
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <p ref={this.text_ref} className="mainText" onBlur={this.lostFocus} onClick={this.checkText} contentEditable="true" suppressContentEditableWarning={true}>
                    {global.scannedText}
                </p>
            </div >
        );
    }
}

export default displayText