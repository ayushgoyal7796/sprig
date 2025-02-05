import { html } from "../libs/uhtml.js";
import { evalGameScript } from "../engine/evalGameScript.js";
import { global_state } from "../global_state.js";

export const view = (text) => html`
  <style>
    .root {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      margin: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    .mobile-view {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: #00000046;

      flex-direction: column;
      gap: 20px;
      padding: 10px;
      color: white;
      align-items: flex-start;
    }

    p {
      margin: 0;
    }
      
    button {
      display: block;
      background: black;
      color: white;
      font-size: inherit;
      font-family: inherit;
      padding: 6px 12px;
      border: 0;
      border-radius: 4px;
    }

    a {

      text-decoration: none;
    }

    /*.mobile-view .game-canvas-container {
      width: 50%;
      aspect-ratio: calc(160/128);
      max-height: 100%;
    }

    .mobile-run {
      position: absolute;
      background: var(--bg-floating);
      color: white;
      padding: 5px 10px 5px 10px;
      border-radius: 5px;
      bottom: 5px;
      left: 5px;
    }

    .mobile-button {
      background: black;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .mobile-button:active {
      background: grey;
    }

    .input-button-w {
      position: absolute;
      top: calc(50% - 75px);
      left: calc(5% + 25px);
    }

    .input-button-a {
      position: absolute;
      top: calc(50% - 25px);
      left: calc(5% - 25px);
    }

    .input-button-d {
      position: absolute;
      top: calc(50% - 25px);
      left: calc(5% + 75px);;
    }

    .input-button-s {
      position: absolute;
      top: calc(50% + 25px);
      left: calc(5% + 25px);;
    }

    .input-button-i {
      position: absolute;
      top: calc(50% - 75px);
      right: calc(5% + 25px);
    }

    .input-button-l {
      position: absolute;
      top: calc(50% - 25px);
      right: calc(5% - 25px);
    }

    .input-button-j {
      position: absolute;
      top: calc(50% - 25px);
      right: calc(5% + 75px);;
    }

    .input-button-k {
      position: absolute;
      top: calc(50% + 25px);
      right: calc(5% + 25px);;
    }*/
  </style>
  <div class="mobile-view">
    <p>The mobile experience isn't quite ready yet!</p>
    <p>Try on your computer instead, or check out the landing page.</p>
    <a href='https://sprig.hackclub.com'><button>Learn about Sprig &raquo;</button></a>
  </div>
  ${/*<div class="mobile-view">
    <div class="wasd">
      <div class="mobile-button no-select input-button-w" @click=${() => dispatchKey("w")}>w</div>
      <div class="mobile-button no-select input-button-a" @click=${() => dispatchKey("a")}>a</div>
      <div class="mobile-button no-select input-button-s" @click=${() => dispatchKey("s")}>s</div>
      <div class="mobile-button no-select input-button-d" @click=${() => dispatchKey("d")}>d</div>
    </div>
    <div class="game-canvas-container">
      <canvas class="game-canvas"></canvas>
      <canvas class="game-text"></canvas>
    </div>
    <div class="wasd">
      <div class="mobile-button no-select input-button-i" @click=${() => dispatchKey("i")}>i</div>
      <div class="mobile-button no-select input-button-j" @click=${() => dispatchKey("j")}>j</div>
      <div class="mobile-button no-select input-button-k" @click=${() => dispatchKey("k")}>k</div>
      <div class="mobile-button no-select input-button-l" @click=${() => dispatchKey("l")}>l</div>
    </div>
  </div>
  <div class="mobile-run" @click=${() => runGame(text)}>run</div>*/null}
`

function runGame(text) {

  // wiggle the canvas window
  const gameCanvas = document.querySelector(".game-canvas");
  const gameCanvasContainer = document.querySelector(".game-canvas-container");

  evalGameScript(text, gameCanvas);

  gameCanvasContainer.classList.add("shake");

  gameCanvas.focus();

  setTimeout(() => {
    gameCanvasContainer.classList.remove("shake");
  }, 200)
}

function dispatchKey(key) {
  const gameCanvas = document.querySelector(".game-canvas");
  gameCanvas.focus();
  gameCanvas.dispatchEvent(new KeyboardEvent('keydown', { key }));
}
