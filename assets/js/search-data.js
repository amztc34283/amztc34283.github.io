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
        },{id: "post-classics-how-to-think-about-deep-learning",
      
        title: 'Classics — How to Think About Deep Learning <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./classics-how-to-think-about-deep-learning-952c715e3f83?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-fuzz-or-buzz",
      
        title: 'Fuzz or Buzz? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./fuzz-or-buzz-39a1c17b9a84?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-the-hidden-chaos-of-open-source-mlops-why-distributed-training-still-breaks-in-production",
      
        title: 'The Hidden Chaos of Open-Source MLOps: Why Distributed Training Still Breaks in Production... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./the-hidden-chaos-of-open-source-mlops-why-distributed-training-still-breaks-in-production-ebc0d7b9ba5a?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-novel-the-last-correct-answer",
      
        title: 'Novel – The Last Correct Answer <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./novel-the-last-correct-answer-ffac7b9fbe82?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-attune-your-belief",
      
        title: 'Attune Your Belief <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./attune-your-belief-d6ee420e56ea?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-why-do-we-argue",
      
        title: 'Why Do We Argue? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./why-do-we-argue-d96b5c38263d?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-dear-dopamine",
      
        title: 'Dear Dopamine <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./dear-dopamine-8a130d52172f?source=rss-4bb748cbabe3------2", "_blank");
        
      },
    },{id: "post-my-favorite-algorithm-monte-carlo-algorithm",
      
        title: 'My Favorite Algorithm — Monte Carlo Algorithm <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@billy.chau./my-favorite-algorithm-monte-carlo-algorithm-c61c1aaea7d5?source=rss-4bb748cbabe3------2", "_blank");
        
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
    },{id: "projects-culture-hong-kong",
          title: 'Culture - Hong Kong',
          description: "Feb 28, 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Culture-Hong-Kong/";
            },},{id: "projects-culture-japan",
          title: 'Culture - Japan',
          description: "Mar 15, 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Culture-Japan/";
            },},{id: "projects-raft",
          title: 'Raft',
          description: "Strong Consistency Algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Raft/";
            },},{id: "projects-randomness",
          title: 'Randomness',
          description: "Random variable is not so random",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Randomness/";
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
