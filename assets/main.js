"use strict";
function fireOnReady() {
    new Welove('welove-container', 180);
}
;
if (document.readyState === 'complete') {
    fireOnReady();
}
else {
    document.addEventListener("DOMContentLoaded", fireOnReady);
}
