const projects = document.querySelectorAll('.project');
const getMatchingNode = (node) => {
    if([...projects].map(p => p.id).includes(node.id)) return node;
    return getMatchingNode(node.parentNode);
}
const handleMouseOut = e => {
    const project = getMatchingNode(e.target);
    project.classList.remove('active');
    project.style.transform = '';
    
}
const projectsContainer = document.querySelector('.projects');

const getWindowCenter = () => {
    return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }
}
const handleMouseOver = (e) => {
    const project = getMatchingNode(e.target);
if(project.classList.contains('active')) {
project.classList.remove('active')
} else {
    const {top, left, width, height} = project.getBoundingClientRect();
    const pX = left + (width / 2);
    const pY = top + (height / 2);
    const winCenter = getWindowCenter();
    const dx = pX - winCenter.x;
    const dy = pY - winCenter.y;
    project.classList.add('active');
    project.style.transform = `translate(${-dx}px, ${-dy}px) scale(3)`;
}
    
}

[...projects].forEach(p => p.addEventListener('mouseenter', handleMouseOver));
[...projects].forEach(p => p.addEventListener('mouseleave', handleMouseOut));