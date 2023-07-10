mermaid.initialize({
    startOnLoad: false,
    flowchart: {
        // defaultRenderer: "elk",
    },
    // theme: 'base',
    // themeVariables: {
    //     fontFamily: `"Inter", "Helvetica Neue", Arial, sans-serif`,
    //     fontSize: "16px",
    // },
});

Reveal.addEventListener('ready', event => asyncMermaidRender(event));

async function asyncMermaidRender(event) {
    var graphs = Array.from(document.getElementsByClassName("mermaid"));
    graphs.forEach(async (item, index) => {
        let graphCode = item.textContent.trim(); //trim() becase of gantt, class and git diagram
        let mermaidDiv = document.createElement('div');
        mermaidDiv.classList.add('mermaid');
        mermaidDiv.setAttribute("data-processed", "true");

        try {
            // item.innerText ignores html elements added by revealjs highlight plugin.
            const { svg } = await mermaid.render('diag' + index, graphCode);
            mermaidDiv.innerHTML = svg;
            item.parentNode.parentNode.insertBefore(mermaidDiv, item.parentNode);
            item.parentNode.remove();
        }
        catch(err) {
            console.log("Cannot render mermaid diagram " + index + "\n" + graphCode);
            console.error(err);
        }
    })
}
