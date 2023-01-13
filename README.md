# Portfolio
This is Trevor Glascock's Prototype portfolio. It is still somewhat of a WIP. [The contents of the Projects in this portfolio are actually being handled entirely by an Express api on the backend.](https://github.com/TrevorGlascock/Portfolio-Backend) The front-end styling still has a few revisions to go through, and the backend also requires more of my portfolio to be logged into the database. 

## Deployments
- [Backend Deployment](https://portfolio-backend-5wca.onrender.com/projects)
- [Frontend Staging Deployment](https://theglascock.herokuapp.com/)
- [Frontend Production Deployment](https://theglascock.com/)

## Current State
- [First Working Prototype deployed!](https://theglascock.herokuapp.com/)
- Placeholder information has been replaced with meaningful data.
- Successfully connected to a backend Express API and PostgreSQL database.
- Added many stylistic CSS touches all without using any libraries: 
  - Rounded, reversable, modular card components
  - Animated overlays that link to each project's deployment 
  - Buffering Animation that plays while waiting for the API call
  - Color scheme is on brand and consistent
- Makes API call once on load, then as the user navigates through front-end routes, the data is just passed down through props to increase efficiency.
- Whenever a change needs to be made to the content of my portfolio, it can be handled on the backend without redepoloying or even touching the frontend.


### **`Todo:`**
- Create a more modern, multi-column design to display portfolio information better for desktop users.
- Improve overall responsiveness.
- Add more of my work to the Backend Database.
- Potentially make the contact and about me information also pull from a database.
- Add a "Skills" section to the portfolio.
- Take criticism and iterate further!