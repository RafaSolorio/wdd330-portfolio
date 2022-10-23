var links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/index.html"
    },
    {
        label: "TODO app",
        url: "todo_app/index.html"
    }
]

links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', link.url);
    a.textContent = link.label;
    li.appendChild(a);
    document.getElementById('list').appendChild(li);
})
