const toggleSwitch = document.getElementById("toggleSwitch");
const statusText = document.getElementById("status");

chrome.storage.sync.get(["enabled"], (result) => {

    let enabled = result.enabled;

    // Default ON
    if (enabled === undefined) {

        enabled = true;

        chrome.storage.sync.set({
            enabled: true
        });
    }

    toggleSwitch.checked = enabled;

    updateStatus(enabled);
});

toggleSwitch.addEventListener("change", () => {

    const enabled = toggleSwitch.checked;

    chrome.storage.sync.set({
        enabled: enabled
    });

    updateStatus(enabled);

    chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {

            chrome.tabs.reload(tabs[0].id);
        }
    );
});

function updateStatus(enabled) {

    statusText.textContent = enabled ? "ON" : "OFF";
}