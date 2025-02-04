import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, StorageReference, uploadBytesResumable,UploadTask,
  UploadTaskSnapshot  } from 'firebase/storage';
import { Firestore } from '@angular/fire/firestore';
import { LoadingService } from './loading.service';
import { Camera, CameraResultType, CameraSource, Photo, GalleryPhoto, GalleryPhotos } from '@capacitor/camera';

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
    public firestore: Firestore,
    public loadingProvider: LoadingService
  ) {
  }

  // Function to convert dataURI to Blob needed by Firebase
  imgURItoBlob(dataURI: string) {
    const binary = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }

  // Generate a random filename of length for the image to be uploaded
  generateFilename(): string {
    const length = 8;
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < length; i++) {
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
      const storage = getStorage();
      let dpStorageRef = ref(storage, 'images/' + user.userId + '/' + name);
      
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

        const storage = getStorage();
        const storageRef = ref(storage, `images/${group.id}/${this.generateFilename()}`);
        
        await uploadBytes(storageRef, imgBlob, metadata);
        
        // Delete previous image if exists
        if (group.img) {
          this.deleteImageFile(group.img);
        }
        
        const url = await getDownloadURL(storageRef);
        group.img = url;
        this.loadingProvider.hide();
        resolve(group);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
        console.error(error);
      }
    });
  }

  //Delete the image given the url.
  deleteImageFile(path: string) {
    try {
      const storage = getStorage();
      const fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
      const imageRef = ref(storage, `images/${fileName}`);
      deleteObject(imageRef).catch((error) => console.log(error));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  }

  //Delete the user.img given the user.
  deleteUserImageFile(user) {
    try {
      const storage = getStorage();
      const fileName = user.img.substring(user.img.lastIndexOf('%2F') + 3, user.img.lastIndexOf('?'));
      const imageRef = ref(storage, `images/${user.userId}/${fileName}`);
      deleteObject(imageRef).catch((error) => console.log(error));
    } catch (error) {
      console.error('Error deleting user image:', error);
    }
  }

  // Delete group image file on group storage reference.
  deleteGroupImageFile(groupId: string, path: string) {
    try {
      const storage = getStorage();
      const fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
      const imageRef = ref(storage, `images/${groupId}/${fileName}`);
      deleteObject(imageRef).catch((error) => console.log(error));
    } catch (error) {
      console.error('Error deleting group image:', error);
    }
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
  
          const storage = getStorage();
          const storageRef = ref(storage, `images/posts/${this.generateFilename()}`);
          
          await uploadBytes(storageRef, imgBlob, metadata);
          const url = await getDownloadURL(storageRef);
          
          this.loadingProvider.hide();
          resolve(url);
        } catch (error) {
          this.loadingProvider.hide();
          this.loadingProvider.showToast("Something went wrong");
          console.error(error);
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

  async getDownloadUrlImage(postId: string, imageBase64: any): Promise<any> {
    return new Promise(async (resolve) => {
      try {
        // Process the returned imageURI
        let imgBlob = this.imgURItoBlob(imageBase64);
        let metadata = {
          'contentType': imgBlob.type
        };
  
        // Generate filename and upload to Firebase Storage
        const storage = getStorage();
        const upRef = ref(storage, `images/posts/${postId}${this.generateFilename()}`);
        
        // Upload the image
        await uploadBytes(upRef, imgBlob, metadata);
        
        // Get the download URL
        const url = await getDownloadURL(upRef);
        resolve(url);
        
      } catch (error) {
        console.error('Error in upload or getting URL:', error);
        resolve(null); // or handle the error as needed
      }
    });
  }
  


  async deletePostPhoto(url: string) {
    try {
      const fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
      const storage = getStorage();
      const imageRef = ref(storage, `images/posts/${fileName}`);
      await deleteObject(imageRef);
    } catch (error) {
      console.error('Error deleting post photo:', error);
    }
  }
  

  async uploadPostReactionPhoto(postId: string, userId: string, sourceType: CameraSource): Promise<any> {
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
  
        const storage = getStorage();
        const upRef = ref(storage, `images/posts/${postId}/${userId}/${this.generateFilename()}`);
        
        // Upload the image
        await uploadBytes(upRef, imgBlob, metadata);
        
        // Get the download URL
        const url = await getDownloadURL(upRef);
        
        this.loadingProvider.hide();
        resolve(url);
      } catch (error) {
        this.loadingProvider.hide();
        this.loadingProvider.showToast("Something went wrong");
        console.error('Error uploading reaction photo:', error);
        resolve(null);
      }
    });
  }
  

  async uploadPostVideo(): Promise<string> {
    try {
      this.loadingProvider.show();
  
      // Check permissions first
      const permissionStatus = await Camera.checkPermissions();
      if (permissionStatus.camera !== 'granted') {
        await Camera.requestPermissions();
      }
  
      // Use getPhoto with video options
      const videoResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true,
        // Enable video capture
        width: 1920,
        height: 1080,
        presentationStyle: 'fullscreen',
        promptLabelHeader: 'Record Video',
        promptLabelCancel: 'Cancel',
        promptLabelPhoto: 'Record',
      });
  
      if (!videoResult.webPath) {
        throw new Error('No video captured');
      }
  
      // Generate unique filename
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 8);
      const fileName = `video_${timestamp}_${randomString}.mp4`;
  
      try {
        // Convert video to blob
        const response = await fetch(videoResult.webPath);
        const videoBlob = await response.blob();
  
        // Validate video size (example: 100MB limit)
        const MAX_SIZE = 100 * 1024 * 1024; // 100MB in bytes
        if (videoBlob.size > MAX_SIZE) {
          throw new Error('Video file is too large. Maximum size is 100MB.');
        }
  
        // Upload to Firebase with progress tracking
        const storage = getStorage();
        const storageRef = ref(storage, `videos/posts/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, videoBlob, {
          contentType: 'video/mp4'
        });
  
        return new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            // Progress observer
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              this.loadingProvider.show() //(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            (error) => {
              this.loadingProvider.hide();
              console.error('Upload failed:', error);
              reject(error);
            },
            // Completion observer
            async () => {
              try {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                
                // Clean up temporary files
                try {
                  await Filesystem.deleteFile({
                    path: fileName,
                    directory: Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                }
  
                this.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                this.loadingProvider.hide();
                reject(error);
              }
            }
          );
        });
  
      } catch (error) {
        throw new Error(`Error processing video: ${error.message}`);
      }
  
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error in uploadPostVideo:', error);
      throw error;
    }
  }
  

  async deletePostReactionPhoto(postId: string, url: string) {
    try {
      const fileName = url.substring(url.lastIndexOf('%2F') + 3, url.lastIndexOf('?'));
      const storage = getStorage();
      const imageRef = ref(storage, `images/${postId}/${fileName}`);
      
      await deleteObject(imageRef);
    } catch (error) {
      console.error('Error deleting reaction photo:', error);
      throw error;
    }
  }
  

  // Upload group photo message and return a promise as url.
  async uploadGroupPhotoMessage(groupId: string, sourceType: CameraSource): Promise<string> {
    try {
      this.photoMessageOptions.source = sourceType;
      this.loadingProvider.show();
      
      const image = await Camera.getPhoto(this.photoMessageOptions);
      const imageData = image.dataUrl.split(',')[1];
      
      const imgBlob = this.imgURItoBlob("data:image/jpeg;base64," + imageData);
      const metadata = {
        contentType: imgBlob.type
      };
  
      // Get storage reference
      const storage = getStorage();
      const storageRef = ref(storage, `images/${groupId}/${this.generateFilename()}`);
      
      // Upload the image
      await uploadBytes(storageRef, imgBlob, metadata);
      
      // Get the download URL
      const url = await getDownloadURL(storageRef);
      
      this.loadingProvider.hide();
      return url;
  
    } catch (error) {
      this.loadingProvider.hide();
      this.loadingProvider.showToast("Something went wrong");
      console.error('Error uploading group photo:', error);
      throw error;
    }
  }
  

  async uploadGroupVideoMessage(groupId: string): Promise<string> {
    try {
      this.loadingProvider.show();
  
      // Check camera permissions
      const permissionStatus = await Camera.checkPermissions();
      if (permissionStatus.camera !== 'granted') {
        await Camera.requestPermissions();
      }
  
      // Capture video using Camera API
      const videoResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true,
        width: 1920,
        height: 1080,
        presentationStyle: 'fullscreen',
        promptLabelHeader: 'Record Video',
        promptLabelCancel: 'Cancel',
        promptLabelPhoto: 'Record'
      });
  
      if (!videoResult.webPath) {
        throw new Error('No video captured');
      }
  
      // Generate unique filename
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 8);
      const filename = `video_${timestamp}_${randomString}.mp4`;
  
      console.log("Video path:", videoResult.webPath);
  
      try {
        // Convert video to blob
        const response = await fetch(videoResult.webPath);
        const videoBlob = await response.blob();
  
        // Validate video size (optional)
        const MAX_SIZE = 100 * 1024 * 1024; // 100MB limit
        if (videoBlob.size > MAX_SIZE) {
          throw new Error('Video file is too large. Maximum size is 100MB.');
        }
  
        console.log('Video blob size:', videoBlob.size);
  
        // Get storage reference
        const storage = getStorage();
        const storageRef = ref(storage, `videos/${groupId}/${filename}`);
  
        // Create upload task with progress monitoring
        const uploadTask = uploadBytesResumable(storageRef, videoBlob, {
          contentType: 'video/mp4'
        });
  
        // Return promise that resolves with download URL
        return new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            // Progress observer
            (snapshot: UploadTaskSnapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload progress: ${Math.round(progress)}%`);
              this.loadingProvider.showToast(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            (error) => {
              console.error('Upload error:', error);
              this.loadingProvider.hide();
              reject(error);
            },
            // Completion observer
            async () => {
              try {
                const downloadURL = await getDownloadURL(storageRef);
  
                // Clean up any temporary files
                try {
                  await Filesystem.deleteFile({
                    path: filename,
                    directory: Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                  // Don't throw error here as upload was successful
                }
  
                this.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                this.loadingProvider.hide();
                reject(error);
              }
            }
          );
        });
  
      } catch (error) {
        throw new Error(`Error processing video: ${error.message}`);
      }
  
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error uploading group video:', error);
      throw error;
    }
  }
  
  

  async uploadVideoMessage(conversationId: string): Promise<string> {
    try {
      this.loadingProvider.show();
  
      // Check camera permissions
      const permissionStatus = await Camera.checkPermissions();
      if (permissionStatus.camera !== 'granted') {
        await Camera.requestPermissions();
      }
  
      // Capture video using Camera API
      const videoResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        saveToGallery: true,
        width: 1920,
        height: 1080,
        presentationStyle: 'fullscreen'
      });
  
      if (!videoResult.webPath) {
        throw new Error('No video captured');
      }
  
      // Generate unique filename
      const timestamp = new Date().getTime();
      const randomString = Math.random().toString(36).substring(2, 8);
      const filename = `video_${timestamp}_${randomString}.mp4`;
  
      try {
        // Convert video to blob
        const response = await fetch(videoResult.webPath);
        const videoBlob = await response.blob();
  
        // Optional: Validate video size
        const MAX_SIZE = 100 * 1024 * 1024; // 100MB limit
        if (videoBlob.size > MAX_SIZE) {
          throw new Error('Video file is too large. Maximum size is 100MB.');
        }
  
        // Upload to Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, `videos/${conversationId}/${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, videoBlob, {
          contentType: 'video/mp4'
        });
  
        return new Promise((resolve, reject) => {
          uploadTask.on('state_changed',
            // Progress observer
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload progress: ${progress.toFixed(2)}%`);
              this.loadingProvider.showToast(`Uploading video: ${Math.round(progress)}%`);
            },
            // Error observer
            (error) => {
              this.loadingProvider.hide();
              console.error('Upload failed:', error);
              reject(error);
            },
            // Completion observer
            async () => {
              try {
                const downloadURL = await getDownloadURL(storageRef);
  
                // Clean up temporary files
                try {
                  await Filesystem.deleteFile({
                    path: filename,
                    directory: Directory.Cache
                  });
                } catch (cleanupError) {
                  console.warn('Error cleaning up temporary file:', cleanupError);
                  // Don't throw error here as upload was successful
                }
  
                this.loadingProvider.hide();
                resolve(downloadURL);
              } catch (error) {
                this.loadingProvider.hide();
                console.error('Error getting download URL:', error);
                reject(error);
              }
            }
          );
        });
  
      } catch (error) {
        throw new Error(`Error processing video: ${error.message}`);
      }
  
    } catch (error) {
      this.loadingProvider.hide();
      console.error('Error in uploadVideoMessage:', error);
      throw error;
    }
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

      const storage = getStorage();
      const storageRef = ref(storage, `images/${groupId}/${this.generateFilename()}`);
      
      await uploadBytes(storageRef, imgBlob, metadata);
      const url = await getDownloadURL(storageRef);
      
      this.loadingProvider.hide();
      resolve(url);
    } catch (error) {
      this.loadingProvider.hide();
      this.loadingProvider.showToast("Something went wrong");
    }
  });
}
async uploadGroupVideoResource(groupId: string): Promise<string> {
  try {
    this.loadingProvider.show();

    // Check camera permissions
    const permissionStatus = await Camera.checkPermissions();
    if (permissionStatus.camera !== 'granted') {
      await Camera.requestPermissions();
    }

    // Capture video
    const videoResult = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: true,
      width: 1920,
      height: 1080
    });

    if (!videoResult.webPath) {
      throw new Error('No video captured');
    }

    // Generate unique filename
    const timestamp = new Date().getTime();
    const filename = `video_${timestamp}.mp4`;

    try {
      // Convert video to blob
      const response = await fetch(videoResult.webPath);
      const videoBlob = await response.blob();

      console.log('Video blob size:', videoBlob.size);

      // Upload to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `videos/${groupId}/${filename}`);
      const uploadTask = uploadBytesResumable(storageRef, videoBlob);

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          // Progress observer
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress.toFixed(2)}%`);
            this.loadingProvider.show()//(`Uploading: ${Math.round(progress)}%`);
          },
          // Error observer
          (error) => {
            this.loadingProvider.hide();
            console.error('Upload failed:', error);
            reject(error);
          },
          // Completion observer
          async () => {
            try {
              const downloadURL = await getDownloadURL(storageRef);
              
              // Clean up temporary files
              try {
                await Filesystem.deleteFile({
                  path: filename,
                  directory: Directory.Cache
                });
              } catch (cleanupError) {
                console.warn('Cleanup error:', cleanupError);
              }

              this.loadingProvider.hide();
              resolve(downloadURL);
            } catch (error) {
              this.loadingProvider.hide();
              reject(error);
            }
          }
        );
      });

    } catch (error) {
      throw new Error(`Error processing video: ${error.message}`);
    }

  } catch (error) {
    this.loadingProvider.hide();
    console.error('Error in uploadGroupVideoResource:', error);
    throw error;
  }
}

  async getGroupVideoResource(resourceurl: string): Promise<string> {
  try {
    const storage = getStorage();
    const videoRef = ref(storage, resourceurl);
    const url = await getDownloadURL(videoRef);
    return url;
  } catch (error) {
    console.error('Error getting video URL:', error);
    throw error;
  }
}
async getImages(): Promise<string[]> {
  try {
    const uploadedUrls: string[] = [];
    
    // Allow multiple photo selection
    const result = await Camera.pickImages({
      quality: 75,
      limit: 4
    });

    this.loadingProvider.show();

    for (let i = 0; i < result.photos.length; i++) {
      try {
        this.loadingProvider.showToast(
          `Uploading image ${i + 1} of ${result.photos.length}`
        );

        // Read the file
        const photo = result.photos[i];
        const response = await fetch(photo.webPath);
        const blob = await response.blob();

        // Upload to Firebase
        const storage = getStorage();
        const fileName = this.generateFilename();
        const storageRef = ref(storage, `images/${fileName}`);

        // Create upload task
        const uploadTask = uploadBytesResumable(storageRef, blob);

        // Monitor upload progress
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress for image ${i + 1}: ${progress}%`);
          },
          (error) => {
            console.error(`Error uploading image ${i + 1}:`, error);
          }
        );

        // Wait for upload to complete
        await uploadTask;

        // Get download URL
        const downloadUrl = await getDownloadURL(storageRef);
        uploadedUrls.push(downloadUrl);

      } catch (error) {
        console.error(`Error processing image ${i + 1}:`, error);
      }
    }

    this.loadingProvider.hide();

    if (uploadedUrls.length === 0) {
      throw new Error('No images were successfully uploaded');
    }

    return uploadedUrls;

  } catch (error) {
    this.loadingProvider.hide();
    console.error('Error in getImages:', error);
    throw error;
  }
}

// For single image capture
async captureImage(): Promise<string> {
  try {
    const image = await Camera.getPhoto({
      quality: 75,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (!image.webPath) {
      throw new Error('No image path available');
    }

    this.loadingProvider.show();

    // Convert to blob
    const response = await fetch(image.webPath);
    const blob = await response.blob();

    // Upload to Firebase
    const storage = getStorage();
    const fileName = this.generateFilename();
    const storageRef = ref(storage, `images/${fileName}`);

    // Upload with progress monitoring
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload progress:', progress);
      }
    );

    await uploadTask;
    const downloadUrl = await getDownloadURL(storageRef);

    this.loadingProvider.hide();
    return downloadUrl;

  } catch (error) {
    this.loadingProvider.hide();
    console.error('Error capturing image:', error);
    throw error;
  }
}

}
