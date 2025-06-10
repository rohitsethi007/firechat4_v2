import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import firebase from 'firebase/compat/app';

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

  async makeFileIntoBlob(_imagePath: string, name: string, type: string) {
    try {
      // Read the file
      const fileResult = await Filesystem.readFile({
        path: _imagePath,
        directory: Directory.Data // or appropriate directory based on your use case
      });
  
      // Convert base64 to blob
      const base64Response = await fetch(`data:${type};base64,${fileResult.data}`);
      const imgBlob = await base64Response.blob();
  
      console.log("path", _imagePath);
      console.log("fileName", name);
      console.log(imgBlob.type, imgBlob.size);
  
      return {
        fileName: name,
        imgBlob
      };
  
    } catch (error) {
      console.error('Error converting file to blob:', error);
      throw error;
    }
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
