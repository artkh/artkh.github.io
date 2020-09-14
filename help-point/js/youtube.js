function findyoutubes() {
    let youtubes = document.querySelectorAll('.youtube_old');

    for (let i = 0; i < youtubes.length; i++) {
        setupyoutube(youtubes[i]);
    }
}

function setupyoutube(youtube) {
    let link = youtube.querySelector('.youtube__link');
    let media = youtube.querySelector('.youtube__media');
    let button = youtube.querySelector('.youtube__button');
    let id = parseMediaURL(media);

    youtube.addEventListener('click', function () {
        let iframe = createIframe(id);

        link.remove();
        button.remove();
        youtube.appendChild(iframe);
    });

    link.removeAttribute('href');
    youtube.classList.add('youtube--enabled');
}

function parseMediaURL(media) {
    let regexp = /https:\/\/img\.youtube\.com\/vi\/([a-zA-Z0-9_-]+)\/mqdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
}

function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('youtube__media');

    return iframe;
}

function generateURL(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

findyoutubes();