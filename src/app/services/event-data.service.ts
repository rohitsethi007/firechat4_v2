import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { File } from '@ionic-native/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {
  sbaList: any;

  constructor(
    public file: File
  ) {
    this.sbaList = firebase.database().ref('/sbalist');
  }

  makeFileIntoBlob(_imagePath, name, type) {
   // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
   return new Promise((resolve, reject) => {
    let fileName = name;
    this.file
      .resolveLocalFilesystemUrl(_imagePath)
      .then(fileEntry => {
        let { name, nativeURL } = fileEntry;

        // get the path..
        let path = _imagePath; // nativeURL.substring(0, nativeURL.lastIndexOf("/"));
        console.log("path", path);
        console.log("fileName", name);

        fileName = name;

        // we are provided the name, so now read the file into
        // a buffer
        return this.file.readAsArrayBuffer(path, name);
      })
      .then(buffer => {
        // get the buffer and make a blob to be saved
        let imgBlob = new Blob([buffer], {
          type: type
        });
        console.log(imgBlob.type, imgBlob.size);
        resolve({
          fileName,
          imgBlob
        });
      })
      .catch(e => reject(e));
  });
  }

  getfilename(filestring) {
     let file;
     file = filestring.replace(/^.*[\\\/]/, '')
     return file;
  }

  getfileext(filestring){
    let file = filestring.substr(filestring.lastIndexOf('.') + 1);
    return file;
  }
  getRequestFiles(): any {
     return this.sbaList.child('sbafiles');
    }

   addAssignmentFile(sbaid, file: any): any{
      return   this.sbaList.child(file.filename)
      // Saves the file to storage
          .put(file.blob, {contentType: file.type}).then((savedFile) => {
        // Gets the file url and saves it in the database
              this.sbaList.child('sbafiles').push({
              file: savedFile.downloadURL,
              name: file.filename,
              ext: file.fileext,
              type: file.type
        });
    });
  }
}
