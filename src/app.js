function galleryClick(event)
{
    event.preventDefault();

    document.querySelector('.secondary').scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
