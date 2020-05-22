console.log("Started logging requests");

function log(name, details) {
    if(details.url && !details.url.includes("webm")) {
        return;
    }

    let data = {
        type: name, 
        requestId: details.requestId,
        url: details.url,
        details: details
    }

    console.log(data);
}  

chrome.webRequest.onBeforeRequest.addListener(
    (details) => log("onBeforeRequest", details), {urls: ['<all_urls>']}
);

chrome.webRequest.onCompleted.addListener(
    (details) => log("onCompleted", details), {urls: ['<all_urls>']}
);

chrome.webRequest.onErrorOccurred.addListener(
    (details) => log("onErrorOccurred", details), {urls: ['<all_urls>']}
);