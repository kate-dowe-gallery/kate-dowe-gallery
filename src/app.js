function galleryClick(event)
{
    event.preventDefault();

    window.scroll({
        top: 2500,
        left: 0,
        behavior: 'smooth'
    });
}