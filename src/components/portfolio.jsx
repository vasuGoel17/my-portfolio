// import React from "react";

// //import stock
// import stock from "../img/image1.jpg";
// import stock1 from "../img/image2.jpg";
// import stock2 from "../img/image3.jpg";
// import stock3 from "../img/image4.jpg";
// import stock4 from "../img/image5.jpg";
// import stock5 from "../img/image6.jpg";

// class Portfolio extends React.Component {
//   render() {
//     return (
//       <section id="work" className="portfolio-mf sect-pt4 route">
//         <div className="container">
//           <div className="row">
//             <div className="col-sm-12">
//               <div className="title-box text-center">
//                 <h3 className="title-a">Portfolio</h3>
//                 <p className="subtitle-a">My recent Projects</p>
//                 <div className="line-mf"></div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-vmarine">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">SocialGram</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap ReactJS
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-vmarine"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-aguadeluz">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack SmoothScrolling
//                             VanillaJS
//                           </span>{" "}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-aguadeluz"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-todo">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap Webpack ReactJS
//                           </span>
//                           {/*} / <span className="w-date">18 Sep. 2018</span>*/}
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-todo"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-medlingos">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             Bootstrap ReactJS GoogleAPI
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-medlingos"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-smth">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">MERN</span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-smth"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="work-box">
//                 <a href={stock} data-lightbox="gallery-mf">
//                   <div className="work-img">
//                     <img src={stock} alt="" className="img-fluid" />
//                   </div>
//                   <div className="work-content">
//                     <div className="row">
//                       <div className="col-sm-8">
//                         <h2 className="w-title">Lorem Ipsum</h2>
//                         <div className="w-more">
//                           <span className="w-ctegory">
//                             HTML5 CSS3 Bootstrap MERN
//                           </span>
//                         </div>
//                       </div>
//                       <div className="col-sm-4">
//                         <div className="w-like">
//                           <span className="ion-ios-plus-outline"></span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//                 <a
//                   href={stock1}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock2}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock3}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock4}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//                 <a
//                   href={stock5}
//                   data-lightbox="gallery-mf"
//                   style={{ display: "none" }}
//                 >
//                   jsx-a11y/anchor-has-content warning
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Portfolio;

import "../portfolio.css";

import IMG1 from "../img/image1.png";
import IMG2 from "../img/image2.png";
import IMG3 from "../img/image3.png";
import IMG4 from "../img/image4.png";
import IMG5 from "../img/image5.png";
import IMG6 from "../img/image6.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "SocialGram",
      img: IMG1,
      description:
        "Welcome to our social media heaven where individuals not only express themselves through personal posts but also engage in vibrant communities tailored to their interests. ",
      technologies: "React Js | Node Js | MongoDB | Express JS",
      link: "https://snazzy-pie-bca948.netlify.app/",
      github: "https://github.com/vasuGoel17/SocialGramBackend",
    },
    {
      id: 2,
      title: "Driver Delivery",
      img: IMG2,
      description:
        "Introducing a unique platform that facilitates seamless interaction between two distinct user groups. Those who are traveling from one place to another and others who want their items to be delivered from one place to another.",
      technologies: "React Js | Node Js | MongoDB | Express JS",
      link: "https://deliverytravel.netlify.app",
      github: "https://github.com/vasuGoel17/deliveryClient",
    },
    {
      id: 3,
      title: "Graphical Password by Image Segmentation",
      img: IMG3,
      description:
        "A two-step authentication system: Upon login, users are presented with a shuffled arrangement of images they uploaded during registration. To successfully authenticate, users must reorder the images correctly.",
      technologies: "React Js | Node Js | MongoDB | Express JS",
      link: "https://chipper-cucurucho-4021e1.netlify.app",
      github: "https://github.com/vasuGoel17/merncarbackend",
    },
    {
      id: 4,
      title: "My Portfolio",
      img: IMG4,
      description:
        "Explore my professional portfolio to discover the essence of who I am – from my journey in the tech realm to the impactful projects that define my expertise.",
      technologies: "Html | CSS | JavaScript | Jquery | ReactJs",
      link: "https://shiny-heliotrope-b3584f.netlify.app/",
      github: "https://github.com/vasuGoel17/my-portfolio",
    },
    {
      id: 5,
      title: "Admin Dashboard Table",
      img: IMG5,
      description:
        "Dive into the efficient and feature-rich Admin User Management Table, meticulously designed for seamless user administration. This comprehensive table brings forth an array of functionalities to streamline user data management.",
      technologies: "Html | CSS | JavaScript | ReactJs",
      link: "https://rad-madeleine-ee48bf.netlify.app/",
      github: "https://github.com/vasuGoel17/Admin-Dashboard-Table",
    },
    {
      id: 6,
      title: "InstruMentals",
      img: IMG6,
      description:
        "Embark on a harmonious journey with SonicSculpt, a unique music website that harmonizes the joy of listening with the thrill of drumming. Here's why SonicSculpt is your go-to destination for musical bliss:",
      technologies: "Html | CSS | JavaScript | NodeJs | MongoDb",
      link: "https://aesthetic-shortbread-88ad97.netlify.app",
      github: "https://github.com/vasuGoel17/instruMentals",
    },
  ];

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>PORTFOLIO</h2>
        <h5>My Recent Work</h5>
      </div>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} width="100%" height="100%" alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>

              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                  style={{ border: "2px solid black" }}
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <hr style={{ marginTop: "3rem" }} />
    </section>
  );
};

export default Portfolio;
