Reveal.addEventListener('ready', event => {
    patchJFS()
    setInterval(patchJFS, 1000);
});

function patchJFS() {
    Array.from(document.querySelectorAll("table.animated tbody tr:not(.fragment), .animated > li:not(.fragment)"))
        .forEach(e => e.classList.add("fragment"))

    Promise
        .all(Array
                .from(document.querySelectorAll("img.embed"))
                .map(e => fetch(e.src)
                    .then(resp => resp.text())
                    .then(svg => [e, svg]))
        ).then(svgs => {
                svgs.forEach(([e, svg]) => {
                    const container = document.createElement("div")
                    container.classList.add("embedded-svg")
                    container.innerHTML = svg

                    container.lastChild.setAttribute("style", e.getAttribute("style"))

                    e.parentNode.insertBefore(container, e)
                    e.remove()
                })
                Array.from(document.querySelectorAll(".embedded-svg svg a:not(.fragment)"))
                    .forEach(e => {
                        e.classList.add("fragment")
                        e.setAttribute("data-fragment-index", e.getAttribute("xlink:href"))
                    })
            })
    // Promise
    //     .all(Array
    //             .from(document.querySelectorAll("conn"))
    //             .map(e => {
    //                 const start = document.querySelector(e.getAttribute("start"))
    //                 const end = document.querySelector(e.getAttribute("end"))
    //                 const opts = JSON.parse(e.getAttribute("options") || "{}")
    //                 new LeaderLine(start, end, opts)
    //                 e.remove()
    //             })
    //     )

}

