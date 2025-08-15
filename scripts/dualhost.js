function navigateTo(page) {
    if (!page || page === '' || page === 'home') {
        window.location.href = 'index.html';
        return;
    }

    if (!page.endsWith('.html')) {
        page += '.html';
    }

    window.location.href = page;
}
