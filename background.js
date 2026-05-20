chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "updateBadge") {

        chrome.action.setBadgeText({
            text: message.count.toString()
        });

        chrome.action.setBadgeBackgroundColor({
            color: "#ff0000"
        });
    }
});