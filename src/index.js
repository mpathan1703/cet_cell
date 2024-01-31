// adding title 
document.title="State Common Entrance Test Cell | Government of Maharashtra"
// adding div/root element
const root= document.getElementById("root")

// creating a link tag to add css file
// const indexcssLink = document.createElement("link")
// adding the atributes to  the link tag
// indexcssLink.rel="stylesheet"
// indexcssLink.href="../style/index/css"

// document.head.appendChild(indexcssLink)

// creating a link for fontawsome
// const fontawsomeLink=document.createElement("link")
// adding the atributes to  the link tag
// fontawsomeLink.rel="stylesheet"
// fontawsomeLink.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"

// appending the fontawsomeLink
// document.head.appendChild(fontawsomeLink)

// creating a link tag fot boostrap linking 

// const boostrapLink= document.createElement("link")
// adding atributes to the boostrapLink
// boostrapLink.rel="stylesheet"
// boostrapLink.href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
// appending boostrapLink 
// document.head.appendChild(boostrapLink)
// instead of all this use then function

function addLinks(path){
    const links = document.createElement("link")
    links.rel="stylesheet"
    links.href = path
    document.head.appendChild(links)
    return "linkeded"
}
 addLinks("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")
 addLinks("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
 addLinks("../style/index/css")
 
//  console.log("linkded")

// creating an header
 const header = document.createElement("header")

 // appending the header  to the root 
 root.appendChild(header)

// creating an head wrapper 
const headWrapper= document.createElement("div")
const headContainer= document.createElement("div")
headContainer.style.width="80%"
headContainer.style.margin="auto"
headContainer.style.background="red"
headContainer.innerText="kbskdjb"

//appneding headContainer
headWrapper.appendChild(headContainer)
//appneding hwadWrapper 
header.appendChild(headWrapper)
 