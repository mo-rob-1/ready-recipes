# Ready Recipes: How I Built The Site

The purpose of this project was to create a headless WordPress site using GatsbyJS. What makes this site unique is that WordPress is only used for the backend and Gatsby is used for the frontend. WordPress is a content management and GatsbyJS is a React-based framework and a static site generator. WordPress is the perfect tool for storing the site's data and Gatsby is perfect for delivering a fast and high-performing site.

## Research

I had no prior experience in building a headless WordPress site with GatsbyJS. The main reason why this appealed to me and pushed me to create this project is that it gave me the opportunity to learn a new skill so I can share with you what I have learnt whilst building the site in this write-up. I also noticed that other developers were starting to use a headless CMS to develop sites and apps. I therefore spent a lot of time finding and absorbing new learning materials I found online to help me create this project.

I wanted to create a site where approved users can log in to the WordPress backend and add their own content. This led me to the idea of creating a recipes site. Recipes sites are usually simple whilst being very informative and I wanted to achieve this in this project.

## Design

As this was a food recipes site, I wanted the site to resemble the aesthetics of a cookbook. I created a moodboard on Pinterest where I found and added inspirations from other recipes sites, cookbooks, cooking magazines etc. I took into consideration the fonts used, colours and imagery. The way the site currently looks was inspired by the design phase.

## Develop

I took onboard the information and notes I gathered from the research and design phase and begun to develop the site.

Firstly, I created an empty repo on GitHub where all the code will be stored. I also installed a fresh copy of WordPress. I then went into VSCode, opened up the terminal and installed a new GatsbyJS project which gave me the boilerplate code to begin developing the site.

To connect WordPress to Gatsby all I had to do was add the WordPress GraphQL URL to the gatsby-config.js file. I then stopped and restarted the terminal in order for this to work.

Within the source folder, I created a 'components' folder. This is where each section of the site lives, e.g. Header, Footer, Carousel, Navigation etc. I also created a 'pages' folder for the following pages; index, about us, recipes, blog, contact and the 404 page.

In order to get the data stored in WordPress and display it in the browser, I used GraphQL which is a query language for APIs. For example, I created the navigation menu in WordPress and then used GraphQL to query the menu data which would then return the data in a JSON format ready to be used and displayed in the browser using React. I created a custom hook file where I stored the returned JSON data from GraphQL. I could then import the custom hook into any of the components or pages. In this case, I imported the custom hook into the navigation component in order to display the site's menu. I repeated this process for other data stored within WordPress such as the posts, images and the data from the recipes custom post type. I created a 'hooks' folder to store all of my custom hooks. Doing this kept my code clean and organised.

I used Styled Components which is a React library to style the components and pages. This library help keep the concerns of styling and element architecture separated and make components more readable. Using Styled Components kept my code organised as I developed a component in one file and styled the component in another file within the same component folder. To style the pages I used a similar method but this time I created a 'styles' which would house all the stylings for each page.

To customise the WordPress edit screen and tailor the content editing experience I used the Advanced Custom Fields plugin. For example, I create several fields for the recipes custom post type. Whenever the user goes to create a new recipe they can add a recipe overview, an image of the food, cooking time, number of serves, preparation information and the ingredients. These fields were created using the ACF plugin and GraphQL to query the data from the plugin.

## Deploy

I used Gatsby Cloud to host the Gatsby files. This is where I linked the Ready Recipes repository from GitHub to Gatsby Cloud. I also used webhooks for automatic builds whenever a change has been made to the code. I also bought a WordPress hosting plan to deploy the WordPress backend which stores all of the data for the site.

Once I deployed the site I ran a performance check on the site using Lighthouse. The site scored high in performance, accessibility, best practices and SEO.

## Wrapping up

As a front-end developer, I am always finding new ways to challenge myself and develop my skillset. I learnt a lot about using WordPress as a headless CMS with GatsbyJS to build this site. I was pleased to develop a fast, accessible and overall a high performing site whilst using a CMS as a data source. Using a headless CMS to build sites and applications is a topic which I will definitely explore more as I continue my journey in the big world of web development.
