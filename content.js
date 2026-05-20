let blockedCount = 0;

function hideLinkedInAds() {

    document.querySelectorAll('div.feed-shared-update-v2').forEach(post => {

        const text = post.innerText || "";

        if (
            (text.includes("Sponsored") ||
            text.includes("Promoted")) &&
            post.style.display !== "none"
        ) {

            post.style.display = "none";

            blockedCount++;
            updateBadge();
        }
    });

    document.querySelectorAll("li").forEach(item => {

        const text = item.innerText || "";

        if (
            (text.includes("Promoted") ||
            text.includes("Sponsored")) &&
            item.style.display !== "none"
        ) {

            item.style.display = "none";

            blockedCount++;
            updateBadge();
        }
    });

    document.querySelectorAll("aside, .ad-banner-container, .ads-container")
        .forEach(ad => {

            const text = ad.innerText || "";

            if (
                (text.includes("Sponsored") ||
                text.includes("Promoted")) &&
                ad.style.display !== "none"
            ) {

                ad.style.display = "none";

                blockedCount++;
                updateBadge();
            }
        });

    document.querySelectorAll("iframe").forEach(frame => {

        if (frame.style.display !== "none") {

            frame.style.display = "none";

            blockedCount++;
            updateBadge();
        }
    });
}

function updateBadge() {

    chrome.runtime.sendMessage({
        action: "updateBadge",
        count: blockedCount
    });
}

hideLinkedInAds();

setInterval(hideLinkedInAds, 1000);