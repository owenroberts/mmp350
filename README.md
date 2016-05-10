#MMP 350: Advanced Web Design

Spring 2016  
Monday and Wednesday  
7:30pm - 9:10pm  
Fiterman 1006

Professor Owen Roberts  
email: oroberts at bmcc dot cuny dot edu  
Office S622C  
Office Hours  
Monday, Wednesday, Thursday: 4pm - 5pm

###Course Description
This course gives the students the tools to build standards-compliant, accessible, dynamic web sites. Students will incorporate client-side and server-side scripting with advanced CSS to create intuitive and interactive web interfaces. The learning will take placed in the context of a content management system. Contemporary web development processes and platforms will be explored. A foundational knowledge of programming concepts, HTML, CSS and design for the web is required for this course.

Students will write HTML, CSS JavaScript and PHP using Sublime Text editor. They will use image editing programs, Photoshop to create graphics for web sites. They will require a WordPress blog for each student to which they must be able to FTP files.

Course site: [github.com/owenroberts/mmp350](https://github.com/owenroberts/mmp350)  
Course notes: [owenroberts.github.io/mmp350/](http://owenroberts.github.io/mmp350/)

###Attendance
At BMCC, the maximum number of absences is limited to one more hour than the number of hours a class meets in one week. For example, you may be enrolled in a four-hour class. In that class, you would be allowed 5 hours of absence (not 5 days). In the case of excessive absences, the instructor has the option to lower the grade or assign an F or WU grade.

###Grading

10% | Teacher evaluation and attendance  
30% | Assignments  
25% | Midterm Portfolio  
35% | Final Theme  
20% credit will be taken off any assignments handed in late.  

Textbook: [Smashing WordPress: Beyond the Blog, 4th edition](http://www.amazon.com/Smashing-WordPress-Thord-Daniel-Hedengren/dp/1118600754/ref=sr_1_1?s=books&ie=UTF8&qid=1422558908&sr=1-1&keywords=smashing+wordpress+4th+edition)  
Author: Thord Daniel Hedengren  
Publisher: Wiley, John & Sons, Incorporated  
ISBN 978-1118600757; 1118600754  
*The text book is not required

###Outline of Topics:
- Web site Project Planning
- Content Management Systems
- Interactivity through Client-Side Scripting
- Dynamic Web pages through Server-Side Scripting
- Web site theme creation
- Widgets, Plugins and 3rd party functionality
- SASS and advanced CSS concepts
- Wireframing and prototyping
- Github

*Topics and schedule are subject to change throughout semester

###Learning objectives:

Planning
- Research
- Documentation
- Wireframing designs

Design
- Design for content, specific and general
- Typographic hierarchy
- Layout
- Styleguide
- WordPress classes and elements

Coding
- HTML for document structure
- CSS for style
- PHP for database management
- Javascript (maybe)
- Using Sublime text editor and WordPress interface

Administration
- Using WordPress database and authoring tools

Iteration
- Process of receiving feedback and adapting designs

Deploy
- Deliver public facing website for final with content, media, code

Responsive design
- Designing for multiple platforms

###Schedule

**Week 1**
- Introduction: Course, WordPress (WP) development environment and Class Project
- [Intro notes](https://owenroberts.github.io/mmp350/week1/)
- [Portfolio Structure](http://owenroberts.github.io/mmp350/week1/portfolio.html)

**Week 2**
- Project Planning: Initial Project Proposal
- [Grid Systems & Wireframing](week2/)

**Week 3**
- [Wireframing](week3/)

**Week 4**
- [Responsive Design](week4/)

**Week 5**
- [Responsive development with Foundation](week5/)

**Week 6**
- [Typography](week6/)

**Week 7**
- [Sass](week7/)
- [Calculating color](http://owenroberts.github.io/mmp350/week7/)
- Midterm: Completed portfolio template
	- Sass stylesheet with finalized typography and color scheme
	- index, blank and single HTML page templates
	- Foundation classes and CSS for Desktop and Mobile
	- Uploaded to wpmmp website

**Week 8**
- [Setting up WordPress theme and Database](week8/)
- Midterm workshop

**Week 9**
- [Building a WP Theme: index.php](http://owenroberts.github.io/mmp350/week9/)

**Week 10**
- [Building a WP Theme: header](http://owenroberts.github.io/mmp350/week10/)

**Week 11**
- [Building a WP Theme: WP loop & front-page.php](http://owenroberts.github.io/mmp350/week11/)
- [Building a WP Theme: styling front-page.php](http://owenroberts.github.io/mmp350/week11/foundation.html)

**Week 12**
- [Building a WP Theme: footer.php](http://owenroberts.github.io/mmp350/week12/)  
- [Building a WP Theme: category.php, page.php, single.php](http://owenroberts.github.io/mmp350/week12/pages.html)  

**Week 13**
- [Building a WP Theme: widgets & sidebar.php](http://owenroberts.github.io/mmp350/week13/)
- [Building a WP Theme: image gallery](http://owenroberts.github.io/mmp350/week13/gallery.html) 

**Week 14**
- [Building a WP Theme: post formats](http://owenroberts.github.io/mmp350/week14/) 
- [Building a WP Theme: theme branding and final template pages](http://owenroberts.github.io/mmp350/week14/final.html) 

**Week 15**
- Final project workshop
- Final project requirements
	- WordPress theme template files.  This should be a zipped archive with all of your PHP and SASS files, as well as any image assets that are used for the theme.
	- Working installation of WordPress theme on the BMCC server with your portfolio work added.
	- Final Breakdown
		- Concept (10) 
			- The theme/portfolio should be clear in concept and execution.  Include the concept in the description in the style.css file.
		- Visual Design (20) 
			- Overall Impression: does the visual design fit the concept for this theme? This is about the atmosphere and feel of the site. Much of this is conveyed by the fonts, colors and images and graphic embellishments (icons, shadows, borders etc).
			- Parts of the page are clearly visible: header, nav, content, footer etc. and the relative importance.
			- This includes support for responsive or mobile design.

		- Content (15)
			- Is the content of your portfolio appropriate for the theme?  There should be images or videos, descriptions and links (if available) for all of the projects in the portfolio.

		- Template Files (35) - These are the WordPress files we have been working on this semester.  For the theme to work correctly all of these files must be included.
			- index.php: default page. Required of all themes
			- 404.php : Shows if a page or post is now found. the only one where you don’t need a content- because there is no loop
			- search.php: shows the search results
			- archive.php: shows list of category/tag/date/author posts
			- single.php: shows a single post
			- page.php: single page (like about or bio)
			- home.php: can be used for blog.
			- header.php: Includes doctype, opening html, head and opening body tags, navigation
			- footer.php: Includes footer and closing body and html tags.
			- sidebar.php
			- functions.php
			- favicon.png
			- screenshot.png
		- Theme Functionality (20)
			- Menus (Navigation)
			- Featured Images
			- Widget Areas (at least one)
