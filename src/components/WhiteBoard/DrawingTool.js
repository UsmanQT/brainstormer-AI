import React, { useLayoutEffect } from 'react';
import rough from 'roughjs/bundled/rough.esm';
import '../WhiteBoard/WhiteBoard.css';

const gen = rough.generator();

const DrawingTool = () => {
  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const rc = rough.canvas(canvas);
    const rect = gen.rectangle(100, 200, 200, 300);
    const circle = gen.circle(500, 300, 200);
    const line = gen.line(400, 500, 600, 500);
    rc.draw(rect);
    rc.draw(circle);
    rc.draw(line);
  });

  return (
    <canvas id='canvas' width={window.innerWidth/2} height={window.innerWidth/3}>
      Canvas
    </canvas>
  );
};
export default DrawingTool;