import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

//   allPosts = [
//     {
//         id:1,
//         body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
//         title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
//         active:true
//     },
//     {
//         id:2,
//         body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
//         title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
//         active:true
//     },
//     {
//         id:3,
//         body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
//         title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
//         active:true
//     },
//     {
//         id:4,
//         body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
//         title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
//         active:false
//     },
//     {
//         id:5,
//         body:"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
//         title:"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
//         active:false
//     }
// ]

//   constructor() { }

//   getPosts():Post[]{
//     return this.allPosts
//   }

//   getPostAttivi() {
//     return this.allPosts.filter(p=>p.active==true)
//     this.allPosts.filter((p)=>{
//       // if(p.active == true) {
//       //   return true
//       // } else {
//       //   return false
//       // }
//       return p.active
//     })
//   }

//   getPostInattivi() {
//     return this.allPosts.filter(p=>p.active==false)
//   }

//   getPostFiltrati(a:boolean) {
//     return this.allPosts.filter(p=>p.active==a)
//   }

  getPostsFiltrati(a:boolean) {
    let p = fetch("assets/db.json")
    console.log(p)
    // p.then((x)=>{
    //   console.log(x)
    //   let j = x.json()
    //   let t = j.then((y:Post[])=>{
    //     console.log(y)
    //     return 10
    //   })
    // })

    let j = p.then((response)=>{
      return response.json()
    })

    let filteredPromise = j.then((posts:Post[])=>{
      return posts.filter(p=>p.active==a)
    })

    return filteredPromise

  }

  async getPostsFiltered(a:boolean) {
    let response = await fetch("assets/db.json")
    let posts:Post[] = await response.json()
    let arr = posts.filter(p=>p.active==a)
    return arr
  }



  // fetchData() {
  //   return fetch().then(res=>res.json()).then()
  // }
}
