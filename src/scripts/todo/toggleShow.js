export const toggleShow = states => {
    const {content, footer} = states.blocks;
    
    [content, footer].forEach(
        item => item.classList.toggle(item.classList[0] + "_show")
    )

    states.isShow = !states.isShow;
}