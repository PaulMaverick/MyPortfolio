import styles from '../../styles/visuals/rainingMatrix.module.css'
import { useEffect, useRef } from "react";

export default function RainingMatrix() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if(canvas) {
            const ctx = canvas.getContext('2d');
            let width =(canvas.width = window.innerWidth);
            let heigth = (canvas.height = window.innerHeight);
            let columns = Math.floor(width / 20);
            const characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
            const charArray = characters.split('');
            let drops: number[] = [];

            for(let i = 0; i < columns; i++) {
                drops[i] = 1;
            };

            const frameRate = 25;
            let lastFrameTime = Date.now();

            const draw = () => {
                if(ctx) {
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                    ctx.fillRect(0, 0, width, heigth);
    
                    ctx.fillStyle = "#458d2f";
                    ctx.font = "15px monospace"

                    for(let i = 0; i < drops.length; i++) {
                        const text = charArray[Math.floor(Math.random() * charArray.length)];
                        ctx.fillText(text, i *20, drops[i] * 20);

                        if(drops[i] * 20 > heigth && Math.random() > 0.975) {
                            drops[i] = 0;
                        };

                        drops[i] ++;
                    }
                }
            }

            const animate = () => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - lastFrameTime

                if(elapsedTime > 1000 / frameRate) {
                    draw();
                    lastFrameTime = currentTime;
                }

                requestAnimationFrame(animate);
            }

            animate();

            const handleResize = () => {
                width = canvas.width = window.innerWidth;
                heigth = canvas.height = window.innerHeight;
                columns = Math.floor(width / 20);
                drops = [];

                for(let i = 0; i < columns; i++) {
                    drops[i] = 1;
                }
            }

            const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
            if(!isMobileDevice) {
                window.addEventListener("resize", handleResize)
            }

            return () => {
                if(!isMobileDevice) {
                    window.removeEventListener("resize", handleResize)
                }
            }
    
        }
    })
    return (
        <canvas className={styles.rainingCode} ref={canvasRef}></canvas>
    )
}