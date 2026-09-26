export function smoothScrollTo(targetId: string, duration = 800) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 80;
    const distance = targetY - startY;
    let startTime: number | null = null

    function easeInOutQuad(t: number)  {
        return t < 0.5 ? 2* t * t : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, startY + distance * ease);

        if (elapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    requestAnimationFrame(animation);
}