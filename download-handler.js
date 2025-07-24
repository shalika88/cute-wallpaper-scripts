
document.addEventListener("DOMContentLoaded", function () {
  const downloadBtn = document.getElementById("downloadBtn");
  let firstClickDone = false;

  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      if (!firstClickDone) {
        window.open("https://www.profitableratecpm.com/kf3jx4w50?key=500dd3d43afaaa8033eaa24c8da49540", "_blank");
        window.open("https://otieu.com/4/9585282", "_blank");
        downloadBtn.textContent = "Click Again to Download";
        firstClickDone = true;
      } else {
        let countdown = 6;
        downloadBtn.disabled = true;
        const originalText = downloadBtn.textContent;
        const interval = setInterval(() => {
          downloadBtn.textContent = `Downloading in ${countdown}...`;
          countdown--;
          if (countdown < 0) {
            clearInterval(interval);
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
            const a = document.createElement('a');
            const image = document.getElementById("mainImage");
            if (image) {
              a.href = image.src;
              a.download = "wallpaper.jpg";
              document.body.appendChild(a);
              a.click();
              a.remove();
            }
          }
        }, 1000);
      }
    });
  }
});
