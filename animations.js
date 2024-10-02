// animations.js
document.addEventListener("DOMContentLoaded", () => {
    // Initialize the timeline
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    // Text animation - simple stagger fade and scaling effect
    tl.from("#main-text", { y: "50", opacity: 0, duration: 1.5 });

    // Removing the text glow effect to avoid the grey box around the text
    // If you want some effect but cleaner, reduce the shadow spread:
    // tl.to("#main-text", {
    //     textShadow: "0 0 10px #ffffff", // Reduced the glow to make it clean
    //     duration: 1.5,
    //     repeat: -1, // Infinite loop for glow
    //     yoyo: true, // Reverse animation for smoother loops
    // });
});
