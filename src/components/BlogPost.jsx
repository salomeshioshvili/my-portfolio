import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');
  const [headings, setHeadings] = useState([]);

  const blogPosts = {
    'favorite-development-tools': {
      title: "My Favorite Development Tools",
      date: "Jan 8, 2026",
      readTime: "4 min read",
      category: "TOOLS & SETUP",
      author: "Salome Shioshvili",
      image: "https://images.pexels.com/photos/28949221/pexels-photo-28949221/free-photo-of-vibrant-aurora-borealis-over-forest-night-sky.jpeg",
      content: `
      <h2 id="introduction">Introduction</h2>
      <p>As a student developer, I've learned that having the right tools doesn't mean having the most expensive one. It means finding what actually works for your workflow. Here's what keeps me productive (and occasionally saves me from debugging disasters at midnight).</p>
      
      <h2 id="jetbrains">The JetBrains Suite</h2>
      <p>Visual Studio Code gets all the hype, but I'm Team JetBrains. PyCharm for Python projects, DataGrip when I need to actually understand what's happening in my databases, and their other IDEs when the project demands it.</p>
      <p>Yeah, they're a bit heavy on resources, but the intelligent code completion and refactoring tools are worth it. Plus, student licenses are free, which is a pretty solid deal when you're living on instant ramen budget.</p>
      <p>The integrated terminal, database tools, and Git interface mean I rarely leave the IDE. Everything I need is just a keyboard shortcut away, which matters when you're trying to finish an assignment that's due in 3 hours.</p>

      <h2 id="vscode">VS Code for Quick Edits</h2>
      <p>That said, I still keep VS Code around for quick edits, markdown files, and when I need something that launches instantly. It's lightweight, has extensions for literally everything, and sometimes you just don't need the full power of an IDE.</p>
      <p>My essential extensions: Prettier (because consistent formatting shouldn't be a debate), GitLens (to figure out who broke what and when), and Live Server (for those moments when you need to see changes immediately).</p>

      <h2 id="design-inspiration">Design Inspiration: Behance & Pinterest</h2>
      <p>Before I write any code for a UI, I spend time on Behance and Pinterest. Not to copy, but to understand what's actually working in modern design. Color schemes, layouts, interaction patterns—it's all there.</p>
      <p>Behance is where I go for polished, professional work. You can see the thought process behind designs, and it's like having a free design education. Pinterest is more chaotic but great for quickly building mood boards and collecting ideas.</p>
      <p>I've got boards for dark mode UIs, landing page inspiration, dashboard layouts, and about fifty other categories. When I'm stuck on a design decision, scrolling through them usually sparks something.</p>

      <h2 id="github">GitHub: Version Control & Learning</h2>
      <p>GitHub is non-negotiable. It's not just for backing up code—it's where I learn how other people solve problems. Reading through popular repos teaches you more than most tutorials.</p>
      <p>I've learned to write better commit messages (no more "fixed stuff" commits at 3 AM), use branches properly, and actually read documentation. Plus, having a green contribution graph is weirdly motivating.</p>
      <p>The best part? You can literally see how professional projects are structured. Want to know how to organize a React app? Find a popular open-source project and study it.</p>
      
      <h2 id="other-tools">Other Tools That Matter</h2>
      <p><strong>Craft:</strong> All my project ideas, notes from courses, and code snippets I want to remember live here. It's messy but organized chaos.</p>
      <p><strong>Figma / Codepen:</strong> For when I need to quickly mock up an idea before diving into code. The free tier is generous enough for student projects.</p>
      
      <h2 id="conclusion">Final Thoughts</h2>
      <p>Your tools should make coding feel easier, not harder. Don't get caught up in what everyone else uses—try things out and stick with what clicks for you.</p>
    `
    },
    'future-projects': {
      title: "Projects I Want to Build",
      date: "Jan 9, 2026",
      readTime: "5 min read",
      category: "FUTURE PROJECTS",
      author: "Salome Shioshvili",
      image: "https://images.pexels.com/photos/34558610/pexels-photo-34558610.jpeg",
      content: `
      <h2 id="intro">The Ideas Folder</h2>
      <p>I have this Notion page called "Maybe Someday" that's full of half-baked project ideas. Some are ambitious, some are ridiculous, and a few might actually be worth building. Here are the ones I keep coming back to.</p>
      
      <h2 id="visual-code-editor">A Visual Code Editor That Doesn't Suck</h2>
      <p>Imagine coding, but instead of just staring at text, you see your components, functions, and data flow as actual visual elements. Not like those block-based kid's programming tools, something that works for real code but gives you a visual map of what's happening.</p>
      <p>Think Figma's canvas but for code architecture. You could drag to reorganize components, see connections between files, and understand your codebase at a glance. Especially useful when you inherit a project with zero documentation.</p>
      <p>Would it work? No idea. But I keep thinking about how much time I waste just trying to figure out where everything is in larger projects.</p>

      <h2 id="design-system">Personal Design System Generator</h2>
      <p>You feed it a few images you like, maybe some websites you think look cool, and it generates a complete design system: colors, typography, spacing, components. All the boring setup work automated.</p>
      <p>The output would be actual code you can use: CSS variables, Tailwind config, Figma files. It's like having a designer friend who gets your vibe and does all the tedious work of setting up consistent styling.</p>
      <p>I'm tired of starting projects and spending the first day just picking colors and fonts. Let AI handle that so I can actually build things.</p>

      <h2 id="music-visualizer">Interactive Music Visualizer Platform</h2>
      <p>A web app where you can create and share real-time music visualizers. Upload a song, code the visualizer using a simple API, and share it. Think CodePen but specifically for audio-reactive visuals.</p>
      <p>The cool part: users could remix each other's visualizers, combine different techniques, and build a library of effects. Learning creative coding through music seems way more engaging than following tutorials.</p>
      <p>Plus, imagine discovering new music through visualizations. The visual style could help you find songs with similar vibes.</p>

      <h2 id="portfolio-generator">Smart Portfolio Generator</h2>
      <p>Connect your GitHub, and it automatically generates a portfolio site that actually showcases your projects well. It would read your READMEs, analyze your code to figure out the tech stack, and even generate screenshots if the project is deployed.</p>
      <p>None of that "build your portfolio from scratch" stuff. Just authenticate with GitHub, pick a template, and get a professional site in minutes. With options to customize if you want, but not required.</p>
      <p>For students like me who have projects scattered everywhere and no time to build yet another portfolio site, this would be perfect.</p>

      <h2 id="reading-app">Distraction-Free Reading App</h2>
      <p>An app that fights back against doomscrolling. You set a timer, pick an article or book, and the app literally blocks everything else. No notifications, no other apps, just you and the content.</p>
      <p>But here's the twist: it tracks what you actually finish reading and suggests similar content. Over time, it learns your interests and helps you build a real reading habit instead of just collecting bookmarks you'll never open.</p>
      <p>Maybe it's not revolutionary, but if it helps me read more and scroll less, I'd use it every day.</p>

      <h2 id="why">Why Bother?</h2>
      <p>Most of these will probably never get built. That's fine. The point isn't to have a perfect execution plan—it's to keep thinking about what could exist. Some of my best actual projects started as random ideas I kept revisiting.</p>
      <p>Plus, maintaining an ideas list means when I have free time, I'm not staring at a blank screen wondering what to build. I just pick something from the list and start experimenting.</p>
    `
    },
    'my-lifestyle': {
      title: "My Daily Routine & Lifestyle",
      date: "Jan 10, 2026",
      readTime: "6 min read",
      category: "LIFESTYLE",
      author: "Salome Shioshvili",
      image: "https://images.pexels.com/photos/4087825/pexels-photo-4087825.jpeg",
      content: `
      <h2 id="morning">Morning? What Morning?</h2>
      <p>Let's be real. I'm not waking up at 5 AM to watch the sunrise and journal about my dreams. I wake up late. Like, really late. Sometimes afternoon-late. My productivity doesn't happen in the early morning; it happens when it happens.</p>
      <p>The whole "rise and grind" culture? Not for me. I've tried it. It sucked. Turns out I do my best thinking when the sun is setting, not rising. So I've just accepted it.</p>
      
      <h2 id="scrolling">The Scroll Phase</h2>
      <p>First thing I do after waking up? Scroll. Discord for tech news and hot takes, Reddit for whatever rabbit hole seems interesting, Tiktok for a quick dopamine hit. It's mindless, sure, but it's also how I ease into the day.</p>
      <p>I know everyone says "don't look at your phone first thing" but honestly? It works for me. By the time I'm done scrolling, my brain is actually awake and ready to do something productive.</p>
      <p>Sometimes I find interesting project ideas, design inspiration or solutions to problems I was stuck on. The key is knowing when to stop scrolling and start building.</p>

      <h2 id="coding">Coding: The Main Event</h2>
      <p>Once I'm actually at my desk (anywhere between noon and 3 PM), I code. This is the good part—when time disappears and you're just in the zone solving problems.</p>
      <p>I don't do the Pomodoro technique or any of that structured timing stuff. I work until I hit a natural stopping point—either I solve the problem, get stuck and need a break, or realize I've been sitting for 4 hours straight.</p>
      <p>Music is essential. Usually lo-fi or something without lyrics so my brain doesn't try to process words while coding. When I need energy, I switch to something more upbeat.</p>
      <p>My best coding happens late afternoon through evening. There's something about knowing the day is winding down that makes me focus better. Or maybe it's just when my brain finally decides to cooperate.</p>

      <h2 id="eating">Eating: When I Remember</h2>
      <p>My eating schedule is... chaotic. Sometimes I forget meals exist until my stomach reminds me. Other times I'm snacking constantly while debugging.</p>
      <p>I've tried meal prepping and eating at consistent times. Didn't stick. Now I just keep easy food around—stuff I can grab without thinking. The goal is to not let hunger kill my productivity.</p>
      <p>Chocolate is the one constant. Way too much chocolate. I know it's not healthy, but let's tackle one problem at a time.</p>

      <h2 id="reading">Reading: The Wind-Down</h2>
      <p>Late at night, when I'm too tired to code but not tired enough to sleep, I read. Articles,  posts, sometimes actual books (PDFs, not physical ones).</p>
      <p>Reading is how I learn without the pressure of having to immediately apply it. I can explore topics I'm curious about—system design, new frameworks, random CS concepts—without committing to building anything.</p>
      <p>It's also the only time my brain isn't in "must be productive" mode. Just absorbing information for the sake of it, which ironically makes it more valuable later when I'm working on projects.</p>

      <h2 id="reading">Reading: The Wind-Down</h2>
      <p>Late at night, when I'm too tired to code but not tired enough to sleep, I read. But not tech stuff—I need my brain to actually rest. Fantasy and romance novels are my escape. PDFs on my tablet, because physical books require turning on lights and I'm already half-asleep.</p>
      <p>Currently rotating between fantasy series with complex magic systems and romance books that are just fun and don't require deep thinking. It's the complete opposite of debugging code, which is exactly why it works.</p>
      <p>Sometimes I'll read tech articles or blog posts about random topics I'm curious about, but that's more mid-day when I want to learn something new without the pressure of building it immediately. Night reading is purely for escapism—dragons, magic and love stories.</p>

      <h2 id="sleep">Sleep: Eventually</h2>
      <p>I should probably sleep more consistently. Most nights I'm up until 3-4 AM, not because I'm working, but because that's just when my brain decides to be awake.</p>
      <p>I've tried fixing my sleep schedule multiple times. It works for a week, then slowly drifts back to late nights. At this point, I've just accepted it.</p>
      <p>The rule I try to follow: at least 7 hours, even if those hours are from 4 AM to 11 AM. Sleep quality matters more than when it happens.</p>

      <h2 id="reality">The Reality Check</h2>
      <p>Is this the optimal lifestyle? Probably not. Do productivity gurus hate it? Definitely. Does it work for me? Mostly.</p>
      <p>I'm a student, I'm figuring things out, and I'm building stuff I care about. My routine is chaotic, but it's mine. As long as deadlines get met and projects get finished, I'm not too worried about following someone else's perfect morning routine.</p>
      <p>The point is finding what works for YOU, not copying what works for someone else. Even if what works for you is waking up at noon and coding until midnight.</p>
    `
    }
  };

  const post = blogPosts[slug];

  // Extract headings for table of contents
  useEffect(() => {
    if (post) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.content;
      const h2Elements = tempDiv.querySelectorAll('h2');
      const headingsArray = Array.from(h2Elements).map(h2 => ({
        id: h2.id,
        text: h2.textContent
      }));
      setHeadings(headingsArray);
    }
  }, [post]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = headings.map(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          return {
            id: heading.id,
            offsetTop: element.offsetTop
          };
        }
        return null;
      }).filter(Boolean);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  useEffect(() => {
    // Handle clicks / hash changes from the Navbar (e.g. "#about", "#projects") while on a blog page.
    const onHashChange = () => {
      const hash = window.location.hash; // includes the leading '#'
      if (hash && window.location.pathname !== '/') {
        // Navigate to home, then scroll to the element with the hash.
        navigate('/', { replace: false });
        // Give React time to mount the home DOM, then scroll and update the URL to include the hash.
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // Update browser URL to include hash on the home path
          window.history.replaceState(null, '', '/' + hash);
        }, 120);
      }
    };

    // If the page loads with a hash while on a blog page, perform the same redirect/scroll.
    if (location.hash && location.pathname !== '/') {
      onHashChange();
    }

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigate, location]);

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <div className="not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')}>
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <div className="blog-post-container">

        {/* HERO: use post.image as blurred background */}
        <header
          className="post-hero"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="hero-inner">
            <div className="post-category hero-category">{post.category}</div>
            <h1 className="post-title hero-title">{post.title}</h1>
            <div className="post-meta hero-meta">
              <span className="post-author">By {post.author}</span>
              <span className="meta-divider"></span>
              <span className="post-date">{post.date}</span>
              <span className="meta-divider"></span>
              <span className="post-read-time">{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          {/* Main Content (left) */}
          <div className="main-content">
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <button onClick={() => navigate('/')} className="back-to-home">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
          </div>

          {/* Table of Contents Sidebar (right) */}
          <aside className="table-of-contents">
            <div className="toc-sticky">
              <h3 className="toc-title">Table of Contents</h3>
              <nav className="toc-nav">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`toc-link ${activeSection === heading.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(heading.id)?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
};

export default BlogPost;