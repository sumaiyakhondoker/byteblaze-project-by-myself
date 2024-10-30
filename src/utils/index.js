import toast from "react-hot-toast"
// get blogs from local storage
const getBlogs = ()=>{
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
    if(storedBlogs){
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}

// save to local storage
const saveBlogs = (blog) =>{
    const blogs = getBlogs()
    const isExist = blogs.find(b => b.id === blog.id)
    if(isExist){
        toast.error('Already Bookmarked!')
    }
    else{
    blogs.push(blog)
    localStorage.setItem('blogs',JSON.stringify(blogs))
    toast.success('Blog Bookmarked Successfully!')
    }
}

// delete from localstorage
const deleteBlog = id =>{
    const blogs = getBlogs()
    const remaining = blogs.filter(b=> b.id !== id)
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Blog Removed from Bookmark!')
}




export {getBlogs, saveBlogs, deleteBlog}