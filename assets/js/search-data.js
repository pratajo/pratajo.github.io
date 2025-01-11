// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-installing-fedora-41-kde-plasma",
      
        title: "Installing Fedora 41 KDE Plasma",
      
      description: "Fedora 41 KDE Plasma",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/fedora-41-kde/";
        
      },
    },{id: "post-installing-fedora-41-xfce",
      
        title: "Installing Fedora 41 Xfce",
      
      description: "Fedora 41 Xfce",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/fedora-41-xfce/";
        
      },
    },{id: "post-photo-restoration-with-gimp",
      
        title: "Photo Restoration with GIMP",
      
      description: "Photo Restoration",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-restoration/";
        
      },
    },{id: "post-installing-openindiana-hipster-2022-10",
      
        title: "Installing OpenIndiana Hipster 2022.10",
      
      description: "OpenIndiana Hipster 2022.10",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/openindiana/";
        
      },
    },{id: "post-fedora-virtualization",
      
        title: "Fedora Virtualization",
      
      description: "KVM",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/virtualization/";
        
      },
    },{id: "post-change-the-partition-owner",
      
        title: "Change the partition owner",
      
      description: "Partition owner",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/code/";
        
      },
    },{id: "post-focusrite-itrack-dock-and-roland-a-49",
      
        title: "Focusrite iTrack Dock and Roland A-49",
      
      description: "Roland A-49 parameters",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/focusrite/";
        
      },
    },{id: "post-focusrite-itrack-dock-noisy-when-ipad-is-charged",
      
        title: "Focusrite iTrack Dock noisy when iPad is charged",
      
      description: "Focusrite iTrack Dock noisy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/focusrite-noisy/";
        
      },
    },{id: "news-fedora-linux-41-released",
          title: 'Fedora Linux 41 released',
          description: "",
          section: "News",},{id: "news-tratado-de-estenografia-sistema-martiniano-1ª-edição-exclusive-to-the-portuguese-language",
          title: 'Tratado de Estenografia - Sistema Martiniano, 1ª edição (Exclusive to the Portuguese language)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-my-website-is-being-converted-to-github-sparkles-smile",
          title: 'My website  is being converted to Github! :sparkles: :smile:',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%6E%66%6F@%70%72%61%74%61%6A%6F.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.pratajo.com/en/", "_blank");
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
