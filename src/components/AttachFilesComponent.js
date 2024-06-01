import { useEffect } from 'react';

//the styles used on this component
import './styles.css';
 
//* the screen of  component */
function AttachFilesComponent() {
  
  useEffect(() => {

    const label = document.querySelector("label");
    
    label.addEventListener("dragenter",function(){
       this.classList.add("active")
     })

    label.addEventListener("drop",function(){
      this.classList.remove("active")
    })

    label.addEventListener("dragend",function(){
      this.classList.remove("active")
    })

    label.addEventListener("dragleave",function(){
      this.classList.remove("active")
    })

    const input = document.querySelector("input")
    const drop_area = document.querySelector("#drop-area")

    input.addEventListener("change",event=>{
      if(input.files.length > 0 ){

        //filter of type of files  
        const typeFileSelected =  input.files[0].type
        const typeOfFiles =["image/jpeg","image/png","image/jpg"]

        if (!typeOfFiles.includes(typeFileSelected)){
          alert("This format is not allowed")
          return;
        }

        const existingImage = document.querySelector("#cover")
        if (existingImage){
          drop_area.removeChild(existingImage)
        }

        //preview of image (of file)
        const imageFile = document.createElement("img");
        imageFile.id="cover";
        imageFile.src=URL.createObjectURL(input.files[0]);
        drop_area.appendChild(imageFile)
      }
    })

  },[])
 

  //** screen of component */
  return (
    <label id="label-file-input" for="file" className="file-input">
      <div className="drop-area" id="drop-area">
          <p><b>Select a file</b> or drag and drop</p>
      </div>
      <input type='file' id='file' />
     </label>   
  )
}

export default AttachFilesComponent;