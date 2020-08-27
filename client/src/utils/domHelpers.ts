export function scrollToBottom (id) {
    const div = document.getElementById(id);
    div.scrollTop = div.scrollHeight - div.clientHeight;
}
