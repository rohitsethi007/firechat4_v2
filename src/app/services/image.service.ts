import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { LoadingService } from './loading.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  options: any;
  imageResponse: any;

  private profilePhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };

  private photoMessageOptions: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true,
    allowEdit: true
  };

  private groupPhotoOptions: CameraOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    correctOrientation: true
  };


  constructor(
    public firestore: AngularFirestore,
    public loadingProvider: LoadingService,
    public camera: Camera,
    public mediaCapture: MediaCapture,
    private imagePicker: ImagePicker,
    public file: File) {
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
      let dpStorageRef = firebase.storage().ref().child('images/' + user.userId + '/' + name);
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
          firebase.auth().currentUser.updateProfile(profile)
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
      let groupStorageRef = firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + name);
      groupStorageRef.put(imgBlob, metadata).then((snapshot) => {
        // this.deleteImageFile(group.img);
        // URL of the uploaded image!
        groupStorageRef.getDownloadURL().then(url => {
          group.img = url;
          this.loadingProvider.hide();
        })

      }).catch((error) => {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
      });
    }).catch((error) => {
      this.loadingProvider.hide();
    });
  }

  // Set group photo and return the group object as promise.
  setGroupPhotoPromise(group, sourceType): Promise<any> {
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
        let gPPStorageRef = firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + this.generateFilename());
        gPPStorageRef.put(imgBlob, metadata).then((snapshot) => {
          this.deleteImageFile(group.img);
          // URL of the uploaded image!
          gPPStorageRef.getDownloadURL().then(url => {
            group.img = url;
            this.loadingProvider.hide();
            resolve(group);
          })

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
    // tslint:disable-next-line: max-line-length
    firebase.storage().ref().child('images/' + firebase.auth().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
    // tslint:disable-next-line: max-line-length
    firebase.storage().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Delete group image file on group storage reference.
  deleteGroupImageFile(groupId, path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Upload photo message and return the url as promise.
  uploadPhotoMessage(conversationId, sourceType): Promise<any> {
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
        let upRef = firebase.storage().ref().child('images/' + conversationId + '/' + this.generateFilename());
        upRef.put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          upRef.getDownloadURL().then(url => {
            this.loadingProvider.hide();
            resolve(url);
          })

        }).catch((error) => {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

    // Upload photo message and return the url as promise.
    uploadPostPhoto(sourceType): Promise<any> {
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
          let upRef = firebase.storage().ref().child('images/posts/' + this.generateFilename());
          upRef.put(imgBlob, metadata).then((snapshot) => {
            // URL of the uploaded image!
            upRef.getDownloadURL().then(url => {
              this.loadingProvider.hide();
              resolve(url);
            })
  
          }).catch((error) => {
            this.loadingProvider.hide();
            this.loadingProvider.showToast("Something went wrong");
          });
        }).catch((error) => {
          this.loadingProvider.hide();
        });
      });
    }

  uploadPostPhotos(postMedia): Promise<any> {
      let promises = [];
      return new Promise(resolve => {
        if (postMedia && postMedia.length > 0) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < postMedia.length; i++) {
            promises.push(this.getDownloadUrlImage(postMedia[i]));
        }
        Promise.all(promises).then((results) => {
          resolve(results);
      });
    } else {
      resolve(postMedia);
    }
    });
  }

  getDownloadUrlImage(imageBase64: any): Promise<any> {
    return new Promise(resolve => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob(imageBase64);
      let metadata = {
        'contentType': imgBlob.type
      };

      // Generate filename and upload to Firebase Storage.
      let upRef = firebase.storage().ref().child('images/posts/' + this.generateFilename());
      upRef.put(imgBlob, metadata).then((snapshot) => {
        // URL of the uploaded image!
        upRef.getDownloadURL().then(url => {
          resolve(url);
        }).catch((err) => {console.log('Error occurred while downloading the url of images.')});
      }).catch((error) => {
        console.log('Error occured while uploading images:', error);
      });
  });
}


  deletePostPhoto(url) {
    var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
    firebase.storage().ref().child('images/posts/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
 
  }

  uploadPostReactionPhoto(postId, userId, sourceType): Promise<any> {
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
        let upRef = firebase.storage().ref().child('images/posts' + postId + '/' + userId + '/' + this.generateFilename());
        upRef.put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          upRef.getDownloadURL().then(url => {
            this.loadingProvider.hide();
            resolve(url);
          })

        }).catch((error) => {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  uploadPostVideo(): Promise<any> {
    var options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.VIDEO
    };

    return new Promise(resolve => {
      this.loadingProvider.show();
      this.camera.getPicture(options).then(data => {
        console.log('step1', data);
        let videoUrl = data[0].fullPath;
        let x = videoUrl.split("/");
        console.log('step2',x);
        let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
        let name = x[x.length - 1];
        console.log('step3', filepath, name);
        this.file.readAsArrayBuffer(filepath, name).then(success => {
          let blob = new Blob([success], { type: "video/mp4" });
          console.log('step4', blob);

          let uploadRef = firebase.storage().ref().child('videos/' + name);
          uploadRef.put(blob).then(res => {
            let process = res.bytesTransferred / res.totalBytes * 100;
            console.log(process);
            this.loadingProvider.hide();
            uploadRef.getDownloadURL().then(url => {
              resolve(url);
            })

          }, err => {
            this.loadingProvider.hide();
            console.log("Failed")
          });
        });
      }, err => {
        this.loadingProvider.hide();
        console.log("Media Err = " + err);
      });
    });
    //   this.mediaCapture.captureVideo().then(data => {
    //     let videoUrl = data[0].fullPath;
    //     let x = videoUrl.split("/");
    //     let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
    //     let name = x[x.length - 1];
    //     this.file.readAsArrayBuffer(filepath, name).then(success => {
    //       let blob = new Blob([success], { type: "video/mp4" });

    //       let uploadRef = firebase.storage().ref().child('videos/' + name);
    //       uploadRef.put(blob).then(res => {
    //         let process = res.bytesTransferred / res.totalBytes * 100;
    //         console.log(process);
    //         this.loadingProvider.hide();
    //         uploadRef.getDownloadURL().then(url => {
    //           resolve(url);
    //         })

    //       }, err => {
    //         this.loadingProvider.hide();
    //         console.log("Failed")
    //       });
    //     });
    //   }, err => {
    //     this.loadingProvider.hide();
    //     console.log("Media Err = " + err);
    //   });

  }

  deletePostReactionPhoto(postId,url){
    var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
    firebase.storage().ref().child('images/' + postId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Upload group photo message and return a promise as url.
  uploadGroupPhotoMessage(groupId, sourceType): Promise<any> {
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
        let ugpRef = firebase.storage().ref().child('images/' + groupId + '/' + this.generateFilename());
        ugpRef.put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          ugpRef.getDownloadURL().then(url => {
            this.loadingProvider.hide();
            resolve(url);
          })

        }).catch((error) => {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }
  uploadGroupVideoMessage(groupId): Promise<any> {
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
          let upload = firebase.storage().ref().child('videos/' + groupId + "/" + name).put(blob);
          upload.then(res => {
            let process = res.bytesTransferred / res.totalBytes * 100;
            console.log(process);
            this.loadingProvider.hide();

            resolve(res.downloadURL);
          }, err => {
            this.loadingProvider.hide();
            console.log("Failed")
          });

        });
      }, err => {
        this.loadingProvider.hide();
        console.log("Media Err = " + err);
      });
    });
  }

  uploadVideoMessage(conversationId): Promise<any> {
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

          let uploadRef = firebase.storage().ref().child('videos/' + name);
          uploadRef.put(blob).then(res => {
            let process = res.bytesTransferred / res.totalBytes * 100;
            console.log(process);
            this.loadingProvider.hide();
            uploadRef.getDownloadURL().then(url => { 
              resolve(url);
            })

          }, err => {
            this.loadingProvider.hide();
            console.log("Failed")
          });
        });
      }, err => {
        this.loadingProvider.hide();
        console.log("Media Err = " + err);
      });
    });
  }

  // Upload group photo message and return a promise as url.
  uploadGroupPhotoResource(groupId, sourceType): Promise<any> {
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
        let ugpRef = firebase.storage().ref().child('images/' + groupId + '/' + this.generateFilename());
        ugpRef.put(imgBlob, metadata).then((snapshot) => {
          // URL of the uploaded image!
          ugpRef.getDownloadURL().then(url => {
            this.loadingProvider.hide();
            resolve(url);
          })

        }).catch((error) => {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
        });
      }).catch((error) => {
        this.loadingProvider.hide();
      });
    });
  }

  uploadGroupVideoResource(groupId): Promise<any> {
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
          let upload = firebase.storage().ref().child('videos/' + groupId + "/" + name).put(blob);
          upload.then(res => {
            let process = res.bytesTransferred / res.totalBytes * 100;
            console.log(process);
            this.loadingProvider.hide();

            resolve(res.downloadURL);
          }, err => {
            this.loadingProvider.hide();
            console.log("Failed")
          });

        });
      }, err => {
        this.loadingProvider.hide();
        console.log("Media Err = " + err);
      });
    });
  }

  async getGroupVideoResource(resourceurl) {
   return await firebase.storage().ref().child(resourceurl).getDownloadURL().then(function(url) {
    return url;  
  }).catch(function(error) {
      // Handle any errors
    });
  }

  getImages(): Promise<any>{
    return new Promise(resolve => {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 10,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.

      // quality of resized image, defaults to 100
      quality: 80,

      // output type, defaults to FILE_URIs.
      // available options are
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }

      resolve(this.imageResponse);
    }, (err) => {
      alert(err);
    });
  })
  }

}
