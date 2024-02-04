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
//--------------------------creating an header-----------------------

const header= document.createElement("header")
// if we using appendChild then element must have node 
// if we are using append only then element may anything 
// appending the header to our root 
root.appendChild(header)
// adding a div element as a wraper of header 
const headerWrapper = document.createElement("div") 
headerWrapper.style.borderBottom="1px solid #000"

// creating another one container 
const headerContainer= document.createElement("div")
headerContainer.className="mx-auto"
headerContainer.style.width="80%"
// appneding the headerContainer
headerWrapper.appendChild(headerContainer)
//append the headerWrapper to header
header.appendChild(headerWrapper)



// creating a navbar
const headerNav= document.createElement("nav")
//  styling 
headerNav.style.padding="5px 0px"
//appending the nav to headerContainer
headerContainer.appendChild(headerNav)
// creatng an ul for nav 
const headerNavUl= document.createElement("ul")
// styling 
headerNavUl.className="d-flex justify-content-between p-0 m-0"
headerNavUl.style.listStyle="none"

headerNav.appendChild(headerNavUl)
// appending headerNavUl to headerNav



// array 
const array = [
    {      
title:"Skip to main content",
icon:"fa-arrow-down",
flex:1

},
{ 
icon:"fa-volume-up",
flex:1

},
{      
    title:"A",
    flex:1
    
},
{      
    icon:"fa-sitemap",
    flex:1
    
},
{      
    icon:"fa-search",
    flex:1
    
},
{         
    icon:"fa-youtube-play",
    flex:0.3
    
},
{         
    icon:"fa-facebook-official",
    flex:0.3
    
},
{         
    icon:"fa-instagram",
    flex:0.3
    
},
{        title:"twitter", 
    icon:"fa-twitter",
    flex:1
    
}]

// for loop 

for(let i = 0; i < array.length; i++){

    // creating an li for ul
const headerNavUlLi= document.createElement("li") 
headerNavUlLi.style.listStyle="none"
headerNavUlLi.style.flex= array[i].flex

// creating an ancer tag for li 
 const navAncer= document.createElement("a")
 // adding href atrubute to a tag 
 navAncer.href="#"
 // styiling 
 navAncer.className="text-dark text-decoration-none"
 // creating an i tag for navAncer
 const itag= document.createElement("i")
itag.className=`fa ${array[i].icon}`
//append i to navAncer
navAncer.append(itag)
navAncer.append(array[i].title||"")
// append a to li 
headerNavUlLi.appendChild(navAncer)
// appending li to ul
headerNavUl.appendChild(headerNavUlLi)
}
console.log("worked")

//-------------------middle header --------------------------
// creating a div for header middle 
const headerMiddle= document.createElement("div")
headerMiddle.className="container"
// creating headerMiddle Wraper 
const headerMiddleWrapper= document.createElement("div")
headerMiddleWrapper.style.width="60%"
headerMiddleWrapper.style.height="100px"
headerMiddleWrapper.className="d-flex mt-2"


// creating A div element for first section 
//----------------section 1 -------------
const satyamevJayateLogo= document.createElement("div")
satyamevJayateLogo.style.height="100px"
satyamevJayateLogo.style.width="100px"

// creating an img tag for satyamevJayateLogo
const satyamevJayateLogoImg=document.createElement("img")
satyamevJayateLogoImg.src="../images/satyamev-jayte-removebg-preview.png"
satyamevJayateLogoImg.alt="satyamevJayateLogoImg"
satyamevJayateLogoImg.style.height="100px"
satyamevJayateLogoImg.style.width="100px"
satyamevJayateLogoImg.style.objectFit="contain"

// -------------creating a div element for second section------------
const GovernmentDiv=document.createElement("div")
GovernmentDiv.style.width="80%"
GovernmentDiv.className="border-start border-dark d-flex gap-3 ps-2 align-item-center"
// creating an dic for logo of cet 
const logoCet= document.createElement("div")
logoCet.style.height="100px"
logoCet.style.width="100px"
// creating an img tag for logoCet
const logoCetImg=document.createElement("img")
logoCetImg.src="../images/cet_cell-removebg-preview.png"
logoCetImg.alt="cet cell"
logoCetImg.height="100"
logoCetImg.width="100"
logoCetImg.style.objectFit="contain"

// creating an div for headings of goverment div
const govermentContent=document.createElement("div")
govermentContent.style.flex=1
// creating an h1 
const govermentH1= document.createElement("h1")
govermentH1.innerText="GOVERNMENT OF MAHARASHTRA"
govermentH1.style.fontSize="20px"
govermentH1.style.marginTop="20px"
govermentH1.className="fw-bold"
// creating a h5 for govermnetcontent 
const govermentH5= document.createElement("h5")
govermentH5.style.height="100px"
govermentH5.style.fontSize="15px"
govermentH5.className="fw- bold ms-auto"
govermentH5.innerText="State Common Entrance Test Cell"

// creating a element for goverment logo 

const govermentLogo= document.createElement("div")
govermentLogo.style.height="100px"
govermentLogo.style.width="100px"


// creating an img tag for govermentLogo-img
const govermentLogoImg= document.createElement("img")
govermentLogoImg.src="../images/Seal_of_Maharashtra.svg.png"
govermentLogoImg.alt="govermentLogoImg"
govermentLogoImg.style.height="100px"
govermentLogoImg.style.width="100px"
govermentLogoImg.style.objectFit="contain"

// appending govermentLogoImg to govermentLogo
govermentLogo.appendChild(govermentLogoImg)
// appending logoCetImg to logoCet
logoCet.appendChild(logoCetImg)
// appending logoCet to GovernmentDiv
GovernmentDiv.appendChild(logoCet)
// appending govermentContent to GovernmentDiv
GovernmentDiv.appendChild(govermentContent)
// appending govermentH1 to govermentContent
govermentContent.appendChild(govermentH1)
govermentContent.appendChild(govermentH5)
//apeending satyamevJayateLogoImg to satyamevJayateLogo
satyamevJayateLogo.appendChild(satyamevJayateLogoImg)
// appending satyamevJayateLogo to headerMiddleWrapper
headerMiddleWrapper.appendChild(satyamevJayateLogo)
// appnending GovernmentMaha to headerMiddleWrapper
headerMiddleWrapper.appendChild(GovernmentDiv)
// appending govermentLogo to headerMiddleWrapper
headerMiddleWrapper.appendChild(govermentLogo)
// appendig headerMiddleWrapper to headerMiddle
headerMiddle.appendChild(headerMiddleWrapper)
// appending headerMiddle to header
header.appendChild(headerMiddle)

//-----------------bottom header section---------------------
const headerBottom= document.createElement("div")
headerBottom.style.width="100%"
headerBottom.style.background="#163269"
headerBottom.className="mt-1 py-2"

// creating an nav 
 const headerBottomNav= document.createElement("nav")
 headerBottomNav.className=" w-75  mx-auto d-flex justify-content-between align-item-center"

 // creating an ul for nav
 const headerBottomNavUl= document.createElement("ul")
 headerBottomNavUl.style.listStyle="none"
 headerBottomNavUl.className="d-flex gap-3 m-0"
 // creating an array 
  const headerBottomNavUlList=[ "Home", "abaoutUs", " CETs","CAP","Downloads","Statics","Online System","Event","Contact"]

  headerBottomNavUlList.forEach((ele)=>{

    const  headerBottomNavUlListLi= document.createElement("li")
    const headerBottomNavUlListLiAtag= document.createElement("a")
    headerBottomNavUlListLiAtag.href="#"
    headerBottomNavUlListLiAtag.innerText=ele
    headerBottomNavUlListLiAtag.className="text-decoration-none text-white"

    headerBottomNavUlListLi.appendChild(headerBottomNavUlListLiAtag) 

    headerBottomNavUl.appendChild(headerBottomNavUlListLi)
  })

// creating  button for nav 

const headerBottomNavButton= document.createElement("button")
headerBottomNavButton.type="button"
headerBottomNavButton.innerText="ask pragati "
headerBottomNavButton.className="text-white p-1 px-2 rounded-2"
headerBottomNavButton.style.background="#01205D"
headerBottomNavButton.style.border="1px solid #808080"
// creating an img foe button 
const headerBottomNavImg= document.createElement("img")
headerBottomNavImg.src="../images/Ask-Pragati-9.png"
headerBottomNavImg.alt="pragati img "
headerBottomNavImg.style.height="30px"
headerBottomNavImg.style.width="35"
// headerBottomNavImg.style.objectFit="contain"

headerBottomNavButton.appendChild(headerBottomNavImg)
headerBottom.appendChild(headerBottomNav)
headerBottomNav.appendChild(headerBottomNavUl)
headerBottomNav.appendChild(headerBottomNavButton)
// appending headerBottom to header 
header.appendChild(headerBottom)

// creating an main tag notice 

const main =document.createElement("main")
// cerating a section 
const mainNotice = document.createElement("section")
mainNotice.className="container d-flex gap-2 my-2 "

// creating a button 
 const mainNoticeButton =document.createElement("button")
 mainNoticeButton.innerText="Announcment"
 mainNoticeButton.style.background="#EEC641"
 mainNoticeButton.className="btn text-white fw-bold"

// creating a murquee tag
const mainNoticemarquee= document.createElement("marquee")
mainNoticemarquee.behavior=" "
mainNoticemarquee.direction=" "
mainNoticemarquee.style.background="#F1F1F1"
mainNoticemarquee.className="m-o p-o"
mainNoticemarquee.style.lineHeight=" 2.3 "
mainNoticemarquee.innerText="  Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)New"



//appending mainNotice to main
main.appendChild(mainNotice)
mainNotice.appendChild(mainNoticeButton)
mainNotice.appendChild(mainNoticemarquee)
// appending the main tag to the root  
root.appendChild(main)