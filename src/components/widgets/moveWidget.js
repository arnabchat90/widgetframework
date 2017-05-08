let widgetData = {};
let observer = null;

function emitChange() {
  observer(widgetData);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function setWidgetData(data) {
  widgetData = data;
  emitChange();
}

export function getWidgetData() {
  return widgetData;
}