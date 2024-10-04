/*
  Useful sources:
  - https://en.wikipedia.org/wiki/Web_colors
  - https://en.wikipedia.org/wiki/List_of_common_display_resolutions
  - https://wikitable2csv.ggor.de/
  - https://onlinetools.com/csv/extract-csv-columns
  - https://stackoverflow.com/a/68372384/17486232
*/

const standard_resolutions = [
  ["0.26K1", 16, 16],
  ["0.46K1", 42, 11],
  ["1.02K1", 32, 32],
  ["1.20K3", 40, 30],
  ["1.34K1", 42, 32],
  ["1.54K2", 48, 32],
  ["2.00K3", 80, 25],
  ["2.40K2", 60, 40],
  ["2.88K5", 72, 40],
  ["4.03K7∶4", 84, 48],
  ["4.10K1", 64, 64],
  ["4.25K3", 170, 25],
  ["4.61K1", 72, 64],
  ["4.61K1", 128, 36],
  ["4.80K1", 75, 64],
  ["6.00K3.75", 150, 40],
  ["6.14K2", 96, 64],
  ["6.14K2", 96, 64],
  ["6.14K2", 128, 48],
  ["6.24K2", 96, 65],
  ["6.53KA", 102, 64],
  ["7.56K2", 108, 70],
  ["8.08K4", 101, 80],
  ["8.19K2∶1", 128, 64],
  ["9.22K1", 96, 96],
  ["12.29K2", 128, 96],
  ["15.36K3.75", 240, 64],
  ["16.32KA", 160, 102],
  ["16.38K1", 128, 128],
  ["20.48K0.8", 128, 160],
  ["QQVGA", 160, 120],
  ["23.04K1.111", 160, 144],
  ["24.19K0.857", 144, 168],
  ["24.32K1.053", 160, 152],
  ["25.60K1", 160, 160],
  ["26.88K3", 140, 192],
  ["32.00K3", 160, 200],
  ["32.26K9", 224, 144],
  ["36.61K13∶11", 208, 176],
  ["HQVGA", 240, 160],
  ["38.72K4", 220, 176],
  ["40.96K3", 160, 256],
  ["44.64K3", 180, 248],
  ["43.26K1", 208, 208],
  ["49.15K3", 256, 192],
  ["53.76K3", 280, 192],
  ["54.27K3", 256, 212],
  ["55.30K1", 432, 128],
  ["57.34K3", 256, 224],
  ["57.60K1", 240, 240],
  ["61.44K3", 256, 240],
  ["61.44K6", 320, 192],
  ["61.44K5∶3", 320, 192],
  ["Color Graphics Adapter (CGA)", 320, 200],
  ["65.54K1", 256, 256],
  ["65.54K3", 256, 256],
  ["66.56K2", 320, 208],
  ["71.68K2", 320, 224],
  ["QVGA", 320, 240],
  ["81.92K4", 320, 256],
  ["81.92K3", 320, 256],
  ["86.02K3", 384, 224],
  ["88.32K3", 368, 240],
  ["89.28K3", 372, 240],
  ["90.24K9", 376, 240],
  ["92.48K0.8", 272, 340],
  ["WQVGA", 400, 240],
  ["98.30K3", 512, 192],
  ["100.35K3", 448, 224],
  ["102.40K1", 320, 320],
  ["WQVGA", 432, 240],
  ["107.52K3", 560, 192],
  ["108.00K9", 400, 270],
  ["108.54K3", 512, 212],
  ["110.59K3", 384, 288],
  ["WQVGA*", 480, 234],
  ["qSVGA", 400, 300],
  ["120.00K3", 480, 250],
  ["121.68K0.8", 312, 390],
  ["122.88K3", 512, 240],
  ["128.00K3", 320, 400],
  ["Color Graphics Adapter (CGA)", 640, 200],
  ["130.56K9", 480, 272],
  ["131.07K2∶1", 512, 256],
  ["131.07K3", 512, 256],
  ["0.15M13∶11", 416, 352],
  ["HVGA", 480, 320],
  ["HVGA", 640, 240],
  ["0.15M3", 640, 240],
  ["0.16M3", 640, 256],
  ["0.18M2", 512, 342],
  ["0.18M3", 368, 480],
  ["0.19M3", 496, 384],
  ["0.19M6", 800, 240],
  ["0.20M3", 512, 384],
  ["0.20M2∶1", 640, 320],
  ["EGA", 640, 350],
  ["0.23M9", 640, 360],
  ["0.24M3", 480, 500],
  ["0.25M3", 512, 480],
  ["0.25M3", 720, 348],
  ["0.25M3", 720, 350],
  ["0.26M3", 640, 400],
  ["0.26M3", 720, 364],
  ["0.28M2.273", 800, 352],
  ["0.29M4", 600, 480],
  ["VGA", 640, 480],
  ["0.33M3", 640, 512],
  ["WVGA", 768, 480],
  ["WGA", 800, 480],
  ["W-PAL", 848, 480],
  ["FWVGA", 854, 480],
  ["SVGA", 800, 600],
  ["qHD", 960, 540],
  ["0.52M3", 832, 624],
  ["0.52M9", 960, 544],
  ["0.59M9", 1024, 576],
  ["DVGA", 960, 640],
  ["WSVGA", 1024, 600],
  ["0.66MA", 1024, 640],
  ["0.69M3", 960, 720],
  ["0.73M9", 1136, 640],
  ["0.73M9", 1138, 640],
  ["XGA", 1024, 768],
  ["0.82M3", 1024, 800],
  ["0.83MA", 1152, 720],
  ["0.88M2", 1152, 768],
  ["WXGA", 1280, 720],
  ["0.93M3", 1120, 832],
  ["WXGA", 1280, 768],
  ["XGA+", 1152, 864],
  ["1.00M9", 1334, 750],
  ["WXGA", 1280, 800],
  ["1.04M32∶25", 1152, 900],
  ["1.05M1∶1", 1024, 1024],
  ["WXGA HD", 1366, 768],
  ["1.09M2", 1280, 854],
  ["SXGA−", 1280, 960],
  ["1.23M2.083", 1600, 768],
  ["1.30M0.9", 1080, 1200],
  ["WSXGA", 1440, 900],
  ["WXGA+", 1440, 900],
  ["SXGA", 1280, 1024],
  ["1.38M2", 1440, 960],
  ["HD+", 1600, 900],
  ["SXGA+", 1400, 1050],
  ["1.47M5", 1440, 1024],
  ["1.56M3", 1440, 1080],
  ["1.64M0", 1600, 1024],
  ["WSXGA+", 1680, 1050],
  ["1.78M9", 1776, 1000],
  ["UXGA", 1600, 1200],
  ["2.05M4", 1600, 1280],
  ["FHD", 1920, 1080],
  ["2.07M1", 1440, 1440],
  ["DCI 2K", 2048, 1080],
  ["WUXGA", 1920, 1200],
  ["QWXGA", 2048, 1152],
  ["2.41M3", 1792, 1344],
  ["FHD+", 1920, 1280],
  ["2.46M19∶9", 2280, 1080],
  ["2.53M19½∶9", 2340, 1080],
  ["2.58M3", 1856, 1392],
  ["2.59M09", 2400, 1080],
  ["2.59M4", 1800, 1440],
  ["CWSXGA", 2880, 900],
  ["2.59M9", 2160, 1200],
  ["2.62MA", 2048, 1280],
  ["TXGA", 1920, 1400],
  ["2.72M1B", 2520, 1080],
  ["2.74M2.165", 2436, 1125],
  ["2.74M1AD", 2538, 1080],
  ["2.76M3", 1920, 1440],
  ["UW-FHD", 2560, 1080],
  ["3.11M2", 2160, 1440],
  ["QXGA", 2048, 1536],
  ["3.32MA", 2304, 1440],
  ["3.39MA", 2256, 1504],
  ["WQHD", 2560, 1440],
  ["3.74M9", 2576, 1450],
  ["3.98M3", 2304, 1728],
  ["WQXGA", 2560, 1600],
  ["4.15M2∶1", 2880, 1440],
  ["Infinity Display", 2960, 1440],
  ["4.35M2", 2560, 1700],
  ["4.61M1.422", 2560, 1800],
  ["4.67M9", 2880, 1620],
  ["4.92M3", 2560, 1920],
  ["Ultra-Wide QHD", 3440, 1440],
  ["4.99M2", 2736, 1824],
  ["5.18MA", 2880, 1800],
  ["5.53M2", 2880, 1920],
  ["QSXGA", 2560, 2048],
  ["5.60M3", 2732, 2048],
  ["WQXGA+", 3200, 1800],
  ["QSXGA+", 2800, 2100],
  ["5.90MA", 3072, 1920],
  ["4.26M1.538", 2560, 1664],
  ["5.37M17∶11", 2880, 1864],
  ["5.94M17∶11", 3024, 1964],
  ["7.72M1.547", 3456, 2234],
  ["3K", 3000, 2000],
  ["3K", 3000, 2120],
  ["UW4K", 3840, 1600],
  ["WQSXGA", 3200, 2048],
  ["7.00M2", 3240, 2160],
  ["DQHD", 5120, 1440],
  ["QUXGA", 3200, 2400],
  ["4K UHD-1", 3840, 2160],
  ["DCI 4K", 4096, 2160],
  ["WQUXGA", 3840, 2400],
  ["9.44M9", 4096, 2304],
  ["UW5K (WUHD)", 5120, 2160],
  ["11.29M9", 4480, 2520],
  ["HXGA", 4096, 3072],
  ["13.50M2", 4500, 3000],
  ["5K", 5120, 2880],
  ["WHXGA", 5120, 3200],
  ["HSXGA", 5120, 4096],
  ["6K", 6016, 3384],
  ["WHSXGA", 6400, 4096],
  ["HUXGA", 6400, 4800],
  ["–", 6480, 3240],
  ["8K UHD-2", 7680, 4320],
  ["WHUXGA", 7680, 4800],
  ["8K Full Format", 8192, 4320],
  ["—", 8192, 4608],
  ["UW10K", 10240, 4320],
  ["8K Fulldome", 8192, 8192],
  ["16K", 15360, 8640],
  ["16K Full Format", 16384, 8640],
];

standard_resolutions.forEach((resolution, i) =>
  $("#standard_resolutions").append(
    new Option(`${resolution[1]}x${resolution[2]} (${resolution[0]})`, i),
  ),
);

let slider_advanced_autogen_checked = $("#slider_advanced_autogen_check").is(":checked");
$("#slider_advanced_autogen_check").on("input", function () {
  slider_advanced_autogen_checked = this.checked;
});

let disable_maxwidth = $("#disable_maxwidth_check").is(":checked");
$("#disable_maxwidth_check").on("input", function () {
  disable_maxwidth = this.checked;

  $("#workspace").toggleClass("maxwidth_disabled", disable_maxwidth);
});

let disable_colors = $("#disable_colors_check").is(":checked");
$("#disable_colors_check").on("input", function () {
  disable_colors = this.checked;
  generate();
});

let use_bresenham_algorithms = $("#use_bresenham_algorithms_check").is(":checked");
$("#use_bresenham_algorithms_check").on("input", function () {
  use_bresenham_algorithms = this.checked;
  generate();
});

let disable_antialiasing = $("#disable_antialiasing_check").is(":checked");
$("#disable_antialiasing_check").on("input", function () {
  disable_antialiasing = this.checked;

  $("#workspace").toggleClass("antialiasing_disabled", disable_antialiasing);
});

let enable_antialiasing_disable_filter = $("#enable_antialiasing_disable_filter_check").is(
  ":checked",
);
$("#enable_antialiasing_disable_filter_check").on("input", function () {
  enable_antialiasing_disable_filter = this.checked;
  generate();
});

let only_geometry_mode = $("#only_geometry_mode_check").is(":checked");
$("#only_geometry_mode_check").on("input", function () {
  only_geometry_mode = this.checked;
  generate();
});

$("#slider_advanced_check").on("input", function () {
  $("#slider_width, #slider_height").attr({
    min: this.checked ? 1 : 100,
    style: this.checked ? "width: 500px;" : "width: 300px;",
  });
  $("#slider_width").attr({
    max: this.checked ? 4000 : 1920,
  });
  $("#slider_height").attr({
    max: this.checked ? 3000 : 1080,
  });
});

let inputs_autogen_checked = $("#inputs_autogen_check").is(":checked");
$("#inputs_autogen_check").on("input", function () {
  inputs_autogen_checked = this.checked;
});

let select_autogen_checked = $("#select_autogen_check").is(":checked");
$("#select_autogen_check").on("input", function () {
  select_autogen_checked = this.checked;
});

$("#width, #height").on("input", function () {
  if (inputs_autogen_checked) generate();
});

$("#advanced_check").on("input", function () {
  $("#advanced").toggle(this.checked);
});

$("#slider_width, #slider_height").on("input", function () {
  if (slider_advanced_autogen_checked)
    generatePattern($("#workspace"), $("#slider_width").val(), $("#slider_height").val());
  $("#width").val($("#slider_width").val());
  $("#height").val($("#slider_height").val());
});

$("#standard_resolutions").on("input", function () {
  console.log(this.value);
  $("#width").val(standard_resolutions[this.value][1]);
  $("#height").val(standard_resolutions[this.value][2]);
  $("#slider_width").val(standard_resolutions[this.value][1]);
  $("#slider_height").val(standard_resolutions[this.value][2]);
  if (select_autogen_checked) generate();
});

function generate() {
  generatePattern($("#workspace"), $("#width").val(), $("#height").val());
}

function generate_current_resolution() {
  $("#width").val(window.screen.width * window.devicePixelRatio);
  $("#height").val(window.screen.height * window.devicePixelRatio);
  $("#slider_width").val(window.screen.width * window.devicePixelRatio);
  $("#slider_height").val(window.screen.height * window.devicePixelRatio);
  generatePattern($("#workspace"), $("#width").val(), $("#height").val());
}

function go_fullscreen() {
  let canvas = $("canvas")[0];

  if (canvas.requestFullScreen) canvas.requestFullScreen();
  else if (canvas.webkitRequestFullScreen) canvas.webkitRequestFullScreen();
  else if (canvas.mozRequestFullScreen) canvas.mozRequestFullScreen();
}

$("#generate_current_resolution").on("click", function () {
  generate_current_resolution();
  return false;
});

$("#quick_test").on("click", function () {
  generate_current_resolution();
  go_fullscreen();
  return false;
});

$("#generate").on("click", function () {
  $("#slider_width").val($("#width").val());
  $("#slider_height").val($("#height").val());
  generate();
  return false;
});

function setPixel(x, y) {
  let canvas = $("canvas")[0];
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    ctx.fillRect(x, y, 1, 1);
  }
}

function generatePattern(workspace, width_prop, height_prop) {
  let width = Number(width_prop);
  let height = Number(height_prop);
  workspace.empty();

  let canvas = $("<canvas>").attr({ width: width, height: height }).appendTo(workspace)[0];

  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");

    // make canvas context render without antialiasing
    // https://stackoverflow.com/a/68372384/17486232
    if (enable_antialiasing_disable_filter)
      ctx.filter =
        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVDb21wb25lbnRUcmFuc2Zlcj48ZmVGdW5jUiB0eXBlPSJpZGVudGl0eSIvPjxmZUZ1bmNHIHR5cGU9ImlkZW50aXR5Ii8+PGZlRnVuY0IgdHlwZT0iaWRlbnRpdHkiLz48ZmVGdW5jQSB0eXBlPSJkaXNjcmV0ZSIgdGFibGVWYWx1ZXM9IjAgMSIvPjwvZmVDb21wb25lbnRUcmFuc2Zlcj48L2ZpbHRlcj48L3N2Zz4=#filter)";

    // Double image
    function flip(func, deg = 180) {
      func();

      ctx.translate(width / 2, height / 2);
      ctx.rotate(deg * (Math.PI / 180));
      ctx.translate(-width / 2, -height / 2);

      func();

      ctx.translate(width / 2, height / 2);
      ctx.rotate(-deg * (Math.PI / 180));
      ctx.translate(-width / 2, -height / 2);
    }

    // Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // Grid
    ctx.strokeStyle = disable_colors ? "#FFFFFF" : "#808080";

    let offsetx = Math.floor((width % 40) / 2) + 0.5;
    for (let x = offsetx; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    let offsety = Math.floor((height % 40) / 2) + 0.5;
    for (let y = offsety; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Crossed lines
    if (use_bresenham_algorithms) {
      // Non-standard pixelated algorithm
      ctx.fillStyle = disable_colors ? "#FFFFFF" : "fuchsia";
      plotLine(0, 0, width, height);

      ctx.fillStyle = disable_colors ? "#FFFFFF" : "fuchsia";
      plotLine(width, 0, 0, height);
    } else {
      // Standard canvas antialiased algorithm
      ctx.strokeStyle = disable_colors ? "#FFFFFF" : "fuchsia";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.stroke();

      ctx.strokeStyle = disable_colors ? "#FFFFFF" : "fuchsia";
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();
    }

    // Gap side border
    const second_side_border_gap = Math.floor(Math.min(width, height) / 8);
    ctx.strokeStyle = disable_colors ? "#FFFFFF" : "fuchsia";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      second_side_border_gap + 0.5,
      second_side_border_gap + 0.5,
      width - second_side_border_gap * 2,
      height - second_side_border_gap * 2,
    );

    // 2 center rects
    if (!only_geometry_mode) {
      let centerRect2Size = 2;
      ctx.fillStyle = "white";
      ctx.fillRect(
        Math.floor(width / 2) - centerRect2Size / 2,
        Math.floor(height / 2) - centerRect2Size / 2,
        centerRect2Size,
        centerRect2Size,
      );
    }

    // Circles
    if (use_bresenham_algorithms) {
      // Non-standard pixelated algorithm
      ctx.fillStyle = disable_colors ? "#FFFFFF" : "aqua";

      let radius_step = Math.floor(Math.min(width, height) / 40) * 4;
      for (let i = 1; i <= 4; i++) {
        plotCircle(Math.floor(width / 2), Math.floor(height / 2), i * radius_step);
      }
    } else {
      // Standard canvas antialiased algorithm
      ctx.strokeStyle = disable_colors ? "#FFFFFF" : "aqua";

      let radius_step = Math.floor(Math.min(width, height) / 40) * 4;
      for (let i = 1; i <= 4; i++) {
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

    // Side border
    ctx.strokeStyle = disable_colors ? "#FFFFFF" : "fuchsia";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, width - 1, height - 1);

    // Corner circles
    flip(function () {
      const radius = second_side_border_gap;
      if (use_bresenham_algorithms) {
        ctx.fillStyle = disable_colors ? "#FFFFFF" : "aqua";

        plotCircle(radius, radius, radius);
        plotCircle(width - radius - 1, radius, radius);
      } else {
        ctx.strokeStyle = disable_colors ? "#FFFFFF" : "aqua";

        ctx.beginPath();
        ctx.arc(radius + 0.5, radius + 0.5, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width - radius - 1 + 0.5, radius + 0.5, radius, 0, 2 * Math.PI);
        ctx.stroke();
      }
    });

    // Center big size text
    if (!only_geometry_mode) {
      if (!(height < 100)) {
        flip(() => {
          ctx.font =
            Math.max(11, Math.min(Math.floor(height / 12), Math.floor(width / 12))) + "px Consolas";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(
            width + "×" + height,
            width / 2,
            height / 2 - Math.min(width, height) * 0.08,
          );
        });
      }
    }

    // Side small size text
    if (!only_geometry_mode) {
      if (!(width < 100 && height < 100)) {
        flip(() => {
          ctx.font = 11 + "px Consolas";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(width + "×" + height, width / 2, Math.floor(second_side_border_gap / 2));
        });
      }
    }
  }
}

function generateFileName(width, height) {
  return (
    "fknipp" +
    (only_geometry_mode ? "_GEOM" : "") +
    (disable_colors ? "_NC" : "") +
    (use_bresenham_algorithms ? "_BRSALG" : "") +
    (enable_antialiasing_disable_filter ? "_ENANDISFILTER" : "") +
    `_${width}x${height}` +
    ".png"
  );
}

$("#download").on("click", function () {
  let canvas = $("canvas")[0];
  let image = canvas.toDataURL("image/png");
  this.href = image;
  this.download = generateFileName(canvas.width, canvas.height);
});

$("#go_fullscreen").on("click", function () {
  go_fullscreen();
  return false;
});

generatePattern($("#workspace"), $("#width").val(), $("#height").val());

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
