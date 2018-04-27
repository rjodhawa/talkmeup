from django.http import HttpResponse
from signup.models import users
from sendgrid.helpers.mail import *
import sendgrid

def index(request):
    data = str(request.META)
    if(data.find("email")!=-1):
        leftE = data.find("email") + 6
        rightE = data.find("&password", leftE)
        email = data[leftE:rightE]
        rightE +=10
        rightP = data.find("'", rightE)
        raw_password = data[rightE:rightP]
        hashed_password = str(hash(raw_password))
        user = users(email=email,hashPassword=hashed_password,email_authenticated=False)
        user.save()
        sendEmail(email,hashed_password)
        return HttpResponse("User added")
    else:
        left = data.find("hash") + 5
        right = data.find("'", left)
        hashed_password = data[left:right]
        users.objects.filter(hashPassword=hashed_password).update(email_authenticated=True)
        return HttpResponse("User Is authenticated")

def sendEmail(email, hashed_password):
    msg = "Hello! Welcome to TalkMeUp. Click on the link to get started : http://localhost:3000/?hash=" + hashed_password
    sg = sendgrid.SendGridAPIClient(apikey="<<SendGridAPI-Key>>")
    from_email = Email("<<Your email address>>")
    to_email = Email(email)
    subject = "Welcome to TalkMeUp"
    content = Content("text/plain", msg)
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())
    pass
