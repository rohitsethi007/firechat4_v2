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

  makeFileIntoBlob(imagePath, name, type) {
    return new Promise((resolve, reject) => {
      this.file.readAsArrayBuffer(imagePath, name).then((resFile) => {
          let reader = new FileReader();
          reader.onloadend = (evt: any) => {
            let imgBlob: any = new Blob([evt.target.result], { type: type });
            imgBlob.name = name;
            resolve(imgBlob);
          };
          reader.onerror = (e) => {
           alert('Failed file read: ' + e.toString());
           reject(e);
          };
      });
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
