# High level overview
This project is to create a simple user registration page. To demonstrate - separation of concern. Performed form validation by checking if the password and confirm password field matches. Used SQLite as the backend DB to store user-related information. Addtionally, I have used email authentication (from sendgrid.com) and maintained which user has authenticated his/her account and which have not, in the backend SQLite Database.

# Short Description of technologies used
Django(Backend) + react (Frontend) => total awesomeness.

# Installation
1. git pull both backend and frontend folder.
2. Start Virtual env provided.
3. pip install requirements.txt
4. go to backend directory ( cd /backend) and run "python manage.py runserver" -- This runs the server backend made in Django.
5. open a new cmd. Go in the Frontend directory (cd /frontend) and run "yarn start" or npm start.

# Requirements
1. Register button will only be showed if confirm password matched password. If at any point these two values changes, the submit button is hidden.
2. Once password is sorted, send an email to user's email address.
3. Click on the email address to open the page on react app. React app simply displays a welcome message.

# Functionality Flow
1. Email address and password is sent to server: GET localhost:8000 (Django Location's)
2. Django listens to GET request -> Parse email and password. -> Calculate Hash of password -> Stores the email, hashed_password and a 
boolean digit (to indicate if Email is verified or not)in sqlite DB -> Create a link with hashed_password -> Send the link as an email to the Email Address Provided.
3. User open email -> Link sends GET Request from frontend(React) to Django containing hash.
4. Server dos a query for hash just received -> updates the value of boolean bit to 1.

# Goal
1. The main goal for this project is to implement sepration of concern. Backend and Frontend does what they are supposed to do. They don't interchange their duties.
2. Although, Using GET to send and receive password is discouraged. However, this is just the basic implementation of a bigger thing that can be achieved.

# Caution
Before running the server and/or frontend make sure that talkmeup/backend/signup/views.py has these two fieds initialized with your credentials from sendgrid:
1. sg = sendgrid.SendGridAPIClient(apikey="<<SendGridAPI-Key>>")
2. from_email = Email("<<Your email address>>")
3. Additionally, you would want to put in your secret_key in settings.py 
