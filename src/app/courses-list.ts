import { Course } from "./course.model";
export const courses: any[] = [
  {
    id: '8f4aa769-7841-424c-a817-a6b50ae75c66',
    title: 'Introduction to Computer Science',
    description:
      'This course introduces students to the basic concepts of computer science. It covers the basic programming concepts, data structures, and algorithms, and introduces students to the software development process. Students will learn to use a programming language, and to write algorithms in a programming language. This course is a prerequisite for the CS program.',
    image:
      'https://scontent.ftun16-1.fna.fbcdn.net/v/t1.18169-9/26167375_1635106093214957_5060003631117229952_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ED2j9blggBMAX-7gLra&_nc_ht=scontent.ftun16-1.fna&oh=45a4f5642ba5fdc7aa81001e55aa173f&oe=61C4BDD7',
    last_update: '10/2020',
    instructor: 'Samuel Spencer',
    language: 'English',
    price: 39.99,
    goals: [
      'Understand how computers work from inside out',
      'Understand basic concepts of software programming (in Java, Python, PHP)',
      'Fundamentals of databases, mobile apps and cloud computing',
      'Write basic software programs and applications',
    ],
    requirements: [
      'No technical prerequisites for this course.',
      "I assume that you have used a computer and/or smartphones before, but I don't expect you to have any other technical knowledge.",
    ],
  },
  {
    id: '37fc60d7-65d0-4a08-a3d3-980086102e71',
    title: 'Information Security Awareness-ISO 27001:2013',
    description:
      'The essential objective of this course is to create awareness within the organization regarding various basic requirements of the standard & impart working knowledge on how these requirements can be interpreted to suit the organization’s processes, products, people & customers.',
    image:
      'https://freedownloadcourse.com/wp-content/uploads/2021/03/download-isms-awareness.jpg',
    last_update: '5/2020',
    instructor: 'infySEC Global',
    language: 'English',
    price: 79.99,
    goals: [
      'Understand how to be a secured computer user',
      'Understand the need for Business Continuity planning and Disaster Recovery',
      'Understand how to be respond to various security incidents',
      'How to become a cyber safe employee',
    ],
    requirements: [
      'No prior training is required to take this course as we will start with the basics.',
    ],
  },
  {
    id: 'e18129b9-a3d6-46e4-ab40-da7501cd571d',
    title: 'Microservices with Node JS and React',
    description:
      'Event-Based Architecture? Covered! Server side rendering with React? Yep.  Scalable, production-ready code? Its here! Microservices are the number one solution for building and scaling out apps that are intended to grow.  Just one little issue: there are few resources online that delve into the most complex and nasty issues around them!  I built this course to fix that.  This course tackles every major issues around microservices head on. From challenges with data replication to confusing unordered event streams, every major challenge of building microservices is covered.',
    image:
      'https://dz2cdn1.dzone.com/storage/temp/12898908-microservices-nodejs.jpg',
    last_update: '10/2021',
    instructor: 'Kennedy Otis',
    language: 'English',
    price: 59.99,
    goals: [
      'Architect large, scalable apps using a collection of microservices',
      'Deploy a multi-service app to the cloud with Docker and Kubernetes',
      'Solve concurrency issues in a distributed systems environment',
      'Leverage your Javascript skills to build a complex web app',
      'Build a Server-Side Rendered React App to render data from your microservices',
      'Understand how enterprise companies design their infrastructure',
      'Share reusable code between multiple Express servers using custom NPM packages',
      'Write comprehensive tests to ensure each service works as designed',
      'Communicate data between services using a lightning-fast event bus',
      'Write nothing but production-level code. No cutting corners!',
    ],
    requirements: [
      'Basic knowledge of Javascript and Express is required',
      'Knowledge of React is good, but not needed',
      'You must be familiar and comfortable with the command line',
    ],
  },
  {
    id: 'a1675299-1373-4d4b-b887-61f006a61f93',
    title: 'The Complete JavaScript Course 2021: From Zero to Expert!',
    description:
      "JavaScript is the most popular programming language in the world. It powers the entire modern web. It provides millions of high-paying jobs all over the world. That's why you want to learn JavaScript too. And you came to the right place!",
    image:
      'https://www.freetrained.com/wp-content/webpc-passthru.php?src=https://i2.wp.com/www.freetrained.com/wp-content/uploads/2021/09/The-Complete-JavaScript-Course-2020.png&nocache=1?w=1200&ssl=1',
    last_update: '10/2021',
    instructor: 'Jonas Schmedtmann',
    language: 'English',
    price: 39.99,
    goals: [
      'Become an advanced, confident, and modern JavaScript developer from scratch',
      'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
      'Become job-ready by understanding how JavaScript really works behind the scenes',
      'How to think and work like a developer: problem-solving, researching, workflows',
      'JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.',
      'Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.',
      'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.',
      "Complex concepts like the 'this' keyword, higher-order functions, closures, etc.",
      'Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs',
      'How to architect your code using flowcharts and common patterns',
      'Modern tools for 2021 and beyond: NPM, Parcel, Babel and ES6 modules',
      'Practice your skills with 50+ challenges and assignments (solutions included)',
      'Get friendly support in the Q&A area',
      'Design your unique learning path according to your goals: course pathways',
    ],
    requirements: [
      'No coding experience is necessary to take this course! I take you from beginner to expert!',
      'Any computer and OS will work — Windows, macOS or Linux. We will set up your text editor the course.',
      'A basic understanding of HTML and CSS is a plus, but not a must! The course includes an HTML and CSS crash course.',
    ],
  },
  {
    id: 'c63072f8-35bb-4994-82d9-a773b811ba61',
    title: 'Angular - The Complete Guide (2021 Edition)',
    description:
      "Angular 12 simply is the latest version of Angular 2, you will learn this amazing framework from the ground up in this course! Join the most comprehensive, popular and bestselling Angular course on Udemy and benefit not just from a proven course concept but from a huge community as well! From Setup to Deployment, this course covers it all! You'll learn all about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: You'll learn how to deploy an application!",
    image: 'https://cdn-screenshots.comidoc.net/webp/756150_1.webp',
    last_update: '10/2021',
    instructor: 'Maximilian Schwarzmüller',
    language: 'English',
    price: 89.99,
    goals: [
      'Develop modern, complex, responsive and scalable web applications with Angular 12',
      'Fully understand the architecture behind an Angular application and how to use it',
      'Use the gained, deep understanding of the Angular fundamentals to quickly establish yourself as a frontend developer',
      'Create single-page applications with one of the most modern JavaScript frameworks out there',
    ],
    requirements: [
      'NO Angular 1 or Angular 2 knowledge is required!',
      "Basic HTML and CSS knowledge helps, but isn't a must-have",
      "Prior TypeScript knowledge also helps but isn't necessary to benefit from this course",
      'Basic JavaScript knowledge is required',
    ],
  }
];
