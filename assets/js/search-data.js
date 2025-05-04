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
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-step-by-step-instructions-to-get-al-folio-up-and-running-on-your-local-machine-using-docker-and-visual-studio-code-vs-code",
        
          title: "Step by step instructions to get al-folio up and running on your local...",
        
        description: "Local Setup with Development Containers",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/vscode/";
          
        },
      },{id: "post-installing-fedora-42-kde-plasma",
        
          title: "Installing Fedora 42 KDE Plasma",
        
        description: "Fedora 42 KDE Plasma",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fedora-42-kde/";
          
        },
      },{id: "post-installing-fedora-42-xfce",
        
          title: "Installing Fedora 42 Xfce",
        
        description: "Fedora 42 Xfce",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fedora-42-xfce/";
          
        },
      },{id: "post-installing-fedora-42-beta-kde-plasma",
        
          title: "Installing Fedora 42 Beta KDE Plasma",
        
        description: "Fedora 42 Beta KDE Plasma",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fedora-42beta-kde/";
          
        },
      },{id: "post-installing-fedora-42-beta-xfce",
        
          title: "Installing Fedora 42 Beta Xfce",
        
        description: "Fedora 42 Beta Xfce",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/fedora-42beta-xfce/";
          
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
      },{id: "post-jekyll-on-fedora-installation-and-use",
        
          title: "Jekyll on Fedora - Installation and use",
        
        description: "Generator of static sites with blog recognition",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jekyll/";
          
        },
      },{id: "post-lamp-on-fedora",
        
          title: "LAMP on Fedora",
        
        description: "LAMP stack to manage a web server",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/lamp/";
          
        },
      },{id: "post-creating-one-or-multiple-buttons-to-copy-text-to-the-clipboard",
        
          title: "Creating one or multiple buttons to copy text to the clipboard",
        
        description: "HTML and JavaScript",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/copy-buttons/";
          
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
      },{id: "post-installing-development-tools-and-kdevelop-on-fedora",
        
          title: "Installing Development Tools and KDevelop on Fedora",
        
        description: "Development Tools and KDevelop",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/kdevelop/";
          
        },
      },{id: "post-how-to-change-the-hostname-on-linux",
        
          title: "How to change the hostname on Linux",
        
        description: "Changing the hostname",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/hostname/";
          
        },
      },{id: "post-asus-prime-x370-pro-and-fedora",
        
          title: "Asus Prime X370-PRO and Fedora",
        
        description: "Changing BIOS parameters for Fedora",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/asus-x370/";
          
        },
      },{id: "post-nmap-practical-use",
        
          title: "Nmap - practical use",
        
        description: "Install a network scanner",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/nmap/";
          
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
          
            window.location.href = "/blog/2021/partition/";
          
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
      },{id: "books-aços-características-e-tratamentos-6ª-ed",
          title: 'Aços - Características e tratamentos (6ª Ed)',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2022_metais/";
            },},{id: "books-angelo-marti-no-soberano-congresso-nacional",
          title: 'Angelo Marti no Soberano Congresso Nacional',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_esteno1/";
            },},{id: "books-la-fractura-en-los-materiales-metálicos",
          title: 'La Fractura en los Materiales Metálicos',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2023_metais/";
            },},{id: "books-estenografia-sua-orgânica-e-função",
          title: 'Estenografia - Sua orgânica e função',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_esteno1/";
            },},{id: "books-programa-de-um-curso-complementar-teórico-de-estenografia-do-congresso-da-república",
          title: 'Programa de um Curso Complementar Teórico de Estenografia do Congresso da República',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_esteno2/";
            },},{id: "books-tachygraphia",
          title: 'Tachygraphia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/2024_esteno3/";
            },},{id: "news-fedora-linux-41-released",
          title: 'Fedora Linux 41 released',
          description: "",
          section: "News",},{id: "news-tratado-de-estenografia-sistema-martiniano-1ª-edição-exclusive-to-the-portuguese-language",
          title: 'Tratado de Estenografia - Sistema Martiniano, 1ª edição (Exclusive to the Portuguese language)...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-my-website-is-being-converted-to-github",
          title: 'My website is being converted to Github!',
          description: "",
          section: "News",},{id: "news-my-website-was-converted-to-github-sparkles-smile",
          title: 'My website was converted to Github! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-fedora-linux-42-beta-released",
          title: 'Fedora Linux 42 Beta released',
          description: "",
          section: "News",},{id: "news-fedora-linux-42-released",
          title: 'Fedora Linux 42 released',
          description: "",
          section: "News",},{id: "projects-my-birthplace",
          title: 'My birthplace',
          description: "Castelo Branco - Portugal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_fun-albi/";
            },},{id: "projects-photo-gallery",
          title: 'Photo gallery',
          description: "Serendipitous friendships",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2024-12-04-photo-gallery/";
            },},{
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
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/pratajo128", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.pratajo.com/", "_blank");
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
