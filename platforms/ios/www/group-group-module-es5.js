(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"], {
    /***/
    "8xUH":
    /*!***************************************!*\
      !*** ./src/app/group/group.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function xUH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-rating-2-color: #aa6c39;\n  --page-rating-1-color: #bbb2b2;\n}\n\n.tab-title {\n  size: 9px;\n}\n\nion-segment-button {\n  background-color: var(--page-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n  --border-style: 10px;\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  margin: 0px;\n  font-size: 15px;\n  height: initial;\n}\n\n.listing-item {\n  background-color: var(--page-background);\n}\n\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 3px;\n  text-transform: capitalize !important;\n}\n\n.addedByTitle {\n  margin-left: 10px;\n  line-height: 5px;\n  text-decoration: none;\n}\n\n.addedByDate {\n  margin-left: 10px;\n  font-style: italic;\n}\n\n.addedByImg {\n  width: 50px;\n  float: left;\n  vertical-align: middle;\n}\n\n.newIcon {\n  margin-left: 10px;\n  height: 40px;\n  vertical-align: middle;\n}\n\n.message {\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-font-smoothing: subpixel-antialiased;\n  -moz-osx-font-smoothing: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.message .slider {\n  margin-bottom: 5px;\n}\n\n.message .slider .bgSizeContain {\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 100%;\n  width: 100%;\n  height: 200px;\n  text-shadow: white 0px 0px 2px;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.message .reactions {\n  margin-bottom: 0px;\n  margin-left: -10px;\n}\n\n.message .tags-wrapper {\n  padding-top: 5px;\n}\n\n.message .tags-wrapper .tags {\n  padding-right: 5px;\n}\n\n.message .tags-wrapper .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: 15px;\n  font-size: 12px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n  color: #aa6c39;\n}\n\n.group-info {\n  margin: var(--page-margin) var(--page-margin) var(--page-margin) var(--page-margin);\n}\n\n.group-info .group-name {\n  padding-top: var(--page-margin);\n  padding-bottom: var(--page-margin);\n  font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, \"Roboto\", \"Segoe UI\", Arial, sans-serif;\n  text-align: left;\n  font-weight: bold;\n  font-size: 19px;\n}\n\n.group-info .group-tags {\n  padding-bottom: calc(var(--page-margin) / 3);\n}\n\n.group-info .group-tags .tags {\n  padding-right: 5px;\n}\n\n.group-info .group-tags .tags .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"0\"] {\n  color: var(--page-rating-1-color);\n}\n\n.group-info .group-tags .tags .item-rating[ratingBase=\"1\"] {\n  color: var(--page-rating-2-color);\n}\n\n.group-info .group-member-name {\n  padding-left: var(--page-margin);\n}\n\n.empty-list {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDQTtFQUNFLFNBQUE7QUFFRjs7QUFBQTtFQUNFLHdDQUFBO0FBR0Y7O0FBQUE7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FBR0Y7O0FBREU7RUFDRSw4QkFBQTtBQUdKOztBQURJO0VBQ0UsWUFBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBQUNOOztBQUVJO0VBRUUsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUFGTjs7QUFJTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUFKUjs7QUFXQTtFQUNBLHdDQUFBO0FBUkE7O0FBV0E7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBUkE7O0FBV0E7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtBQVJEOztBQVVBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBUEQ7O0FBU0E7RUFDQSxpQkFBQTtFQUNDLGtCQUFBO0FBTkQ7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBTEY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSEY7O0FBS0U7RUFDRSxrQkFBQTtBQUhKOztBQUlJO0VBQ0UsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtBQUZOOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFNSTtFQUNFLGtCQUFBO0FBSk47O0FBTUk7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKTjs7QUFVQTtFQUNFLG1GQUFBO0FBUEY7O0FBV0U7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0dBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVRKOztBQVdFO0VBQ0UsNENBQUE7QUFUSjs7QUFXSTtFQUNFLGtCQUFBO0FBVE47O0FBV0k7RUFFRSxtREFBQTtFQU1RLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWZkOztBQWdCYztFQUNFLGlDQUFBO0FBZGhCOztBQWdCYztFQUNFLGlDQUFBO0FBZGhCOztBQXFCRTtFQUNFLGdDQUFBO0FBbkJKOztBQXVCQTtFQUNFLGtCQUFBO0FBcEJGIiwiZmlsZSI6InNyYy9hcHAvZ3JvdXAvZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNhYTZjMzk7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2JiYjJiMjtcbn1cbi50YWItdGl0bGUge1xuICBzaXplOiA5cHg7XG59XG5pb24tc2VnbWVudC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tYm9yZGVyLXN0eWxlOiAxMHB4O1xuXG4gIC5zZWFyY2hiYXItcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAvLyBvdmVycmlkZSBJb25pYyBmaXhlZCBoZWlnaHRcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIC8vIExlYXJuIG1vcmUgYWJvdXQgQ1NTIGNvbnRhaW4gcHJvcGVydHkgaGVyZTogaHR0cHM6Ly90ZXJtdmFkZXIuZ2l0aHViLmlvL2Nzcy1jb250YWluL1xuICAgICAgY29udGFpbjogY29udGVudDtcbiAgICB9XG5cbiAgICAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgIC8vcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5maWx0ZXJzLWJ0biB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA2cHg7XG5cbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG4ubGlzdGluZy1pdGVtIHtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG5cbi5pY29uIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0e1xuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIHBhZGRpbmctbGVmdDogM3B4O1xuIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG4uYWRkZWRCeVRpdGxlIHtcbiBtYXJnaW4tbGVmdDogMTBweDtcbiBsaW5lLWhlaWdodDogNXB4O1xuIHRleHQtZGVjb3JhdGlvbjogbm9uZSBcbn1cbi5hZGRlZEJ5RGF0ZSB7XG5tYXJnaW4tbGVmdDogMTBweDtcbiBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYWRkZWRCeUltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5uZXdJY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tZXNzYWdlIHtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gIC5zbGlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAuYmdTaXplQ29udGFpbiB7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHRleHQtc2hhZG93OiB3aGl0ZSAwcHggMHB4IDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgfVxuXG4gIC5yZWFjdGlvbnMge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIH0gXG4gIC50YWdzLXdyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICBcbiAgICAudGFncyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG5cbiAgICAuaXRlbS1yYXRpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNhYTZjMzk7XG4gICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZ3JvdXAtaW5mbyB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAuZ3JvdXAtaW1nIHtcblxuICB9XG4gIC5ncm91cC1uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2FOZXVlJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbiAgLmdyb3VwLXRhZ3Mge1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgXG4gICAgLnRhZ3Mge1xuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuXG4gICAgLml0ZW0tcmF0aW5nIHtcbiAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wYWdlLWNvbG9yLXJnYiksIC4zNSk7XG4gICAgICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgICAgICAgIC8vIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDEpO1xuICAgICAgICAgICAgICAvL3BhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAmW3JhdGluZ0Jhc2U9XCIwXCJdIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJltyYXRpbmdCYXNlPVwiMVwiXSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTItY29sb3IpO1xuICAgICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLmdyb3VwLW1lbWJlci1uYW1lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgfVxufVxuXG4uZW1wdHktbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "J4zT":
    /*!***************************************!*\
      !*** ./src/app/group/group.module.ts ***!
      \***************************************/

    /*! exports provided: GroupPageModule */

    /***/
    function J4zT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPageModule", function () {
        return GroupPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./group.page */
      "mbZD");
      /* harmony import */


      var _services_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/share.module */
      "vxGH");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/components.module */
      "j1ZV");

      var routes = [{
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]
      }];

      var GroupPageModule = function GroupPageModule() {
        _classCallCheck(this, GroupPageModule);
      };

      GroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _services_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
      })], GroupPageModule);
      /***/
    },

    /***/
    "mbZD":
    /*!*************************************!*\
      !*** ./src/app/group/group.page.ts ***!
      \*************************************/

    /*! exports provided: GroupPage */

    /***/
    function mbZD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GroupPage", function () {
        return GroupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./group.page.html */
      "rrFO");
      /* harmony import */


      var _group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./group.page.scss */
      "8xUH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data.service */
      "EnSQ");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "Pn9U");
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      "Zr1d");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/contacts/ngx */
      "41F/");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "gTw3");
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/loading.service */
      "7ch9");
      /* harmony import */


      var _services_image_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../services/image.service */
      "mnRn");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "mrps");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! firebase */
      "iqUP");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _popover_popover_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../popover/popover.page */
      "M0Xy");
      /* harmony import */


      var _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../reaction-list-modal/reaction-list-modal.page */
      "7ONW");

      var GroupPage = /*#__PURE__*/function () {
        // GroupPage
        // This is the page where the user can chat with other group members and view group info.
        function GroupPage(dataProvider, navCtrl, modalCtrl, firestore, alertCtrl, imageProvider, loadingProvider, camera, keyboard, actionSheet, contacts, geolocation, route, router, popoverCtrl) {
          _classCallCheck(this, GroupPage);

          this.dataProvider = dataProvider;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.firestore = firestore;
          this.alertCtrl = alertCtrl;
          this.imageProvider = imageProvider;
          this.loadingProvider = loadingProvider;
          this.camera = camera;
          this.keyboard = keyboard;
          this.actionSheet = actionSheet;
          this.contacts = contacts;
          this.geolocation = geolocation;
          this.route = route;
          this.router = router;
          this.popoverCtrl = popoverCtrl;
          this.startIndex = -1;
          this.scrollDirection = 'bottom'; // Set number of messages to show.

          this.numberOfMessages = 10;
          this.polls = [];
          this.resources = [];
          this.events = [];
          this.loggedInUserIsMember = 'false';
          this.resourceTags = [];
          this.notifications = [];
          this.toggled = false; // posts

          this.posts = [];
          this.numberOfPosts = 10;
          this.maxNoOfPosts = 1000;
          this.maxNoOfEvents = 1000;
          this.maxNoOfPolls = 1000;
          this.maxNoOfResources = 1000;
          this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid;
        }

        _createClass(GroupPage, [{
          key: "handleSelection",
          value: function handleSelection(event) {
            this.emojitext = this.emojitext + ' ' + event["char"];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loadingProvider.show();
            this.tab = 'posts';
            this.title = 'Posts';
            this.loggedInUserId = firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid; // Get Posts

            this.dataProvider.getCurrentUser().get().subscribe(function (user) {
              // this.userReactions = user.data().userReactions;
              // this.userNotifications = user.data().userNotifications;
              _this.loggedInUser = user.data();

              _this.getGroupDetailsandPosts();
            });
            this.loadingProvider.hide();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {} // Update messagesRead when user lefts this page.

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            if (this.messages) {
              this.setMessagesRead(this.messages);
            }
          } // Check if currentPage is active, then update user's messagesRead.

        }, {
          key: "setMessagesRead",
          value: function setMessagesRead(messages) {
            // if (this.navCtrl.getActive().instance instanceof GroupPage) {
            // Update user's messagesRead on database.
            this.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid + '/groups/' + this.groupId).update({
              messagesRead: this.messages.length
            }); // }
          } // Check if 'return' button is pressed and send the message.

        }, {
          key: "onType",
          value: function onType(keyCode) {
            if (keyCode == 13) {// this.keyboard.close();
              // this.send();
            }
          } // Scroll to bottom of page after a short delay.

        }, {
          key: "scrollBottom",
          value: function scrollBottom() {
            var that = this;
            setTimeout(function () {
              that.content.nativeElement.scrollBottom = that.content.nativeElement.scrollHeight;
            }, 300);
          } // Scroll to top of the page after a short delay.

        }, {
          key: "scrollTop",
          value: function scrollTop() {
            var that = this;
            setTimeout(function () {
              that.content.nativeElement.scrollTop = that.content.nativeElement.scrollHeight;
            }, 300);
          } // Scroll depending on the direction.

        }, {
          key: "doScroll",
          value: function doScroll() {
            if (this.scrollDirection === 'bottom') {
              this.scrollBottom();
            } else if (this.scrollDirection === 'top') {
              this.scrollTop();
            }
          } // Check if the user is the sender of the message.

        }, {
          key: "isSender",
          value: function isSender(message) {
            if (message.sender === firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid) {
              return true;
            } else {
              return false;
            }
          } // Check if the message is a system message.

        }, {
          key: "isSystemMessage",
          value: function isSystemMessage(message) {
            if (message.type === 'system') {
              return true;
            } else {
              return false;
            }
          } // View user info

        }, {
          key: "viewUser",
          value: function viewUser(userId) {
            this.router.navigateByUrl('/userinfo/' + userId);
          } // Send text message to the group.

        }, {
          key: "send",
          value: function send(type) {
            // Clone an instance of messages object so it will not directly be updated.
            // The messages object should be updated by our observer declared on ionViewDidLoad.
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid,
              // tslint:disable-next-line: object-literal-shorthand
              type: type,
              message: this.message
            }); // Update group messages.

            this.dataProvider.getGroup(this.groupId).update({
              // tslint:disable-next-line: object-literal-shorthand
              messages: messages
            }); // Clear messagebox.

            this.message = '';
          } // Enlarge image messages.

        }, {
          key: "enlargeImage",
          value: function enlargeImage(img) {// let imageModal = this.modalCtrl.create("ImageModalPage", { img: img });
            // imageModal.present();
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this2 = this;

            var action = this.actionSheet.create({
              header: 'Choose attachments',
              buttons: [{
                text: 'Camera',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.CAMERA).then(function (url) {
                    // Process image message.
                    _this2.sendPhotoMessage(url);
                  });
                }
              }, {
                text: 'Photo Library',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupPhotoMessage(_this2.groupId, _this2.camera.PictureSourceType.PHOTOLIBRARY).then(function (url) {
                    // Process image message.
                    _this2.sendPhotoMessage(url);
                  });
                }
              }, {
                text: 'Video',
                handler: function handler() {
                  _this2.imageProvider.uploadGroupVideoMessage(_this2.groupId).then(function (url) {
                    _this2.sendVideoMessage(url);
                  });
                }
              }, {
                text: 'Location',
                handler: function handler() {
                  _this2.geolocation.getCurrentPosition({
                    timeout: 2000
                  }).then(function (res) {
                    var locationMessage = 'current location: lat:' + res.coords.latitude + ' lng:' + res.coords.longitude;
                    var mapUrl = '<a href=\'https://www.google.com/maps/search/' + res.coords.latitude + ',' + res.coords.longitude + '\'>View on Map</a>';

                    var confirm = _this2.alertCtrl.create({
                      header: 'Your Location',
                      message: locationMessage,
                      buttons: [{
                        text: 'cancel',
                        handler: function handler() {}
                      }, {
                        text: 'Share',
                        handler: function handler() {
                          _this2.message = locationMessage + '<br>' + mapUrl;

                          _this2.send('location');
                        }
                      }]
                    }).then(function (r) {
                      return r.present();
                    });
                  }, function (locationErr) {});
                }
              }, {
                text: 'Contact',
                handler: function handler() {
                  _this2.contacts.pickContact().then(function (data) {
                    _this2.message = '<b>Name:</b> ' + data.displayName + '<br><b>Mobile:</b> <a href=\'tel:' + data.phoneNumbers[0].value + '\'>' + data.phoneNumbers[0].value + '</a>';

                    _this2.send('contact');
                  }, function (err) {});
                }
              }, {
                text: 'cancel',
                role: 'cancel',
                handler: function handler() {}
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "takePhoto",
          value: function takePhoto() {
            var _this3 = this;

            this.imageProvider.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then(function (url) {
              // Process image message.
              _this3.sendPhotoMessage(url);
            });
          } // Process photoMessage on database.

        }, {
          key: "sendPhotoMessage",
          value: function sendPhotoMessage(url) {
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid,
              type: 'image',
              url: url
            });
            this.dataProvider.getGroup(this.groupId).update({
              messages: messages
            });
            this.message = '';
          }
        }, {
          key: "sendVideoMessage",
          value: function sendVideoMessage(url) {
            var messages = JSON.parse(JSON.stringify(this.messages));
            messages.push({
              date: new Date().toString(),
              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid,
              type: 'video',
              url: url
            });
            this.dataProvider.getGroup(this.groupId).update({
              messages: messages
            });
            this.message = '';
          } // View group info.

        }, {
          key: "groupInfo",
          value: function groupInfo() {
            this.router.navigateByUrl('/groupinfo/' + this.groupId);
          } // Controller Functions

        }, {
          key: "onPress",
          value: function onPress($event) {}
        }, {
          key: "onPressUp",
          value: function onPressUp(event, message) {
            this.presentPopover(event, message);
          }
        }, {
          key: "joinGroup",
          value: function joinGroup() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.alert = this.alertCtrl.create({
                        header: 'Join Group',
                        message: 'Are you sure you want to join this group?',
                        buttons: [{
                          text: 'Cancel'
                        }, {
                          text: 'Join',
                          handler: function handler(data) {
                            // Proceed
                            _this4.loadingProvider.show(); // Add groupInfo to each friend added to the group.


                            _this4.firestore.doc('/accounts/' + firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid + '/groups/' + _this4.groupId).update({
                              messagesRead: 0
                            }); // Add friend as members of the group.


                            _this4.group.members.push(firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid); // Add system message that the members are added to the group.


                            _this4.group.messages.push({
                              date: new Date().toString(),
                              sender: firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid,
                              type: 'system',
                              message: _this4.user.name + ' has joined the group.',
                              icon: 'md-contacts'
                            }); // Update group data on the database.


                            _this4.dataProvider.getGroup(_this4.groupId).update({
                              members: _this4.group.members,
                              messages: _this4.group.messages
                            }).then(function () {
                              // Back.
                              _this4.loadingProvider.hide();

                              _this4.navCtrl.back();
                            });
                          }
                        }]
                      }).then(function (r) {
                        return r.present();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(myEvent, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var ev, popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      ev = {
                        target: {
                          getBoundingClientRect: function getBoundingClientRect() {
                            return {
                              top: myEvent.center.y,
                              left: myEvent.center.x
                            };
                          }
                        }
                      };
                      _context2.next = 3;
                      return this.popoverCtrl.create({
                        component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_15__["PopoverPage"],
                        componentProps: {
                          message: message,
                          groupId: this.groupId
                        },
                        event: ev,
                        translucent: true
                      });

                    case 3:
                      popover = _context2.sent;
                      _context2.next = 6;
                      return popover.present();

                    case 6:
                      return _context2.abrupt("return", _context2.sent);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getGroupDetailsandMessages",
          value: function getGroupDetailsandMessages() {
            var _this5 = this;

            // Get group details
            this.groupId = this.route.snapshot.params.id;
            this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this5.group = group.payload.data();
              _this5.title = group.payload.data().name; // Get Group Members

              if (_this5.group.members) {
                _this5.group.members.forEach(function (memberId) {
                  _this5.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                    if (member.key != null) {
                      member = Object.assign({
                        $key: member.key
                      }, member.payload.data());

                      _this5.addUpdateOrRemoveMember(member);
                    }
                  });
                });
              } // Get group messages


              _this5.dataProvider.getGroupMessages(_this5.groupId).snapshotChanges().subscribe(function (messagesRes) {
                var messages = messagesRes.payload.data();

                if (messages == null || messages == undefined) {
                  messages = [];
                }

                if (_this5.messages != null && _this5.messages != undefined) {
                  // Just append newly added messages to the bottom of the view.
                  if (messages.length > _this5.messages.length) {
                    var message = messages[messages.length - 1];

                    _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      message.avatar = user.payload.data().img;
                    });

                    _this5.messages.push(message); // Also append to messagesToShow.


                    _this5.messagesToShow.push(message); // Reset scrollDirection to bottom.


                    _this5.scrollDirection = 'bottom';
                  }
                } else {
                  // Get all messages, this will be used as reference object for messagesToShow.
                  _this5.messages = [];
                  messages.forEach(function (message) {
                    _this5.dataProvider.getUser(message.sender).snapshotChanges().subscribe(function (user) {
                      if (user.key != null) {
                        message.avatar = user.payload.data().img;
                      }
                    });

                    _this5.messages.push(message);
                  }); // Load messages in relation to numOfMessages.

                  if (_this5.startIndex === -1) {
                    // Get initial index for numberOfMessages to show.
                    if (_this5.messages.length - _this5.numberOfMessages > 0) {
                      _this5.startIndex = _this5.messages.length - _this5.numberOfMessages;
                    } else {
                      _this5.startIndex = 0;
                    }
                  }

                  if (!_this5.messagesToShow) {
                    _this5.messagesToShow = [];
                  } // Set messagesToShow


                  for (var i = _this5.startIndex; i < _this5.messages.length; i++) {
                    _this5.messagesToShow.push(_this5.messages[i]);
                  }

                  _this5.loadingProvider.hide();
                }
              });

              _this5.dataProvider.getGroupMembers(_this5.groupId).snapshotChanges().subscribe(function (memberIdsRes) {
                var memberIds = memberIdsRes.payload.data();

                if (memberIds.includes(firebase__WEBPACK_IMPORTED_MODULE_14__["auth"]().currentUser.uid)) {
                  _this5.loggedInUserIsMember = true;
                } else {
                  _this5.loggedInUserIsMember = false;
                }
              });
            }); // Update messages' date time elapsed every minute based on Moment.js.

            var that = this;

            if (!that.updateDateTime) {
              that.updateDateTime = setInterval(function () {
                if (that.messages) {
                  that.messages.forEach(function (message) {
                    var date = message.date;
                    message.date = new Date(date);
                  });
                }
              }, 60000);
            }
          }
        }, {
          key: "getGroupDetailsandPosts",
          value: function getGroupDetailsandPosts() {
            var _this6 = this;

            // Get group details
            this.posts = [];
            this.groupId = this.route.snapshot.params.id;
            this.subscription = this.dataProvider.getGroup(this.groupId).snapshotChanges().subscribe(function (group) {
              _this6.group = group.payload.data();
              _this6.title = group.payload.data().name; // Get Group Members

              if (_this6.group.members) {
                _this6.group.members.forEach(function (memberId) {
                  _this6.dataProvider.getUser(memberId).snapshotChanges().subscribe(function (member) {
                    if (member.payload.exists) {
                      member = Object.assign({
                        $key: member.payload.id
                      }, member.payload.data());

                      _this6.addUpdateOrRemoveMember(member);
                    }
                  });
                });
              } // Get group posts


              _this6.firstDataSetPost = _this6.firestore.collection('posts').ref.where('groupId', '==', _this6.groupId).where('type', '==', 'general').orderBy('date', 'desc').limit(5);

              _this6.firstDataSetPost.onSnapshot(function (po) {
                _this6.lastDataSetPost = po.docs[po.docs.length - 1];
                _this6.posts = [];

                _this6.loadEachPostData(po);
              });
            }); // Update messages' date time elapsed every minute based on Moment.js.

            var that = this;

            if (!that.updateDateTime) {
              that.updateDateTime = setInterval(function () {
                if (that.posts) {
                  that.posts.forEach(function (post) {
                    var date = post.date;
                    post.date = new Date(date);
                  });
                }
              }, 60000);
            }
          }
        }, {
          key: "loadEachPostData",
          value: function loadEachPostData(po) {
            var _this7 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this7.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions.length > 0) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    var r = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this7.dataProvider.getCurrentUserId();
                    });
                    foundSmiley = r.reactionType.some(function (r) {
                      return r === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Hugs


                  var foundHug = false;

                  if (post.reactions !== undefined) {
                    var _r = post.reactions.find(function (el) {
                      return el.addedByUser.addedByKey === _this7.dataProvider.getCurrentUserId();
                    });

                    foundHug = _r.reactionType.some(function (r) {
                      return r === 'Hug';
                    });
                  }

                  if (foundHug) {
                    post.showHug = true;
                  } else {
                    post.showHug = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this7.addOrUpdatePost(post);
            });
          }
        }, {
          key: "addUpdateOrRemoveMember",
          value: function addUpdateOrRemoveMember(member) {
            if (this.group) {
              if (this.group.members.indexOf(member.$key) > -1) {
                // User exists in the group.
                if (!this.groupMembers) {
                  this.groupMembers = [member];
                } else {
                  var index = -1;

                  for (var i = 0; i < this.groupMembers.length; i++) {
                    if (this.groupMembers[i].$key === member.$key) {
                      index = i;
                    }
                  } // Add/Update User.


                  if (index > -1) {
                    this.groupMembers[index] = member;
                  } else {
                    this.groupMembers.push(member);
                  }
                }
              } else {
                // User already left the group, remove member from list.
                var index1 = -1;

                for (var j = 0; j < this.groupMembers.length; j++) {
                  if (this.groupMembers[j].$key === member.$key) {
                    index1 = j;
                  }
                }

                if (index1 > -1) {
                  this.groupMembers.splice(index1, 1);
                }
              }
            }
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            if (this.tab === 'groups') {
              this.title = this.group.name;
              this.getGroupDetailsandMessages();
            } else if (this.tab === 'posts') {
              this.title = this.group.name;
              this.getGroupDetailsandPosts();
            } else if (this.tab === 'polls') {
              this.title = this.group.name;
              this.getPolls();
            } else if (this.tab === 'resources') {
              this.title = this.group.name;
              this.getResources();
            } else if (this.tab === 'events') {
              this.title = this.group.name;
              this.getEvents();
            } else if (this.tab === 'groupInfo') {
              this.title = this.group.name;
            }
          }
        }, {
          key: "getPolls",
          value: function getPolls() {
            var _this8 = this;

            // Get group posts
            this.firstDataSetPoll = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'poll').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetPoll.onSnapshot(function (po) {
              _this8.lastDataSetPoll = po.docs[po.docs.length - 1];
              _this8.polls = [];

              _this8.loadEachPollData(po);
            });
          }
        }, {
          key: "loadEachPollData",
          value: function loadEachPollData(po) {
            var _this9 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              }

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this9.addOrUpdatePoll(post);
            });
          }
        }, {
          key: "viewPoll",
          value: function viewPoll(poll) {
            this.router.navigateByUrl('post/' + poll.key);
          }
        }, {
          key: "viewResource",
          value: function viewResource(resource) {
            this.router.navigateByUrl('post/' + resource.key);
          }
        }, {
          key: "viewPost",
          value: function viewPost(post) {
            this.router.navigateByUrl('post/' + post.key);
          }
        }, {
          key: "viewEvent",
          value: function viewEvent(event) {
            this.router.navigateByUrl('post/' + event.key);
          }
        }, {
          key: "newPoll",
          value: function newPoll() {
            this.router.navigateByUrl('/new-poll/' + this.groupId);
          }
        }, {
          key: "newPost",
          value: function newPost() {
            this.router.navigateByUrl('/new-post/' + this.groupId);
          }
        }, {
          key: "newResource",
          value: function newResource() {
            this.router.navigateByUrl('/new-resource/' + this.groupId);
          }
        }, {
          key: "newEvent",
          value: function newEvent() {
            this.router.navigateByUrl('/new-event/' + this.groupId);
          }
        }, {
          key: "getResources",
          value: function getResources() {
            var _this10 = this;

            // Get group posts
            this.firstDataSetResources = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'resource').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetResources.onSnapshot(function (po) {
              _this10.lastDataSetResources = po.docs[po.docs.length - 1];
              _this10.resources = [];

              _this10.loadEachResourceData(po);
            });
          }
        }, {
          key: "loadEachResourceData",
          value: function loadEachResourceData(po) {
            var _this11 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this11.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    foundSmiley = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this11.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Bookmark


                  var foundBookmark = false;

                  if (post.reactions !== undefined) {
                    foundBookmark = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this11.dataProvider.getCurrentUserId() && el.reactionType === 'Bookmark';
                    });
                  }

                  if (foundBookmark) {
                    post.showBookmark = true;
                  } else {
                    post.showBookmark = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this11.addOrUpdateResource(post);
            });
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            var _this12 = this;

            // Get group posts
            this.firstDataSetEvent = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'event').orderBy('date', 'desc').limit(5); // Get group posts

            this.firstDataSetEvent.onSnapshot(function (po) {
              _this12.lastDataSetEvent = po.docs[po.docs.length - 1];
              _this12.events = [];

              _this12.loadEachEventData(po);
            });
          }
        }, {
          key: "loadEachEventData",
          value: function loadEachEventData(po) {
            var _this13 = this;

            po.forEach(function (p) {
              var post;
              post = p.data();
              post.key = p.id;
              var startDate = new Date(post.date); // Do your operations

              var endDate = new Date();
              var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

              if (seconds > 120) {
                post.showNewIcon = false;
              } else {
                post.showNewIcon = true;
              } // get reactions list


              _this13.firestore.collection('posts').doc(post.key).collection('reactions').snapshotChanges().subscribe(function (reactions) {
                post.reactions = [];
                reactions.forEach(function (element) {
                  var reaction = element.payload.doc.data();
                  reaction.key = element.payload.doc.id;
                  post.reactions.push(reaction);
                }); // Check for Thanks

                if (reactions) {
                  var foundSmiley = false;

                  if (post.reactions !== undefined) {
                    foundSmiley = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId() && el.reactionType === 'Thanks';
                    });
                  }

                  if (foundSmiley) {
                    post.showSmiley = true;
                  } else {
                    post.showSmiley = false;
                  } // Check for Checkin


                  var foundCheckin = false;

                  if (post.reactions !== undefined) {
                    foundCheckin = post.reactions.some(function (el) {
                      return el.addedByUser.addedByKey === _this13.dataProvider.getCurrentUserId() && el.reactionType === 'Checkin';
                    });
                  }

                  if (foundCheckin) {
                    post.showCheckin = true;
                  } else {
                    post.showCheckin = false;
                  }
                }
              });

              post.postTags = post.postTags.filter(function (x) {
                return x.isChecked !== false;
              });

              _this13.addOrUpdateEvent(post);
            });
          }
        }, {
          key: "addOrUpdatePoll",
          value: function addOrUpdatePoll(poll) {
            var totalPollCount = 0; // Add total poll count

            if (poll.pollOptions) {
              poll.pollOptions.forEach(function (element) {
                if (element.members !== undefined) {
                  totalPollCount = totalPollCount + element.members.length;
                }
              });
            }

            poll.totalPollCount = totalPollCount; // Add NEW Icon

            var startDate = new Date(poll.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              poll.showNewIcon = false;
            } else {
              poll.showNewIcon = true;
            }

            if (!this.polls) {
              this.polls = [poll];
            } else {
              var index = -1;

              for (var i = 0; i < this.polls.length; i++) {
                if (this.polls[i].key == poll.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.polls[index] = poll;
              } else {
                this.polls.push(poll);
              }
            }
          }
        }, {
          key: "addOrUpdateResource",
          value: function addOrUpdateResource(resource) {
            // Add NEW Icon
            var startDate = new Date(resource.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              resource.showNewIcon = false;
            } else {
              resource.showNewIcon = true;
            }

            if (!this.resources) {
              this.resources = [resource];
            } else {
              var index = -1;

              for (var i = 0; i < this.resources.length; i++) {
                if (this.resources[i].key == resource.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.resources[index] = resource;
              } else {
                this.resources.push(resource);
              }
            }
          }
        }, {
          key: "addOrUpdatePost",
          value: function addOrUpdatePost(post) {
            if (!this.posts) {
              this.posts = [post];
            } else {
              var index = -1;

              for (var i = 0; i < this.posts.length; i++) {
                if (this.posts[i].key == post.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.posts[index] = post;
              } else {
                this.posts.push(post);
              }
            }
          }
        }, {
          key: "addOrUpdateEvent",
          value: function addOrUpdateEvent(event) {
            // Add NEW Icon
            var startDate = new Date(event.dateCreated);
            var endDate = new Date();
            var seconds = (endDate.getTime() - startDate.getTime()) / 1000;

            if (seconds > 120) {
              event.showNewIcon = false;
            } else {
              event.showNewIcon = true;
            }

            if (!this.events) {
              this.events = [event];
            } else {
              var index = -1;

              for (var i = 0; i < this.events.length; i++) {
                if (this.events[i].key === event.key) {
                  index = i;
                }
              }

              if (index > -1) {
                this.events[index] = event;
              } else {
                this.events.push(event);
              }
            }
          }
        }, {
          key: "showGroupOptions",
          value: function showGroupOptions() {
            var _this14 = this;

            var action = this.actionSheet.create({
              header: 'Create a new ...',
              backdropDismiss: true,
              mode: 'md',
              cssClass: 'GroupAction',
              buttons: [{
                text: 'Post',
                icon: 'chatbubbles',
                handler: function handler() {
                  _this14.newPost();
                }
              }, {
                text: 'Resource',
                icon: 'document',
                handler: function handler() {
                  _this14.newResource();
                }
              }, {
                text: 'Poll',
                icon: 'podium',
                handler: function handler() {
                  _this14.newPoll();
                }
              }, {
                text: 'Event',
                icon: 'calendar',
                cssClass: 'cancelAction',
                handler: function handler() {
                  _this14.newEvent();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "submitReactionPost",
          value: function submitReactionPost(post, reactionType) {
            switch (reactionType) {
              case 'Thanks':
                {
                  if (!post.showSmiley) {
                    this.addPostReaction(post, reactionType);
                    post.showSmiley = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showSmiley = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Hug':
                {
                  if (!post.showHug) {
                    this.addPostReaction(post, reactionType);
                    post.showHug = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showHug = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Checkin':
                {
                  if (!post.showCheckin) {
                    this.addPostReaction(post, reactionType);
                    post.showCheckin = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showCheckin = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }

              case 'Bookmark':
                {
                  if (!post.showBookmark) {
                    this.addPostReaction(post, reactionType);
                    post.showBookmark = true;
                    post.totalReactionCount += 1;
                  } else {
                    this.removePostReaction(post, reactionType);
                    post.showBookmark = false;
                    post.totalReactionCount -= 1;
                  }

                  break;
                }
            }
          }
        }, {
          key: "addPostReaction",
          value: function addPostReaction(post, reactionType) {
            var _this15 = this;

            // first find the post in the collection
            var postIndex;
            var p;

            if (post.type === 'general') {
              postIndex = this.posts.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.posts[postIndex];
            } else if (post.type === 'event') {
              postIndex = this.events.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.events[postIndex];
            } else if (post.type === 'poll') {
              postIndex = this.polls.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.polls[postIndex];
            } else if (post.type === 'resource') {
              postIndex = this.resources.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.resources[postIndex];
            }

            var r = p.reactions.find(function (el) {
              return el.addedByUser.addedByKey === _this15.dataProvider.getCurrentUserId();
            });

            if (!r) {
              var react = {
                dateCreated: new Date(),
                addedByUser: {
                  addedByKey: this.dataProvider.getCurrentUserId(),
                  addedByUsername: this.loggedInUser.username,
                  addedByImg: this.loggedInUser.img
                },
                reactionType: [reactionType]
              };
              this.dataProvider.addPostReactions(post.key, react).then(function () {// // Update user notifications.
                // if (!this.userNotifications.some(p => p !== this.postId)) {
                //   this.userNotifications.push(this.postId);
                //   this.dataProvider.getUser(this.loggedInUserId).update({
                //     userNotifications: this.userNotifications
                //   });
                // }
                // // Update user activity.
                // if (!this.userReactions && this.userReactions.some(p => p !== this.postId)) {
                //   this.userReactions.push(this.postId);
                //   this.dataProvider.getUser(this.loggedInUserId).update({
                //     userReactions: this.userReactions
                //   });
                // }
              });
            } else {
              this.firestore.collection('posts').doc(post.key).collection('reactions').doc(r.key).update({
                reactionType: firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].FieldValue.arrayUnion(reactionType)
              }).then(function () {
                var increment = firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].FieldValue.increment(1);

                _this15.firestore.collection('posts').doc(post.key).update({
                  totalReactionCount: increment
                });
              });
            }
          }
        }, {
          key: "removePostReaction",
          value: function removePostReaction(post, reactionType) {
            var _this16 = this;

            var postIndex;
            var p;

            if (post.type === 'general') {
              postIndex = this.posts.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.posts[postIndex];
            } else if (post.type === 'event') {
              postIndex = this.events.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.events[postIndex];
            } else if (post.type === 'poll') {
              postIndex = this.polls.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.polls[postIndex];
            } else if (post.type === 'resource') {
              postIndex = this.resources.findIndex(function (el) {
                return el.key === post.key;
              });
              p = this.resources[postIndex];
            }

            var found = false;

            if (p.reactions !== undefined) {
              var values = Object.keys(p.reactions).map(function (e) {
                return p.reactions[e];
              });
              var reaction = p.reactions.find(function (el) {
                return el.addedByUser.addedByKey === _this16.dataProvider.getCurrentUserId();
              });

              if (reaction.reactionType.length === 1 && reaction.reactionType.some(function (e) {
                return e === reactionType;
              })) {
                this.dataProvider.removePostReaction(post.key, reaction.key);
              } else {
                // reaction.reactionType = reaction.reactionType.filter(x => x !== reactionType);
                // this.dataProvider.updatePostReactions(post.key, reaction, true);
                this.firestore.collection('posts').doc(post.key).collection('reactions').doc(reaction.key).update({
                  reactionType: firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].FieldValue.arrayRemove(reactionType)
                }).then(function () {
                  var increment = firebase__WEBPACK_IMPORTED_MODULE_14__["firestore"].FieldValue.increment(-1);

                  _this16.firestore.collection('posts').doc(post.key).update({
                    totalReactionCount: increment
                  });
                });
              }
            }
          }
        }, {
          key: "showReactionsList",
          value: function showReactionsList(post) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var postIndex, p, modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(post.totalReactionCount === 0)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 2:
                      if (post.type === 'general') {
                        postIndex = this.posts.findIndex(function (el) {
                          return el.key === post.key;
                        });
                        p = this.posts[postIndex];
                      } else if (post.type === 'event') {
                        postIndex = this.events.findIndex(function (el) {
                          return el.key === post.key;
                        });
                        p = this.events[postIndex];
                      } else if (post.type === 'poll') {
                        postIndex = this.polls.findIndex(function (el) {
                          return el.key === post.key;
                        });
                        p = this.polls[postIndex];
                      } else if (post.type === 'resource') {
                        postIndex = this.resources.findIndex(function (el) {
                          return el.key === post.key;
                        });
                        p = this.resources[postIndex];
                      }

                      _context3.next = 5;
                      return this.modalCtrl.create({
                        component: _reaction_list_modal_reaction_list_modal_page__WEBPACK_IMPORTED_MODULE_16__["ReactionListModalPage"],
                        componentProps: {
                          reactions: p.reactions
                        }
                      });

                    case 5:
                      modal = _context3.sent;
                      _context3.next = 8;
                      return modal.present();

                    case 8:
                      return _context3.abrupt("return", _context3.sent);

                    case 9:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showPostOptions",
          value: function showPostOptions(post) {
            var action = this.actionSheet.create({
              header: 'Post options',
              backdropDismiss: true,
              mode: 'md',
              cssClass: 'GroupAction',
              buttons: this.createPostOptionButtons(post)
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "followPost",
          value: function followPost(post) {
            var _this17 = this;

            if (!this.notifications) {
              this.notifications = [post.key];
            } else {
              this.notifications.push(post.key);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              notifications: this.notifications
            }).then(function () {
              _this17.loadingProvider.showToast('You will be notified when there are new replies');
            });
          }
        }, {
          key: "unFollowPost",
          value: function unFollowPost(post) {
            var _this18 = this;

            var index = this.notifications.indexOf(post.key, 0);

            if (index > -1) {
              this.notifications.splice(index, 1);
            }

            this.dataProvider.getUser(this.loggedInUserId).update({
              notifications: this.notifications
            }).then(function () {
              _this18.loadingProvider.showToast('You won\'t get notifications for this post');
            });
          }
        }, {
          key: "reportPost",
          value: function reportPost(post) {
            var _this19 = this;

            this.dataProvider.addReports(this.loggedInUserId, post).then(function () {
              _this19.loadingProvider.showToast('Thank you for reporting the post.');
            });
          }
        }, {
          key: "deletePost",
          value: function deletePost(post) {
            var _this20 = this;

            this.alertCtrl.create({
              header: 'Delete Post',
              message: 'Are you sure you want to delete this post?',
              buttons: [{
                text: 'Cancel'
              }, {
                text: 'Yes',
                handler: function handler(data) {
                  _this20.firestore.doc('posts/' + post.key)["delete"]();
                }
              }]
            }).then(function (r) {
              return r.present();
            });
          }
        }, {
          key: "createPostOptionButtons",
          value: function createPostOptionButtons(post) {
            var _this21 = this;

            var buttons = [];
            var cancelButton = {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: function handler() {}
            };
            var reportButton = {
              text: 'Report Post',
              icon: 'flag-outline',
              handler: function handler() {
                _this21.reportPost(post);
              }
            };
            var notificationButton = {};

            if (post.addedByUser.addedByKey === this.loggedInUserId) {
              var deletePostButton = {
                text: 'Delete Post',
                icon: 'trash-outline',
                cssClass: 'actionicon',
                handler: function handler() {
                  _this21.deletePost(post);
                }
              };
              buttons.push(deletePostButton);
            } else {
              if (this.notifications && this.notifications.some(function (el) {
                return el === post.key;
              })) {
                notificationButton = {
                  text: 'Turn Off Notifications',
                  icon: 'notifications-off-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this21.unFollowPost(post);
                  }
                };
              } else {
                notificationButton = {
                  text: 'Turn On Notifications',
                  icon: 'notifications-outline',
                  cssClass: 'actionicon',
                  handler: function handler() {
                    _this21.followPost(post);
                  }
                };
              }

              buttons.push(notificationButton);
            }

            buttons.push(reportButton);
            buttons.push(cancelButton);
            return buttons;
          }
        }, {
          key: "loadDataPosts",
          value: function loadDataPosts(event) {
            var _this22 = this;

            if (this.posts.length > this.maxNoOfPosts) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetPost) {
                this.nextDataSetPost = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'general').orderBy('date', 'desc').startAfter(this.lastDataSetPost).limit(5);
                this.nextDataSetPost.onSnapshot(function (po) {
                  _this22.lastDataSetPost = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this22.loadEachPostData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataPolls",
          value: function loadDataPolls(event) {
            var _this23 = this;

            if (this.polls.length > this.maxNoOfPolls) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetPoll) {
                this.nextDataSetPoll = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'poll').orderBy('date', 'desc').startAfter(this.lastDataSetPoll).limit(5);
                this.nextDataSetPoll.onSnapshot(function (po) {
                  _this23.lastDataSetPoll = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this23.loadEachPollData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataEvents",
          value: function loadDataEvents(event) {
            var _this24 = this;

            if (this.events.length > this.maxNoOfEvents) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetEvent) {
                this.nextDataSetEvent = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'event').orderBy('date', 'desc').startAfter(this.lastDataSetEvent).limit(5);
                this.nextDataSetEvent.onSnapshot(function (po) {
                  _this24.lastDataSetEvent = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this24.loadEachEventData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }, {
          key: "loadDataResources",
          value: function loadDataResources(event) {
            var _this25 = this;

            if (this.events.length > this.maxNoOfResources) {
              event.target.disabled = true;
            } else {
              if (this.lastDataSetResources) {
                this.nextDataSetResources = this.firestore.collection('posts').ref.where('groupId', '==', this.groupId).where('type', '==', 'resource').orderBy('date', 'desc').startAfter(this.lastDataSetResources).limit(5);
                this.nextDataSetResources.onSnapshot(function (po) {
                  _this25.lastDataSetResources = po.docs[po.docs.length - 1];

                  if (po.docs.length > 0) {
                    _this25.loadEachResourceData(po);
                  }

                  event.target.complete();
                });
              } else {
                event.target.complete();
              }
            }
          }
        }]);

        return GroupPage;
      }();

      GroupPage.ctorParameters = function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"]
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__["Contacts"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      GroupPage.propDecorators = {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content', null]
        }],
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInfiniteScroll"], {
            "static": true
          }]
        }]
      };
      GroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group',
        template: _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _services_image_service__WEBPACK_IMPORTED_MODULE_11__["ImageService"], _services_loading_service__WEBPACK_IMPORTED_MODULE_10__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_6__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_8__["Contacts"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]])], GroupPage);
      /***/
    },

    /***/
    "rrFO":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function rrFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title (click)=\"groupInfo()\">{{title}}</ion-title>\n    <ion-buttons slot=\"end\"> \n      <ion-button *ngIf=\"loggedInUserIsMember == true\" (click)=\"showGroupOptions()\" ><ion-icon name=\"ellipsis-vertical\"></ion-icon></ion-button>\n   <ion-button *ngIf=\"loggedInUserIsMember == false\" (click)=\"joinGroup()\" >Join Group</ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='posts'\" (click)=\"newPost()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n    <ion-button *ngIf=\"loggedInUserIsMember == true && tab=='polls'\" (click)=\"newPoll()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='resources'\" (click)=\"newResource()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t\t<ion-button *ngIf=\"loggedInUserIsMember == true && tab=='events'\" (click)=\"newEvent()\" ><ion-icon name=\"add-circle-outline\"></ion-icon></ion-button>\n\t</ion-buttons>\n\n  </ion-toolbar>\n\n  <ion-segment value=\"posts\" color=\"secondary\" [(ngModel)]=\"tab\" (ionChange)=\"segmentChanged($event)\">\n\t\t<!-- <ion-segment-button value=\"group\">\n  \t\t\t<ion-icon name=\"chatbubbles\"></ion-icon>\n    </ion-segment-button> -->\n\t\t<!-- <ion-segment-button value=\"groupInfo\">\n      <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n\t\t</ion-segment-button> -->\n    <ion-segment-button value=\"posts\">\n      <ion-icon size=\"medium\" name=\"chatbubbles\"></ion-icon>\n      <!-- <span class=\"tab-title\">Posts</span> -->\n    </ion-segment-button>\n\t\t<ion-segment-button value=\"polls\">\n      <ion-icon size=\"medium\" name=\"podium\"></ion-icon>\n      <!-- <span class=\"tab-title\">Polls</span> -->\n\t\t</ion-segment-button>\n\t\t<ion-segment-button value=\"resources\">\n      <ion-icon size=\"medium\" name=\"library\"></ion-icon>\n      <!-- <span class=\"tab-title\">Resources</span> -->\n    </ion-segment-button>\n    <ion-segment-button value=\"events\">\n      <ion-icon size=\"medium\" name=\"calendar\"></ion-icon>\n      <!-- <span class=\"tab-title\">Events</span> -->\n    </ion-segment-button>\n</ion-segment>\n</ion-header>\n\n<ion-content fullscreen>\n  <div [ngSwitch]=\"tab\" >\n\n  <div *ngSwitchCase=\"'posts'\">\n    <!-- No Posts to show -->\n     <div class=\"empty-list\" *ngIf=\"posts && posts.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Posts added to this group.</p>\n     </div>\n     <!-- Show Posts -->\n     <div *ngIf=\"posts && posts.length > 0\" >\n     <div class=\"listing-item\" *ngFor=\"let item of posts\" >\n      <ion-card>\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=10>\n           <ion-card-subtitle class=\"addedBy\">\n            <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n             <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n              <br/>\n             <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n            <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n          </ion-card-subtitle>\n        </ion-col>\n        <ion-col size=2>\n          <ion-buttons>\n            <ion-button (click)=\"showPostOptions(item)\">\n              <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n        <ion-card-content class=\"message\" *ngIf=\"item.type === 'general'\">\n          <div (click)=\"viewPost(item)\">\n            <div>\n              <ion-slides class=\"slider\" pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav>\n              <ion-slide *ngFor=\"let s of item.postMedia\">\n                <div class=\"bgSizeContain\" \n                [ngStyle]=\"{'background-image':'url('+s+')'}\">\n              </div>\n              </ion-slide>\n            </ion-slides>\n            </div>\n          <ion-label><b>{{item.title}}.</b> {{item.data.message}} <br/></ion-label>\n        </div>\n          <div class=\"tags-wrapper\">\n          <ion-row>\n            <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n              <span class=\"item-rating\">#{{tag.val}}</span>\n            </div>\n          </ion-row>\n          </div>\n          <div class=\"reactions\">\n          <ion-row >\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n               <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n               <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n              <ion-buttons>\n                <ion-button (click)=\"submitReactionPost(item, 'Hug')\">\n               <div *ngIf=\"item.showHug\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/hug-active.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n               <div *ngIf=\"!item.showHug\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/hug.svg\" ></ion-icon> <span class=\"text\">Hug</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=2></ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showReactionsList(item)\">\n              <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/hug-active.svg\" class=\"icon\"></ion-icon> <span class=\"text\">{{item.totalReactionCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button>\n              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n            </ion-button>\n          </ion-buttons> \n            </ion-col>\n          </ion-row>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n     </div>\n    </div>\n     <div *ngSwitchCase=\"'polls'\">\n    <!-- No polls to show -->\n     <div class=\"empty-list\" *ngIf=\"polls && polls.length == 0\">\n     <h1><ion-icon name=\"md-chatbubbles\"></ion-icon></h1>\n     <p>No new polls yet.</p>\n     </div>\n     <!-- Show polls -->\n     <div *ngIf=\"polls && polls.length > 0\">\n      <div class=\"listing-item\" *ngFor=\"let item of polls\">\n     <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=10>\n         <ion-card-subtitle class=\"addedBy\">\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n            <br/>\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n        </ion-card-subtitle>\n      </ion-col>\n      <ion-col size=2>\n        <ion-buttons>\n          <ion-button (click)=\"showPostOptions(item)\">\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      </ion-row>\n      </ion-card-header>\n\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'poll'\" >\n        <div (click)=\"viewPoll(item)\">\n        <b>{{item.title}}.</b><br/>\n        <ion-row  *ngFor=\"let pollOption of item.data.pollOptions\">\n          <ion-col >\n             <div><ion-icon class=\"poll-icon\" name=\"checkbox-outline\"></ion-icon> <span>{{pollOption.name}}</span></div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"tags-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span class=\"item-rating\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n\n              <ion-row class=\"info-row\" >\n         <ion-col size=\"8\">\n                   <span class=\"text\" *ngIf=\"!item.pollClosed\">Poll ends {{item.data.dateEnding.toDate() | DateFormat}}</span> \n                   <span class=\"text\" *ngIf=\"item.pollClosed\">Poll closed</span> \n                </ion-col>\n          <ion-col size=\"1\">\n          </ion-col>\n                <ion-col size=\"3\">\n                  <div><span class=\"text\">{{item.totalPollCount}} voted</span></div>\n                </ion-col>\n              </ion-row>\n      </ion-card-content>\n      </ion-card>\n   </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'resources'\">\n    <!-- No Resources to show -->\n     <div class=\"empty-list\" *ngIf=\"resources && resources.length == 0\">\n     <h1><ion-icon name=\"chatbubbles-outline\"></ion-icon></h1>\n     <p>No new Resources added to this group.</p>\n     </div>\n     <!-- Show Resources -->\n     <div *ngIf=\"resources && resources.length > 0\" >\n      <div class=\"listing-item\" *ngFor=\"let item of resources\">\n       <div>\n     <ion-card>\n      <ion-card-header>\n        <ion-row>\n          <ion-col size=10>\n         <ion-card-subtitle class=\"addedBy\">\n          <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n           <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n            <br/>\n           <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n          <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n        </ion-card-subtitle>\n      </ion-col>\n      <ion-col size=2>\n        <ion-buttons>\n          <ion-button (click)=\"showPostOptions(item)\">\n            <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-col>\n      </ion-row>\n      </ion-card-header>\n      <ion-card-content class=\"message\" *ngIf=\"item.type === 'resource'\">\n        <div (click)=\"viewResource(item)\">\n        <b>{{item.title}}.</b><br/>\n        <div *ngIf=\"item?.data.type == 'contact'\">\n          {{item.data.name}}<br/>\n          <div [innerHtml]=\"item.data.address\"></div><br/>\n          {{item.data.email}}<br/>\n          {{item.data.phones}}<br/>\n        </div>\n        <div *ngIf=\"item?.data.type == 'upload'\">\n          <div *ngIf=\"item.data.uploadtype == 'location'\" [innerHtml]=\"item.data.url\"></div>\n          <div *ngIf=\"item.data.uploadtype == 'contact'\">\n          {{item.data.name}}<br/>\n          {{item.data.address}}<br/>\n          {{item.data.phones}}<br/>\n          {{item.data.email}}<br/>\n          </div>\n          <div *ngIf=\"item.data.uploadtype == 'image'\">\n          <img src=\"{{item.data.resolvedurl}}\" />\n          </div>\n          <div *ngIf=\"item.data.uploadtype == 'video'\">\n            <video controls width=\"100%\" src=\"{{item.data.resolvedurl}}\" ></video>\n          </div>\n        </div>\n        <div *ngIf=\"item?.data.type == 'weblink'\">\n        {{item.data.metatitle}}<br/>\n        <img [src]=\"item.data.metaicon\"/> \n        {{item.data.metadescription}}<br/><br/>\n        <a href=\"{{item.data.metasite}}\">{{item.data.metasite}}</a>\n        </div>\n      </div>\n      <div class=\"tags-wrapper\">\n        <ion-row>\n          <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n            <span class=\"item-rating\">#{{tag.val}}</span>\n          </div>\n        </ion-row>\n        </div>\n        <div class=\"reactions\">\n           <ion-row>\n            <ion-col size=3>\n              <ion-buttons>\n              <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n             <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n             <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n              </ion-button>\n              </ion-buttons> \n            </ion-col>\n            <ion-col size=3>\n                 <ion-buttons>\n                 <ion-button (click)=\"submitReactionPost(item, 'Bookmark')\">\n                <div *ngIf=\"item.showBookmark\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/bookmark-active.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                <div *ngIf=\"!item.showBookmark\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/bookmark.svg\" ></ion-icon> <span class=\"text\">Bookmark</span></div> \n                 </ion-button>\n                 </ion-buttons> \n            </ion-col>\n          <ion-col size=2></ion-col>\n          <ion-col size=2>\n                 <ion-buttons>\n                 <ion-button (click)=\"showReactionsList(item)\">\n                 <div><ion-icon size=\"small\" src=\"./assets/icon/bookmark-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n               </ion-button>\n               </ion-buttons> \n               </ion-col>\n               <ion-col size=2>\n                 <ion-buttons>\n                 <ion-button>\n                  <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                </ion-button>\n               </ion-buttons> \n               </ion-col>\n          </ion-row>\n        \n        </div>\n      </ion-card-content>\n        </ion-card>\n           </div>\n     </div>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'events'\">\n      <!-- No Events to show -->\n       <div class=\"empty-list\" *ngIf=\"events && events.length == 0\">\n       <h1><ion-icon name=\"chatbubbles\"></ion-icon></h1>\n       <p>No new upcoming Events added to this group.</p>\n       </div>\n       <!-- Show Events -->\n       <div *ngIf=\"events && events.length > 0\" >\n        <div class=\"listing-item\" *ngFor=\"let item of events\">\n          <ion-card>\n            <ion-card-header>\n              <ion-row>\n                <ion-col size=10>\n               <ion-card-subtitle class=\"addedBy\">\n                <img class=\"addedByImg\" src=\"{{item.avatar}}\" onError=\"this.src='./assets/images/default-dp.png'\" /> \n                 <p><a class=\"addedByTitle\" (click)=\"viewUser(item.addedByUser.addedByKey)\" ><b>{{item.addedByUser.addedByUsername}}</b></a><!-- <img *ngIf=\"item.showNewIcon\" class=\"newIcon\" src=\"./assets/icon/new.svg\" />  -->\n                  <br/>\n                 <span class=\"addedByDate\">posted {{item.date.toDate() | DateFormat}}</span><br/>\n                <a (click)=\"viewGroup(item.groupId)\" class=\"addedByTitle\">in <b>{{item.groupName}}</b></a></p>\n              </ion-card-subtitle>\n            </ion-col>\n            <ion-col size=2>\n              <ion-buttons>\n                <ion-button (click)=\"showPostOptions(item)\">\n                  <ion-icon slot=\"end\" name=\"chevron-down-outline\"></ion-icon>\n                </ion-button>\n              </ion-buttons>\n            </ion-col>\n            </ion-row>\n            </ion-card-header>\n            <ion-card-content class=\"message\" *ngIf=\"item.type === 'event'\">\n              <div (click)=\"viewEvent(item)\">\n              <b>{{item.title}}.</b> <br/>{{item.data.eventDate}} at {{item.data.eventTime}}<br/><br/>\n                {{item.data.address}}<br/><br/>\n                {{item.data.link}}\n              </div>\n              <div class=\"tags-wrapper\">\n                <ion-row>\n                  <div class=\"tags\" *ngFor=\"let tag of item.postTags\">\n                    <span class=\"item-rating\">#{{tag.val}}</span>\n                  </div>\n                </ion-row>\n                </div>\n              <div class=\"reactions\">\n                <ion-row>\n                  <ion-col size=3>\n                    <ion-buttons>\n                      <ion-button (click)=\"submitReactionPost(item, 'Thanks')\">\n                      <div *ngIf=\"item.showSmiley\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/smile-active.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                      <div *ngIf=\"!item.showSmiley\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/smile.svg\" ></ion-icon> <span class=\"text\">Thanks</span></div> \n                    </ion-button>\n                    </ion-buttons> \n                  </ion-col>\n                  <ion-col size=3>\n                    <ion-buttons>\n                      <ion-button (click)=\"submitReactionPost(item, 'Checkin')\">\n                      <div *ngIf=\"item.showCheckin\"><ion-icon size=\"small\" class=\"icon\" src=\"./assets/icon/checkin-active.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                      <div *ngIf=\"!item.showCheckin\"><ion-icon size=\"small\" class=\"icon\"  src=\"./assets/icon/checkin.svg\" ></ion-icon> <span class=\"text\">Checkin</span></div> \n                    </ion-button>\n                    </ion-buttons> \n                  </ion-col>\n                  <ion-col size=2></ion-col>\n                  <ion-col size=2>\n                          <ion-buttons>\n                            <ion-button (click)=\"showReactionsList(item)\">\n                          <div><ion-icon size=\"small\" src=\"./assets/icon/smile-active.svg\" class=\"icon\"></ion-icon><ion-icon size=\"small\" src=\"./assets/icon/checkin-active.svg\" class=\"icon\"></ion-icon><span class=\"text\">{{item.totalReactionCount}}</span></div>\n                        </ion-button>\n                      </ion-buttons> \n                  </ion-col>\n                  <ion-col size=2>\n                          <ion-buttons>\n                            <ion-button>\n                              <div><ion-icon size=\"small\" class=\"icon\" name=\"chatbox-outline\"></ion-icon> <span class=\"text\">{{item.totalReviewCount}}</span></div>\n                            </ion-button>\n                      </ion-buttons> \n                  </ion-col>\n                 </ion-row>\n             </div>\n            </ion-card-content>\n        </ion-card>\n        </div>\n       </div>\n      </div>\n      <!-- Group Info -->\n <div  class=\"group-info\" *ngSwitchCase=\"'groupInfo'\">\n  <div>\n\n    <div class=\"group-img\">\n      <img src=\"{{group.img}}\">\n    </div>\n    <div class=\"group-name\">    \n      {{group.name}}\n    </div>\n    <div class=\"group-desc\">\n      {{group.description}}\n    </div>\n</div>\n<div class=\"group-name\"> \nGroup Tags\n</div>\n<div class=\"group-tags\">\n  <ion-row>\n    <div class=\"tags\" *ngFor=\"let tag of group.groupTags\">\n      <span class=\"item-rating\" [attr.ratingBase]=\"1\">#{{tag}}</span>\n    </div>\n  </ion-row>\n</div>\n<div class=\"group-name\"> \n  Group Members ({{groupMembers.length}})\n  </div>\n   <ion-list *ngIf=\"groupMembers\">\n    <!-- <ion-item (click)=\"addMembers()\">\n     <ion-icon name=\"add\" item-left></ion-icon>\n     <h2>Add Members</h2>\n     </ion-item>-->\n     <ion-item *ngFor=\"let member of groupMembers\" (click)=\"viewUser(member.$key)\">\n     <ion-avatar>\n       <img src=\"{{member.img}}\" onError=\"this.src='./assets/images/default-dp.png'\"/>\n     </ion-avatar>\n     <ion-label class=\"group-member-name\">{{member.name}}</ion-label>\n     <p>{{member.description}}</p>\n     </ion-item>\n   </ion-list>\n   <ion-list-header *ngIf=\"loggedInUserIsMember == true\" >\n     More\n   </ion-list-header>\n   <ion-list *ngIf=\"loggedInUserIsMember == true\"  style=\"text-align: center;\">  \n     <ion-item no-lines tappable (click)=\"leaveGroup()\" *ngIf=\"groupMembers && groupMembers.length > 1\">\n     Leave Group\n     </ion-item>\n     <!-- When there's only one member left, allow deleting of group. -->\n     <ion-item color=\"danger\" no-lines tappable (click)=\"deleteGroup()\" *ngIf=\"groupMembers && groupMembers.length <= 1\">\n     Delete Group\n     </ion-item>\n   </ion-list>\n   <p padding style=\"color:#aaa\">Started {{group.dateCreated | DateFormat}}</p>\n   </div>\n  </div>\n\n  <ion-infinite-scroll *ngIf=\"tab=='posts'\" threshold=\"100px\" (ionInfinite)=\"loadDataPosts($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='events'\" threshold=\"100px\" (ionInfinite)=\"loadDataEvents($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='polls'\" threshold=\"100px\" (ionInfinite)=\"loadDataPolls($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <ion-infinite-scroll *ngIf=\"tab=='resources'\" threshold=\"100px\" (ionInfinite)=\"loadDataResources($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=group-group-module-es5.js.map