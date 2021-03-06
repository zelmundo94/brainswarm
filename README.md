# brainswarm
A peer-based note taking app for students and learners
--------------------------------------------------------

# My App Name
Brainswarm is a peer-based note taking web app that enables users to collaboratively annotate and take their notes outside of the classroom 
​
## Audience
Students in high school and college will be the primary users.
​
## Experience
A user opens the web app interested in studying for an upcoming exam or assignment. They land on the news feed after logging in from the homepage 
where they can view the latest lecture notes and utilize study tools
​
# Technical
## Models
['Note' App Models]

	###USER MODEL
	- profileImage: jpg/png
	- username: string
	- userRole: student/professor
	- isMod: boolean
	- isAnon: boolean (does not require sign-up) 
	
	###STATUS MODEL
	- status: varchar
	- isNoted: boolean
	- timePosted: mm:DD:YY, timestamp
	
	###LECTURE MODEL
	- lecture title: string
	- lecture date: mm:DD:YY, date
	- lecture rating: decimal or tinyint
	- lecture views: integer
	- lecture annotations: integer
	
	###CLASS MODEL
	- class title: string
	- class length: dates

		
​
## Views

	###Homepage view
	###News Feed view
		(Partials)
		- Lecture View
		- Class View
		- Status View
	###Profile page view
	###Settings view

​
## Controllers
 - User: save profile info; login credentials
 - Lecture: save lecture info; requires passcode
 - Settings: save settings info
​
## Other
Possibly some APIs, add bcrypt.js library for password hashing, jade for HTML templating, 
morgan to generate logs, and body-parse for middleware extraction
​
# Weekly Milestone
## Week 4 - Usable Build
[List of tasks needed to be complete before you can start user testing]
- create landing page, create news feed page, create profile page, create settings page
- enable login, add users and credentials
- populate lectures and classes with sample data
- enable at least one API integration
​
## Week 5 - Finish Features
[List of tasks to complete the implementation of features]
- provide support for emojis and annotations upvotes/downvotes
- activity status updates and notifications
- drag and drop pictures to lectures, PDF integration
- text highlighting 
​
## Week 6 - Polish
[List of tasks needed to polish and ship to the app store]
- beautify with CSS transitions and animations
- add javascript for modal views and refereshing partials on pages
- seek test users to try to break something and give feedback
- host the web app with a custom domain
