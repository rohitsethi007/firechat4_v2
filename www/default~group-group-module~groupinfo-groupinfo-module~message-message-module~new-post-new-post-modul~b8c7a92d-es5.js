function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~group-group-module~groupinfo-groupinfo-module~message-message-module~new-post-new-post-modul~b8c7a92d"], {
  /***/
  "./src/app/services/image.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/image.service.ts ***!
    \*******************************************/

  /*! exports provided: ImageService */

  /***/
  function srcAppServicesImageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageService", function () {
      return ImageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/media-capture/ngx */
    "./node_modules/@ionic-native/media-capture/ngx/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/ngx/index.js");
    /* harmony import */


    var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loading.service */
    "./src/app/services/loading.service.ts");

    var ImageService =
    /*#__PURE__*/
    function () {
      function ImageService(firestore, loadingProvider, camera, mediaCapture, file) {
        _classCallCheck(this, ImageService);

        this.firestore = firestore;
        this.loadingProvider = loadingProvider;
        this.camera = camera;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.profilePhotoOptions = {
          quality: 50,
          targetWidth: 384,
          targetHeight: 384,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true
        };
        this.photoMessageOptions = {
          quality: 50,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true,
          allowEdit: true
        };
        this.groupPhotoOptions = {
          quality: 50,
          targetWidth: 384,
          targetHeight: 384,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          correctOrientation: true
        };
        console.log("Initializing Image Provider");
      } // Function to convert dataURI to Blob needed by Firebase


      _createClass(ImageService, [{
        key: "imgURItoBlob",
        value: function imgURItoBlob(dataURI) {
          var binary = atob(dataURI.split(',')[1]);
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          var array = [];

          for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
          }

          return new Blob([new Uint8Array(array)], {
            type: mimeString
          });
        } // Generate a random filename of length for the image to be uploaded

      }, {
        key: "generateFilename",
        value: function generateFilename() {
          var length = 8;
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text + ".jpg";
        } // Set ProfilePhoto given the user and the cameraSourceType.
        // This function processes the imageURI returned and uploads the file on Firebase,
        // Finally the user data on the database is updated.

      }, {
        key: "setProfilePhoto",
        value: function setProfilePhoto(user, sourceType) {
          var _this = this;

          console.log(user);
          this.profilePhotoOptions.sourceType = sourceType;
          this.loadingProvider.show(); // Get picture from camera or gallery.

          this.camera.getPicture(this.profilePhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this.imgURItoBlob("data:image/jpeg;base64," + imageData);

            var metadata = {
              'contentType': imgBlob.type
            };

            var name = _this.generateFilename();

            var dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + name); // Generate filename and upload to Firebase Storage.

            dpStorageRef.put(imgBlob, metadata).then(function (snapshot) {
              // Delete previous profile photo on Storage if it exists.
              // this.deleteImageFile(user.img);
              // URL of the uploaded image!
              console.log(snapshot);
              dpStorageRef.getDownloadURL().then(function (res) {
                console.log(res);
                var url = res;
                var profile = {
                  displayName: user.name,
                  photoURL: url
                }; // Update Firebase User.

                firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.updateProfile(profile).then(function (success) {
                  // Update User Data on Database.
                  _this.firestore.doc('/accounts/' + user.userId).update({
                    img: url
                  }).then(function (success) {
                    _this.loadingProvider.hide();

                    _this.loadingProvider.showToast("Profile Updated");
                  }).catch(function (error) {
                    console.log(error);

                    _this.loadingProvider.hide();

                    _this.loadingProvider.showToast("Something went wrong");
                  });
                }).catch(function (error) {
                  console.log(error);

                  _this.loadingProvider.hide();

                  _this.loadingProvider.showToast("Something went wrong");
                });
              });
            }).catch(function (error) {
              console.log(error);

              _this.loadingProvider.hide();

              _this.loadingProvider.showToast("Something went wrong");
            });
          }).catch(function (error) {
            _this.loadingProvider.hide();
          });
        } // Upload and set the group object's image.

      }, {
        key: "setGroupPhoto",
        value: function setGroupPhoto(group, sourceType) {
          var _this2 = this;

          this.groupPhotoOptions.sourceType = sourceType;
          this.loadingProvider.show(); // Get picture from camera or gallery.

          this.camera.getPicture(this.groupPhotoOptions).then(function (imageData) {
            // Process the returned imageURI.
            var imgBlob = _this2.imgURItoBlob("data:image/jpeg;base64," + imageData);

            var metadata = {
              'contentType': imgBlob.type
            };

            var name = _this2.generateFilename();

            var groupStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + name);
            groupStorageRef.put(imgBlob, metadata).then(function (snapshot) {
              // this.deleteImageFile(group.img);
              // URL of the uploaded image!
              groupStorageRef.getDownloadURL().then(function (url) {
                group.img = url;

                _this2.loadingProvider.hide();
              });
            }).catch(function (error) {
              _this2.loadingProvider.hide();

              _this2.loadingProvider.showToast("Something went wrong");
            });
          }).catch(function (error) {
            _this2.loadingProvider.hide();
          });
        } // Set group photo and return the group object as promise.

      }, {
        key: "setGroupPhotoPromise",
        value: function setGroupPhotoPromise(group, sourceType) {
          var _this3 = this;

          return new Promise(function (resolve) {
            _this3.groupPhotoOptions.sourceType = sourceType;

            _this3.loadingProvider.show(); // Get picture from camera or gallery.


            _this3.camera.getPicture(_this3.groupPhotoOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this3.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              };
              var gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + _this3.generateFilename());
              gPPStorageRef.put(imgBlob, metadata).then(function (snapshot) {
                _this3.deleteImageFile(group.img); // URL of the uploaded image!


                gPPStorageRef.getDownloadURL().then(function (url) {
                  group.img = url;

                  _this3.loadingProvider.hide();

                  resolve(group);
                });
              }).catch(function (error) {
                _this3.loadingProvider.hide();

                _this3.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this3.loadingProvider.hide();
            });
          });
        } //Delete the image given the url.

      }, {
        key: "deleteImageFile",
        value: function deleteImageFile(path) {
          var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } //Delete the user.img given the user.

      }, {
        key: "deleteUserImageFile",
        value: function deleteUserImageFile(user) {
          var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } // Delete group image file on group storage reference.

      }, {
        key: "deleteGroupImageFile",
        value: function deleteGroupImageFile(groupId, path) {
          var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
          firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(function () {}).catch(function (error) {
            console.log(error);
          });
        } // Upload photo message and return the url as promise.

      }, {
        key: "uploadPhotoMessage",
        value: function uploadPhotoMessage(conversationId, sourceType) {
          var _this4 = this;

          return new Promise(function (resolve) {
            _this4.photoMessageOptions.sourceType = sourceType;

            _this4.loadingProvider.show(); // Get picture from camera or gallery.


            _this4.camera.getPicture(_this4.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this4.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + conversationId + '/' + _this4.generateFilename());
              upRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                upRef.getDownloadURL().then(function (url) {
                  _this4.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this4.loadingProvider.hide();

                _this4.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this4.loadingProvider.hide();
            });
          });
        } // Upload group photo message and return a promise as url.

      }, {
        key: "uploadGroupPhotoMessage",
        value: function uploadGroupPhotoMessage(groupId, sourceType) {
          var _this5 = this;

          return new Promise(function (resolve) {
            _this5.photoMessageOptions.sourceType = sourceType;

            _this5.loadingProvider.show(); // Get picture from camera or gallery.


            _this5.camera.getPicture(_this5.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this5.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + _this5.generateFilename());
              ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                ugpRef.getDownloadURL().then(function (url) {
                  _this5.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this5.loadingProvider.hide();

                _this5.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this5.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadGroupVideoMessage",
        value: function uploadGroupVideoMessage(groupId) {
          var _this6 = this;

          return new Promise(function (resolve) {
            _this6.loadingProvider.show();

            _this6.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this6.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob);
                var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                upload.then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this6.loadingProvider.hide();

                  resolve(res.downloadURL);
                }, function (err) {
                  _this6.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this6.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        }
      }, {
        key: "uploadVideoMessage",
        value: function uploadVideoMessage(conversationId) {
          var _this7 = this;

          return new Promise(function (resolve) {
            _this7.loadingProvider.show();

            _this7.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this7.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob); // let timestamp = (Math.floor(Date.now() / 1000)).toString();

                var uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                uploadRef.put(blob).then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this7.loadingProvider.hide();

                  uploadRef.getDownloadURL().then(function (url) {
                    resolve(url);
                  });
                }, function (err) {
                  _this7.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this7.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        } // Upload group photo message and return a promise as url.

      }, {
        key: "uploadGroupPhotoResource",
        value: function uploadGroupPhotoResource(groupId, sourceType) {
          var _this8 = this;

          return new Promise(function (resolve) {
            _this8.photoMessageOptions.sourceType = sourceType;

            _this8.loadingProvider.show(); // Get picture from camera or gallery.


            _this8.camera.getPicture(_this8.photoMessageOptions).then(function (imageData) {
              // Process the returned imageURI.
              var imgBlob = _this8.imgURItoBlob("data:image/jpeg;base64," + imageData);

              var metadata = {
                'contentType': imgBlob.type
              }; // Generate filename and upload to Firebase Storage.

              var ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + _this8.generateFilename());
              ugpRef.put(imgBlob, metadata).then(function (snapshot) {
                // URL of the uploaded image!
                ugpRef.getDownloadURL().then(function (url) {
                  _this8.loadingProvider.hide();

                  resolve(url);
                });
              }).catch(function (error) {
                _this8.loadingProvider.hide();

                _this8.loadingProvider.showToast("Something went wrong");
              });
            }).catch(function (error) {
              _this8.loadingProvider.hide();
            });
          });
        }
      }, {
        key: "uploadGroupVideoResource",
        value: function uploadGroupVideoResource(groupId) {
          var _this9 = this;

          return new Promise(function (resolve) {
            _this9.loadingProvider.show();

            _this9.mediaCapture.captureVideo().then(function (data) {
              var videoUrl = data[0].fullPath;
              console.log("video path: " + videoUrl);
              var x = videoUrl.split("/");
              var filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
              var name = x[x.length - 1];
              console.log(filepath + " - " + name);

              _this9.file.readAsArrayBuffer(filepath, name).then(function (success) {
                console.log(success);
                var blob = new Blob([success], {
                  type: "video/mp4"
                });
                console.log(blob);
                var upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                upload.then(function (res) {
                  var process = res.bytesTransferred / res.totalBytes * 100;
                  console.log(process);

                  _this9.loadingProvider.hide();

                  resolve(res.downloadURL);
                }, function (err) {
                  _this9.loadingProvider.hide();

                  console.log("Failed");
                });
              });
            }, function (err) {
              _this9.loadingProvider.hide();

              console.log("Media Err = " + err);
            });
          });
        }
      }, {
        key: "getGroupVideoResource",
        value: function getGroupVideoResource(resourceurl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(resourceurl).getDownloadURL().then(function (url) {
                      return url;
                    }).catch(function (error) {// Handle any errors
                    });

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return ImageService;
    }();

    ImageService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"]
      }, {
        type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]
      }];
    };

    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])], ImageService);
    /***/
  }
}]);
//# sourceMappingURL=default~group-group-module~groupinfo-groupinfo-module~message-message-module~new-post-new-post-modul~b8c7a92d-es5.js.map