from flask import Flask, request, jsonify
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app)

# Configure Flask Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'amaangupta45@gmail.com'
app.config['MAIL_PASSWORD'] = 'fsbugdfhxyxkyltl'
app.config['MAIL_DEFAULT_SENDER'] = 'prajwalhassan7@gmail.com'

mail.init_app(app)

@app.route('/send-email', methods=['POST'])
def send_email(name, email, message):
    my_email = "amaangupta45@gmail.com"
    password = "fsbugdfhxyxkyltl"
    data = request.get_json()

    # Send Email
    msg = Message('Thank you for your message!', recipients=[email])
    msg.body = f"Hello {name},\n\nThank you for your message. We will get in touch with you soon!\n\nBest Regards,\nYour Company"
    mail.send(msg)

    return true;

