import React from 'react';

class displayText extends React.Component {

    constructor(props) {
        super(props);
        this.text_ref = React.createRef();
        this.text = "Open the menu to scan and add some text...";
    }

    componentDidMount() {
        const textNode = this.text_ref.current;
        if (textNode.textContent === "Open the menu to scan and add some text...") {
            textNode.style.color = "grey";
        } else {
            textNode.style.color = "black";
        }
    }

    lostFocus = () => {
        const textNode = this.text_ref.current;
        if (textNode.textContent !== global.scannedText) {
            var textContent = textNode.innerHTML.replace(new RegExp("<br>", "g"), '');
            textContent = textContent.replace(new RegExp("</div>", "g"), '');
            textContent = textContent.replace(new RegExp("<div>", "g"), '\n');

            global.scannedText = textContent;
        }
        if (textNode.textContent === "") {
            global.scannedText = "Open the menu to scan and add some text...";
            textNode.textContent = global.scannedText;
            textNode.style.color = "grey";
        }
        this.forceUpdate();
    }

    checkText = () => {
        const textNode = this.text_ref.current;
        textNode.style.color = "black";
        if (textNode.textContent === "Open the menu to scan and add some text...") {
            textNode.textContent = "";
        }
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