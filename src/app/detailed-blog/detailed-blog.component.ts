import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Service/services.service';

@Component({
  selector: 'app-detailed-blog',
  templateUrl: './detailed-blog.component.html',
  styleUrls: ['./detailed-blog.component.css']
})
export class DetailedBlogComponent implements OnInit {
  constructor(private route:ActivatedRoute,private service:ServicesService,private router:Router){}
  
  public blog:any;
  public id!: string|null;

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getDataById(this.id).subscribe((data)=>{
      this.blog=data;

    },(err)=>{

      console.log("either th blog doesnt exist or some error occured")

    })
  }
  deleteFunc(id:any){
    this.service.deleteData(id).subscribe((data)=>{
      console.log('Blog deleted successfully');
      
    },(err)=>{
      console.log("Some error with deleting");
    })

    this.router.navigateByUrl("/")
 

  }
 

}
