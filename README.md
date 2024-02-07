# Horoscope App


![horoscope app](https://github.com/kaplanh/horoscope_app/assets/101884444/afc25b1b-8ef9-4a6e-a0c5-5a27c412f3ea)

[:point_right: Click here to see on browser](https://kaplanh.github.io/horoscope_app/)

 **What's used in this app ?** |  **Author** |
|----------|------------|
|React - component |[Take a look at my portfolio](https://kaplanh.github.io/Portfolio_with_CssFlex/)|
|React - props|[Visit me on Linkedin](https://www.linkedin.com/in/kaplan-h/)|
|React - sass||    
|Deploy with GitHub Pages | |   
  

<br/>

## How To Run This Project 🚀

<br/>

### 💻 Install React 👇

```bash
yarn create react-app .  or npx create-react-app .
```
### 💻 Install Sass 👇

```bash
yarn add sass  or npm i sass
```

## 🔴 Delete these files and delete the imports👇

    - App.test.js
    - reportWebVitals.js
    - setupTests.js
    - favicon.ico
    - logo192.png
    - logo512.png
    - manifest.json
    - robots.txt

### 💻 Start the project 👇

```bash
yarn start or npm start
```
OR
- <strong>Clone the Repo</strong>

  ```sh
  git clone
  ```
  

- <strong>Install NPM packages</strong>

  ```sh
  npm install or yarn 
  ```

- <strong>Run the project</strong>

  ```sh
  npm start or yarn start
  ```

- <strong>Open the project on your browser</strong>

  ```sh
  http://localhost:3000/
  ```

- ### <strong>Enjoy! 🎉</strong>


## Project Skeleton 

```
Horoscope App(folder)
|
|----public (folder)
│     └── index.html
|----src (folder)
|    |--- components (folder)
|    |       |── header(folder)
│    │       |     ├── Header.jsx
│    │       |     ├── Header.scss
│    │       |
|    |       |── main(folder)
│    │       |     ├── Main.jsx
│    │       |     ├── Main.scss
│    │       |     ├── Card.jsx
│    │       |
|    |       |── navbar(folder)
│    │             ├── Navbar.jsx
│    │             ├── Navbar.scss
│    │
|    |--- helper (folder)
|    |       |── data.js
│    │       |── logo.png
│    │                      
│    |--- scss (folder)
|    |      ├── _reset.scss
|    |      ├── _mixins.scss
|    |      ├── _variables.scss
|    |      
|    |       
│    ├--- App.js
│    ├--- App.scss
│    │--- data.js
│    └--- index.js
│
│
|--- .gitignore
|── package-lock.json
├── package.json
|── README.md
|── yarn.lock

```

### At the end of the project, the following topics are to be covered;

- sass with react
  ```
   // src/scss/_reset.scss
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

   // src/scss/_variables.scss
       //? Colors
      $navyBlue: #042940;
      $darkGreen: #005c53;
      $olive: #9fc131;
      $neon: #dbf227;
      $beige: #d6d58e;
  
   // src/scss/_mixins.scss
    @mixin media-xsm {
    @media screen and (min-width: 0px) {
      @content;
    }
  }
  
  
  @mixin media-sm {
    @media screen and (min-width: 576px) {
      @content;
    }
  }



  
   // src/scss/app.scss
  
    @import "reset", "variables","mixins";
    body {
        background-color:$beige;
        text-align: center;
        }

   // src/components/navbar/Navbar.scss
  
    @import "../../scss/mixins";

  @include media-lg{
    .header{
        margin-top: 10rem;
    }
  }

  
   // src/App.jsx
     import "./scss/app.scss";

  ```
   



- Parent Component icinde json datayi map() leme
   ```
   // src/components/main/Main.jsx Parent component
   
         import { data } from "../../helpers/data";
        import "./Main.scss";
        import Card from "./Card";
        const Main = () => {
            // console.log(data);
            return (
                <div className="card-container">
                    {data.map((item, i) => (
                        // !props
                        // ?asagi data göndermenin 1.yolu
                        // <Card item={item} />
                        // böyle gönderirsek diger tarafta props.item.title seklinde yakalamaliyim
                        // ?asagi data göndermenin 2.yolu
                        <Card key={item.id} {...item} />
                        
                    ))}
                </div>
            );
        };
        export default Main;



   // src/components/main/Card.jsx Child component
   
       const Card = ({ title, date, image, desc }) => {
        // const { title, date, image, desc } = props;
        // console.log("ne geliyor", props);
        return (
            <div className="cards">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="date">
                    <h2>{date}</h2>
                </div>
                <img src={image} alt="" />
                <div className="card-over">
                    <p>{desc}</p>
                </div>
            </div>
        );
    };

  ```
- Deploy with GitHub Pages
  
-    ### 💻 write in Terminal 👇

```bash
// src
 npm i gh-pages or yarn add gh-pages
```

-    ### 💻  add this in scripts: "predeploy": "yarn run build",  "deploy": "gh-pages -d build" // if you use npm: "predeploy": "npm run build","deploy": "gh-pages -d build" 👇

  ```sh
// src/package.json

  "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "yarn run build", 
        "deploy": "gh-pages -d build"
    },
```
   
   ### 💻  add github.io link as homepage:  "homepage": "https://kaplanh.github.io/horoscope_app", 👇

```bash
// src/package.json
{
    "homepage": "https://kaplanh.github.io/horoscope_app",
    "name": "horoscope_app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "gh-pages": "^6.1.1",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-scripts": "5.0.1",
        "sass": "^1.70.0"
    },
```



-    ### 💻  write in Terminal 👇

  ```sh
    yarn run deploy  or npm run deploy
  ```

-    ### 💻  visit your page link 👇

  ```sh
  https://kaplanh.github.io/horoscope_app
 ```


- Image üzerine geldiginde alttan yukari dogru scrolsüz metin kaydirma

  ```jsx
   const Card = ({ title, date, image, desc }) => {
    // const { title, date, image, desc } = props;
    // console.log("ne geliyor", props);
    return (
        <div className="cards">
            <div className="title">
                <h1>{title}</h1>
            </div>
            <div className="date">
                <h2>{date}</h2>
            </div>
            <img src={image} alt="" />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
    );
  };


  ```

  ~~~css


  
    .cards {
        width: 500px;
        height: 350px;
        position: relative;
        overflow: hidden;        
        &:hover .card-over {
            transform: translate(0%);
        }
        &:hover img {
            opacity: 1;
        }



    .card-over {
        width: 500px;        
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        font-size: 1.5rem;
        z-index: 3;
        padding: 1rem;
        transform: translateY(100%);
        transition: transform 0.7s;
        max-height: 75%;
        overflow: auto;
        // ?scrollbari kaybetmek icin
        &::-webkit-scrollbar{
            display: none;
        }
  
    }
  ~~~

  
  

 

## Feedback and Collaboration
I value your feedback and suggestions. If you have any comments, questions, or ideas for improvement regarding this project or any of my other projects, please don't hesitate to reach out.
I'm always open to collaboration and welcome the opportunity to work on exciting projects together.
Thank you for visiting my project. I hope you have a wonderful experience exploring it, and I look forward to connecting with you soon!



<p align="center"> ⌛<strong> Happy Coding </strong> ✍ </p>

