window.onload = function() {
    let page = window.location.pathname.split("/").pop();
    switch (page) {
        case 'index.html':
            alert('Ana sayfamıza hoş geldiniz!');
            break;
        case 'audi.html':
            alert('Audi sayfasına hoş geldiniz!');
            break;
        case 'bmw.html':
            alert('BMW sayfasına hoş geldiniz!');
            break;
        case 'mercedes.html':
            alert('Mercedes sayfasına hoş geldiniz!');
            break;
        default:
            alert('Diğer sayfalara hoş geldiniz!');
            break;
    }
};

function goToContactPage() {
    window.location.href = 'contact.html';
}

function goToSocialMediaPage() {
    window.location.href = 'social_media.html';
}

function goToMorePage() {
    window.location.href = 'more.html';
}
