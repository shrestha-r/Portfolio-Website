# 🌐 Portfolio Website – Rahul Shrestha

A personal portfolio website built using **HTML, CSS, and JavaScript** to showcase my projects, technical skills, and placement availability. Designed to be lightweight, responsive, and easy to navigate—perfect for recruiters and hiring managers.

---

## 🚀 Live Demo

👉 **Portfolio:** [https://your-username.github.io/portfolio](https://your-username.github.io/portfolio)  
*(Update this link once deployed to GitHub Pages)*

---

## 🛠️ Tech Stack

- **HTML5** – Semantic markup and accessibility-friendly structure
- **CSS3** – Responsive layout, modern UI, and animations
- **JavaScript (Vanilla)** – Dynamic content rendering, filtering, and interactivity
- **No frameworks or build tools required** – Pure vanilla JavaScript for simplicity and performance

---

## ✨ Features

✅ **Fully responsive design** (desktop, tablet, mobile)  
✅ **Project filtering** by category (Full-Stack, Backend, Machine Learning, Algorithms)  
✅ **Dynamic project cards** generated using JavaScript  
✅ **Accessible navigation** with mobile menu toggle  
✅ **Contact form** with email redirection (no backend required)  
✅ **Clean, recruiter-friendly layout** optimised for readability  
✅ **Fast loading** – lightweight, no dependencies  
✅ **Dark mode support** (optional)  

---

## 📂 Project Structure

```
portfolio/
├── index.html       # Main webpage structure
├── styles.css       # Styling and responsive design
├── script.js        # JavaScript functionality and interactivity
├── assets/          # (Optional) Images, icons, PDFs
│   ├── images/
│   └── cv.pdf
└── README.md        # This file
```

---

## 🧩 Featured Sections

### 1. **Hero Section**
- Professional introduction
- Quick placement availability statement
- Call-to-action button for recruiters

### 2. **Projects**
- Highlighted academic and independent projects
- Project cards with descriptions, technologies used, and links
- Filterable by category (Full-Stack, Backend, ML, Data Structures)
- Links to live demos or GitHub repositories

### 3. **Technical Skills**
- Programming languages (Java, Python, PHP, JavaScript, SQL)
- Backend technologies (MySQL, Django, REST APIs)
- Frontend & web (HTML5, CSS3, JavaScript, Responsive Design)
- Cloud & DevOps (AWS Elastic Beanstalk, Linux, Git)
- Data structures & algorithms specialisation

### 4. **Experience**
- Part-time freelance development experience
- Campus-based project work
- Temporary agency work demonstrating professionalism
- Placement year readiness highlighted

## 5. 🎓 Education

**BSc Computer Science with Artificial Intelligence**  
University of Huddersfield, UK  
Expected Graduation: 2028  

Relevant coursework includes programming fundamentals in Java and Python, database systems and web development, data structures and algorithms, software development life cycle (SDLC), computer networks, and artificial intelligence fundamentals.

**Higher Secondary Education (Science – NEB)**  
Herald International College, Kathmandu, Nepal  
Completed: 2024  
Equivalent to UK A-Levels in Science.


### 6. **Contact Section**
- Email contact form
- Social links (LinkedIn, GitHub)
- Quick response indicator for recruiters

---

## 🖥️ How to Run Locally

### Option 1: Direct File Opening (Easiest)
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```

2. Navigate to the folder:
   ```bash
   cd portfolio
   ```

3. Open `index.html` directly in your browser:
   - Double-click `index.html`, or
   - Right-click → "Open with" → Browser

**No build tools or server required!**

### Option 2: Using a Local Server (Optional)
If you want to test with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

---

## 📝 Customisation Guide

### Update Your Information
1. **index.html** – Replace placeholders:
   - `[YOUR NAME]` → Your actual name
   - `[YOUR EMAIL]` → Your email address
   - `[YOUR GITHUB]` → Your GitHub URL
   - `[YOUR LINKEDIN]` → Your LinkedIn profile

2. **script.js** – Update project data in the `projects` array:
   ```javascript
   const projects = [
       {
           title: "Project Name",
           category: "Full-Stack",
           description: "Brief description",
           technologies: ["HTML", "CSS", "JavaScript"],
           link: "https://github.com/your-username/project"
       }
   ];
   ```

3. **styles.css** – Customise colors, fonts, and spacing to match your brand:
   ```css
   :root {
       --primary-color: #2563eb;
       --text-color: #1f2937;
       --background-color: #ffffff;
   }
   ```

---

## 📈 Purpose & Target Audience

This portfolio was created to:
- 🎯 **Present my work clearly** to recruiters and hiring managers
- 💼 **Demonstrate frontend fundamentals** without heavy frameworks
- 📐 **Showcase code structure, documentation, and usability**
- 🚀 **Support applications for placement and junior software developer roles**
- 🌟 **Stand out among other CS graduates** with a clean, professional online presence

---

## 🎨 Design Philosophy

- **Minimalist & clean** – Focus on content, not flashy effects
- **Fast & lightweight** – No external dependencies or CDNs
- **Recruiter-optimised** – Easy to scan in 30 seconds
- **Accessible** – WCAG compliant, keyboard navigation support
- **Mobile-first responsive** – Perfect on any device

---

## 🔄 Deployment Options

### GitHub Pages (Free & Recommended)
1. Push your repository to GitHub
2. Go to **Settings** → **Pages**
3. Set source to `main` branch
4. Your portfolio will be live at `https://your-username.github.io/portfolio`

### Other Options
- **Netlify** – Drag & drop deployment
- **Vercel** – Zero-config deployment
- **Your own server** – Upload files via FTP/SSH

---

## 📫 Contact

- **Email:** [your.email@example.com](mailto:your.email@example.com)
- **LinkedIn:** [https://linkedin.com/in/your-linkedin](https://linkedin.com/in/your-linkedin)
- **GitHub:** [https://github.com/your-username](https://github.com/your-username)
- **Portfolio:** [https://your-username.github.io/portfolio](https://your-username.github.io/portfolio)

---

## 🤝 Contributing & Future Enhancements

Interested in improving this portfolio? Consider:
- [ ] Add dark mode toggle
- [ ] Implement blog section for technical writing
- [ ] Add testimonials/recommendations section
- [ ] Integrate with backend for contact form emails
- [ ] Add project showcase with live preview
- [ ] Implement analytics tracking

Feel free to fork and adapt for your own portfolio!

---

## 📋 Checklist for Deployment

Before going live, ensure:
- [ ] All personal details updated (name, email, links)
- [ ] All project links point to correct repositories
- [ ] GitHub & LinkedIn URLs verified and working
- [ ] Tested on mobile devices (responsive design working)
- [ ] No broken image links or 404 errors
- [ ] Page loads quickly (<3 seconds)
- [ ] Form submission works (or explains contact method)
- [ ] No console errors (open DevTools to check)

---

## ⭐ Show Your Support

If you found this portfolio structure useful or used it as a template, please consider:
- ⭐ **Star this repository** on GitHub
- 🔗 **Share with fellow CS students**
- 💬 **Suggest improvements** via Issues or Pull Requests

---

## 📄 License

This project is open source and available under the **MIT License**. Feel free to use it as a template for your own portfolio.

---

## 🎓 Special Notes

**For Placement Interviews:**
- Use this portfolio as a conversation starter
- Be ready to explain the projects in detail
- Show your CV alongside portfolio access
- Highlight the tech stack choices you made

**For Recruiters:**
- This portfolio demonstrates clean code, organisation, and technical communication skills
- No JavaScript framework = shows vanilla JS competency
- Responsive design = shows attention to user experience
- Well-documented code = shows professional practices

---

**Built with ❤️ as a stepping stone to a successful placement year and beyond.**

*Last Updated: December 2025*
