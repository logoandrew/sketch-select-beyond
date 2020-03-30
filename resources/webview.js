// Disable context menu
document.addEventListener("contextmenu", e => {
  e.preventDefault();
});

window.updateSettings = (
  context,
  includeEqualLayers,
  ignoreHidden,
  ignoreLocked
) => {
  document.getElementById(`context-${context}`).checked = true;
  document.getElementById("include-equal-layers").checked = includeEqualLayers;
  document.getElementById("ignore-hidden").checked = ignoreHidden;
  document.getElementById("ignore-locked").checked = ignoreLocked;
};

document.getElementById("context-artboard").addEventListener("change", e => {
  if (e.currentTarget.checked) {
    window.postMessage("context", "artboard");
  }
});

document.getElementById("context-group").addEventListener("change", e => {
  if (e.currentTarget.checked) {
    window.postMessage("context", "group");
  }
});

document
  .getElementById("include-equal-layers")
  .addEventListener("change", e => {
    window.postMessage("includeEqualLayers", e.currentTarget.checked);
  });

document.getElementById("ignore-hidden").addEventListener("change", e => {
  window.postMessage("ignoreHidden", e.currentTarget.checked);
});

document.getElementById("ignore-locked").addEventListener("change", e => {
  window.postMessage("ignoreLocked", e.currentTarget.checked);
});

document.getElementById("done").addEventListener("click", () => {
  window.postMessage("close");
});

document.querySelectorAll("a[href]").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    window.postMessage("openLink", e.currentTarget.href);
  });
});
