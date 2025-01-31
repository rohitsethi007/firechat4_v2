import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { LoadingService } from './loading.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  options: any;
  imageResponse: any;

  
  private profilePhotoOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
  };

  private photoMessageOptions = {
    quality: 50,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera,
    allowEditing: true
  };

  private groupPhotoOptions = {
    quality: 50,
    targetWidth: 384,
    targetHeight: 384,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
  };

  constructor(
    public firestore: AngularFirestore,
    public loadingProvider: LoadingService,
    public mediaCapture: MediaCapture,
    private imagePicker: ImagePicker,
    public file: File,
    private filePath: FilePath) {
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

  async setProfilePhoto(user, sourceType) {
    console.log(user);
    this.profilePhotoOptions.source = sourceType;
    this.loadingProvider.show();
    
    try {
      const image = await Camera.getPhoto(this.profilePhotoOptions);
      const imageData = image.dataUrl.split(',')[1];
      
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      let metadata = {
        'contentType': imgBlob.type
      };
      let name = this.generateFilename();
      let dpStorageRef = firebase.default.storage().ref().child('images/' + user.userId + '/' + name);
      
      // Rest of your existing upload code...
      
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error taking photo:', error);
    }
  }
  // Update other methods similarly
  async setGroupPhoto(group, sourceType) {
    this.groupPhotoOptions.source = sourceType;
    this.loadingProvider.show();
    
    try {
      const image = await Camera.getPhoto(this.groupPhotoOptions);
      const imageData = image.dataUrl.split(',')[1];
      
      // Rest of your existing code...
      
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error taking photo:', error);
    }
  }

  // Set group photo and return the group object as promise.
  async setGroupPhotoPromise(group, sourceType): Promise<any> {
    return new Promise(async (resolve) => {
      this.groupPhotoOptions.source = sourceType;
      this.loadingProvider.show();
      
      try {
        const image = await Camera.getPhoto(this.groupPhotoOptions);
        const imageData = image.dataUrl.split(',')[1];
        
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let gPPStorageRef = firebase.default.storage().ref().child('images/' + firebase.default.auth().currentUser.uid + '/' + this.generateFilename());
        
        const snapshot = await gPPStorageRef.put(imgBlob, metadata);
        this.deleteImageFile(group.img);
        const url = await gPPStorageRef.getDownloadURL();
        group.img = url;
        this.loadingProvider.hide();
        resolve(group);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
      }
    });
  }

  //Delete the image given the url.
  deleteImageFile(path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    // tslint:disable-next-line: max-line-length
    firebase.default.storage().ref().child('images/' + firebase.default.auth().currentUser.uid + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    var fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
    // tslint:disable-next-line: max-line-length
    firebase.default.storage().ref().child('images/' + user.userId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Delete group image file on group storage reference.
  deleteGroupImageFile(groupId, path) {
    var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.default.storage().ref().child('images/' + groupId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

 // Update uploadPhotoMessage method
 async uploadPhotoMessage(conversationId, sourceType): Promise<any> {
  return new Promise(async (resolve) => {
    this.photoMessageOptions.source = sourceType;
    this.loadingProvider.show();
    
    try {
      const image = await Camera.getPhoto(this.photoMessageOptions);
      const imageData = image.dataUrl.split(',')[1];
      
      // Rest of your existing code...
      
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error taking photo:', error);
    }
  });
}

    // Upload photo message and return the url as promise.
    async uploadPostPhoto(sourceType): Promise<any> {
      return new Promise(async (resolve) => {
        this.photoMessageOptions.source = sourceType;
        this.loadingProvider.show();
        
        try {
          const image = await Camera.getPhoto(this.photoMessageOptions);
          const imageData = image.dataUrl.split(',')[1];
          
          let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
          let metadata = {
            'contentType': imgBlob.type
          };
          let upRef = firebase.default.storage().ref().child('images/posts/' + this.generateFilename());
          
          await upRef.put(imgBlob, metadata);
          const url = await upRef.getDownloadURL();
          this.loadingProvider.hide();
          resolve(url);
        } catch (error) {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
        }
      });
    }
  

  uploadPostPhotos(postId, postMedia): Promise<any> {
      let promises = [];
      return new Promise(resolve => {
        if (postMedia && postMedia.length > 0) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < postMedia.length; i++) {
            promises.push(this.getDownloadUrlImage(postId, postMedia[i]));
        }
        Promise.all(promises).then((results) => {
          resolve(results);
      });
    } else {
      resolve(postMedia);
    }
    });
  }

  getDownloadUrlImage(postId, imageBase64: any): Promise<any> {
    return new Promise(resolve => {
      // Process the returned imageURI.
      let imgBlob = this.imgURItoBlob(imageBase64);
      let metadata = {
        'contentType': imgBlob.type
      };

      // Generate filename and upload to Firebase Storage.
      let upRef = firebase.default.storage().ref().child('images/posts/' + postId + this.generateFilename());
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
    firebase.default.storage().ref().child('images/posts/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
 
  }

  async uploadPostReactionPhoto(postId, userId, sourceType): Promise<any> {
    return new Promise(async (resolve) => {
      this.photoMessageOptions.source = sourceType;
      this.loadingProvider.show();
      
      try {
        const image = await Camera.getPhoto(this.photoMessageOptions);
        const imageData = image.dataUrl.split(',')[1];
        
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let upRef = firebase.default.storage().ref().child('images/posts' + postId + '/' + userId + '/' + this.generateFilename());
        
        await upRef.put(imgBlob, metadata);
        const url = await upRef.getDownloadURL();
        this.loadingProvider.hide();
        resolve(url);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
      }
    });
  }

  uploadPostVideo(): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: CaptureVideoOptions = { 
        limit: 1,
        duration: 30
      };

      this.mediaCapture.captureVideo(options).then(async (data: MediaFile[]) => {
        try {
          let capturedFile = data[0];
          let fileName = capturedFile.name;
          let dir = capturedFile['localURL'].split('/');
          dir.pop();
          let fromDirectory = dir.join('/');
          let toDirectory = this.file.dataDirectory;

          this.loadingProvider.show();

          // Move the file to permanent storage
          await this.file.moveFile(fromDirectory, fileName, toDirectory, fileName);

          // Read the file
          const videoBlob = await this.file.readAsArrayBuffer(toDirectory, fileName);

          // Upload to Firebase
          const storageRef = firebase.default.storage().ref()
            .child(`videos/posts/${new Date().getTime()}_${fileName}`);

          const uploadTask = await storageRef.put(videoBlob, {
            contentType: 'video/mp4'
          });

          const downloadURL = await storageRef.getDownloadURL();

          // Clean up - remove temporary file
          await this.file.removeFile(toDirectory, fileName);

          this.loadingProvider.hide();
          resolve(downloadURL);

        } catch (error) {
          this.loadingProvider.hide();
          console.error('Error in uploadPostVideo:', error);
          reject(error);
        }
      }).catch((error: CaptureError) => {
        console.error('Error capturing video:', error);
        reject(error);
      });
    });
  }

  deletePostReactionPhoto(postId,url){
    var fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
    firebase.default.storage().ref().child('images/' + postId + '/' + fileName).delete().then(() => { }).catch((error) => { console.log(error) });
  }

  // Upload group photo message and return a promise as url.
  async uploadGroupPhotoMessage(groupId, sourceType): Promise<any> {
    return new Promise(async (resolve) => {
      this.photoMessageOptions.source = sourceType;
      this.loadingProvider.show();
      
      try {
        const image = await Camera.getPhoto(this.photoMessageOptions);
        const imageData = image.dataUrl.split(',')[1];
        
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let ugpRef = firebase.default.storage().ref().child('images/' + groupId + '/' + this.generateFilename());
        
        await ugpRef.put(imgBlob, metadata);
        const url = await ugpRef.getDownloadURL();
        this.loadingProvider.hide();
        resolve(url);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
      }
    });
  }

  uploadGroupVideoMessage(groupId): Promise<any> {
    return new Promise(resolve => {
      this.loadingProvider.show();
      this.mediaCapture.captureVideo().then(data => {
        let videoUrl = data[0].fullPath;
        var filename = videoUrl.substr(videoUrl.lastIndexOf('/') + 1);
        var dirpath = videoUrl.substr(0, videoUrl.lastIndexOf('/') + 1);
        dirpath = dirpath.includes("file://") ? dirpath : "file://" + dirpath;

        console.log("video path: " + videoUrl);
        let x = videoUrl.split("/");
        let filepath = videoUrl.substring(0, videoUrl.lastIndexOf("/"));
        let name = x[x.length - 1];
        console.log(filepath + " - " + name);
        this.file.readAsArrayBuffer(dirpath, filename).then(success => {
          console.log(success);
          let blob = new Blob([success], { type: "video/mp4" });
          console.log(blob);
          let upload = firebase.default.storage().ref().child('videos/' + groupId + "/" + name).put(blob);
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

          let uploadRef = firebase.default.storage().ref().child('videos/' + name);
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
  async uploadGroupPhotoResource(groupId, sourceType): Promise<any> {
    return new Promise(async (resolve) => {
      this.photoMessageOptions.source = sourceType;
      this.loadingProvider.show();
      
      try {
        const image = await Camera.getPhoto(this.photoMessageOptions);
        const imageData = image.dataUrl.split(',')[1];
        
        let imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
        let metadata = {
          'contentType': imgBlob.type
        };
        let ugpRef = firebase.default.storage().ref().child('images/' + groupId + '/' + this.generateFilename());
        
        await ugpRef.put(imgBlob, metadata);
        const url = await ugpRef.getDownloadURL();
        this.loadingProvider.hide();
        resolve(url);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
      }
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
          let upload = firebase.default.storage().ref().child('videos/' + groupId + "/" + name).put(blob);
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
   return await firebase.default.storage().ref().child(resourceurl).getDownloadURL().then(function(url) {
    return url;  
  }).catch(function(error) {
      // Handle any errors
    });
  }

  async getImages(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const options = {
        maximumImagesCount: 4,
        width: 500,
        height: 500,
        quality: 75
      };
  
      this.imagePicker.getPictures(options)
        .then(async (results) => {
          try {
            const uploadedUrls: string[] = [];
            
            for (let result of results) {
              // Convert to blob
              const response = await fetch(result);
              const blob = await response.blob();
              
              // Upload to Firebase
              const fileName = this.generateFilename();
              const storageRef = firebase.default.storage()
                .ref()
                .child('images/' + fileName);
              
              await storageRef.put(blob);
              const downloadUrl = await storageRef.getDownloadURL();
              uploadedUrls.push(downloadUrl);
            }
            
            resolve(uploadedUrls);
          } catch (error) {
            reject(error);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }

}
