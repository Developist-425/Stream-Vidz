import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  readonly APIUrl = 'http://localhost:5091/api/';
  newVideo: any = {}; // Initialize an empty object to hold new video data

  constructor(private http: HttpClient) {}
  videos: any = [];

  ngOnInit() {
    this.refreshNotes();
  }

  refreshNotes() {
    this.http.get(this.APIUrl + 'trending').subscribe((data) => {
      this.videos = data;
    });
  }

  addVideo() {
    // Send a POST request to add a new video
    this.http.post(this.APIUrl + 'trending', this.newVideo).subscribe(() => {
      // Refresh the list of videos after adding a new one
      this.refreshNotes();
      // Reset the newVideo object for the next entry
      this.newVideo = {};
    });
  }

  updateVideo(video: any) {
    // Send a PUT request to update an existing video
    this.http.put(this.APIUrl + 'trending/' + video.Id, video).subscribe(() => {
      // Refresh the list of videos after updating
      this.refreshNotes();
    });
  }

  deleteVideo(id: number) {
    // Send a DELETE request to remove a video by its ID
    this.http.delete(this.APIUrl + 'trending/' + id).subscribe(() => {
      // Refresh the list of videos after deleting
      this.refreshNotes();
    });
  }



}
