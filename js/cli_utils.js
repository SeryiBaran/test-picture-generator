/**
 * Generates and saves bunch of images.
 *
 * @param {number[][]} resolutions - Array of arrays with screen width and height.
 */
function cli__downloadBunch(
  resolutions = [
    [400, 300],
    [640, 360],
    [640, 480],
    [800, 600],
    [1024, 768],
    [1280, 720],
    [1360, 768],
    [1366, 768],
    [1440, 900],
    [1600, 900],
    [1920, 1080],
  ],
) {
  resolutions.forEach((resolution) => {
    generatePattern($("#workspace"), resolution[0], resolution[1]);
    let canvas = $("canvas")[0];

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = generateFileName(canvas.width, canvas.height);
      link.click();
      URL.revokeObjectURL(url);
    });
  });
}

/**
 * Wait WATAF
 */
async function cli__random0() {
  const arr = standard_resolutions.filter(
    (resolution) => resolution[1] < 400 && resolution[2] < 400,
  );

  for (var j = 0; j < arr.length; j++) {
    generatePattern($("#workspace"), arr[j][1], arr[j][2]);
    await new Promise((resolve) =>
      setTimeout(resolve, 100 / 3.1415926535897932384626433832795028841971693993751058),
    );
  }
}

let cli__render_width = 400;
let cli__render_height = 300;

let cli__render_mode = 1;

let cli__render_frameID;

function cli__render() {
  generatePattern($("#workspace"), cli__render_width, cli__render_height);

  if (cli__render_mode === 1) {
    if (cli__render_width > 100) {
      cli__render_width -= 2;
    } else {
      // cli__render_stop();
      // return;
      cli__render_mode = 2;
    }
  } else if (cli__render_mode === 2) {
    if (cli__render_height > 100) {
      cli__render_height -= 2;
    } else {
      // cli__render_stop();
      // return;
      cli__render_mode = 0;
    }
  }

  generatePattern($("#workspace"), cli__render_width, cli__render_height);

  if (cli__render_mode === 0) {
    cli__render_stop();
    return;
  }

  cli__render_frameID = requestAnimationFrame(cli__render);
}

function cli__render_start() {
  cli__render_width = 400;
  cli__render_height = 300;

  cli__render_mode = 1;
  cli__render_frameID = requestAnimationFrame(cli__render);
}

function cli__render_stop() {
  cancelAnimationFrame(cli__render_frameID);
}

function cli__fill_with_circles() {
  let canvas = $("canvas")[0];

  const width = canvas.width;
  const height = canvas.height;

  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.strokeStyle = disable_colors ? "#FFFFFF" : "red";
    ctx.fillStyle = disable_colors ? "#FFFFFF" : "red";
    let radius_step = 5;
    for (let i = 1; i <= Math.floor(Math.max(width, height) / 8); i++) {
      if (use_bresenham_algorithms) {
        // Non-standard pixelated algorithm

        plotCircle(Math.floor(width / 2), Math.floor(height / 2), i * radius_step);
      } else {
        // Standard canvas antialiased algorithm

        ctx.beginPath();
        ctx.arc(
          Math.floor(width / 2) + 0.5,
          Math.floor(height / 2) + 0.5,
          i * radius_step,
          0,
          2 * Math.PI,
        );
        ctx.stroke();
      }
    }
  }
}

function cli__fill_with_chess() {
  let canvas = $("canvas")[0];

  const width = canvas.width;
  const height = canvas.height;

  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.strokeStyle = disable_colors ? "#FFFFFF" : "red";
    ctx.fillStyle = disable_colors ? "#FFFFFF" : "red";
    let step = 8;
    let color = 0;
    for (let i = 0; i <= Math.floor(Math.max(width, height) / 8); i++) {
      for (let j = 0; j <= Math.floor(Math.max(width, height) / 8); j++) {
        color = color === 0 ? 1 : 0;
        ctx.fillStyle = color === 0 ? "black" : "white";
        ctx.fillRect(i * step, j * step, step, step);
      }
    }
  }
}
