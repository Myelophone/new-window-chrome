chrome.action.onClicked.addListener(() => {
	chrome.windows.create({ state: "maximized" });
});