function galleryClick(event)
{
    event.preventDefault();

    document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}
