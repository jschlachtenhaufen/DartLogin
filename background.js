chrome.runtime.onInstalled.addListener(function() {
    // on installation, give link to options page to fil in username and password
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log('The color is green.');
        //alert("DONE");
    });
    //chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    //    chrome.declarativeContent.onPageChanged.addRules([{
    //        conditions: [new chrome.declarativeContent.PageStateMatcher({
    //            pageUrl: {hostEquals: 'developer.chrome.com'},
    //        })
    //        ],
    //            actions: [new chrome.declarativeContent.ShowPageAction()]
    //    }]);
    //});
});
