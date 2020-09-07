(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~event-event-module~group-group-module~groupinfo-groupinfo-module~message-message-module~new-~0c7fe536"],{

/***/ "./src/app/services/image.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/image.service.ts ***!
  \*******************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading.service */ "./src/app/services/loading.service.ts");








let ImageService = class ImageService {
    constructor(firestore, loadingProvider, camera, mediaCapture, file) {
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
    }
    // Function to convert dataURI to Blob needed by Firebase
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    // Generate a random filename of length for the image to be uploaded
    generateFilename() {
        var length = 8;
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + ".jpg";
    }
    // Set ProfilePhoto given the user and the cameraSourceType.
    // This function processes the imageURI returned and uploads the file on Firebase,
    // Finally the user data on the database is updated.
    setProfilePhoto(user, sourceType) {
        console.log(user);
        this.profilePhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.profilePhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            let name = this.generateFilename();
            let dpStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + name);
            // Generate filename and upload to Firebase Storage.
            dpStorageRef.put(imgBlob, metadata).then((snapshot) => {
                // Delete previous profile photo on Storage if it exists.
                // this.deleteImageFile(user.img);
                // URL of the uploaded image!
                console.log(snapshot);
                dpStorageRef.getDownloadURL().then(res => {
                    console.log(res);
                    let url = res;
                    let profile = {
                        displayName: user.name,
                        photoURL: url
                    };
                    // Update Firebase User.
                    firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.updateProfile(profile)
                        .then((success) => {
                        // Update User Data on Database.
                        this.firestore.doc('/accounts/' + user.userId).update({
                            img: url
                        }).then((success) => {
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast("Profile Updated");
                        }).catch((error) => {
                            console.log(error);
                            this.loadingProvider.hide();
                            this.loadingProvider.showToast("Something went wrong");
                        });
                    })
                        .catch((error) => {
                        console.log(error);
                        this.loadingProvider.hide();
                        this.loadingProvider.showToast("Something went wrong");
                    });
                });
            }).catch((error) => {
                console.log(error);
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Something went wrong");
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Upload and set the group object's image.
    setGroupPhoto(group, sourceType) {
        this.groupPhotoOptions.sourceType = sourceType;
        this.loadingProvider.show();
        // Get picture from camera or gallery.
        this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
            // Process the returned imageURI.
            let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
            let metadata = {
                'contentType': imgBlob.type
            };
            let name = this.generateFilename();
            let groupStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + name);
            groupStorageRef.put(imgBlob, metadata).then((snapshot) => {
                // this.deleteImageFile(group.img);
                // URL of the uploaded image!
                groupStorageRef.getDownloadURL().then(url => {
                    group.img = url;
                    this.loadingProvider.hide();
                });
            }).catch((error) => {
                this.loadingProvider.hide();
                this.loadingProvider.showToast("Something went wrong");
            });
        }).catch((error) => {
            this.loadingProvider.hide();
        });
    }
    // Set group photo and return the group object as promise.
    setGroupPhotoPromise(group, sourceType) {
        return new Promise(resolve => {
            this.groupPhotoOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.groupPhotoOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                let gPPStorageRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + this.generateFilename());
                gPPStorageRef.put(imgBlob, metadata).then((snapshot) => {
                    this.deleteImageFile(group.img);
                    // URL of the uploaded image!
                    gPPStorageRef.getDownloadURL().then(url => {
                        group.img = url;
                        this.loadingProvider.hide();
                        resolve(group);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    //Delete the image given the url.
    deleteImageFile(path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + firebase__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    //Delete the user.img given the user.
    deleteUserImageFile(user) {
        var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    // Delete group image file on group storage reference.
    deleteGroupImageFile(groupId, path) {
        var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
        firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error); });
    }
    // Upload photo message and return the url as promise.
    uploadPhotoMessage(conversationId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let upRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + conversationId + '/' + this.generateFilename());
                upRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    upRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    // Upload group photo message and return a promise as url.
    uploadGroupPhotoMessage(groupId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + this.generateFilename());
                ugpRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    ugpRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadGroupVideoMessage(groupId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    let upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                    upload.then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        resolve(res.downloadURL);
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    uploadVideoMessage(conversationId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    // let timestamp = (Math.floor(Date.now() / 1000)).toString();
                    let uploadRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + name);
                    uploadRef.put(blob).then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        uploadRef.getDownloadURL().then(url => {
                            resolve(url);
                        });
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    // Upload group photo message and return a promise as url.
    uploadGroupPhotoResource(groupId, sourceType) {
        return new Promise(resolve => {
            this.photoMessageOptions.sourceType = sourceType;
            this.loadingProvider.show();
            // Get picture from camera or gallery.
            this.camera.getPicture(this.photoMessageOptions).then((imageData) => {
                // Process the returned imageURI.
                let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
                let metadata = {
                    'contentType': imgBlob.type
                };
                // Generate filename and upload to Firebase Storage.
                let ugpRef = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('images/' + groupId + '/' + this.generateFilename());
                ugpRef.put(imgBlob, metadata).then((snapshot) => {
                    // URL of the uploaded image!
                    ugpRef.getDownloadURL().then(url => {
                        this.loadingProvider.hide();
                        resolve(url);
                    });
                }).catch((error) => {
                    this.loadingProvider.hide();
                    this.loadingProvider.showToast("Something went wrong");
                });
            }).catch((error) => {
                this.loadingProvider.hide();
            });
        });
    }
    uploadGroupVideoResource(groupId) {
        return new Promise(resolve => {
            this.loadingProvider.show();
            this.mediaCapture.captureVideo().then(data => {
                let videoUrl = data[0].fullPath;
                console.log("video path: " + videoUrl);
                let x = videoUrl.split("/");
                let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
                let name = x[x.length - 1];
                console.log(filepath + " - " + name);
                this.file.readAsArrayBuffer(filepath, name).then(success => {
                    console.log(success);
                    let blob = new Blob([success], { type: "video/mp4" });
                    console.log(blob);
                    let upload = firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child('videos/' + groupId + "/" + name).put(blob);
                    upload.then(res => {
                        let process = res.bytesTransferred / res.totalBytes * 100;
                        console.log(process);
                        this.loadingProvider.hide();
                        resolve(res.downloadURL);
                    }, err => {
                        this.loadingProvider.hide();
                        console.log("Failed");
                    });
                });
            }, err => {
                this.loadingProvider.hide();
                console.log("Media Err = " + err);
            });
        });
    }
    getGroupVideoResource(resourceurl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield firebase__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref().child(resourceurl).getDownloadURL().then(function (url) {
                return url;
            }).catch(function (error) {
                // Handle any errors
            });
        });
    }
};
ImageService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"] }
];
ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_5__["MediaCapture"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__["File"]])
], ImageService);



/***/ })

}]);
//# sourceMappingURL=default~event-event-module~group-group-module~groupinfo-groupinfo-module~message-message-module~new-~0c7fe536-es2015.js.map