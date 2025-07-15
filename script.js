// Copy‑to‑clipboard for each button
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;
    const codeBlock = document.querySelector(
      targetId === 'ptero'
        ? '#ptero .code-block'
        : '#playit .code-block'
    );
    navigator.clipboard.writeText(codeBlock.textContent.trim())
      .then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = 'Copy'), 1500);
      })
      .catch(err => {
        console.error(err);
        btn.textContent = 'Error';
      });
  });
});
