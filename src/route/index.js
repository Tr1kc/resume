// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: "Maksym",
    lastname: "Tkachenko",
  },
  position: "Junior Fullstack JS Developer",
  salary: `600$ в місяц` ,
  address:"Харківська обл,Чугуїв",
};

var footer = {
  social: {
    email: {
      text: 'Maks@mail.com',
      href: "mailto:Maks@mail.com",
    },
    phone: {
      text: "+380930671123",
      href: "tel:+380670000123",
    },
    linkedin: {
      text: "Linkedin",
      href: "https://www.linkedin.com/in/maks-test",
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Summary",
    },

    header,

    main: {
      summary: { 
        title: "Summary",
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.` ,
      },
  
      experience: {
        title:"Other experience",
        text:`Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
        },
    },

    footer,
  })
})

// ================================================================
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Skills",
    },

    header,

    main: {
      hobbies: [
        {
          name:'football',
          isMain: true,
        },
        {
          name:'volleyball',
          isMain: false,
        },
        {
          name:'basketball',
          isMain: true,
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 3,
          isTop: false,
        },
        {
          name: 'VS Cade',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git',
          point: 4,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 2,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: "Resume | Education",
    },

    header,

    main: {
      certificates: [
        {
          name:"Диплом 1",
          id: 843244,
        },
        {
          name:"Диплом 2",
          id: 848421,
        },
        {
          name:"Диплом 3",
          id: 848771,
        },
      ],
      educations: [
        {
          name:'Гімназія',
          isEnd: true,
        },
        {
          name:'ЗОШ № 3 школа',
          isEnd: false,
        },
        {
          name:'ЗОШ № 5 школа',
          isEnd: true,
        },
        {
          name:'ЗОШ № 1 школа вечірня',
          isEnd: false,
        },
        {
          name:'Ліцей № 2',
          isEnd: true,
        },
        {
          name:'Технікум № 4',
          isEnd: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout:'big',
    

    page: {
      title: "Resume | Work",
    },

    header,

    main:{
      works:[
        {
          position : 'Junior Fullstack Developer',
          company:{
            name: 'IT Brains',
            url: null,
          },
          duration:{
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://web.skillzrun.com/',
              about: `Good team player, every colleague is a friend to me.`,
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: `Analyzing by simple mathematics models and preparing`, 
                },
                {
                  name: `I learn the domain and try to understand the idea`, 
                },
              ],
              stackAmount: '8',
              awardAmount: '7',
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {

    layout:'basic',

    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// ================================================================
// Підключаємо роутер до бек-енду
module.exports = router
