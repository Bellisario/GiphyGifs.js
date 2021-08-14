/*!
 * GiphyGifs.js
 * https://github.com/Bellisario/GiphyGifs.js
 *
 * Copyright (c) 2021 Bellisario and other contributors
 * Released under the MIT license
 * https://github.com/Bellisario/GiphyGifs.js/blob/main/LICENSE
 */
(function () {
    if (document.readyState !== 'complete') {
        return alert('Page is not completely loaded: re-run this script after page load.');
    };
    function getGif() {
        try {
            return document.querySelector('video+img').src;
        } catch (e) {
            return false;
        };
    };
    async function download(url, name) {
        var a = document.createElement('a');
        var response = await fetch(url);
        var file = await response.blob();
        a.download = name;
        a.href = window.URL.createObjectURL(file);
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        a.click();
    };
    if (!location.href.startsWith('https://giphy.com/gifs/')) {
        return alert('Cannot get gif from this URL. It needs to be as this:\nhttps://giphy.com/gifs/...');
    };
    var gifUrl = getGif();
    if (!gifUrl) {
        return alert('Failed to get gif.');
    };
    var name = prompt('Ready to download!\nWhat name you want to use (without extension)?\nIf input is blank will be used the default name.', 'giphyGif');
    if (!name || name === ' ') {
        name = 'giphyGif';
    };
    download(gifUrl, name);
})();
