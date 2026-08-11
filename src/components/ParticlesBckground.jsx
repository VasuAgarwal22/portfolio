import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let particles = [];

    const isMobile = window.innerWidth < 768;

    // More particles while keeping mobile performance reasonable
    const particlesCount = isMobile ? 35 : 80;

    // 30 FPS on mobile, 60 FPS on desktop
    const frameInterval = isMobile ? 1000 / 30 : 1000 / 60;

    let lastFrameTime = 0;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = isMobile
          ? Math.random() * 1.5 + 0.6
          : Math.random() * 1.8 + 0.7;

        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;

        this.opacity = Math.random() * 0.5 + 0.4;

        // Glow strength
        this.glow = isMobile ? 4 : 7;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        // Small glow
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity})`;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

        ctx.fill();

        // Reset shadow so it doesn't affect other canvas operations
        ctx.shadowBlur = 0;
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles = [];

      for (let i = 0; i < particlesCount; i++) {
        particles.push(new Particle());
      }
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    function animate(currentTime) {
      animationId = requestAnimationFrame(animate);

      if (currentTime - lastFrameTime < frameInterval) {
        return;
      }

      lastFrameTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
    }

    animate(0);

    function handleVisibilityChange() {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        lastFrameTime = 0;
        animate(0);
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener("resize", resizeCanvas);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
