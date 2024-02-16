// adding title 
document.title = "State Common Entrance Test Cell | Government of Maharashtra"
// adding div/root element
const root = document.getElementById("root")

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

function addLinks(path) {
    const links = document.createElement("link")
    links.rel = "stylesheet"
    links.href = path
    document.head.appendChild(links)
    return "linkeded"
}
addLinks("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")
addLinks("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
addLinks("../style/index/css")

//  console.log("linkded")
//--------------------------creating an header-----------------------

const header = document.createElement("header")
// if we using appendChild then element must have node 
// if we are using append only then element may anything 
// appending the header to our root 
root.appendChild(header)
// adding a div element as a wraper of header 
const headerWrapper = document.createElement("div")
headerWrapper.style.borderBottom = "1px solid #000"

// creating another one container 
const headerContainer = document.createElement("div")
headerContainer.className = "mx-auto"
headerContainer.style.width = "80%"
// appneding the headerContainer
headerWrapper.appendChild(headerContainer)
//append the headerWrapper to header
header.appendChild(headerWrapper)



// creating a navbar
const headerNav = document.createElement("nav")
//  styling 
headerNav.style.padding = "5px 0px"
//appending the nav to headerContainer
headerContainer.appendChild(headerNav)
// creatng an ul for nav 
const headerNavUl = document.createElement("ul")
// styling 
headerNavUl.className = "d-flex justify-content-between p-0 m-0"
headerNavUl.style.listStyle = "none"

headerNav.appendChild(headerNavUl)
// appending headerNavUl to headerNav



// array 
const array = [
    {
        title: "Skip to main content",
        icon: "fa-arrow-down",
        flex: 1

    },
    {
        icon: "fa-volume-up",
        flex: 1

    },
    {
        title: "A",
        flex: 1

    },
    {
        icon: "fa-sitemap",
        flex: 1

    },
    {
        icon: "fa-search",
        flex: 1

    },
    {
        icon: "fa-youtube-play",
        flex: 0.3

    },
    {
        icon: "fa-facebook-official",
        flex: 0.3

    },
    {
        icon: "fa-instagram",
        flex: 0.3

    },
    {
        title: "twitter",
        icon: "fa-twitter",
        flex: 1

    }]

// for loop 

for (let i = 0; i < array.length; i++) {

    // creating an li for ul
    const headerNavUlLi = document.createElement("li")
    headerNavUlLi.style.listStyle = "none"
    headerNavUlLi.style.flex = array[i].flex

    // creating an ancer tag for li 
    const navAncer = document.createElement("a")
    // adding href atrubute to a tag 
    navAncer.href = "#"
    // styiling 
    navAncer.className = "text-dark text-decoration-none"
    // creating an i tag for navAncer
    const itag = document.createElement("i")
    itag.className = `fa ${array[i].icon}`
    //append i to navAncer
    navAncer.append(itag)
    navAncer.append(array[i].title || "")
    // append a to li 
    headerNavUlLi.appendChild(navAncer)
    // appending li to ul
    headerNavUl.appendChild(headerNavUlLi)
}


//-------------------middle header --------------------------
// creating a div for header middle 
const headerMiddle = document.createElement("div")
headerMiddle.className = "container"
// creating headerMiddle Wraper 
const headerMiddleWrapper = document.createElement("div")
headerMiddleWrapper.style.width = "60%"
headerMiddleWrapper.style.height = "100px"
headerMiddleWrapper.className = "d-flex mt-2"


// creating A div element for first section 
//----------------section 1 -------------
const satyamevJayateLogo = document.createElement("div")
satyamevJayateLogo.style.height = "100px"
satyamevJayateLogo.style.width = "100px"

// creating an img tag for satyamevJayateLogo
const satyamevJayateLogoImg = document.createElement("img")
satyamevJayateLogoImg.src = "../images/satyamev-jayte-removebg-preview.png"
satyamevJayateLogoImg.alt = "satyamevJayateLogoImg"
satyamevJayateLogoImg.style.height = "100px"
satyamevJayateLogoImg.style.width = "100px"
satyamevJayateLogoImg.style.objectFit = "contain"

// -------------creating a div element for second section------------
const GovernmentDiv = document.createElement("div")
GovernmentDiv.style.width = "80%"
GovernmentDiv.className = "border-start border-dark d-flex gap-3 ps-2 align-item-center"
// creating an dic for logo of cet 
const logoCet = document.createElement("div")
logoCet.style.height = "100px"
logoCet.style.width = "100px"
// creating an img tag for logoCet
const logoCetImg = document.createElement("img")
logoCetImg.src = "../images/cet_cell-removebg-preview.png"
logoCetImg.alt = "cet cell"
logoCetImg.height = "100"
logoCetImg.width = "100"
logoCetImg.style.objectFit = "contain"

// creating an div for headings of goverment div
const govermentContent = document.createElement("div")
govermentContent.style.flex = 1
// creating an h1 
const govermentH1 = document.createElement("h1")
govermentH1.innerText = "GOVERNMENT OF MAHARASHTRA"
govermentH1.style.fontSize = "20px"
govermentH1.style.marginTop = "20px"
govermentH1.className = "fw-bold"
// creating a h5 for govermnetcontent 
const govermentH5 = document.createElement("h5")
govermentH5.style.height = "100px"
govermentH5.style.fontSize = "15px"
govermentH5.className = "fw- bold ms-auto"
govermentH5.innerText = "State Common Entrance Test Cell"

// creating a element for goverment logo 

const govermentLogo = document.createElement("div")
govermentLogo.style.height = "100px"
govermentLogo.style.width = "100px"


// creating an img tag for govermentLogo-img
const govermentLogoImg = document.createElement("img")
govermentLogoImg.src = "../images/Seal_of_Maharashtra.svg.png"
govermentLogoImg.alt = "govermentLogoImg"
govermentLogoImg.style.height = "100px"
govermentLogoImg.style.width = "100px"
govermentLogoImg.style.objectFit = "contain"

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
const headerBottom = document.createElement("div")
headerBottom.style.width = "100%"
headerBottom.style.background = "#163269"
headerBottom.className = "mt-1 py-2"

// creating an nav 
const headerBottomNav = document.createElement("nav")
headerBottomNav.className = " w-75  mx-auto d-flex justify-content-between align-item-center"

// creating an ul for nav
const headerBottomNavUl = document.createElement("ul")
headerBottomNavUl.style.listStyle = "none"
headerBottomNavUl.className = "d-flex gap-3 m-0"
// creating an array 
const headerBottomNavUlList = ["Home", "abaoutUs", " CETs", "CAP", "Downloads", "Statics", "Online System", "Event", "Contact"]

headerBottomNavUlList.forEach((ele) => {

    const headerBottomNavUlListLi = document.createElement("li")
    const headerBottomNavUlListLiAtag = document.createElement("a")
    headerBottomNavUlListLiAtag.href = "#"
    headerBottomNavUlListLiAtag.innerText = ele
    headerBottomNavUlListLiAtag.className = "text-decoration-none text-white"

    headerBottomNavUlListLi.appendChild(headerBottomNavUlListLiAtag)

    headerBottomNavUl.appendChild(headerBottomNavUlListLi)
})

// creating  button for nav 

const headerBottomNavButton = document.createElement("button")
headerBottomNavButton.type = "button"
headerBottomNavButton.innerText = "ask pragati "
headerBottomNavButton.className = "text-white p-1 px-2 rounded-2"
headerBottomNavButton.style.background = "#01205D"
headerBottomNavButton.style.border = "1px solid #808080"
// creating an img foe button 
const headerBottomNavImg = document.createElement("img")
headerBottomNavImg.src = "../images/Ask-Pragati-9.png"
headerBottomNavImg.alt = "pragati img "
headerBottomNavImg.style.height = "30px"
headerBottomNavImg.style.width = "35"
// headerBottomNavImg.style.objectFit="contain"

headerBottomNavButton.appendChild(headerBottomNavImg)
headerBottom.appendChild(headerBottomNav)
headerBottomNav.appendChild(headerBottomNavUl)
headerBottomNav.appendChild(headerBottomNavButton)
// appending headerBottom to header 
header.appendChild(headerBottom)

// creating an main tag notice 

const main = document.createElement("main")
// cerating a section 
const mainNotice = document.createElement("section")
mainNotice.className = "container d-flex gap-2 my-2 "

// creating a button 
const mainNoticeButton = document.createElement("button")
mainNoticeButton.innerText = "Announcment"
mainNoticeButton.style.background = "#EEC641"
mainNoticeButton.className = "btn text-white fw-bold"

// creating a murquee tag
const mainNoticemarquee = document.createElement("marquee")
mainNoticemarquee.behavior = " "
mainNoticemarquee.direction = " "
mainNoticemarquee.style.background = "#F1F1F1"
mainNoticemarquee.className = "m-o p-o"
mainNoticemarquee.style.lineHeight = " 2.3 "
mainNoticemarquee.innerText = "  Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2023-24 (English/Marathi)"

// create an new keyword t murqoo 
const newinfinente = document.createElement("span")
newinfinente.innerText = "New"
newinfinente.style.background = "red"
newinfinente.className = "p-1"
mainNoticemarquee.appendChild(newinfinente)

//appending mainNotice to main
main.appendChild(mainNotice)
mainNotice.appendChild(mainNoticeButton)
mainNotice.appendChild(mainNoticemarquee)
// appending the main tag to the root  
root.appendChild(main)

//-------------------banner section-------------------->

const banner = document.createElement("div")
banner.style.height="400px"
banner.style.width="100%"
banner.style.display="flex"

// creating banner left 
const bannerLeft= document.createElement("div")
bannerLeft.style.height="100%"
bannerLeft.style.width="75%"
bannerLeft.style.background="green"
bannerLeft.style.background="url(../images/GOVERNMENT-OF-MAHARASHTRA-22-1.png)"
bannerLeft.style.backgroundRepeat="no-repeat"
bannerLeft.style.backgroundSize="cover"
bannerLeft.className="position-relative"

// creating a div for number of department & courses 

const bannerLeftCourseNumbers= document.createElement("div")
bannerLeftCourseNumbers.className="row m-0 position-absolute"
bannerLeftCourseNumbers.style.background="#EEC641"
bannerLeftCourseNumbers.style.width="100%"
bannerLeftCourseNumbers.style.bottom="-84px"

// creating a function 

function cardNumber(title, descriptionText, background, columns){
    const card= document.createElement("div")
    card.className=`col-12 col-lg-${ columns || 4} text-center text-white py-2 `

if (background){
    card.style.background= background
}
    // creating a tag for numbers 
    const title5= document.createElement("h5")
    title5.className="count"
    title5.setAttribute("data-count",title)
    title5.innerText=0
    title5.style.fontSize="30px"

// creating a p tag for description of course 

const description = document.createElement("p")
description.className="m-0"
description.innerText=descriptionText

    card.appendChild(title5)
    card.appendChild(description)
    return card
}
// appending cardNumber

bannerLeftCourseNumbers.appendChild(cardNumber(6, "Number of Departments"))
bannerLeftCourseNumbers.appendChild(cardNumber(19, "Number of CETs", "#163269"))
bannerLeftCourseNumbers.appendChild(cardNumber(61, "Number of Courses"))



// creating banner right 
const bannerRight= document.createElement("div")
bannerRight.style.height="100%"
bannerRight.style.width="25%"
bannerRight.className="p-3"
bannerRight.style.position="relative"
bannerRight.style.background="linear-gradient(180deg, rgba(22,50,105,0.8) 10%, rgba(238,198,65,1) 100%)"
// creating a function to right card section 

function IconTitlCard( icon,  titleString, background){
let card= document.createElement("div")
card.className="d-flex  align-items-center gap-3 p-2 text-white mt-2"
let leftBox= document.createElement("div")
leftBox.style.height="70px"
leftBox.style.width="70px"
leftBox.className="bg-white rounded-pill d-flex  align-items-center justify-content-center"
// creating a div for icon backgrond
const subDivLeft= document.createElement("div")
subDivLeft.style.className= "rounded-pill d-flex  align-items-center justify-content-center"
subDivLeft.style.height="50px"
subDivLeft.style.width="50px"
subDivLeft.style.background=background

subDivLeft.innerHTML=`<i class="fa ${icon}" style="font-size:40px;" aria-hidden="true"></i>`
subDivLeft.className="rounded-pill d-flex  align-items-center justify-content-center"
leftBox.appendChild(subDivLeft)
// creating a rightbox
let rightBox= document.createElement("div")
rightBox.style.flex=1

const title= document.createElement("h6")
title.style.lineHeight="22px"
title.innerText=titleString

rightBox.appendChild(title)
card.appendChild(leftBox)
card.appendChild(rightBox)
return card 
}
bannerRight.appendChild(IconTitlCard("fa-user-circle-o", "Candidate Registration A.Y 2024-25", "#0E8F52"))
bannerRight.appendChild(IconTitlCard("fa-users", "Candidate Help Module", "#FFB859"))
bannerRight.appendChild(IconTitlCard("fa-graduation-cap", "Foreign Candidate Registration Portal", "#163269"))
bannerRight.appendChild(IconTitlCard("fa-user-circle-o", "Candidate Registration A.Y 2024-25", "#0E8F52"))

// creating  a tag for  fix background img 
 const backgroundFixRight= document.createElement("div")
 backgroundFixRight.background="../images/MicrosoftTeams-image-scaled.jpg"
 backgroundFixRight.style.width="100%"
 backgroundFixRight.style.height="100%"
 backgroundFixRight.style.height="50%"
 backgroundFixRight.style.backgroundSize="cover"
 backgroundFixRight.style.backgroundPositionX="-1000px"
 backgroundFixRight.style.zIndex="-1"
 backgroundFixRight.style.position="fixed"

 bannerLeft.appendChild(backgroundFixRight)

 // creating a div for bannerRightCourseNumbers 

const bannerRightCourseNumbers= document.createElement("div")
bannerRightCourseNumbers.className="row mt-2 position-absolute w-100"
bannerRightCourseNumbers.style.bottom="-84px"
bannerRightCourseNumbers.style.left="12px"

bannerRightCourseNumbers.appendChild(cardNumber(4000, "Number of Departments", "#163269", 12))

bannerLeft.appendChild(bannerLeftCourseNumbers)
banner.appendChild(bannerLeft)
banner.appendChild(bannerRight)
bannerRight.appendChild(bannerRightCourseNumbers)
// appending banner to main 
main.appendChild(banner)

// making a function for counter 
const counts= document.querySelectorAll(".count")

counts.forEach(function(counter){

    function updateCounter(){
        const finalValue=Number(counter.getAttribute("data-count"))
        const oldValue= Number(counter.innerText.replace(",",""))
        const incrementValue= finalValue / 100

        if (oldValue < finalValue){
            counter.innerText=Math.ceil(incrementValue + oldValue).toLocaleString()
            setTimeout(updateCounter,1)
        }
        else {
            counter.innerText=`${finalValue > 1000 ? `${finalValue.toLocaleString()} +`: finalValue }`
        }
    }

    updateCounter()

})
//--------------------------------about section ---------------

const abaoutSection= document.createElement("div")
abaoutSection.style.background="url(../images/aboutBg.jpg)"
abaoutSection.style.backgroundPosition="center-0px"
abaoutSection.style.backgroundSize="cover"
abaoutSection.style.backgroundRepeat="no-repeat"
abaoutSection.style.height="1500px"
abaoutSection.style.backgroundAttachment="fixed"

// creating a aboutSection overlay
const abaoutOverlay= document.createElement("div")
abaoutOverlay.style.background="#ffffffbd"
abaoutOverlay.style.padding="70px 0px"

// creating an aboutSectionContainer 
const abaoutSectionContainer= document.createElement("div")
abaoutSectionContainer.className="w-75 mx-auto"
abaoutSectionContainer.style.marginTop="84px"

const abaoutSectionrow= document.createElement("div")
abaoutSectionrow.className="row"

 const abaoutSectionrowLeft= document.createElement("div")
 abaoutSectionrowLeft.className="col-12 col-lg-5"


// creating a div for img 
const abaoutLeftImg= document.createElement("div")
abaoutLeftImg.style.borderLeft="15px solid #163269 "
abaoutLeftImg.style.borderBottom="15px solid #163269 "

// creating an img tag
const imgDiv=document.createElement("img")
imgDiv.src="../images/abountLeft.png"
imgDiv.alt="abaoutLft"
imgDiv.style.width="100%"
imgDiv.style.height="250px"
imgDiv.style.objectFit="contain"
imgDiv.style.objectPosition="0px 50px"

abaoutLeftImg.appendChild(imgDiv)
abaoutSectionrowLeft.appendChild(abaoutLeftImg)

// right section 
const aboutSectionRowRight= document.createElement("div")
aboutSectionRowRight.className="col-12 col-lg-7"
// creating an heading 
const aboutSectionRowRightHeading= document.createElement("h2")
aboutSectionRowRightHeading.innerText="About CET Cell"
aboutSectionRowRightHeading.style.color="#163269"
// creating a p tag for para
const para1= document.createElement("p")
para1.innerText=" The Government of Maharashtra has established State Common Entrance Test Cell as per Section 10 of the Maharashtra Unaided Private Professional Educational Institutions (Regulation of Admissions and Fees) Act ,2015. The CET Cell conducts various entrance exams for Admission to Professional courses in the state of Maharashtra, India."
// creating one more p for para
const para2= document.createElement("p")
para2.innerText="Its primary purpose is to facilitate the admission process for Professional courses such as Engineering, Management, Pharmacy, Agriculture, law, Medical, AYUSH & Fine Arts ."

aboutSectionRowRight.appendChild(aboutSectionRowRightHeading)
aboutSectionRowRight.appendChild(para1)
aboutSectionRowRight.appendChild(para2)
abaoutSectionrow.appendChild(abaoutSectionrowLeft)
abaoutSectionrow.appendChild(aboutSectionRowRight)
abaoutSectionContainer.appendChild(abaoutSectionrow)
abaoutOverlay.appendChild(abaoutSectionContainer)
abaoutSection.appendChild(abaoutOverlay)
// appending about section to main 
main.appendChild(abaoutSection)
//-----------------------------table section---------------------------------

const tableSection= document.createElement("div")
tableSection.style.background="#EAEAEA"


//--------creating a menu container -----------------
const menuContainer= document.createElement("div")
menuContainer.className="w-75 mx-auto py-3 "

menuContainer.innerHTML=`<nav class="nav justify-content-between " style="font-size:16px">
<button type="button" class="  px-4 py-2 bg-white border-0  b_about_btn" aria-current="page" >All</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Technical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Higher Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Agriculture Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Fine Art Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >Medical Education</button>
<button type="button" class=" px-4 py-2 bg-white border-0 b_about_btn" >AYUSH</button>
</nav>`

window.onload =function () {
const aboutBtn= document.querySelector(".b_about_btn")
aboutBtn.classList.remove("bg-white")
aboutBtn.classList.add("bg-warning")
    dynamicData([
     {
         id:1,
         course:"LLB 3 Yrs",
         subject:"Important Notice for Preparatory Passed Candidates.",
         isNew:true,
         date:"02/02/2024",
         download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"  
    },
    {
        id:2,
        course:"B.Sc (Nursing)",
        subject:"MH-Nursing CET-2024 Online Application Notice No.1 (English/Marathi)",
        isNew:true,
        date:"09/02/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/MH-Nursing-CET-2024-Registration.pdf"  
    },
    {
        id:3,
        course:"All CET’s",
        subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
        isNew:true,
        date:"06/02/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
    },
    {
        id:4,
        course:"LLB 3 Yrs",
        subject:"Important Notice for Preparatory Passed Candidates has been displayed on the website kindly check",
        isNew:true,
        date:"02/02/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024-1.pdf"  
    },
    {
        id:5,
        course:"LLB 3 Yrs",
        subject:"Important Notice for Preparatory Passed Candidates.",
        isNew:true,
        date:"02/02/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024.pdf"  
    },
    {
        id:6,
        course:"All CET's",
        subject:"User Manual Video for CET Registration A.Y. 2024-25",
        isNew:true,
        date:"31/01/2024",
        download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
    },
    {
        id:7,
        course:"MAH- AAC (Fine Art)",
        subject:"MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
        isNew:true,
        date:"30/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"  
    },
    {
        id:8,
        course:"All CET's",
        subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
        isNew:true,
        date:"29/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
    },
    {
        id:9,
        course:"Higher Courses",
        subject:"IMP : CLARITY ABOUT BED (2Yr. RegularCourse) , BED-MED (3Yr.Int.Course) and Ba/BScBEd (4Yr. Int.Course ).",
        isNew:true,
        date:"12/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Public-Notice.pdf"  
    },
    {
        id:10,
        course:"All CET's",
        subject:"	As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
        isNew:true,
        date:"11/01/2024",
        download:" "  
    },
    {
        id:11,
        course:"All CET's",
        subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
        isNew:true,
        date:"11/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
    },
    {
        id:12,
        course:"MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
        subject:"Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
        isNew:true,
        date:"01/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"  
    },
    {
        id:13,
        course:"All CET's",
        subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
        isNew:true,
        date:"13/12/2023",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
    },
    ])
}
// function 
function dynamicData(tableData = []){
    tableData.forEach(function (ele){
        const tableBodytr= document.createElement("tr")
        const tableBodytrData1= document.createElement("td")
        tableBodytrData1.innerText=ele.id
        tableBodytrData1.style.textAlign="center"

       const  tableBodytrData2= document.createElement("td")
       tableBodytrData2.innerText=ele.course
       const  tableBodytrData3= document.createElement("td")
       tableBodytrData3.innerText=ele.subject
       // creating an new img 
       const newImg= document.createElement("img")
       newImg.src="../images/blinknew.gif"
       newImg.alt="new"
if(ele.isNew){
    tableBodytrData3.appendChild(newImg)
}
const tableBodytrData4= document.createElement("td")
tableBodytrData4.innerText=ele.date
const tableBodytrData5= document.createElement("td")
tableBodytrData5.style.textAlign="center"
tableBodytrData5.style.cursor="pointer"
const openLink =  `<a href="${ele.download}" target="_blank"><i class="fa fa-file-pdf-o fw-bold" aria-hidden="true"></i></a>`
tableBodytrData5.innerHTML=openLink
       // appending 
       tableBodytr.appendChild(tableBodytrData1)
       tableBodytr.appendChild(tableBodytrData2)
       tableBodytr.appendChild(tableBodytrData3)
       tableBodytr.appendChild(tableBodytrData4)
       tableBodytr.appendChild(tableBodytrData5)
    //    tableBodytr.appendChild(tableBodytr)
       tableBody.appendChild(tableBodytr) 
    })
}


document.addEventListener("click",function (event){
    const isBtn= event.target.classList.contains("b_about_btn")

    if(isBtn){
        const title= event.target.innerText

        const existingBtn= document.querySelectorAll(".b_about_btn")
        existingBtn.forEach((ele)=>{
            ele.classList.add("bg-white")
            const isExist= ele.classList.contains("bg-warning")
            if(isExist){
                event.target.classList.add("bg-white")
                event.target.classList.remove("bg-warning")
            }
        })
        event.target.classList.remove("bg-white")
        event.target.classList.add("bg-warning")
        tableBody.innerHTML=""
        switch(title){
            case "Technical Education":
            return dynamicData([
 {
          id:1,
          course:"B.HMCT and B.Design",
          subject:"Imp Notice: Dates have been Extended for B.HMCT and B.Design CET registration for A.Y 2024-25 Dated 13-02-2024",
           isNew:false,
           date:"13/02/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Technical-Education-B.HMCT-and-B.Design-CET-3rd-Extenstion-Notice.pdf"  
        },
        {
            id:2,
            course:"All CET’s",
            subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
             isNew:false,
             date:"06/02/2024",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
          },
          {
            id:3,
            course:"All CET's",
            subject:" User Manual Video for CET Registration A.Y. 2024-25",
             isNew:false,
             date:"	31/01/2024",
            download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
          },
          {
            id:4,
            course:"All CET's",
            subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
             isNew:false,
             date:"29/01/2024",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
          },
          {
            id:5,
            course:"All CET's",
            subject:"	As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
             isNew:false,
             date:"11/01/2024",
            download:" "  
          },
          {
            id:6,
            course:"All CET's",
            subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
             isNew:false,
             date:" 11/01/2024",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
          },
          {
            id:7,
            course:"MHT CET, MBA/MMS, MCA, M.Arch, M.HMCT, B.HMCT, B.Design",
            subject:" Click Here To View Syllabus of All Courses Under Technical Education A.Y. 2024-25",
             isNew:false,
             date:"01/01/2024",
            download:" https://cetcell.mahacet.org/wp-content/uploads/2023/08/Technical_Education_CET_syllabus2024-25.pdf"  
          },
          {
            id:8,
            course:"All CET's",
            subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
             isNew:false,
             date:" 13/12/2023",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
          },
            ])

            case"Higher Education":
                return dynamicData([
     {
              id:1,
              course:"	BA B.Sc B.Ed",
              subject:"Imp Notice: Dates have been Extended for BA B.Sc B.Ed CET registration for A.Y 2024-25 Dated 13-02-2024",
               isNew:false,
               date:" 13/02/2024",
              download:" https://cetcell.mahacet.org/wp-content/uploads/2023/12/Higher-Education-BA-BSc-Bed-Extenstion-Notice.pdf"  
            },
            {
                id:2,
                course:"Higher Courses",
                subject:" Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 12-02-2024",
                 isNew:false,
                 date:"12/02/2024",
                download:" https://cetcell.mahacet.org/wp-content/uploads/2023/12/Third-Extension-Notice_Higher-Edu-CET-2024.pdf"  
              },
              {
                id:3,
                course:"MAH-LLB - 3 Yrs. CET- 2024",
                subject:" Second Extension for MAH-LL.B – 3 Yrs. CET- 2024 Application Form Filling (A.Y. 2024-25)",
                 isNew:false,
                 date:" 10/02/2024",
                download:" https://cetcell.mahacet.org/wp-content/uploads/2023/12/Notice_LLB-3-Yrs-CET_Second-Extension_Dt-10.02.2024.pdf"  
              },
              {
                id:4,
                course:"All CET’s",
                subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
                 isNew:false,
                 date:" 06/02/2024",
                download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
              },
              {
                id:5,
                course:"LLB 3 Yrs",
                subject:"Important Notice for Preparatory Passed Candidates has been displayed on the website kindly check",
                 isNew:false,
                 date:"02/02/2024",
                download:" https://cetcell.mahacet.org/wp-content/uploads/2023/12/Important-Notices_Preperatory-CET-2024-1.pdf"  
              }
        ])
          
        case "Agriculture Education":
            return dynamicData([
 {
          id:1,
          course:"All CET’s",
          subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
           isNew:false,
           date:"06/02/2024",
          download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
        },
        {
            id:2,
            course:"All CET’s",
            subject:"User Manual Video for CET Registration A.Y. 2024-25",
             isNew:false,
             date:"31/01/2024",
            download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
          },
          {
            id:3,
            course:"All CET’s",
            subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
             isNew:false,
             date:"29/01/2024",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
          },
          {
            id:4,
            course:"All CET’s",
            subject:"As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
             isNew:false,
             date:"11/01/2024",
            download:""  
          },
          {
            id:5,
            course:"All CET’s",
            subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
             isNew:false,
             date:"	11/01/2024",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
          },
          {
            id:6,
            course:"All CET’s",
            subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
             isNew:false,
             date:"	13/12/2023",
            download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
          },
    ])


    case "Fine Art Education":
        return dynamicData([
{
      id:1,
      course:"All CET’s",
      subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
       isNew:false,
       date:"06/02/2024",
      download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
    },
    {
        id:2,
        course:"All CET’s",
        subject:"User Manual Video for CET Registration A.Y. 2024-25",
         isNew:false,
         date:"31/01/2024",
        download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
      },
      {
        id:3,
        course:"All CET’s",
        subject:"MAH- AAC (Fine Art) CET 2024 Online Application Notice No.1 (English/Marathi)",
         isNew:false,
         date:"30/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Online-Application-Notice.pdf"  
      },
      {
        id:4,
        course:"All CET’s",
        subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
         isNew:false,
         date:"29/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
      },
      {
        id:5,
        course:"All CET’s",
        subject:"	As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
         isNew:false,
         date:"11/01/2024",
        download:" "  
      },
      {
        id:6,
        course:"All CET’s",
        subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
         isNew:false,
         date:"	11/01/2024",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
      },
      {
        id:7,
        course:"All CET’s",
        subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
         isNew:false,
         date:"13/12/2023",
        download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
      },
])

case "Medical Education":
    return dynamicData([
{
  id:1,
  course:"B.Sc (Nursing)",
  subject:"MH-Nursing CET-2024 Online Application Notice No.1 (English/Marathi)",
   isNew:false,
   date:"09/02/2024",
  download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/MH-Nursing-CET-2024-Registration.pdf"  
},
{
    id:2,
    course:"All CET's",
    subject:"User Manual Video for CET Registration A.Y. 2024-25",
     isNew:false,
     date:"31/01/2024",
    download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
  },
  {
    id:3,
    course:"All CET’s",
    subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
     isNew:false,
     date:"29/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
  },
  {
    id:4,
    course:"All CET’s",
    subject:"As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
     isNew:false,
     date:"11/01/2024",
    download:" "  
  },
  {
    id:5,
    course:"All CET’s",
    subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
     isNew:false,
     date:"11/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
  },
  {
    id:6,
    course:"All CET’s",
    subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
     isNew:false,
     date:"13/12/2023",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
  },
])

case "AYUSH":
    return dynamicData([
{
  id:1,
  course:"All CET’s",
  subject:"	Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 06-02-2024",
   isNew:false,
   date:"06/02/2024",
  download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/CET-Reg-2nd-Extenstion-Notice-1.pdf"  
},
{
    id:2,
    course:"All CET's",
    subject:"User Manual Video for CET Registration A.Y. 2024-25",
     isNew:false,
     date:"	31/01/2024",
    download:"https://www.youtube.com/watch?v=UuJSWbIoyGQ"  
  },
  {
    id:3,
    course:"All CET’s",
    subject:"Imp Notice: Dates have been Extended for various courses of CET registration for A.Y 2024-25 (English/Marathi) Dated 29-01-2024",
     isNew:false,
     date:"29/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/Extenstion-Notice-1.pdf"  
  },
  {
    id:4,
    course:"All CET’s",
    subject:"	As per the new rules for A.Y. 2024-25, the fee structure for CET Registrations for Transgender and Orphan candidates will be the same as that for the Reserved category.",
     isNew:false,
     date:"11/01/2024",
    download:" "  
  },
  {
    id:5,
    course:"All CET’s",
    subject:"Activity Schedule for all CET Registration for A.Y. 2024-25",
     isNew:false,
     date:"11/01/2024",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/12/English-Notice-CET-2024.pdf"  
  },
  {
    id:6,
    course:"All CET’s",
    subject:"Updated Tentative Schedule for All Common Entrance Tests A.Y. 2024-25",
     isNew:false,
     date:"13/12/2023",
    download:"https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"  
  },
])
     }

    }
})
tableSection.appendChild(menuContainer)
// appending table section to abaout section 
abaoutSection.appendChild(tableSection)

// creating dynamic table

const table= document.createElement("table")
table.style.width = "100%"
table.className = "table  my-2 table-bordered border-dark border-end"

const tablehead= document.createElement("tHead")
const tableHeadtr= document.createElement("tr")

const tableBody= document.createElement("tBody")

const tableHeadData=[{title:"SN", width:20},{title:"Course Name", width:200},{title:"Subject", width:500},{title:"Published Date", width:150},{title:"Download Date", width:50}]

tableHeadData.forEach(function (th){
 const tableHeadTrTh= document.createElement("th")
 tableHeadTrTh.className="bg-warning"
 if(th.title==="SN"){
    tableHeadTrTh.style.textAlign="center"
 }
 tableHeadTrTh.innerText=th.title
 tableHeadTrTh.style.width=`${th.width}px`
 tableHeadTrTh.style.fontWeight="400"

tableHeadtr.appendChild(tableHeadTrTh)

})

table.appendChild(tablehead)
table.appendChild(tableBody)
tablehead.appendChild(tableHeadtr)
menuContainer.appendChild(table)




















///-------------last------------------
const bundleScript = document.createElement("script")
bundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
bundleScript.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
bundleScript.crossOrigin = "anonymous"

document.body.appendChild(bundleScript)