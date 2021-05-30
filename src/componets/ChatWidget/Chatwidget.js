import { useEffect, useState } from "react";
import "./ChatWidget.scss";

export default function ChatWidget() {
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        window.JustWidgetHandlers = {
            onWidgetReady: function () {
                window.justWidgetApi.addCustomStyles("https://singlespecialists.site/chatwidget.css");
            },
            onWidgetToggle: function (isOpen) {
                setActive(isOpen);
            },
            startBlink: function(title) {}
        }

        window.justWidgetApi = {
            getTargetOrigin: function () {
                var justWidgetIframeSrc = document.getElementById('justwidget--iframe').src;
                var srcParts = justWidgetIframeSrc.split('/');
                return srcParts.splice(0, 3).join('/');
            },
            postMessage: function (message) {
                var justWidgetIframe = document.getElementById('justwidget--iframe').contentWindow;
                justWidgetIframe.postMessage(message, this.getTargetOrigin());
            },
            open: function () {
                var message = {
                    type: 'justWidget.open'
                };

                this.postMessage(JSON.stringify(message));
            },
            close: function () {
                var message = {
                    type: 'justWidget.close'
                };

                this.postMessage(JSON.stringify(message));
            },
            sendText: function (text) {
                let message = {
                    type: 'justWidget.sendText',
                    data: {
                        text: text
                    }
                };

                this.postMessage(JSON.stringify(message));
            },
            addCustomStyles: function (stylesheetURL) {
                var message = {
                    type: 'justWidget.styles',
                    data: {
                        URL: stylesheetURL
                    }
                };

                this.postMessage(JSON.stringify(message));
            },
        };

        window.addEventListener("message", function (event) {
            let type, message;

            try {
                message = JSON.parse(event.data);
                type = message.type;
            } catch (e) {
                //console.error("JustWidget invalid Event.data event.data: ",  event.data);
            }

            switch (type) {
                case "justWidget.ready": {
                    window.JustWidgetHandlers.onWidgetReady();
                    return;
                }
                case "justWidget.toggle": {
                    window.JustWidgetHandlers.onWidgetToggle(message.data.isOpen);
                    return;
                }
                case "justWidget.newMessage": {
                    window.JustWidgetHandlers.startBlink(message.title || 'Новое сообщение');
                    return;
                }
                default: {
                    return;
                }
            }
        });
    }, [])

    return (
        <div className={"ChatWidget" + (active ? " ChatWidget--active" : "")}>
            <iframe title="Chat widget" id="justwidget--iframe" src="https://bot.jaicp.com/chatwidget/IWUDRrfz:ff29cc81771789d20cbda519176224cb7a788212/justwidget-iframe.html" frameBorder="0"/>
        </div>
    )
}