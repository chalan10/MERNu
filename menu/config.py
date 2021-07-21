"""Menu development configuration."""

import pathlib

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'\x82\xbeq\xc6\x0e?\xd1\xfeP\xe4\x8b\x9b\xd3.O\xe67\xbe]P\xfa\x7fm\xf1'
SESSION_COOKIE_NAME = 'login'

# File Upload to var/uploads/
MENU_ROOT = pathlib.Path(__file__).resolve().parent.parent
##UPLOAD_FOLDER = MENU_ROOT/'var'/'uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

# Database file is var/menu.sqlite3
DATABASE_FILENAME = MENU_ROOT/'var'/'menu.sqlite3'
