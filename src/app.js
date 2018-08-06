function galleryClick(event)
{
    event.preventDefault();

    document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}

document.querySelector('.primary').style.transform = 'translate3d(0px, ' + window.scrollY / 5 + 'px, 0px)';

window.onscroll = function () {
    if (this.scrollY / 5 < 175) {
        document.querySelector('.primary').style.transform = 'translate3d(0px, ' + this.scrollY / 5 + 'px, 0px)';
    }
};
