import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  constructor(
    private service: ServicesService,
    private navigate: Router,
    private route: ActivatedRoute
  ) {}

  blog: any;
  editBlog!: FormGroup;

  id: any = this.route.snapshot.paramMap.get('id');

  onSubmit(): void {
    this.service.updateData(this.id, this.editBlog.value).subscribe(
      (data) => {
        console.log('Data updated successfully', data);
        this.navigate.navigateByUrl('/');
      },
      (err) => {
        console.log('Error occurred while updating data', err);
      }
    );
  }

  ngOnInit(): void {
    this.service.getDataById(this.id).subscribe(
      (data) => {
        this.blog = data;
        this.editBlog = new FormGroup({
          id: new FormControl(this.id),
          title: new FormControl(this.blog.title, Validators.required),
          author: new FormControl(this.blog.author, Validators.required),
          content: new FormControl(this.blog.content, Validators.required),
        });
      },
      (err) => {
        console.log('Error occurred while fetching data', err);
      }
    );
  }
}
