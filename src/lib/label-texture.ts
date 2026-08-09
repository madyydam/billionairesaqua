import * as THREE from "three";
import { theme } from "@/config/theme";

/**
 * The product label is generated procedurally into a canvas texture so the
 * scene has zero external asset dependencies. When a real product.glb is
 * dropped into /public/models this file is no longer used.
 */
export function createLabelTexture(): THREE.CanvasTexture {
  const w = 2048;
  const h = 1024;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;

  // base green with a soft vertical sheen
  const grad = ctx.createLinearGradient(0, 0, w, 0);
  grad.addColorStop(0, theme.brandDark);
  grad.addColorStop(0.28, theme.brand);
  grad.addColorStop(0.5, "#155341");
  grad.addColorStop(0.72, theme.brand);
  grad.addColorStop(1, theme.brandDark);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // gold bands top & bottom
  ctx.fillStyle = theme.gold;
  ctx.fillRect(0, 26, w, 22);
  ctx.fillRect(0, h - 48, w, 22);

  // the label artwork is repeated twice around the bottle
  const panel = (offsetX: number) => {
    const cx = offsetX + w / 4;
    ctx.save();
    ctx.textAlign = "center";

    // arch outline with bottle pictogram
    ctx.strokeStyle = "rgba(239,233,220,0.75)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    const aw = 150;
    const top = 150;
    const bottom = 430;
    ctx.moveTo(cx - aw, bottom);
    ctx.lineTo(cx - aw, top + 70);
    ctx.quadraticCurveTo(cx - aw, top, cx, top);
    ctx.quadraticCurveTo(cx + aw, top, cx + aw, top + 70);
    ctx.lineTo(cx + aw, bottom);
    ctx.stroke();

    // tiny bottle mark
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - 22, top + 90);
    ctx.lineTo(cx - 22, top + 108);
    ctx.quadraticCurveTo(cx - 34, top + 128, cx - 34, top + 170);
    ctx.lineTo(cx - 34, top + 236);
    ctx.lineTo(cx + 34, top + 236);
    ctx.lineTo(cx + 34, top + 170);
    ctx.quadraticCurveTo(cx + 34, top + 128, cx + 22, top + 108);
    ctx.lineTo(cx + 22, top + 90);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "rgba(239,233,220,0.92)";
    ctx.font = "500 34px Georgia, 'Times New Roman', serif";
    ctx.letterSpacing = "18px";
    ctx.fillText("THE", cx, bottom + 62);

    ctx.fillStyle = "#f5f2ea";
    ctx.font = "700 96px Georgia, 'Times New Roman', serif";
    ctx.letterSpacing = "2px";
    ctx.fillText("BILLIONAIRE'S", cx, bottom + 160);

    ctx.fillStyle = theme.goldLight;
    ctx.font = "500 52px Georgia, 'Times New Roman', serif";
    ctx.letterSpacing = "16px";
    ctx.fillText("AQUA", cx, bottom + 224);

    ctx.strokeStyle = theme.gold;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - 210, bottom + 206);
    ctx.lineTo(cx - 110, bottom + 206);
    ctx.moveTo(cx + 110, bottom + 206);
    ctx.lineTo(cx + 210, bottom + 206);
    ctx.stroke();

    ctx.fillStyle = "rgba(239,233,220,0.9)";
    ctx.font = "400 40px Helvetica, Arial, sans-serif";
    ctx.letterSpacing = "1px";
    ctx.fillText("India's Premium Water Choice", cx, bottom + 300);

    // gold droplet
    ctx.strokeStyle = theme.gold;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, bottom + 336);
    ctx.bezierCurveTo(cx + 26, bottom + 368, cx + 22, bottom + 400, cx, bottom + 400);
    ctx.bezierCurveTo(cx - 22, bottom + 400, cx - 26, bottom + 368, cx, bottom + 336);
    ctx.stroke();

    ctx.fillStyle = "#f5f2ea";
    ctx.font = "400 62px Helvetica, Arial, sans-serif";
    ctx.fillText("500ml", cx, bottom + 472);

    ctx.fillStyle = theme.goldLight;
    ctx.font = "400 32px Helvetica, Arial, sans-serif";
    ctx.letterSpacing = "6px";
    ctx.fillText("PACKAGED DRINKING WATER", cx, bottom + 524);
    ctx.restore();
  };

  panel(0);
  panel(w / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.wrapS = THREE.RepeatWrapping;
  return texture;
}
