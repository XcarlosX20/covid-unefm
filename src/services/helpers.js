export const SCROLL = (pixels) => {
    window.scrollTo({
        top: pixels,
        left: 0,
        behavior: 'smooth'
    })
}
export const observer = () => {
        let iframes = document.querySelectorAll('iframe');
            iframes.forEach(iframe => {
                const observer = new IntersectionObserver(function (entries) {
                    if (entries[0].isIntersecting) {
                       iframe.className = "animate__animated animate__zoomIn"
                    } else {
                        iframe.className = ""
                    }
                });
                observer.observe(iframe);
            })
        
    }