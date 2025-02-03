// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of academic and side projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "nav-read",
          title: "Read",
          description: "Some of my favorite books and research papers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/read/";
          },
        },{id: "post-how-i-built-a-chrome-extension-with-chatgpt-codeium-and-windsurf-in-30-minutes",
      
        title: 'How I Built a Chrome Extension with ChatGPT, Codeium, and Windsurf in 30... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./how-i-built-a-chrome-extension-with-chatgpt-codeium-and-windsurf-in-30-minutes-a729c0034849?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-deep-thoughts-unscripted-evolutional-vicious-cycle",
      
        title: 'Deep Thoughts Unscripted — Evolutional Vicious Cycle <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./unavoidable-vicious-cycle-036cd6dbb0a3?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-the-big-question-do-large-language-models-learn-like-humans",
      
        title: 'The Big Question — Do Large Language Models Learn Like Humans? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./the-big-question-do-large-language-models-learn-like-humans-c8bf525716ae?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-dive-deeper-information-retrieval-algorithms-for-rag",
      
        title: 'Dive Deeper — Information Retrieval Algorithms for RAG <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./dive-deeper-information-retrieval-algorithms-for-rag-6c83c81252ee?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-deep-thoughts-unscripted-the-right-way-to-learn",
      
        title: 'Deep Thoughts Unscripted — The Right Way to Learn <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./deep-thoughts-unscripted-the-right-way-to-learn-858c1330d4c8?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-data-engineer-101-part-1",
      
        title: 'Data Engineer 101 — Part 1 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./data-engineer-101-part-1-0487b7ab32eb?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-towards-solopreneur-risk-taking",
      
        title: 'Towards Solopreneur — Risk Taking <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./towards-solopreneur-risk-taking-d85da4d607d4?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-towards-solopreneur-noisy-world",
      
        title: 'Towards Solopreneur — Noisy World <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./towards-solopreneur-noisy-world-39c1ee81c348?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-towards-solopreneur-the-next-generation",
      
        title: 'Towards Solopreneur — The Next Generation <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./towards-solopreneur-the-next-generation-b4be0f789e49?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-towards-solopreneur-timing",
      
        title: 'Towards Solopreneur — Timing <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./towards-solopreneur-timing-29fb6f99ac86?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "projects-work-in-progress",
          title: 'Work In-Progress',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-culture-hong-kong",
          title: 'Culture - Hong Kong',
          description: "Feb 28, 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Culture-Hong-Kong/";
            },},{id: "projects-culture-japan",
          title: 'Culture - Japan',
          description: "Mar 15, 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Culture-Japan/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chun-hei-chau-59060913a", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@billy.chau.", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
